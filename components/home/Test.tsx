'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaUniversity, FaRocket, FaUsers } from 'react-icons/fa';

const HeroSection = () => {
  const [colleges, setColleges] = useState(1);  // Start count from 1
  const [startups, setStartups] = useState(1);  // Start count from 1
  const [cities, setCities] = useState(1);      // Start count from 1
  const [inView, setInView] = useState(false); // Track if the section is in view

  const controls = useAnimation();
  const sectionRef = useRef(null);  // Reference to the section

  // Start the count animation when the section comes into view
  useEffect(() => {
    const sectionNode = sectionRef.current;  // Store the ref in a local variable
    
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionNode) {
      observer.observe(sectionNode);  // Use the variable instead of the ref directly
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);  // Cleanup using the variable
      }
    };
  }, []);  // Empty dependency array to ensure effect runs once

  // Trigger the animation when section comes into view
  useEffect(() => {
    if (inView) {
      const animateCounts = async () => {
        await controls.start({ opacity: 1, y: 0 });
        animateNumber(setColleges, 150); // Target: 150 colleges
        animateNumber(setStartups, 300); // Target: 300 startups
        animateNumber(setCities, 50);    // Target: 50 cities
      };
      animateCounts();
    }
  }, [inView, controls]);

  const animateNumber = (setter: React.Dispatch<React.SetStateAction<number>>, target: number) => {
    let count = 1; // Start count from 1
    const interval = setInterval(() => {
      count += 1;
      setter(count);
      if (count >= target) clearInterval(interval);
    }, 10); // Adjust speed here
  };

  return (
    <section
      ref={sectionRef} // Attach the section reference to the intersection observer
      className="py-16 bg-white text-gray-800 w-full"
    >
      <div className="container mx-auto px-4 lg:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
        >
          Empowering Entrepreneurs and Innovators
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 mb-12"
        >
          At E-Cell, we are creating a dynamic ecosystem that connects colleges, startups, and students across the globe. 
          Together, we are shaping the future of entrepreneurship, driving innovation, and empowering the next generation of leaders.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colleges Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-opacity-90 backdrop-blur-md"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <FaUniversity className="text-5xl text-white" />
              </motion.div>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-6xl font-bold text-white mb-2"
            >
              {colleges}+
            </motion.h2>
            <p className="text-lg text-white">Colleges connected to our ecosystem</p>
          </motion.div>

          {/* Startups Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-lg p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-opacity-90 backdrop-blur-md"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaRocket className="text-5xl text-white" />
              </motion.div>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-6xl font-bold text-white mb-2"
            >
              {startups}+
            </motion.h2>
            <p className="text-lg text-white">Startups supported by our network</p>
          </motion.div>

          {/* Cities Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-gradient-to-r from-green-500 to-green-700 rounded-lg p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:bg-opacity-90 backdrop-blur-md"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaUsers className="text-5xl text-white" />
              </motion.div>
            </div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-6xl font-bold text-white mb-2"
            >
              {cities}+
            </motion.h2>
            <p className="text-lg text-white">Cities with students in our community</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
