import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import PopularCourses from "../Home/PopularCourses";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
// Typing Words
const words = [
  "Learn Programming.",
  "Build Real Projects.",
  "Become Job Ready.",
];

// Icon
const icons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJs />,
  <FaReact />,
  <FaNodeJs />,
  <SiTailwindcss />,
  <FaGithub />,
  <FaDatabase />,
  <FaCode />,
  <FaTerminal />,
];

// Move Icon Direction
const positions = [
  { x: 0, y: -220 },
  { x: 220, y: 0 },
  { x: 0, y: 220 },
  { x: -220, y: 0 },
  { x: 160, y: -160 },
  { x: -160, y: 160 },
  { x: 160, y: 160 },
  { x: -160, y: -160 },
  { x: 250, y: 80 },
  { x: -250, y: -80 },
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const clerk = useClerk();
  const location = useLocation();

  useEffect(() => {
    let i = 0; // index for character
    const currentWord = words[wordIndex]; // current word to type

    // set text word one by one
    const typing = setInterval(() => {
      setText(currentWord.slice(0, i));
      i++;

      if (i > currentWord.length) {
        clearInterval(typing); // typing complete → stop interval
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length); // loop back to first word after last.
        }, 1200);
      }
    }, 100); // 100ms per character

    return () => clearInterval(typing); // stop interval if component unmount
  }, [wordIndex]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStartClick = () => {
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
    <>
      <section className="min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-snug md:leading-tight">
                {text}
                <span className="text-blue-600 animate-pulse">|</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-md md:max-w-lg">
                Master coding with real-world projects and guided learning
                paths.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                <button
                  onClick={handleStartClick}
                  className="px-5 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-full shadow-md hover:scale-105 transition"
                >
                  Start Learning
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-5 py-2 sm:px-6 sm:py-3 border border-gray-300 rounded-full hover:bg-blue-400 transition"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center mt-8 md:mt-0">
              <div className="relative w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
                {/* Center */}
                <div
                  className="w-32 sm:w-36 md:w-38 h-32 sm:h-36 md:h-38 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 
                     text-white flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold shadow-2xl"
                >
                  CODE
                </div>

                {/* Icons */}
                {icons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-blue-600 text-2xl sm:text-3xl drop-shadow-md"
                    initial={{ x: 0, y: 0 }}
                    animate={{
                      x: [0, positions[i].x, 0],
                      y: [0, positions[i].y, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 4 + i * 0.3, // 4s per cycle + slight extra per icon for natural animation
                      repeat: Infinity,
                      ease: "easeInOut", // start slow fast middle end slow
                    }}
                  >
                    {Icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularCourses />
    </>
  );
};

export default HeroSection;
