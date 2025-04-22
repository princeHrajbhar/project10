"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaSearch, FaCalendarAlt, FaUser, FaTags, FaArrowRight, FaBookmark, FaShareAlt, FaComment } from "react-icons/fa";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Entrepreneurship in 2024",
    excerpt: "Exploring the emerging trends that will shape the startup ecosystem in the coming year...",
    author: "Sarah Johnson",
    date: "May 15, 2024",
    category: "Trends",
    readTime: "5 min read",
    image: "/blog1.jpg",
    tags: ["Entrepreneurship", "Innovation", "Startups"],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris...",
    comments: 12,
    bookmarked: false
  },
  // Add 5-7 more blog posts...
];

const categories = ["All", "Trends", "How-To", "Interviews", "Case Studies"];
const popularTags = ["Startups", "Funding", "Marketing", "Technology", "Leadership"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (postId: number) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            E-Cell Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Insights, stories and knowledge for aspiring entrepreneurs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white/70" />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12 justify-center"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {filteredPosts.map(post => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <button 
                    onClick={() => toggleBookmark(post.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 rounded-full backdrop-blur-sm"
                  >
                    <FaBookmark 
                      className={`text-lg ${bookmarkedPosts.includes(post.id) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} 
                    />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaUser className="text-gray-400" /> {post.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-gray-400" /> {post.date}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ x: 3 }}
                      onClick={() => setSelectedPost(post)}
                      className="flex items-center text-blue-600 font-medium"
                    >
                      Read more <FaArrowRight className="ml-1" />
                    </motion.button>
                    <div className="flex gap-3 text-gray-400">
                      <button className="flex items-center gap-1 hover:text-gray-600">
                        <FaComment /> <span className="text-xs">{post.comments}</span>
                      </button>
                      <button className="hover:text-gray-600">
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Popular Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-12"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(tag => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="mb-6">Subscribe to our newsletter for the latest articles and resources</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <button 
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
                  onClick={() => setSelectedPost(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-gray-400" /> {selectedPost.author}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-gray-400" /> {selectedPost.date}
                  </span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaTags className="text-gray-400" /> {selectedPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="prose max-w-none text-gray-700 mb-8">
                  <p>{selectedPost.content}</p>
                  {/* More content would go here */}
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold mb-4">Comments ({selectedPost.comments})</h4>
                  {/* Comments section would go here */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg mb-2" 
                      placeholder="Add your comment..."
                      rows={3}
                    ></textarea>
                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}