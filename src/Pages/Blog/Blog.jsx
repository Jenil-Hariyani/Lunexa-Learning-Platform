import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogData } from "./BlogData";
import { useClerk, useUser } from "@clerk/clerk-react";
import { getThumbnailUrl, handleThumbError } from "../../utils/youtube";

const Blog = () => {
  const navigate = useNavigate();
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isBannerPaused, setIsBannerPaused] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(4);
  const { isSignedIn } = useUser();
  const clerk = useClerk();

  const featuredPost = BlogData[featuredIndex];

  // Banner auto-scroll (stable interval, pauses on hover)
  useEffect(() => {
    if (isBannerPaused) return;
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % BlogData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isBannerPaused]);

  const loadMore = () => setVisiblePosts((prev) => prev + 4);

  const handleProtectedClick = (id) => {
    if (!isSignedIn) {
      clerk.openSignIn({
        afterSignInUrl: `/#/blog/${id}`,
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
      navigate(`/blog/${id}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#f4f6fb] pt-8 md:pt-10 pb-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <p className="text-blue-600 tracking-[3px] text-sm font-semibold uppercase">
          Blog
        </p>
        <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-bold text-gray-900 mt-2 leading-snug">
          Latest Articles & Tutorials
        </h2>
        <div className="flex justify-center mt-3">
          <svg width="200" height="20">
            <path
              d="M5 15 Q100 0 195 15"
              stroke="#2563eb"
              strokeWidth="3"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Featured Banner */}
      <div
        onClick={() => handleProtectedClick(featuredPost.id)}
        onMouseEnter={() => setIsBannerPaused(true)}
        onMouseLeave={() => setIsBannerPaused(false)}
        className="relative max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
      >
        {/* YouTube Thumbnail */}
        <img
          src={getThumbnailUrl(featuredPost.video)}
          onError={handleThumbError}
          alt={featuredPost.title}
          className="w-full h-[220px] sm:h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-10 right-4 text-white">
          <span className="bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow">
            {featuredPost.category}
          </span>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mt-2 leading-snug drop-shadow-md">
            {featuredPost.title}
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 sm:line-clamp-3 drop-shadow">
            {featuredPost.excerpt}
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 md:gap-10">
        {BlogData.slice(0, visiblePosts).map((post) => {
          const thumbnail = getThumbnailUrl(post.video);

          return (
            <div
              key={post.id}
              onClick={() => handleProtectedClick(post.id)}
              className="group bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <img
                  src={thumbnail}
                  onError={handleThumbError}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 md:h-52 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm">{post.excerpt}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visiblePosts < BlogData.length && (
        <div className="text-center mt-14">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-md hover:scale-105 transition"
          >
            Load More Articles
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
