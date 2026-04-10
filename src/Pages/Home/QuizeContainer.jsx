import React, { useState, useEffect } from "react";
import quizData from "./QuizeData"; // Ensure this imports your quiz data
import { CheckCircle } from "lucide-react";

const QuizContainer = ({ course, category }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // load quize data
  useEffect(() => {
    if (!category || !course.id) return;

    const courseNumber = course.id.split("-")[1];
    const categoryKey = category.toLowerCase().replace(/\s/g, "");
    const categoryDataArray = quizData[categoryKey];

    console.log(
      "Course No:",
      courseNumber,
      "Category:",
      categoryKey,
      "CategoryDataArray:",
      categoryDataArray,
    );

    if (!categoryDataArray || categoryDataArray.length === 0) return;

    // find Exact course id
    const courseKey = `course${courseNumber}`;
    const courseData = categoryDataArray[0][courseKey];
    console.log("Course key:", courseKey, "CourseData:", courseData);

    if (!courseData) return;

    // random question select
    const shuffled = [...courseData].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
  }, [category, course]);

  // handle next button
  const handleNext = () => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    if (currentIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setSelectedOption("");
  };

  // if question not load show loading
  if (questions.length === 0)
    return <p className="text-center text-gray-500 py-6">Loading quiz...</p>;

  return (
    <div className=" sm:mt-4 md:mt-6 p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg w-full max-w-2xl mx-auto">
      {!showResult ? (
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
            Question {currentIndex + 1} of {questions.length}
          </h3>
          <p className="mb-4 text-gray-700 text-sm sm:text-base md:text-lg">
            {questions[currentIndex].question}
          </p>

          <div className="grid gap-3">
            {questions[currentIndex].options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedOption(option)}
                className={`text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition text-sm sm:text-base md:text-base
                  ${
                    selectedOption === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-100"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className="mt-4 sm:mt-6 w-full py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-base"
          >
            {currentIndex === questions.length - 1 ? "Show Result" : "Next"}
          </button>
        </div>
      ) : (
        <div className="text-center py-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-3 sm:mb-4">
            Your Score
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-3">
            {score} out of {questions.length}
          </p>

          {/* Completed Text */}
          <div className="text-center">
            <p className="text-green-600 font-semibold text-base sm:text-lg flex items-center justify-center gap-2">
              <CheckCircle size={18} className="text-green-600" />
              Quize Completed
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizContainer;
