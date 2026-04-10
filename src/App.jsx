import Home from "./Pages/Home/Home";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SingleCoursesCard from "./Pages/Home/SingleCoursesCard";
import CourseSection from "./Pages/Courses/CourseSection";
import Blog from "./Pages/Blog/Blog";
import ContactSection from "./Pages/Contact/ContactSection";
import ShowSavedCourses from "./Pages/My Learning/ShowSavedCourses";
import SingleBlogPage from "./Pages/Blog/SingleBlogPage";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseSection />} />
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute>
              <SingleBlogPage />
            </ProtectedRoute>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <SingleCoursesCard />
            </ProtectedRoute>
          }
        />
        <Route path="/my-learning" element={<ShowSavedCourses />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
