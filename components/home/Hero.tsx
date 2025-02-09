"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Optional for more control
import Lottie from "lottie-react"; // Correct import
import animationData from "@/animations/buisness.json"; // Adjust path as necessary

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [descriptionText, setDescriptionText] = useState("");
  const fullDescription =
    "We bring technology and entrepreneurship together to foster the next generation of innovators and entrepreneurs. Join us and take part in a journey of success.";

  useEffect(() => {
    // Delay text appearance after a brief animation delay
    const timer = setTimeout(() => setTextVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Typing animation for description
    let index = 0;
    const typingInterval = setInterval(() => {
      setDescriptionText((prev) => prev + fullDescription[index]);
      index++;
      if (index === fullDescription.length) {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative h-screen bg-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
      {/* Left Side Animation (Lottie Animation) */}
      <motion.div
        className="w-full md:w-1/2 h-full flex justify-center items-center relative"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Lottie Business Animation */}
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
        />
      </motion.div>

      {/* Right Side Text Animation */}
      <motion.div
        className="w-full md:w-1/2 h-full flex flex-col justify-center md:px-8"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
            delay: 1, // Delay the text appearance
            ease: "easeOut",
          }}
        >
          Welcome to Ecell - Empowering Innovation
        </motion.h1>

        {/* Description with typing animation */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-gray-700 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: textVisible ? 1 : 0 }}
          transition={{
            duration: 1.2,
            delay: 1.5,
            ease: "easeOut",
          }}
        >
          {descriptionText}
        </motion.p>

        {/* Button with enhanced design and colorful border animation */}
        <motion.button
          className="mt-8 py-1 px-4 sm:py-2 sm:px-6 w-32 sm:w-40 border-2 border-transparent text-white text-sm font-semibold bg-black rounded-lg hover:bg-white hover:text-black hover:border-black transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 2,
            ease: "easeOut",
          }}
        >
          <span className="z-10">Join Us Now</span>
          {/* Colorful Border Animation */}
          <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-borderColorCycle"></span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
