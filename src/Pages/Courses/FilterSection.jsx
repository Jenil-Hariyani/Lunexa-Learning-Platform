import React from "react";
import { motion } from "framer-motion";

const FilterSection = ({
  search,
  setSearch,
  category,
  setCategory,
  categories = [],
  onSearchClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-[#f4f6fb] py-4 md:py-6"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-20">
        {/* Top row: input + button + dropdown */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Input + Search button row */}
          <div className="flex w-full md:flex-1 gap-4">
            {/* Search input */}
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-[700px] outline-none text-gray-600 text-lg"
              />
            </div>

            {/* Search button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="w-24 md:w-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md"
              onClick={onSearchClick}
            >
              Search
            </motion.button>
          </div>

          {/* Dropdown below input/button on mobile, right side on desktop */}
          <div className="w-40 md:w-40 mt-2 md:mt-0">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-600 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="All">All Categories</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-2 border-t border-gray-200"></div>
      </div>
    </motion.div>
  );
};

export default FilterSection;
