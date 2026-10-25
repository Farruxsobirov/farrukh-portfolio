"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { Project } from "@/content/site";
import { sound } from "@/lib/sound";

const R = 4.1;
const CARD_W = 3.3;
const CARD_H = (CARD_W * 9) / 16;
const THETA = CARD_W / R;

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const clamp01 = (v: number) => clamp(v, 0, 1);
const smooth = (t: number) => t * t * (3 - 2 * t);

function nextCardTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 576;
  const g = c.getContext("2d")!;
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = "rgba(17,17,17,.12)";
  for (let y = 40; y < c.height - 30; y += 18) for (let x = 40; x < c.width - 30; x += 18) g.fillRect(x, y, 2.4, 2.4);
  const fam = getComputedStyle(document.body).fontFamily;
  g.fillStyle = "#111";
  g.font = `500 70px ${fam}`;
  g.fillText("Your project,", 80, 270);
  g.fillStyle = "#fe4701";
  g.fillText("next.", 80, 350);
  g.fillStyle = "rgba(17,17,17,.55)";
  g.font = `400 28px ${fam}`;
  g.fillText("Let's build something great together.", 82, 430);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// White rounded rectangle on black: used as an alpha mask for rounded corners.
function roundedMask() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 576;
  const g = c.getContext("2d")!;
  g.fillStyle = "#000";
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = "#fff";
  g.beginPath();
  g.roundRect(2, 2, c.width - 4, c.height - 4, 34);
  g.fill();
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 8;
  return t;
}

// A curved card centred on the local origin, facing +z.
function cardGeometry() {
  const g = new THREE.CylinderGeometry(R, R, CARD_H, 64, 24, true, -THETA / 2, THETA);
  g.translate(0, 0, -R);
  return g;
}

type Spring = { x: number; v: number };
const step = (s: Spring, target: number, k: number, d: number, dt: number) => {
  const a = (target - s.x) * k - s.v * d;
  s.v += a * dt;
  s.x += s.v * dt;
};

type Card = {
  group: THREE.Group | null;
  mesh: THREE.Mesh | null;
  mat: THREE.MeshBasicMaterial | null;
  uniforms: { uBend: { value: number }; uWave: { value: number }; uTime: { value: number } } | null;
  pitch: Spring;
  roll: Spring;
  bend: Spring;
  lift: Spring;
  hover: boolean;
};

type RingProps = {
  projects: Project[];
  progress: MutableRefObject<number>;
  onNext: () => void;
};

function Ring({ projects, progress, onNext }: RingProps) {
  const textures = useTexture(projects.map((p) => p.image));
  const extra = useMemo(() => nextCardTexture(), []);
  const mask = useMemo(() => roundedMask(), []);
  const geom = useMemo(() => cardGeometry(), []);
  const all = useMemo(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
    });
    return [...textures, extra];
  }, [textures, extra]);

  const n = all.length;
  const gap = (Math.PI * 2) / n;
  const cards = useRef<Card[]>(
    Array.from({ length: n }, () => ({
      group: null,
      mesh: null,
      mat: null,
      uniforms: null,
      pitch: { x: 0, v: 0 },
      roll: { x: 0, v: 0 },
      bend: { x: 0, v: 0 },
      lift: { x: 0, v: 0 },
      hover: false,
    })),
  );

  const ring = useRef<THREE.Group>(null);
  const tilt = useRef<THREE.Group>(null);
  const rot = useRef(0);
  const vel = useRef(0);
  const { size } = useThree();

  // Bend the card surface in the vertex shader so it flexes like real paper.
  const patch = (i: number) => (shader: THREE.WebGLProgramParametersWithUniforms) => {
    const u = { uBend: { value: 0 }, uWave: { value: 0 }, uTime: { value: 0 } };
    Object.assign(shader.uniforms, u);
    cards.current[i].uniforms = u;
    shader.vertexShader = shader.vertexShader
      .replace("#include <common>", "#include <common>\nuniform float uBend;\nuniform float uWave;\nuniform float uTime;")
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
        float ex = uv.x - 0.5;
        float ey = uv.y - 0.5;
        // flex: the middle stays, the edges trail behind the motion
        transformed.z += uBend * (ex * ex * 4.0 - 0.3);
        transformed.y += uBend * ex * 0.18;
        // ripple travelling across the card
        transformed.z += uWave * sin(uv.x * 6.2831 - uTime * 9.0) * 0.06 * (0.6 + ey * ey);`,
      );
  };

  useFrame((state, dt) => {
    dt = Math.min(dt, 1 / 30);
    const p = progress.current;
    const enter = smooth(clamp01((p - 0.2) / 0.22));
    const target = -clamp01((p - 0.2) / 0.8) * Math.PI * 2 * 0.95 + state.clock.elapsedTime * 0.035;
    const prev = rot.current;
    rot.current = THREE.MathUtils.damp(rot.current, target, 3.2, dt);
    const v = (rot.current - prev) / Math.max(dt, 1e-4); // radians per second
    vel.current = THREE.MathUtils.damp(vel.current, v, 10, dt);
    const sv = clamp(vel.current, -3, 3);

    const portrait = size.width / size.height < 0.9;
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, portrait ? R + 18 : R + 7.4, 4, dt);

    if (ring.current) {
      ring.current.rotation.y = rot.current;
      ring.current.position.z = THREE.MathUtils.lerp(-10, 0, enter);
      ring.current.position.y = THREE.MathUtils.lerp(-1.2, 0, enter);
    }
    if (tilt.current) {
      tilt.current.rotation.x = THREE.MathUtils.damp(tilt.current.rotation.x, 0.16 - state.pointer.y * 0.06 + sv * 0.02, 4, dt);
      tilt.current.rotation.z = THREE.MathUtils.damp(tilt.current.rotation.z, -0.1 + state.pointer.x * 0.05, 4, dt);
    }

    for (let i = 0; i < n; i++) {
      const c = cards.current[i];
      if (!c.group || !c.mat || !c.mesh) continue;
      const a = rot.current + i * gap;
      const facing = (Math.cos(a) + 1) / 2;
      // Each card answers the scroll with its own lag, so the ring jiggles.
      const lag = 0.75 + 0.5 * ((i * 0.37) % 1);
      step(c.pitch, sv * 0.09 * lag, 90, 7, dt);
      step(c.roll, -sv * 0.05 * lag, 70, 6, dt);
      step(c.bend, sv * 0.22 * lag, 120, 8, dt);
      step(c.lift, c.hover ? 1 : 0, 160, 16, dt);

      c.mesh.rotation.x = c.pitch.x;
      c.mesh.rotation.z = c.roll.x;
      const s = 1 + c.lift.x * 0.12;
      c.mesh.scale.setScalar(s);
      c.mesh.position.z = c.lift.x * 0.45;

      if (c.uniforms) {
        c.uniforms.uBend.value = c.bend.x;
        c.uniforms.uWave.value = clamp(Math.abs(sv) * 0.9, 0, 1.4);
        c.uniforms.uTime.value = state.clock.elapsedTime;
      }
      c.mat.opacity = enter * (0.06 + 0.94 * Math.pow(facing, 1.7));
      // All cards orbit one centre, so order them by depth by hand.
      c.mesh.renderOrder = Math.round(facing * 100) + (c.hover ? 200 : 0);
    }
  });

  return (
    <group ref={tilt}>
      <group ref={ring}>
        {all.map((tex, i) => (
          <group
            key={i}
            ref={(g) => {
              cards.current[i].group = g;
            }}
            rotation={[0, i * gap, 0]}
          >
            <group position={[0, 0, R]}>
              <mesh
                ref={(m) => {
                  cards.current[i].mesh = m;
                }}
                geometry={geom}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  const a = rot.current + i * gap;
                  if (Math.cos(a) < 0.2) return;
                  cards.current[i].hover = true;
                  document.body.style.cursor = "pointer";
                  sound.tick(2400);
                }}
                onPointerOut={() => {
                  cards.current[i].hover = false;
                  document.body.style.cursor = "";
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  const a = rot.current + i * gap;
                  if (Math.cos(a) < 0.2) return; // ignore cards on the far side
                  if (i < projects.length) window.open(projects[i].url, "_blank", "noopener");
                  else onNext();
                }}
              >
                <meshBasicMaterial
                  ref={(m) => {
                    cards.current[i].mat = m;
                  }}
                  map={tex}
                  alphaMap={mask}
                  side={THREE.FrontSide}
                  transparent
                  opacity={0}
                  depthWrite={false}
                  toneMapped={false}
                  onBeforeCompile={patch(i)}
                />
              </mesh>
            </group>
          </group>
        ))}
      </group>
    </group>
  );
}

export default function Carousel3D(props: RingProps & { active: boolean }) {
  const { active, ...rest } = props;
  return (
    <Canvas
      flat
      dpr={[1, 1.75]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, R + 7.4], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
      onPointerMissed={() => (document.body.style.cursor = "")}
    >
      <Ring {...rest} />
    </Canvas>
  );
}
