"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/RevealingLoader.module.scss";

const CIRCLE_COLORS = [
  "#1a1a2e", // Deep Dark Indigo
  "#2563eb", // Royal Blue
  "#e91e63", // Pink Accent
  "#8b5cf6", // Purple
  "#06b6d4", // Cyan
  "#f59e0b", // Amber
  "#10b981", // Emerald
  "#0c0c1e", // Final slate/dark blue background
];

export default function RevealingLoader({ onComplete }) {
  const [stage, setStage] = useState("circles"); // "circles" | "transitional" | "exiting" | "done"

  useEffect(() => {
    // Stage 1 (Circles): Expand circles over ~1.1s (reduced from 1.8s)
    const timer1 = setTimeout(() => {
      setStage("transitional");
    }, 1080);

    // Stage 2 (Transitional): Show animating element for 0.9s (reduced from 1.5s)
    const timer2 = setTimeout(() => {
      setStage("exiting");
    }, 1080 + 900);

    // Stage 3 (Exiting): Fade out loader component (0.3s transition, reduced from 0.5s)
    const timer3 = setTimeout(() => {
      setStage("done");
      if (onComplete) {
        onComplete();
      }
    }, 1080 + 900 + 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (stage === "done") return null;

  return (
    <div className={styles.loaderContainer}>
      {/* Phase 1: Expanding circles */}
      {stage === "circles" && (
        <div className={styles.circlesStage}>
          {CIRCLE_COLORS.map((color, index) => (
            <div
              key={index}
              className={styles.circle}
              style={{
                backgroundColor: color,
                animationDelay: `${index * 84}ms`,
                zIndex: index + 1,
              }}
            />
          ))}
        </div>
      )}

      {/* Phase 2: Animating logo/elements */}
      {(stage === "transitional" || stage === "exiting") && (
        <div className={`${styles.transitionalStage} ${stage === "exiting" ? styles.transitionalStageExit : ""}`}>
          <div className={styles.logoContainer}>
            <div className={styles.outerRing} />
            <div className={styles.innerRing} />
            <div className={styles.logoText}>UP</div>
          </div>
          <div className={styles.loadingBarContainer}>
            <div className={styles.loadingBarProgress} />
          </div>
          <div className={styles.textGlow}>Designing Experiences</div>
        </div>
      )}
    </div>
  );
}
