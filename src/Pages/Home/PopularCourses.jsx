import React, { useEffect } from "react";
import CourseCardData from "../Home/CoursesCardData";
import { GraduationCap, BookOpen, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Categories from "../Home/Categories";
import { useLocation, useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const PopularCourses = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const clerk = useClerk();
  const location = useLocation();

  // Only 1 course per category for showcase
  const uniqueCourses = Object.values(
    CourseCardData.reduce((acc, course) => {
      if (!acc[course.category]) {
        acc[course.category] = course;
      }
      return acc;
    }, {}),
  ).slice(0, 6);

  // Helper to render stars dynamically
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  const handleCourseClick = (id) => {
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
      navigate(`/course/${id}`);
    }
  };

  useEffect(() => {
    console.log("All Courses:", CourseCardData);
    console.log("Unique Courses:", uniqueCourses);
  }, []);

  return (
    <>
      <div className="bg-[#f4f6fb] pt-8 pb-6 sm:pt-12 sm:pb-8 md:pt-16 md:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-6 sm:mb-8 md:mb-10 font-poppins text-left">
            <div className="flex items-center sm:justify-start gap-3 sm:gap-4 text-blue-600 mb-2 sm:mb-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500"></div>
                <GraduationCap size={18} className="text-blue-600" />
              </div>
              <p className="tracking-[2px] sm:tracking-[3px] uppercase text-xs sm:text-sm font-semibold">
                COURSES
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-gray-900 leading-snug">
              Most Popular Courses
            </h2>
            <div className="mt-2 flex sm:justify-start">
              <svg
                className="w-[140px] sm:w-[180px] md:w-[220px]"
                height="20"
                viewBox="0 0 220 20"
              >
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
        </div>

        {/* Courses Grid */}
        <div className="max-w-6xl mx-auto bg-white border border-[#e4e7ec] rounded-[22px] p-4 sm:p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 md:gap-10">
            {uniqueCourses.map((course, index) => {
              const videoId = course.video?.split("v=")[1]?.split("&")[0];

              const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white border-2 border-gray-200 rounded-[18px] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Thumbnail */}
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    <img
                      src={thumbnail}
                      alt={course.title}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                    <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
                      {course.category}
                    </span>

                    {course.video && (
                      <div
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md 
                        bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer"
                        onClick={() => handleCourseClick(course.id)}
                      >
                        ▶
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="text-orange-400 text-[14px] tracking-wide">
                        {renderStars(course.rating)}
                      </div>
                      <span className="text-gray-500 text-xs">
                        ({course.rating} / 5 Rating)
                      </span>
                    </div>

                    <h3
                      className="mt-2 text-[17px] font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition"
                      onClick={() => handleCourseClick(course.id)}
                    >
                      {course.title}
                    </h3>

                    <div className="flex items-center gap-6 mt-3 text-sm">
                      <div className="flex items-center gap-1 text-blue-600 font-medium">
                        <BookOpen size={14} />
                        {course.lessons} Lessons
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 font-medium">
                        <Clock size={16} />
                        {course.duration}
                      </div>
                    </div>

                    <div className="border-t my-4"></div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] line-through font-bold text-gray-600">
                          {course.price}
                        </span>
                        <span className="text-[22px] font-bold text-green-600">
                          Free
                        </span>
                      </div>

                      <span className="text-sm text-gray-700">
                        {course.instructor}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Categories />
    </>
  );
};

export default PopularCourses;
