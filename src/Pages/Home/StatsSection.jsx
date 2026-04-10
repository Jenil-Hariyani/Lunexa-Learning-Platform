import React, { useEffect, useState } from "react";
import { BookOpen, GraduationCap, Star, Layers, Brain } from "lucide-react";
import { motion } from "framer-motion";
import TrustedBy from "./TrustedBy";

// Counter Hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

// Stat Card
const StatCard = ({ icon, value, label, delay }) => {
  const count = useCounter(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="w-full sm:w-auto md:w-full max-w-[240px] group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Icon */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
        {icon}
      </div>

      {/* Counter */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
        {count.toLocaleString()}
      </h2>

      {/* Label */}
      <p className="text-gray-500 mt-2 text-sm sm:text-base">{label}</p>

      {/* Hover Line */}
      <div className="mt-4 h-[2px] w-0 bg-blue-600 mx-auto group-hover:w-12 transition-all duration-300"></div>
    </motion.div>
  );
};

// Data (UPDATED)
const statsData = [
  {
    icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />,
    value: 30,
    label: "Lessons",
  },
  {
    icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7" />,
    value: 6,
    label: "Categories",
  },
  {
    icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />,
    value: 2,
    label: "Instructors",
  },
  {
    icon: <Brain className="w-6 h-6 sm:w-7 sm:h-7" />,
    value: 30,
    label: "Quizzes",
  },
];

const Stats = () => {
  return (
    <>
      <div className="relative bg-white py-16 md:py-24 overflow-hidden">
        {/* Background Blur */}
        <div className="absolute w-[280px] h-[280px] bg-blue-100 rounded-full blur-[100px] top-[-80px] left-[-80px] opacity-40"></div>
        <div className="absolute w-[230px] h-[230px] bg-indigo-100 rounded-full blur-[100px] bottom-[-80px] right-[-80px] opacity-40"></div>

        {/* Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Heading */}
          <p className="uppercase tracking-wide text-sm sm:text-base text-blue-600 font-semibold">
            Project Highlights
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            What This Platform Offers
          </h2>

          {/* Underline */}
          <div className="flex justify-start mt-6 sm:mt-8">
            <svg viewBox="0 0 220 20" className="w-40 sm:w-52">
              <path
                d="M5 15 Q110 0 215 15"
                stroke="#2563eb"
                strokeWidth="3"
                fill="transparent"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Stats Grid */}
          <div className="mt-20 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {statsData.map((stat, i) => (
              <StatCard
                key={i}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </div>

      <TrustedBy />
    </>
  );
};

export default Stats;
