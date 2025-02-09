"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Image from next/image
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const facultyMembers = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
    name: "Dr. John Doe",
    profession: "Dean",
    description:
      "Dr. John Doe is the Dean of the E-Cell, guiding the team towards innovative growth and sustainable entrepreneurship.",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
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
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % facultyMembers.length
    );
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Meet Our Esteemed Faculty, Dean & HOD
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Display Current Member */}
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105">
            <div className="w-1/3 p-4 flex justify-center">
              <Image
                src={facultyMembers[currentIndex].image}
                alt={facultyMembers[currentIndex].name}
                width={128} // Image width
                height={128} // Image height
                className="object-cover rounded-full border-4 border-gray-200 shadow-lg"
              />
            </div>
            <div className="w-2/3 p-6">
              <h3 className="text-3xl font-semibold text-gray-800">{facultyMembers[currentIndex].name}</h3>
              <p className="text-lg text-gray-600 mt-2">{facultyMembers[currentIndex].profession}</p>
              <p className="mt-4 text-gray-500">{facultyMembers[currentIndex].description}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex justify-between items-center px-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyAndDeanSection;
