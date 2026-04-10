import React from "react";
import { motion } from "framer-motion";
import CTASection from "./CTASection";

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
];
const duration = window.innerWidth < 640 ? 6 : 12;
const TrustedBy = () => {
  return (
    <>
      <div className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <p className="uppercase tracking-wide text-xs sm:text-sm text-blue-600 font-semibold">
            Learn
          </p>

          <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Tech Stack
          </h3>

          {/* Underline */}
          <div className="flex justify-start mt-3">
            <svg viewBox="0 0 220 20" className="w-40 sm:w-52 lg:w-64">
              <path
                d="M5 15 Q110 0 215 15"
                stroke="#2563eb"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Logos Slider */}
        <div className="mt-10 sm:mt-12 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 w-16 sm:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <motion.div
            className="flex gap-6 sm:gap-8 lg:gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: duration,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] lg:min-w-[200px] h-20 sm:h-24 lg:h-28"
              >
                <img
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  className="h-18 sm:h-12 md:h-14 lg:h-25 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <CTASection />
    </>
  );
};

export default TrustedBy;
