import React from "react";
import Hero from "@/components/home/Hero";
import Vision from "@/components/home/Vision" // Correct import path
import Test from "@/components/home/Test"

const Page = () => {
  return (
    <div>
      <Hero /> {/* Correctly using the Hero component */}
      <Vision/>
      <Test/>
    </div>
  );
};

export default Page;
