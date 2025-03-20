"use client";

import React, { useEffect, useState } from "react";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import Loader from "@/components/CustomUI/Loader"; // Import Loader component

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

export default function Home() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("/api/member");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
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

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Team</h1>
      {loading ? (
        <div className="flex justify-center">
          <Loader /> {/* Use custom loader */}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
