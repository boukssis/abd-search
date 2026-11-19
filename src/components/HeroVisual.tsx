"use client";

import { motion, useReducedMotion } from "motion/react";

const NODES = [
  { x: 40, y: 120, label: "Discovery" },
  { x: 120, y: 55, label: "Preclinical" },
  { x: 210, y: 95, label: "Clinical" },
  { x: 290, y: 40, label: "Regulatory" },
  { x: 360, y: 110, label: "CMC" },
  { x: 280, y: 175, label: "Launch" },
  { x: 170, y: 200, label: "Access" },
  { x: 70, y: 185, label: "Commercial" },
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 0],
  [2, 5],
  [1, 6],
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(27,94,60,0.12),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(36,112,74,0.08),transparent_50%)]" />
      <div className="absolute inset-[18%] rounded-full border border-border/70" />
      <div className="absolute inset-[28%] rounded-full border border-dashed border-border-strong/50" />

      <svg
        viewBox="0 0 400 240"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {LINKS.map(([a, b], i) => {
          const from = NODES[a];
          const to = NODES[b];
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#1b5e3c"
              strokeWidth="1"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 0.22 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          );
        })}

        {NODES.map((node, i) => (
          <g key={node.label}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="5.5"
              fill="#1b5e3c"
              initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.35 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="11"
              stroke="#1b5e3c"
              strokeOpacity="0.2"
              strokeWidth="1"
              initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.06,
              }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute bottom-6 left-1/2 w-[min(100%,18rem)] -translate-x-1/2 rounded-full border border-border bg-surface/90 px-4 py-2 text-center text-[0.7rem] font-medium tracking-[0.12em] text-ink-muted uppercase backdrop-blur-sm">
        Full lifecycle talent pathways
      </div>
    </div>
  );
}
