"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaLightbulb, FaUsers, FaHandshake, FaCalendarAlt, FaChartLine } from "react-icons/fa";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President",
      image: "/team1.jpg",
      bio: "Entrepreneur with 5+ years experience in startup development",
      social: { linkedin: "#", twitter: "#" }
    },
    // Add 3 more team members...
  ];

  const coreValues = [
    { icon: <FaLightbulb />, title: "Innovation", desc: "We embrace creative thinking and novel solutions" },
    { icon: <FaUsers />, title: "Collaboration", desc: "We believe in the power of teamwork" },
    { icon: <FaHandshake />, title: "Integrity", desc: "We conduct ourselves with honesty and ethics" }
  ];

  const milestones = [
    { year: "2015", title: "Founded", desc: "Established with 20 founding members" },
    { year: "2018", title: "First Incubator", desc: "Launched startup incubation program" },
    { year: "2021", title: "National Recognition", desc: "Awarded best student E-Cell" },
    { year: "2023", title: "100+ Startups", desc: "Supported over 100 student ventures" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image src="/ecell-bg.jpg" alt="" fill className="object-cover" />
        </motion.div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            Entrepreneurship <span className="text-gray-800">Cell</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Fostering innovation and entrepreneurial spirit among students
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium"
            >
              Join Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-medium"
            >
              Our Events
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Who We Are</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The premier student organization nurturing entrepreneurial talent at our university
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="flex border-b border-gray-200">
              {["mission", "vision", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium text-lg capitalize ${activeTab === tab ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-800"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 bg-gray-50 rounded-b-lg"
            >
              {activeTab === "mission" && (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                    <p className="text-gray-600 mb-4">
                      To empower students with entrepreneurial mindset and skills through experiential learning.
                    </p>
                    <ul className="space-y-3">
                      {["Create awareness about entrepreneurship", "Provide hands-on learning opportunities", "Connect students with industry leaders"].map((item, index) => (
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <span className="text-gray-900 mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block flex-1">
                    <Image
                      src="/mission.jpg"
                      alt=""
                      width={500}
                      height={350}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
              
              {activeTab === "vision" && (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the premier student organization that transforms innovative ideas into successful ventures.
                    </p>
                  </div>
                  <div className="hidden md:block flex-1">
                    <Image
                      src="/vision.jpg"
                      alt=""
                      width={500}
                      height={350}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              )}
              
              {activeTab === "values" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Core Values</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {coreValues.map((value, index) => (
                      <motion.div
                        whileHover={{ y: -5 }}
                        key={value.title}
                        className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                      >
                        <div className="text-gray-900 mb-3">
                          {value.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h4>
                        <p className="text-gray-600">{value.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Key milestones in our growth and impact
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-between`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h3 className="text-2xl font-bold text-gray-900">{milestone.year}</h3>
                  <p className="text-gray-600">{milestone.title}</p>
                </div>
                <div className="w-1/12 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-800 border-4 border-white"></div>
                </div>
                <div className={`w-5/12 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                  <p className="text-gray-700">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Passionate individuals driving the entrepreneurial movement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="relative h-64 overflow-hidden"
                  animate={{
                    scale: hoveredCard === member.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-gray-900">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-gray-900">
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Flagship Events</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our annual initiatives that inspire and educate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Startup Bootcamp",
                date: "March 15, 2024",
                desc: "Intensive 3-day workshop on launching your startup",
                icon: <FaChartLine />
              },
              {
                title: "Innovation Challenge",
                date: "April 22, 2024",
                desc: "Annual competition for the most innovative student ideas",
                icon: <FaLightbulb />
              },
              {
                title: "Founder Fireside",
                date: "Monthly Series",
                desc: "Conversations with successful entrepreneurs",
                icon: <FaUsers />
              },
              {
                title: "Annual Summit",
                date: "November 5, 2024",
                desc: "Our biggest event with 1000+ participants",
                icon: <FaCalendarAlt />
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-200 flex items-start gap-6"
              >
                <div className="text-3xl text-gray-800 mt-1">
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                  <p className="text-gray-500 mb-3">{event.date}</p>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}