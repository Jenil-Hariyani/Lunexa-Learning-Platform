import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Trash2, Clock } from "lucide-react";
import { useUser, useClerk } from "@clerk/clerk-react";
import CourseCardData from "../Home/CoursesCardData";

function ShowSavedCourses() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const clerk = useClerk();

  const [savedCourses, setSavedCourses] = useState([]);

  useEffect(() => {
    if (isSignedIn) {
      const saved = JSON.parse(localStorage.getItem("savedCourses")) || [];

      const coursesWithData = saved
        .map((c) => {
          const courseData = CourseCardData.find((d) => d.id === c.id);
          if (!courseData) return null;

          const completedLessons =
            JSON.parse(localStorage.getItem(`course-${c.id}-progress`)) || [];

          return {
            ...courseData,
            completedLessons,
          };
        })
        .filter(Boolean);
      setSavedCourses(coursesWithData);
    } else {
      setSavedCourses([]);
    }
  }, [isSignedIn]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleRemoveCourse = (courseId) => {
    const updatedSaved = JSON.parse(localStorage.getItem("savedCourses")) || [];
    const filteredSaved = updatedSaved.filter((c) => c.id !== courseId);

    localStorage.setItem("savedCourses", JSON.stringify(filteredSaved));
    localStorage.removeItem(`course-${courseId}-progress`);

    setSavedCourses((prev) => prev.filter((c) => c.id !== courseId));
  };

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-6">
        <p className="text-xl text-gray-600 font-semibold">
          Please log in to see your courses
        </p>

        <button
          onClick={() =>
            clerk.openSignIn({
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
                    "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50",
                  card: "max-w-md w-full rounded-2xl p-8 bg-white shadow-2xl border border-gray-100",
                  headerTitle:
                    "text-3xl font-bold text-indigo-600 mb-2 text-center",
                  headerSubtitle: "text-sm text-gray-500 text-center mb-4",
                  formFieldInput:
                    "border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3",
                  formButtonPrimary:
                    "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-6 py-3 w-full transition-all duration-300 shadow-md",
                  footerActionLink:
                    "text-indigo-600 hover:text-indigo-800 font-medium",
                  socialButtonsBlockButton:
                    "border border-gray-300 hover:bg-gray-100 transition rounded-lg py-2",
                  dividerLine: "bg-gray-200",
                  dividerText: "text-gray-400 text-sm",
                },
              },
            })
          }
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    );
  }

  if (savedCourses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] mt-10 space-y-6">
        <img
          src="https://i.pinimg.com/736x/1f/cf/3c/1fcf3c0190a76e6a0bcc3e46293786ad.jpg"
          alt="No saved courses"
          className="w-full max-w-xs h-auto object-contain"
        />
        <p className="text-xl text-gray-600 font-semibold">
          No courses saved yet.
        </p>
        <button
          onClick={() => navigate("/courses")}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Start Learning
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 pt-6 pb-16 max-w-6xl mx-auto font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        My Learning
      </h2>

      <div className="grid md:grid-cols-3 gap-6 gap-x-12 gap-y-10">
        {savedCourses.map((course) => {
          const totalLessons = course.lessons || 1;
          const completedCount = course.completedLessons.length;
          const progress = Math.round((completedCount / totalLessons) * 100);

          const videoId = course.video?.split("v=")[1]?.split("&")[0];

          const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

          return (
            <div
              key={course.id}
              className="bg-white border border-[#e5e7eb] rounded-[18px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={thumbnail}
                onClick={() => navigate(`/course/${course.id}`)}
                alt={course.title}
                className="w-full h-[200px] object-cover cursor-pointer"
              />

              <div className="p-4">
                <h3 className="text-[17px] font-semibold text-gray-900">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {course.instructor}
                </p>

                <div className="flex items-center gap-4 mt-3 text-sm text-blue-600">
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} /> {totalLessons} Lessons
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 font-medium">
                    <Clock size={16} /> {course.duration}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-3 rounded-full ${
                        progress === 100 ? "bg-green-500" : "bg-blue-600"
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Progress: {progress}%
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {progress === 100 ? (
                    <span className="bg-green-100 text-green-700 py-2 px-4 rounded-lg text-sm font-semibold">
                      Completed
                    </span>
                  ) : (
                    <button
                      onClick={() => navigate(`/course/${course.id}`)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      Continue Learning
                    </button>
                  )}

                  <button
                    onClick={() => handleRemoveCourse(course.id)}
                    className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition"
                  >
                    <Trash2 size={20} className="text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowSavedCourses;
