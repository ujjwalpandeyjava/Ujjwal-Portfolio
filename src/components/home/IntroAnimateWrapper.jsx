"use client";

import React, { useState, useEffect } from "react";
import RevealingLoader from "./RevealingLoader";
import styles from "@/styles/RevealingLoader.module.scss";

export default function IntroAnimateWrapper({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setAnimationFinished(true);
      }, 850); // Slightly more than the 0.8s animation duration
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (!mounted) {
    // Return empty content or basic background during SSR / initial hydration
    return <div style={{ background: "#0c0c1e", minHeight: "100vh" }} />;
  }

  return (
    <>
      {!isLoaded && <RevealingLoader onComplete={() => setIsLoaded(true)} />}
      <div
        className={isLoaded && !animationFinished ? styles.mainUIReveal : ""}
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          opacity: isLoaded ? 1 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
}
