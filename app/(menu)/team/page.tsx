"use client";
import React, { useEffect, useState } from "react";
import MemberCard from "@/components/team/Card";

const TeamPage: React.FC = () => {
  const [teamData, setTeamData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch("/api/member");
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        const data = await response.json();
        setTeamData(data);  // Assuming the response is an array of team members
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state while fetching data
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <MemberCard key={member._id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
