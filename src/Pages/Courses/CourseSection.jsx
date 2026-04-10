import React, { useState } from "react";
import FilterSection from "./FilterSection";
import AllCourses from "./AllCourses";
import { CourseCardData } from "../Home/CoursesCardData";

function CourseSection() {
  const [search, setSearch] = useState(""); // State used for filtering on button click
  const [tempSearch, setTempSearch] = useState(""); // State tracking typing input
  const [category, setCategory] = useState("All");

  const categories = [...new Set(CourseCardData.map((c) => c.category))];

  // Button click handler applies the filter
  const handleSearchClick = () => {
    console.log("Button clicked! tempSearch:", tempSearch);
    if (tempSearch.trim() === "") {
      setSearch("");
      console.log("Search cleared to show all courses");
    } else {
      setSearch(tempSearch);
      console.log("Search set to:", tempSearch);
    }
  };

  // If input is empty, show all courses regardless of button click
  const effectiveSearch = tempSearch.trim() === "" ? "" : search;

  return (
    <>
      <FilterSection
        search={tempSearch} // typing state
        setSearch={setTempSearch} // update typing state
        category={category}
        setCategory={setCategory}
        categories={categories}
        onSearchClick={handleSearchClick} // pass button click handler
      />

      <AllCourses
        search={effectiveSearch} // filtering uses effectiveSearch
        category={category}
      />
    </>
  );
}

export default CourseSection;
