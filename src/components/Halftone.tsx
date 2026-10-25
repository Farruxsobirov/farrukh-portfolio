"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/scroll";

// A grid of dots whose size is driven by a field function f(x, y, t) -> 0..1.
// x and y are normalised (0..1) across the canvas, t is seconds.

export type Variant =
  | "blob"
  | "bars"
  | "pulse"
  | "steps"
  | "wave"
  | "rings"
  | "grid"
  | "diagonal"
  | "orb";

type Field = (x: number, y: number, t: number, aspect: number, col: number, row: number, cols: number, rows: number) => number;

const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const hash = (n: number) => {
  const s = Math.sin(n * 127.1) * 43758.5453;
  return s - Math.floor(s);
};

const fields: Record<Variant, Field> = {
  // Swirling 3D-ish blob for the hero
  blob: (x, y, t, a) => {
    const cx = 0.5 + Math.sin(t * 0.21) * 0.06;
    const cy = 0.42 + Math.cos(t * 0.17) * 0.05;
    const dx = (x - cx) * a;
    const dy = y - cy;
    const d = Math.sqrt(dx * dx + dy * dy);
    const fall = Math.exp(-(d * d) / 0.09);
    const ang = Math.atan2(dy, dx);
    const ribbon = 0.5 + 0.5 * Math.sin(ang * 2 + d * 14 - t * 0.9);
    const sheen = 0.5 + 0.5 * Math.sin((dx * 0.8 + dy) * 9 + t * 0.6);
    return clamp(fall * (0.25 + 0.75 * ribbon * (0.55 + 0.45 * sheen)) * 1.25);
  },
  // Columns growing like a bar chart
  bars: (x, y, t, _a, col, _r, cols) => {
    const step = Math.max(2, Math.round(cols / 9));
    if (col % step !== 0) return 0;
    const i = col / step;
    const h = 0.25 + 0.65 * (0.5 + 0.5 * Math.sin(t * 1.3 + i * 0.7)) * ((i + 2) / 11);
    return 1 - y < h ? 0.9 : 0.18;
  },
  // Concentric pulse
  pulse: (x, y, t, a) => {
    const dx = (x - 0.5) * a;
    const dy = y - 0.5;
    const d = Math.sqrt(dx * dx + dy * dy);
    const w = 0.5 + 0.5 * Math.sin(d * 28 - t * 3);
    return clamp((1 - d * 1.6) * w);
  },
  // Horizontal segments that fill one after another
  steps: (x, y, t, _a, col, row, cols, rows) => {
    const band = Math.floor((row / rows) * 3);
    if (row % Math.max(2, Math.round(rows / 6)) !== 0) return 0;
    const seg = Math.floor((col / cols) * 6);
    const progress = ((t * 0.6 + band * 0.4) % 1.6) * 6;
    return seg < progress ? 0.95 : 0.15 + hash(seg + band * 7) * 0.1;
  },
  // A travelling sine
  wave: (x, y, t) => {
    const yy = 0.5 + Math.sin(x * 9 - t * 1.6) * 0.28;
    return clamp(1 - Math.abs(y - yy) * 7) * 0.95 + 0.06;
  },
  rings: (x, y, t, a) => {
    const dx = (x - 0.78) * a;
    const dy = y - 0.62;
    const d = Math.sqrt(dx * dx + dy * dy);
    return clamp(0.5 + 0.5 * Math.sin(d * 22 - t * 1.4)) * clamp(1.1 - d);
  },
  grid: (x, y, t) => {
    const v = Math.sin(x * 12 + t) * Math.cos(y * 10 - t * 0.8);
    return clamp(0.5 + 0.5 * v) * 0.9;
  },
  diagonal: (x, y, t) => {
    const v = 0.5 + 0.5 * Math.sin((x + y) * 10 - t * 1.8);
    return clamp(v * (0.4 + 0.6 * x));
  },
  orb: (x, y, t, a) => {
    const dx = (x - 0.5) * a;
    const dy = y - 0.5;
    const d = Math.sqrt(dx * dx + dy * dy);
    const r = 0.36 + Math.sin(t * 0.8) * 0.02;
    return clamp((r - d) * 5) * (0.55 + 0.45 * Math.sin(dx * 6 - dy * 4 + t));
  },
};

type Props = {
  variant: Variant;
  color?: string;
  spacing?: number;
  maxRadius?: number;
  speed?: number;
  className?: string;
};

export default function Halftone({ variant, color = "#ffffff", spacing = 9, maxRadius, speed = 1, className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const field = fields[variant];
    const reduced = prefersReducedMotion();
    const rMax = maxRadius ?? spacing * 0.42;
    let w = 0;
    let h = 0;
    let visible = false;
    let raf = 0;
    const start = performance.now();

    const resize = () => {
      dprNow = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dprNow));
      canvas.height = Math.max(1, Math.round(h * dprNow));
      buildSprites();
      draw(reduced ? 2 : (performance.now() - start) / 1000);
    };

    // Pre-rendered dot sprites at a few sizes: far cheaper than arc() per dot.
    const LEVELS = 10;
    let sprites: HTMLCanvasElement[] = [];
    let dprNow = 1;
    const buildSprites = () => {
      sprites = [];
      for (let l = 1; l <= LEVELS; l++) {
        const r = (l / LEVELS) * rMax * dprNow;
        const size = Math.ceil(r * 2 + 2);
        const c = document.createElement("canvas");
        c.width = c.height = size;
        const g = c.getContext("2d")!;
        g.fillStyle = color;
        g.beginPath();
        g.arc(size / 2, size / 2, r, 0, Math.PI * 2);
        g.fill();
        sprites.push(c);
      }
    };

    const draw = (t: number) => {
      if (!w || !h) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.floor(w / spacing);
      const rows = Math.floor(h / spacing);
      const ox = (w - (cols - 1) * spacing) / 2;
      const oy = (h - (rows - 1) * spacing) / 2;
      const aspect = w / h;
      for (let r = 0; r < rows; r++) {
        const y = oy + r * spacing;
        for (let c = 0; c < cols; c++) {
          const x = ox + c * spacing;
          const v = field(x / w, y / h, t * speed, aspect, c, r, cols, rows);
          if (v < 0.06) continue;
          const lvl = Math.min(LEVELS - 1, Math.max(0, Math.round(v * LEVELS) - 1));
          const sp = sprites[lvl];
          ctx.drawImage(sp, Math.round(x * dprNow - sp.width / 2), Math.round(y * dprNow - sp.height / 2));
        }
      }
    };

    let last = 0;
    const loop = (now: number) => {
      if (now - last > 32) {
        last = now;
        draw((now - start) / 1000);
      }
      raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduced) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);
    resize();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [variant, color, spacing, maxRadius, speed]);

  return <canvas ref={ref} aria-hidden className={className ?? "block size-full"} />;
}
