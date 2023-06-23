"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const InView = ({ children, left, right }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <section
      style={{
        transform: isInView
          ? "none"
          : right
          ? "translateX(200px)"
          : left
          ? "translateX(-200px)"
          : "translateY(200px)",
        opacity: isInView ? 1 : -1,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default InView;
