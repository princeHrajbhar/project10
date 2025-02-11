"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const facultyMembers = [
  {
    id: 1,
    image: "https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium",
    name: "Dr. John Doe",
    profession: "Dean",
    description:
      "Dr. John Doe is the Dean of the E-Cell, guiding the team towards innovative growth and sustainable entrepreneurship.",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/young-beautiful-woman-blue-t-shirt-looking-camera-smiling-confident-standing-pink-background_141793-118563.jpg",
    name: "Dr. Jane Smith",
    profession: "Faculty Head",
    description:
      "Dr. Jane Smith is the Faculty Head, leading academic and practical learning experiences to foster future innovators.",
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
    name: "Prof. Robert Brown",
    profession: "HOD - Entrepreneurship",
    description:
      "Prof. Robert Brown is the Head of Department (HOD) for Entrepreneurship, ensuring quality education and support for all budding entrepreneurs.",
  },
];

const FacultyAndDeanSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facultyMembers.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? facultyMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facultyMembers.length);
  };

  const currentMember = facultyMembers[currentIndex];

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Meet Our Esteemed Faculty, Dean & HOD
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 p-4 flex justify-center">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-gray-200 shadow-lg"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/150";
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 p-6 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-gray-800">{currentMember.name}</h3>
                <p className="text-lg text-gray-600 mt-2">{currentMember.profession}</p>
                <p className="mt-4 text-gray-500">{currentMember.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Visible only in non-mobile view) */}
          {!isMobile && (
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4">
              <button
                onClick={handlePrev}
                className="p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FacultyAndDeanSection;
