"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ target, suffix = "", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "0.5rem"
        }}
      >
        <span className="gradient-text">{count}{suffix}</span>
      </motion.div>
      <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", fontWeight: 500 }}>{label}</p>
    </div>
  );
}
