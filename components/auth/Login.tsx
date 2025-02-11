"use client";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Regex for validating email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle login on form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous error message
    setError("");

    // Basic validation for email and password fields
    if (!email || !password) {
      setError("Please fill out both fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Simulate successful login and redirect to the home page
    setError(""); // Clear any previous error
    console.log("Logging in...");
    
    // Redirect user to home page after successful login
    setTimeout(() => {
      window.location.href = "/";  // Redirect to the homepage
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Display error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <motion.button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>

          <div className="my-4 flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <motion.button
            className="w-full p-2 bg-gray-800 text-white rounded-lg flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGoogle />
            <span>Sign in with Google</span>
          </motion.button>
        </form>

        <div className="flex justify-between items-center mt-4">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          <a href="/auth/signup" className="text-sm text-blue-600 hover:underline">Create an Account</a>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginComponent;
