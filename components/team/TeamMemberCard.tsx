"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Loader from "@/components/CustomUI/Loader";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position?: string;
  description?: string;
  email: string;
  phone: string;
  portfolio_url: string;
  git_url: string;
  linkdin_url: string;
  image_url: string;
}

const TeamMemberCard: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("/api/member");
        if (!response.ok) throw new Error("Failed to fetch team data");
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Meet Our <span className="text-blue-600">Team</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Profile Header - Removed bottom border */}
              <div className="p-6 flex items-start space-x-5">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-black shadow-lg">
                  <Image
                    src={member.image_url}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-blue-600 font-semibold">{member.position || "Team Member"}</p>
                </div>
              </div>

              {/* Bio Section */}
              <div className="px-6 pb-4">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {member.description || "Passionate professional dedicated to delivering exceptional results."}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="p-2 bg-gray-100 rounded-lg border border-black">
                      <FaEnvelope className="h-4 w-4" />
                    </span>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className="p-2 bg-gray-100 rounded-lg border border-black">
                      <FaPhone className="h-4 w-4" />
                    </span>
                    <a 
                      href={`tel:${member.phone}`} 
                      className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer with Social Links */}
              <div className="px-6 py-4 bg-gray-100 border-t-2 border-black">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {member.linkdin_url && (
                      <a
                        href={member.linkdin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-blue-700 transition-colors p-2 border border-black rounded-lg bg-white"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.git_url && (
                      <a
                        href={member.git_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-gray-900 transition-colors p-2 border border-black rounded-lg bg-white"
                        aria-label="GitHub"
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    )}
                    {member.portfolio_url && (
                      <a
                        href={member.portfolio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-green-600 transition-colors p-2 border border-black rounded-lg bg-white"
                        aria-label="Portfolio"
                      >
                        <FaGlobe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;