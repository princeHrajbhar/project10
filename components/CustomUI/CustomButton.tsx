// Mark the component as a client-side component
'use client';

import React, { useState } from "react";
import { useRouter } from "next/router";

interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  text?: string;
  navigationPath?: string;
  isSubmitting?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "button",
  onClick,
  text = "Submit",
  navigationPath = "",
  isSubmitting = false
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // This hook now works after marking the component as client-side

  const handleClick = () => {
    if (isSubmitting) {
      setLoading(true);
    }

    if (navigationPath) {
      router.push(navigationPath);
    }

    if (onClick) {
      onClick();
    }

    if (isSubmitting) {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={loading}
      className="custom-button"
      style={{
        backgroundColor: "black",
        border: "2px solid transparent",
        borderRadius: "8px",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "white",
        cursor: loading ? "not-allowed" : "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="text"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {loading ? "Loading..." : text}
      </span>
      <div
        className="border-gradient"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(45deg, blue, green, black, pink, orange)",
          backgroundSize: "400% 400%",
          animation: "gradient-border 4s linear infinite",
          zIndex: 0,
          borderRadius: "8px",
        }}
      />
    </button>
  );
};

export default CustomButton;
