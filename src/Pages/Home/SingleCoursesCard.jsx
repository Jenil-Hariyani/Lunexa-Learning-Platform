import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookOpen, Users, Clock, GraduationCap } from "lucide-react";
import CourseCardData from "../Home/CoursesCardData";
import QuizContainer from "../Home/QuizeContainer";
import Lesson from "../My Learning/Lesson";

const SingleCoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // get id by data
  const course = CourseCardData.find((c) => c.id === id);
  console.log(course);

  const [completedLessons, setCompletedLessons] = useState(
    JSON.parse(localStorage.getItem(`course-${id}-progress`)) || [],
  );

  // lesson ui show section
  const [showLessons, setShowLessons] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // if Course not show
  if (!course)
    return (
      <div className="text-center mt-20 text-xl font-bold">
        Course not found
      </div>
    );

  // Find Video Id
  const videoId = course.video.split("v=")[1]?.split("&")[0];
  console.log("Video Id:", videoId);

  // If Course saved to show lesson button
  useEffect(() => {
    window.scrollTo(0, 0);

    const savedCourses = JSON.parse(localStorage.getItem("savedCourses")) || [];
    const savedCourse = savedCourses.find((c) => c.id === course.id);

    if (savedCourse) {
      setShowLessons(true);
      const progress =
        JSON.parse(localStorage.getItem(`course-${course.id}-progress`)) || [];
      if (progress.length >= course.lessons) setIsCompleted(true);
    }
  }, [course.id]);

  // if lesson completed show completed lesson ui
  useEffect(() => {
    if (completedLessons.length >= course.lessons) {
      setIsCompleted(true);
    }
    localStorage.setItem(
      `course-${course.id}-progress`,
      JSON.stringify(completedLessons),
    );
  }, [completedLessons, course.lessons]);

  // if click start learning button show lesson button and saved id
  const handleStartLearning = () => {
    setShowLessons(true);

    const saved = JSON.parse(localStorage.getItem("savedCourses")) || [];
    const exists = saved.find((c) => c.id === course.id);
    if (!exists) {
      saved.push({ id: course.id, completedLessons: [] });
      localStorage.setItem("savedCourses", JSON.stringify(saved));
    }
  };
  console.log("Features", course.features);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-12 font-poppins">
      {/* Back Button */}
      <button
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/"); // fallback homepage
          }
        }}
        className="mb-4 flex items-center gap-2 text-blue-600 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg shadow-md transition-colors duration-300"
      >
        ← Back
      </button>

      {/* Page Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        {course.title}
      </h1>
      <p className="text-gray-600 mb-8">Instructor: {course.instructor}</p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Video */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
              title={course.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Details Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              {course.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <BookOpen size={16} /> {course.lessons} Lessons
              </div>
              {/* <div className="flex items-center gap-1">
                <Users size={16} /> {course.students} Students
              </div> */}
              <div className="flex items-center gap-1">
                <Clock size={16} /> {course.duration}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[12px] line-through font-bold text-gray-600">
                {course.price}
              </span>
              <span className="text-[22px] font-bold text-green-600">Free</span>
            </div>

            {/* Start Learning */}
            {!showLessons && !isCompleted && (
              <button
                onClick={handleStartLearning}
                className="mt-4 w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-base sm:text-lg"
              >
                Start Learning
              </button>
            )}

            {/* Lessons Section */}
            {showLessons && (
              <Lesson
                completedLessons={completedLessons}
                setCompletedLessons={setCompletedLessons}
                course={course}
              />
            )}
          </div>
        </div>

        {/* Right Column: Quiz */}
        <div className="space-y-4 md:space-y-6">
          <div className="font-poppins">
            <div className="flex items-center gap-4 text-blue-600 mb-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500"></div>
                <GraduationCap size={20} className="text-blue-600" />
              </div>
              <p className="tracking-[3px] uppercase text-sm font-semibold">
                START QUIZ
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-gray-900 leading-tight">
              Test Your Knowledge
            </h2>

            <div className="mt-3">
              <svg width="180" height="15" viewBox="0 0 180 15">
                <path
                  d="M5 12 Q90 0 175 12"
                  stroke="#2563eb"
                  strokeWidth="2"
                  fill="transparent"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg w-full md:w-[500px] mx-auto">
            <QuizContainer course={course} category={course.category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
