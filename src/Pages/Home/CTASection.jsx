import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const CTASection = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const clerk = useClerk();
  const location = useLocation();

  const handleGetStarted = () => {
    if (!isSignedIn) {
      clerk.openSignIn({
        afterSignInUrl: `#${location.pathname}`,
        appearance: {
          layout: { type: "modal", modalSize: "medium" },
          variables: {
            colorPrimary: "#4f46e5",
            colorBackground: "#ffffff",
            colorText: "#1f2937",
            borderRadius: "16px",
            fontFamily: "'Poppins', sans-serif",
          },
          elements: {
            modal:
              "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
            card: "max-w-md w-full shadow-2xl rounded-2xl p-8 bg-white",
            headerTitle: "text-3xl font-bold text-indigo-700 mb-6 text-center",
            inputField:
              "border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4",
            buttonPrimary:
              "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-6 py-3 shadow-md w-full transition-transform transform hover:scale-105 mb-4",
            socialButtons: "w-full mb-2",
            divider: "my-4",
          },
        },
      });
    } else {
      navigate(`/courses`);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-blue-50 to-indigo-100 py-28 px-6 md:px-10 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full blur-[160px] top-[-150px] left-[-150px] opacity-50 animate-pulse-slow"></div>
      <div className="absolute w-[350px] h-[350px] bg-indigo-200 rounded-full blur-[140px] bottom-[-120px] right-[-120px] opacity-50 animate-pulse-slow"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Heading - Single Line */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Start Learning Today & Grow Your Skills
        </h2>

        {/* Sub Text */}
        <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
          Unlock your potential with industry-focused courses, hands-on
          projects, and expert mentorship designed to make you job-ready faster.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-blue-400 hover:shadow-2xl transition-all duration-300 font-medium"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CTASection;
