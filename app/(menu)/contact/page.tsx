"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaUserPlus, 
  FaHandshake, 
  FaCalendarAlt,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaLink
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeTab, setActiveTab] = useState<"contact" | "join" | "partner">("contact");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with our team, join our community, or explore partnership opportunities
          </motion.p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {[
              { id: "contact", label: "Contact Us", icon: <FaEnvelope className="mr-2" /> },
              { id: "join", label: "Join Our Team", icon: <FaUserPlus className="mr-2" /> },
              { id: "partner", label: "Partnerships", icon: <FaHandshake className="mr-2" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 font-medium text-sm border-b-2 ${activeTab === tab.id ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Contact Us Section */}
        <AnimatedSection active={activeTab === "contact"}>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-900 focus:border-gray-900"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-gray-900 text-white rounded-md font-medium"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-gray-900 mt-1">
                      <FaPhone className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-gray-900 mt-1">
                      <FaEnvelope className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@ecell.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-gray-900 mt-1">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">123 Innovation Drive</p>
                      <p className="text-gray-600">Tech Park, University Campus</p>
                      <p className="text-gray-600">Cityville, ST 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  {[
                    { name: "Twitter", icon: "FaTwitter", url: "#" },
                    { name: "LinkedIn", icon: "FaLinkedin", url: "#" },
                    { name: "Instagram", icon: "FaInstagram", url: "#" },
                    { name: "Facebook", icon: "FaFacebook", url: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {social.icon === "FaTwitter" && <FaTwitter />}
                      {social.icon === "FaLinkedin" && <FaLinkedin />}
                      {social.icon === "FaInstagram" && <FaInstagram />}
                      {social.icon === "FaFacebook" && <FaFacebook />}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Join Our Team Section */}
        <AnimatedSection active={activeTab === "join"}>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Become a Member</h2>
              <p className="text-gray-600 mb-6">
                Join our vibrant community of student entrepreneurs and innovators. As a member, you'll gain access to exclusive events, workshops, and networking opportunities.
              </p>
              
              <div className="space-y-6">
                <motion.a
                  href="/register/member"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-4 bg-gray-900 text-white rounded-md font-medium text-center"
                >
                  Register as General Member
                </motion.a>
                
                <motion.a
                  href="/register/core-team"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-4 border-2 border-gray-900 text-gray-900 rounded-md font-medium text-center"
                >
                  Apply for Core Team
                </motion.a>
                
                <motion.a
                  href="/register/volunteer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-4 bg-white text-gray-900 rounded-md font-medium text-center shadow-sm"
                >
                  Volunteer Opportunities
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Join Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Skill Development",
                    description: "Gain practical entrepreneurial skills through workshops and hands-on projects"
                  },
                  {
                    title: "Networking",
                    description: "Connect with like-minded students, alumni, and industry professionals"
                  },
                  {
                    title: "Startup Support",
                    description: "Get mentorship and resources to launch your own venture"
                  },
                  {
                    title: "Leadership Opportunities",
                    description: "Develop leadership skills by organizing events and initiatives"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Partnerships Section */}
        <AnimatedSection active={activeTab === "partner"}>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner With Us</h2>
              <p className="text-gray-600 mb-6">
                We collaborate with organizations, companies, and individuals who share our passion for fostering entrepreneurship. Explore partnership opportunities that align with your goals.
              </p>
              
              <div className="space-y-6">
                <motion.a
                  href="/partners/corporate"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-4 bg-gray-900 text-white rounded-md font-medium text-center"
                >
                  Corporate Partnerships
                </motion.a>
                
                <motion.a
                  href="/partners/startup"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-4 border-2 border-gray-900 text-gray-900 rounded-md font-medium text-center"
                >
                  Startup Collaborations
                </motion.a>
                
                <motion.a
                  href="/partners/sponsor"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block px-6 py-4 bg-white text-gray-900 rounded-md font-medium text-center shadow-sm"
                >
                  Event Sponsorships
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Benefits</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Brand Visibility",
                    description: "Reach our network of student entrepreneurs and innovators"
                  },
                  {
                    title: "Talent Pipeline",
                    description: "Connect with top student talent for internships and employment"
                  },
                  {
                    title: "CSR Alignment",
                    description: "Support youth entrepreneurship as part of your social responsibility"
                  },
                  {
                    title: "Innovation Insights",
                    description: "Gain early access to student-led innovations and startups"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Partnership Events</h3>
                <div className="space-y-4">
                  {[
                    { date: "Jun 15, 2024", name: "Industry Networking Night" },
                    { date: "Jul 22, 2024", name: "Startup Showcase" },
                    { date: "Aug 10, 2024", name: "Corporate Innovation Forum" }
                  ].map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (0.1 * index) }}
                      className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="text-gray-900">
                        <FaCalendarAlt />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="font-medium">{event.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function AnimatedSection({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: active ? 1 : 0, height: active ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
      style={{ overflow: "hidden" }}
    >
      {active && children}
    </motion.div>
  );
}