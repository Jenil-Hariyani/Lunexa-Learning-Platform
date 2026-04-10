import React, { useState } from "react";
import { ChevronDown, ChevronUp, PartyPopper, Trophy } from "lucide-react";
const Lesson = ({ completedLessons, setCompletedLessons, course }) => {
  const [showAll, setShowAll] = useState(false);

  const totalLessons = course.lessons;
  const currentLesson = completedLessons.length + 1;

  const handleLessonClick = (lessonNumber) => {
    const isUnlocked =
      lessonNumber === 1 || completedLessons.includes(lessonNumber - 1);

    if (!isUnlocked) return;

    if (!completedLessons.includes(lessonNumber)) {
      const updated = [...completedLessons, lessonNumber];
      setCompletedLessons(updated);

      localStorage.setItem(
        `course-${course.id}-progress`,
        JSON.stringify(updated),
      );
    }
  };

  const progress = Math.round((completedLessons.length / totalLessons) * 100);

  return (
    <div className="mt-6 bg-white p-5 rounded-xl shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800">Your Progress</h3>

        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium transition"
        >
          {showAll ? "Hide Lessons" : "Show Lessons"}
          {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-2">
        <div
          className="bg-blue-600 h-3 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-600 mb-4">{progress}% completed</p>

      {/* Continue Button */}
      {progress !== 100 && (
        <button
          onClick={() => handleLessonClick(currentLesson)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue Lesson {currentLesson}
        </button>
      )}

      {/* Lessons List (Toggle) */}
      {showAll && (
        <div className="mt-4 max-h-60 overflow-y-auto space-y-2">
          {Array.from({ length: totalLessons }, (_, i) => {
            const lesson = i + 1;
            const isCompleted = completedLessons.includes(lesson);
            const isUnlocked =
              lesson === 1 || completedLessons.includes(lesson - 1);

            return (
              <div
                key={lesson}
                onClick={() => handleLessonClick(lesson)}
                className={`flex justify-between items-center px-4 py-2 rounded-lg cursor-pointer transition
                ${
                  isCompleted
                    ? "bg-green-100 text-green-700"
                    : isUnlocked
                      ? "bg-gray-100 hover:bg-gray-200"
                      : "bg-gray-50 text-gray-400 cursor-not-allowed"
                }`}
              >
                <span>Lesson {lesson}</span>
                {isCompleted && "✔"}
              </div>
            );
          })}
        </div>
      )}

      {/* Completion */}
      {progress === 100 && (
        <p className="text-green-600 mt-3 text-center font-semibold flex items-center justify-center gap-2">
          <Trophy size={18} className="text-red-600" />
          Course Completed!
        </p>
      )}
    </div>
  );
};

export default Lesson;
