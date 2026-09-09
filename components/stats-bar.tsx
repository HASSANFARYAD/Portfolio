"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { statsData } from "@/lib/data";

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const rafRef = useRef<number>();

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { count, start };
}

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section
      ref={ref}
      className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-[40rem] mx-auto"
    >
      {statsData.map((stat) => (
        <StatItem key={stat.label} stat={stat} inView={inView} />
      ))}
    </section>
  );
}

function StatItem({
  stat,
  inView,
}: {
  stat: (typeof statsData)[number];
  inView: boolean;
}) {
  const { count, start } = useCountUp(stat.value);

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        {count}
        {stat.suffix}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {stat.label}
      </span>
    </div>
  );
}