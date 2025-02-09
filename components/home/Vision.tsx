'use client';  // Ensure that this file is only rendered on the client

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VisionSection = () => {
  const [clickedButtons, setClickedButtons] = useState<number[]>([]);

  const [inView, setInView] = useState<boolean[]>(new Array(6).fill(false)); // Track if a card is in view

  const visions = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=360',
      title: 'Empowering Innovators',
      text: 'Inspiring the next generation of innovators by providing resources and mentorship.',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-photo/teamwork-making-decision_1098-17865.jpg?w=360',
      title: 'Sustainable Entrepreneurship',
      text: 'Encouraging sustainable business practices that lead to impactful ventures.',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=360',
      title: 'Technological Disruption',
      text: 'Empowering startups to leverage technology for breakthrough innovations.',
    },
    {
      id: 4,
      image: 'https://img.freepik.com/free-photo/teamwork-making-decision_1098-17865.jpg?w=360',
      title: 'Creativity & Innovation',
      text: 'Fostering creativity and bold ideas to fuel the entrepreneurial spirit.',
    },
    {
      id: 5,
      image: 'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=360',
      title: 'Inclusive Entrepreneurship',
      text: 'Building an inclusive ecosystem where anyone with a passion for entrepreneurship can thrive.',
    },
    {
      id: 6,
      image: 'https://img.freepik.com/free-photo/teamwork-making-decision_1098-17865.jpg?w=360',
      title: 'Leadership & Vision',
      text: 'Inspiring emerging leaders to lead with vision and drive change in their communities.',
    },
  ];

  const handleButtonClick = (id: number) => {
    // Add the clicked button ID to the state
    if (!clickedButtons.includes(id)) {
      setClickedButtons([...clickedButtons, id]);
    }
    // Show toast message
    toast.info('We will update soon!', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure we are running on the client-side

    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement; // Cast to HTMLElement
        const index = parseInt(target.dataset.index || '0', 10); // Use optional chaining and provide a default value
        if (entry.isIntersecting) {
          setInView((prev) => {
            const newInView = [...prev];
            newInView[index] = true;
            return newInView;
          });
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.vision-card');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []); // Ensure this only runs in the client-side

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Our Vision for Empowering Entrepreneurs
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8">
          At E-Cell, we are committed to creating a dynamic, inclusive, and innovative ecosystem for aspiring entrepreneurs. Our vision is to empower the next generation of business leaders by providing mentorship, resources, and opportunities for collaboration. Together, we aim to foster growth, spark innovation, and drive leadership in the world of entrepreneurship.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visions.map((vision, index) => (
            <div
              key={vision.id}
              data-index={index}
              className={`relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 vision-card ${
                inView[index] ? 'animate-fadeIn' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${vision.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500 ease-in-out" />
              {/* Content */}
              <div className="relative p-6 h-64 flex flex-col items-center justify-center text-center">
                <h3 className="text-white text-xl font-bold opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                  {vision.title}
                </h3>
                <p className="text-white text-lg font-semibold opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                  {vision.text}
                </p>
                <p className="absolute inset-0 p-6 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                  {vision.text}
                </p>
              </div>
              {/* Interactive Button */}
              <button
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white text-gray-800 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out hover:bg-gray-100 hover:scale-110 ${
                  clickedButtons.includes(vision.id) ? 'border-2 border-black' : ''
                }`}
                onClick={() => handleButtonClick(vision.id)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default VisionSection;
