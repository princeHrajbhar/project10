// components/ButtonAnimation.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonAnimationProps {
  children: ReactNode;
}

const ButtonAnimation = ({ children }: ButtonAnimationProps) => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gradient Border */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background:
            "linear-gradient(to right, #ff00cc, #3333ff, #00ccff, #ff00cc)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          border: "2px solid transparent",
        }}
      />

      {/* Fire-like Dot */}
      <motion.div
        className="absolute w-2 h-2 bg-orange-500 rounded-full shadow-fire"
        style={{
          top: "0%",
          left: "50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1],
          background: ["#ff4500", "#ff8c00", "#ff4500"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {children}
    </motion.div>
  );
};

export default ButtonAnimation;