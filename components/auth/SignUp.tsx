"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Email regex for validating email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Password regex for strong password validation (at least 8 characters, alphanumeric with symbols)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset any previous error messages
    setError("");
    setSuccessMessage("");

    // Email validation
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long and contain letters, numbers, and symbols.");
      return;
    }

    // Confirm password check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If all checks pass, simulate successful signup
    setSuccessMessage("Signup successful! Redirecting to login...");
    setTimeout(() => {
      // Redirect to login page after 2 seconds
      window.location.href = "/auth/login";
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <motion.input
              type="password"
              id="password"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            {/* Show password validation error if it's not entered or doesn't match the regex */}
            {password && !passwordRegex.test(password) && (
              <small className="text-sm text-red-500">
                Password must be at least 8 characters long and contain letters, numbers, and symbols.
              </small>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <motion.input
              type="password"
              id="confirmPassword"
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

          <motion.button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>

          <div className="flex justify-between items-center mt-4">
            <a href="/auth/login" className="text-sm text-blue-600 hover:underline">Already have an account? Login</a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupComponent;
