"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Loader from "@/components/CustomUI/Loader";
import { motion } from "framer-motion"; // Import from framer-motion

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
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1, // Stagger animation for better effect
            }}
            viewport={{ once: true }} // Animate only once when in view
            className="bg-white border border-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            {/* Profile Pic */}
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={member.image_url}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {member.position || "N/A"}
                </p>
              </div>
            </div>

            {/* Email and Phone */}
            <div className="mt-3 text-sm text-gray-600">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {member.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${member.phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {member.phone}
                </a>
              </p>
            </div>

            {/* Bio */}
            <p className="mt-4 text-gray-700 line-clamp-3">
              {member.description || "No bio available."}
            </p>

            {/* Social Links */}
            <div className="mt-4 flex space-x-4 text-blue-600">
              {member.linkdin_url && (
                <a
                  href={member.linkdin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {member.git_url && (
                <a
                  href={member.git_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard;
