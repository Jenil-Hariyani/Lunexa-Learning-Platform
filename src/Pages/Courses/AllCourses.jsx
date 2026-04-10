// AllCourses.jsx
import { useEffect } from "react";
import { CourseCardData } from "../Home/CoursesCardData";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, Users } from "lucide-react";
import { useClerk, useUser } from "@clerk/clerk-react";

const AllCourses = ({ search, category }) => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const clerk = useClerk();
  const location = useLocation();

  const renderStars = (rating) => "⭐".repeat(Math.round(rating));

  const filteredCourses = CourseCardData.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" ||
      course.category.toLowerCase() === category.toLowerCase();
    return matchSearch && matchCategory;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 pt-4 pb-16">
      {/* Heading */}
      <div className="mb-3 md:mb-4 font-poppins">
        <h2 className="text-[22px] sm:text-[25px] md:text-[33px] font-bold text-gray-900 leading-tight">
          Courses
        </h2>
        <div className="mt-2 sm:mt-3">
          <svg width="180" height="15" viewBox="0 0 220 20">
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

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto bg-white border border-[#e4e7ec] rounded-[22px] p-4 sm:p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 md:gap-10">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => {
              const videoId = course.video?.split("v=")[1]?.split("&")[0];

              const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white border-2 border-gray-200 rounded-[18px] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div
                    className="relative cursor-pointer"
                    onClick={() => handleCourseClick(course.id)}
                  >
                    <img
                      src={thumbnail}
                      alt={course.title}
                      className="w-full h-48 sm:h-56 md:h-52 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-indigo-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full shadow">
                      {course.category}
                    </span>
                    {course.video && (
                      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
                        ▶
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="text-orange-400 text-[12px] sm:text-[14px]">
                        {renderStars(course.rating)}
                      </div>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        ({course.rating} / 5)
                      </span>
                    </div>

                    <h3 className="mt-1 text-[14px] sm:text-[16px] font-semibold text-gray-900 group-hover:text-blue-600 transition truncate">
                      {course.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 mt-2 text-sm">
                      <div className="flex items-center gap-1 text-blue-600 font-medium text-xs sm:text-sm">
                        <BookOpen size={14} /> {course.lessons} Lessons
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 font-medium">
                        <Clock size={16} /> {course.duration}
                      </div>
                    </div>

                    <div className="border-t my-3"></div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] line-through font-bold text-gray-600">
                          {course.price}
                        </span>
                        <span className="text-[22px] font-bold text-green-600">
                          Free
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-700 truncate">
                          {course.instructor}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <p className="text-center col-span-1 sm:col-span-2 md:col-span-3 text-gray-500">
              No courses found 
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
