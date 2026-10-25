"use client";

// Tiny synthesised UI sounds. No audio files, nothing plays until the
// visitor turns sound on.

let ctx: AudioContext | null = null;
let enabled = false;
const listeners = new Set<() => void>();

function audio() {
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export const sound = {
  subscribe(fn: () => void) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  get enabled() {
    return enabled;
  },
  toggle() {
    enabled = !enabled;
    try {
      localStorage.setItem("fs-sound", enabled ? "1" : "0");
    } catch {}
    listeners.forEach((l) => l());
    if (enabled) sound.chime();
  },
  restore() {
    try {
      enabled = localStorage.getItem("fs-sound") === "1";
    } catch {}
    listeners.forEach((l) => l());
  },
  tick(freq = 1800) {
    if (!enabled) return;
    const a = audio();
    const t = a.currentTime;
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(freq, t);
    o.frequency.exponentialRampToValueAtTime(freq * 0.6, t + 0.05);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + 0.07);
  },
  chime() {
    if (!enabled) return;
    const a = audio();
    const t = a.currentTime;
    [660, 990].forEach((f, i) => {
      const o = a.createOscillator();
      const g = a.createGain();
      o.type = "triangle";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + i * 0.07);
      g.gain.exponentialRampToValueAtTime(0.04, t + i * 0.07 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.07 + 0.35);
      o.connect(g).connect(a.destination);
      o.start(t + i * 0.07);
      o.stop(t + i * 0.07 + 0.4);
    });
  },
};
