// components/AnimatedCard.tsx
"use client";

import { motion } from "framer-motion";
import SignupComponent from "@/components/auth/SignUp";

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex">
        {/* Left Side - Signup Component */}
        <div className="w-1/2 p-8">
          <SignupComponent />
        </div>

        {/* Right Side - Animation */}
        <div className="w-1/2 bg-gradient-to-r from-purple-400 to-indigo-500 flex justify-center items-center">
          <motion.div
            className="w-64 h-64 bg-white rounded-full shadow-lg"
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;