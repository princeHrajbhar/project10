import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

type MemberProps = {
  name: string;
  email: string;
  phone: string;
  position: string;
  description: string;
  image_url: string;
  portfolio_url: string;
  git_url: string;
  linkdin_url: string;
};

const MemberCard: React.FC<MemberProps> = ({
  name,
  email,
  phone,
  position,
  description,
  image_url,
  portfolio_url,
  git_url,
  linkdin_url,
}) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // Truncate the description to show part of it initially
  const truncatedDescription = description.slice(0, 150) + (isReadMore ? description.slice(150) : "...");

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 w-80 mx-auto border border-black h-full flex flex-col">
      <img
        src={image_url}  // Use the fetched image URL
        alt={name}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center text-gray-800">{name}</h3>
      <p className="text-center text-gray-600">{position}</p>

      <div className="mt-4 flex-grow">
        <p className="text-gray-700">{truncatedDescription}</p>
        {!isReadMore && (
          <span
            onClick={handleReadMore}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            ...
          </span>
        )}
        {isReadMore && (
          <span
            onClick={handleReadMore}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Show less
          </span>
        )}

        {/* Contact Info */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2">
            <HiMail className="text-gray-500" />
            <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
              {email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <HiPhone className="text-gray-500" />
            <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
              {phone}
            </a>
          </div>
        </div>

        {/* Social Links and Portfolio in a horizontal row, centered */}
        <div className="mt-4 flex justify-center space-x-4"> {/* Reduced space-x-6 to space-x-4 */}
          <a
            href={portfolio_url}
            className="text-blue-500 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-2xl" />
          </a>
          <a
            href={git_url}
            className="text-blue-500 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href={linkdin_url}
            className="text-blue-500 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
