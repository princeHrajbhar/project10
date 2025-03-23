"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const teamMembers = [
  {
    name: "Prince Rajbhar",
    role: "Team Leader",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Arpita Kaushik",
    role: "Marketing & Communication",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
  {
    name: "Ishita Jaiswal",
    role: "Technical Head",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    email: "#",
  },
];

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          We are a passionate team committed to empowering startups with innovation and technology. Our mission is to build a thriving entrepreneurial ecosystem.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our goal is to bridge the gap between ideas and execution by providing the right support, mentorship, and resources to startups.
          </p>
          {showMore && (
            <p className="text-gray-700 mt-2">
              We believe in fostering innovation and building a collaborative community where every entrepreneur has the opportunity to succeed.
            </p>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full transition-transform hover:scale-105"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 text-xl hover:text-blue-500" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 text-xl hover:text-blue-300" />
                </a>
                <a href={`mailto:${member.email}`}>
                  <FaEnvelope className="text-gray-700 text-xl hover:text-gray-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-3xl font-semibold">Join Our Community</h2>
        <p className="mt-2 text-lg">Be a part of the change and bring your ideas to life.</p>
        <a href="/contact" className="mt-4 inline-block px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-200">
          Contact Us
        </a>
      </section>
    </div>
  );
}
