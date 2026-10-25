"use client";

import { useMemo, useRef, useState, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { Project } from "@/content/site";
import { sound } from "@/lib/sound";

const R = 3.6;
const CARD_W = 2.9;
const CARD_H = (CARD_W * 9) / 16;
const THETA = CARD_W / R;

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

function nextCardTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 576;
  const g = c.getContext("2d")!;
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, c.width, c.height);
  g.strokeStyle = "rgba(17,17,17,.18)";
  g.setLineDash([10, 10]);
  g.lineWidth = 3;
  g.strokeRect(24, 24, c.width - 48, c.height - 48);
  g.fillStyle = "rgba(17,17,17,.14)";
  for (let y = 48; y < c.height - 40; y += 18) for (let x = 48; x < c.width - 40; x += 18) g.fillRect(x, y, 2, 2);
  const fam = getComputedStyle(document.body).fontFamily;
  g.fillStyle = "#111";
  g.font = `500 64px ${fam}`;
  g.fillText("Your project,", 80, 270);
  g.fillStyle = "#fe4701";
  g.fillText("next.", 80, 345);
  g.fillStyle = "rgba(17,17,17,.55)";
  g.font = `400 26px ${fam}`;
  g.fillText("Let's build something great together.", 80, 420);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

type RingProps = {
  projects: Project[];
  progress: MutableRefObject<number>;
  onNext: () => void;
};

function Ring({ projects, progress, onNext }: RingProps) {
  const textures = useTexture(projects.map((p) => p.image));
  const extra = useMemo(() => nextCardTexture(), []);
  const all = useMemo(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
    });
    return [...textures, extra];
  }, [textures, extra]);

  const geom = useMemo(() => {
    const g = new THREE.CylinderGeometry(R, R, CARD_H, 64, 1, true, -THETA / 2, THETA);
    return g;
  }, []);

  const group = useRef<THREE.Group>(null);
  const tilt = useRef<THREE.Group>(null);
  const mats = useRef<THREE.MeshBasicMaterial[]>([]);
  const meshes = useRef<THREE.Mesh[]>([]);
  const [hovered, setHovered] = useState(-1);
  const rot = useRef(0);
  const { size } = useThree();
  const n = all.length;
  const step = (Math.PI * 2) / n;

  useFrame((state, dt) => {
    const p = progress.current;
    const enter = smooth(clamp01((p - 0.2) / 0.22));
    const targetRot = -clamp01((p - 0.2) / 0.8) * Math.PI * 2 * 0.95 + state.clock.elapsedTime * 0.04;
    rot.current = THREE.MathUtils.damp(rot.current, targetRot, 4, dt);

    const portrait = size.width / size.height < 0.9;
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, portrait ? R + 17 : R + 7, 4, dt);

    if (group.current) {
      group.current.rotation.y = rot.current;
      group.current.position.z = THREE.MathUtils.lerp(-10, 0, enter);
      group.current.position.y = THREE.MathUtils.lerp(-1.2, 0, enter);
    }
    if (tilt.current) {
      tilt.current.rotation.x = 0.16 + state.pointer.y * -0.05;
      tilt.current.rotation.z = -0.1 + state.pointer.x * 0.04;
    }
    for (let i = 0; i < n; i++) {
      const m = mats.current[i];
      const mesh = meshes.current[i];
      if (!m || !mesh) continue;
      const a = rot.current + i * step;
      const facing = (Math.cos(a) + 1) / 2;
      m.opacity = enter * (0.08 + 0.92 * Math.pow(facing, 1.8));
      // All cards share the ring's origin, so order them by depth by hand.
      mesh.renderOrder = Math.round(facing * 100);
      const s = hovered === i ? 1.05 : 1;
      mesh.scale.setScalar(THREE.MathUtils.damp(mesh.scale.x, s, 8, dt));
    }
  });

  return (
    <group ref={tilt}>
      <group ref={group}>
        {all.map((tex, i) => (
          <mesh
            key={i}
            ref={(m) => {
              if (m) meshes.current[i] = m;
            }}
            geometry={geom}
            rotation={[0, i * step, 0]}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHovered(i);
              document.body.style.cursor = "pointer";
              sound.tick(2400);
            }}
            onPointerOut={() => {
              setHovered(-1);
              document.body.style.cursor = "";
            }}
            onClick={(e) => {
              e.stopPropagation();
              const a = rot.current + i * step;
              if (Math.cos(a) < 0.2) return; // ignore cards on the far side
              if (i < projects.length) window.open(projects[i].url, "_blank", "noopener");
              else onNext();
            }}
          >
            <meshBasicMaterial
              ref={(m) => {
                if (m) mats.current[i] = m;
              }}
              map={tex}
              side={THREE.FrontSide}
              transparent
              opacity={0}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
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
      camera={{ position: [0, 0, R + 7], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Ring {...rest} />
    </Canvas>
  );
}
