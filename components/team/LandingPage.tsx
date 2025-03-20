"use client"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const LandingPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Animation for the heading
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      {/* Heading Section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Meet Our Team
        </h1>
        <p className="text-2xl text-gray-600">
          Turning Your Ideas Into Reality
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At E-Cell, we believe in fostering innovation and entrepreneurship. Our
          team is dedicated to empowering students to transform their ideas into
          impactful ventures. Through workshops, mentorship, and networking
          opportunities, we provide the tools and resources needed to succeed in
          the entrepreneurial world.
        </p>
      </motion.div>

      {/* Join Our Team Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Want to Be Part of Our Journey?
        </h3>
        <button
  onClick={() => alert('Redirect to join form!')}
  className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
>
  Join Our Team
</button>

      </motion.div>

      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" />
      </motion.div>
    </div>
  );
};

export default LandingPage;