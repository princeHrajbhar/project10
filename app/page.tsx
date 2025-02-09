"use client"; // Ensure this file is only rendered on the client

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/home/Hero'), { ssr: false });
const Vision = dynamic(() => import('@/components/home/Vision'), { ssr: false });
const Test = dynamic(() => import('@/components/home/Test'), { ssr: false });

const Page = () => {
  return (
    <div>
      <Hero /> {/* Correctly using the Hero component */}
      <Vision />
      <Test />
    </div>
  );
};

export default Page;
