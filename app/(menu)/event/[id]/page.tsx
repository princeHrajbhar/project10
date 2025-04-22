"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaClock,
  FaPhone,
  FaEnvelope,
  FaLink
} from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";

// 1. Event Schema
interface Event {
  _id: string;
  title: string;
  event_id: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  location: string;
  address?: string;
  eventType: string;
  organizers: string[];
  category: string;
  image_url: string;
  public_id: string;
  contactPhone?: string;
  contactEmail?: string;
  users: string[];
  speakerIds: string[]; // References to Speaker documents
  guidelineIds: string[]; // References to Guideline documents
  timelineIds: string[]; // References to Timeline documents
}

// 2. Speaker Schema
interface Speaker {
  _id: string;
  name: string;
  profession: string;
  description: string;
  image_url: string;
  public_id: string;
  eventId: string; // Reference to Event document
}

// 3. Guideline Schema
interface Guideline {
  _id: string;
  text: string;
  eventId: string; // Reference to Event document
}

// 4. Timeline Schema
interface TimelineItem {
  _id: string;
  time: string;
  activity: string;
  eventId: string; // Reference to Event document
}

// Mock data based on schemas
const mockEvent: Event = {
  _id: "1",
  title: "Startup Bootcamp 2024",
  event_id: "evt_001",
  description: "Join us for an intensive 3-day workshop...",
  startDateTime: new Date("2024-06-15T09:00:00"),
  endDateTime: new Date("2024-06-17T17:00:00"),
  location: "University Innovation Center",
  address: "123 Innovation Drive, Tech Park, Cityville, ST 12345",
  eventType: "Workshop",
  organizers: ["E-Cell Core Team", "Center for Entrepreneurship"],
  category: "Entrepreneurship",
  image_url: "https://img.freepik.com/premium-photo/business-networking-events-ai-generate_250484-12042.jpg",
  public_id: "event1",
  contactPhone: "+1 (234) 567-890",
  contactEmail: "events@ecell.edu",
  users: [],
  speakerIds: ["101", "102"],
  guidelineIds: ["g1", "g2", "g3", "g4"],
  timelineIds: ["t1", "t2", "t3"]
};

const mockSpeakers: Speaker[] = [
  {
    _id: "101",
    name: "Dr. Sarah Johnson",
    profession: "Venture Capitalist",
    description: "Partner at Innovate Capital with 15+ years experience funding startups",
    image_url: "/speaker1.jpg",
    public_id: "speaker1",
    eventId: "1"
  },
  {
    _id: "102",
    name: "Mark Williams",
    profession: "Tech Entrepreneur",
    description: "Founder of multiple successful startups",
    image_url: "/speaker2.jpg",
    public_id: "speaker2",
    eventId: "1"
  }
];

const mockGuidelines: Guideline[] = [
  { _id: "g1", text: "Arrive 15 minutes early for registration", eventId: "1" },
  { _id: "g2", text: "Bring your laptop and charger", eventId: "1" },
  { _id: "g3", text: "Dress code is business casual", eventId: "1" },
  { _id: "g4", text: "Prepare a 1-minute pitch about your idea (optional)", eventId: "1" }
];

const mockTimeline: TimelineItem[] = [
  { _id: "t1", time: "09:00 AM", activity: "Registration & Breakfast", eventId: "1" },
  { _id: "t2", time: "10:00 AM", activity: "Keynote: The Entrepreneurial Mindset", eventId: "1" },
  { _id: "t3", time: "11:30 AM", activity: "Workshop: Business Model Canvas", eventId: "1" }
];

export default function EventDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [guidelines, setGuidelines] = useState<Guideline[]>([]);
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchEventData = async () => {
      try {
        // In a real app, you would fetch these from your API
        setEvent(mockEvent);
        setSpeakers(mockSpeakers);
        setGuidelines(mockGuidelines);
        setTimeline(mockTimeline);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventData();
  }, [params.id]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
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

  if (isLoading || !event) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          whileHover={{ x: -2 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Events
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-12"
        >
          <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
            <Image
              src={event.image_url}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
                <p className="text-gray-600 mb-6">{event.description}</p>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Details</h2>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start gap-4">
                      <FaCalendarAlt className="text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p>
                          {formatDate(event.startDateTime)} - {formatDate(event.endDateTime)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaClock className="text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p>
                          {formatTime(event.startDateTime)} - {formatTime(event.endDateTime)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaMapMarkerAlt className="text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p>{event.location}</p>
                        {event.address && <p className="text-gray-500">{event.address}</p>}
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaUsers className="text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Organized By</p>
                        <p>{event.organizers.join(", ")}</p>
                      </div>
                    </div>
                    {(event.contactPhone || event.contactEmail) && (
                      <div className="flex items-start gap-4">
                        <div className="text-gray-500 mt-1 flex-shrink-0">
                          <FaEnvelope className="inline mr-2" />
                          <FaPhone className="inline" />
                        </div>
                        <div>
                          <p className="font-medium">Contact</p>
                          {event.contactEmail && <p>{event.contactEmail}</p>}
                          {event.contactPhone && <p>{event.contactPhone}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Summary</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">{event.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <p className="font-medium">{event.eventType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">{formatDate(event.startDateTime)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-medium">{formatTime(event.startDateTime)}</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Speakers Section */}
        {speakers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-12"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {speakers.map((speaker) => (
                  <motion.div
                    key={speaker._id}
                    whileHover={{ y: -5 }}
                    className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gray-200 flex-shrink-0">
                      <Image
                        src={speaker.image_url}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{speaker.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{speaker.profession}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">{speaker.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Timeline Section */}
        {timeline.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-12"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Timeline</h2>
              <div className="relative">
                <div className="absolute left-4 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                <div className="space-y-6">
                  {timeline.map((item) => (
                    <div key={item._id} className="relative pl-12">
                      <div className="absolute left-4 w-3 h-3 rounded-full bg-gray-900 border-4 border-white transform -translate-x-1/2"></div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900">{item.time}</p>
                        <p className="text-gray-600">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Guidelines Section */}
        {guidelines.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Participation Guidelines</h2>
              <ul className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <motion.li
                    key={guideline._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-gray-900 mt-1">•</span>
                    <span>{guideline.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}