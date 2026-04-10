import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { DiCss3, DiJavascript, DiPython } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

import Stats from "./StatsSection";
import { FaHtml5 } from "react-icons/fa6";

const categories = [
  { name: "REACT JS", icon: <FaReact size={24} /> },
  { name: "TAILWIND CSS", icon: <SiTailwindcss size={24} /> },
  { name: "PYTHON", icon: <DiPython size={24} /> },
  { name: "HTML", icon: <FaHtml5 size={24} /> },
  { name: "JAVASCRIPT", icon: <DiJavascript size={24} /> },
  { name: "CSS", icon: <DiCss3 size={24} /> },
];

const Categories = () => {
  return (
    <>
      <div className="bg-[#f4f6fb] py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-6xl mx-auto mb-10 sm:mb-12 md:mb-14 text-left">
          <p className="text-blue-600 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm font-semibold uppercase">
            Categories
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-gray-900 mt-2 leading-snug">
            Explore Top Categories
          </h2>

          <div className="flex justify-start mt-2">
            <svg
              className="w-[140px] sm:w-[180px] md:w-[200px]"
              height="20"
              viewBox="0 0 200 20"
            >
              <path
                d="M5 15 Q100 0 195 15"
                stroke="#2563eb"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border border-[#e5e7eb] rounded-2xl p-5 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden max-w-[260px] w-full mx-auto sm:max-w-full"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {cat.name}
              </h3>

              {/* Courses */}
              <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                4+ Courses
              </p>

              {/* Underline */}
              <div className="mt-3 sm:mt-4 h-[2px] w-0 bg-blue-600 mx-auto group-hover:w-10 sm:group-hover:w-12 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <Stats />
    </>
  );
};

export default Categories;
