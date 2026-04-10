import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogData } from "./BlogData";
import { FaUserAlt, FaCalendarAlt, FaComments } from "react-icons/fa";

const SingleBlogPage = () => {
  const { id } = useParams();
  const post = BlogData.find((b) => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Post not found
      </div>
    );
  }

  // Extract YouTube video ID
  const cleanUrl = post.video.trim();
  const videoId = cleanUrl.includes("v=")
    ? cleanUrl.split("v=")[1]?.split("&")[0]
    : cleanUrl.split("/").pop();

  return (
    <div className="bg-[#f9fafc] min-h-screen py-8 sm:py-10 px-4 sm:px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* VIDEO */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[500px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={post.title}
            allowFullScreen
          ></iframe>
        </div>

        {/* CONTENT */}
        <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 md:p-10 rounded-xl shadow-md">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-3 sm:mt-4 text-gray-900">
            {post.title}
          </h1>

          {/* Dynamic description */}
          <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
            {post.description}
          </p>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => window.history.back()}
            className="px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-full hover:scale-105 transition"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
