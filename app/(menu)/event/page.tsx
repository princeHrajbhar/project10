"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";

// Mock data based on your schema
const mockEvents = [
  {
    _id: "1",
    title: "Startup Bootcamp 2024",
    event_id: "evt_001",
    description: "3-day intensive workshop for aspiring entrepreneurs",
    startDateTime: new Date("2024-06-15T09:00:00"),
    endDateTime: new Date("2024-06-17T17:00:00"),
    location: "University Innovation Center",
    address: "123 Innovation Drive, Tech Park",
    eventType: "Workshop",
    organizers: ["E-Cell Core Team"],
    category: "Entrepreneurship",
    image_url: "https://img.freepik.com/premium-photo/business-networking-events-ai-generate_250484-12042.jpg",
    public_id: "event1",
    contactPhone: "+1234567890",
    contactEmail: "events@ecell.edu",
    users: []
  },
  // Add more mock events...
];

type Event = typeof mockEvents[0];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "ongoing" | "past">("upcoming");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const now = new Date();
  
  const filteredEvents = mockEvents.filter(event => {
    if (activeTab === "upcoming") return event.startDateTime > now;
    if (activeTab === "ongoing") return event.startDateTime <= now && event.endDateTime >= now;
    if (activeTab === "past") return event.endDateTime < now;
    return true;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover opportunities to learn, network, and grow as an entrepreneur
          </p>
        </motion.div>

        {/* Event Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-lg border border-gray-200 bg-white shadow-sm">
            {(["upcoming", "ongoing", "past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium capitalize transition-all ${activeTab === tab ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              >
                {tab} Events
              </button>
            ))}
          </div>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Events Grid */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event._id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 cursor-pointer"
                  onClick={() => handleEventClick(event._id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image_url}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="inline-block px-3 py-1 bg-white text-gray-900 rounded-full text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">{event.description}</p>
                    
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-400" />
                        <span>
                          {formatDate(event.startDateTime)} - {formatDate(event.endDateTime)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="text-gray-400" />
                        <span>
                          {formatTime(event.startDateTime)} - {formatTime(event.endDateTime)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-gray-400" />
                        <span>{event.eventType}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No {activeTab} events found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {activeTab === "upcoming"
                ? "Check back later for upcoming events"
                : "Browse our upcoming events to participate"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}