import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  //HOOKS
  const { user, isSignedIn } = useUser();
  const clerk = useClerk();
  const location = useLocation();

  // STATE
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Logout Function
  const handleLogout = () => {
    clerk.signOut();
    setIsOpen(false);
  };

  // Open SignIn Modal with styling
  const openStyledSignIn = () => {
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
          avatarBox: "w-16 h-16",
        },
      },
    });
  };

  // Handle Side Effect
  // Active Section Change
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    setActiveSection(path);
  }, [location]);

  // If Open Menu So block scrolling
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
          >
            Lunexa
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <NavLink to="/" activeSection={activeSection}>
              Home
            </NavLink>
            <NavLink to="/courses" activeSection={activeSection}>
              Courses
            </NavLink>
            <NavLink to="/blog" activeSection={activeSection}>
              Blog
            </NavLink>
            <NavLink to="/my-learning" activeSection={activeSection}>
              My Learning
            </NavLink>
            <NavLink to="/contact" activeSection={activeSection}>
              Contact
            </NavLink>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-6">
            <SignedOut>
              <button
                onClick={openStyledSignIn}
                className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Sign In
              </button>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-4">
                <UserButton afterSignOut={handleLogout} />
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-5 py-2 rounded-full"
                >
                  Logout
                </button>
              </div>
            </SignedIn>
          </div>

          {/* ====== Mobile Sidebar ====== */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 ${isOpen ? "visible" : "invisible"}`}>
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-white/90 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="p-5 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
              Lunexa
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X />
            </button>
          </div>

          <div className="p-3 border-b bg-gray-50 ">
            <div className="flex items-center justify-between w-full gap-3">
              {/* LEFT SIDE */}
              <div className="flex items-center space-x-3">
                {/* Avatar */}
                <img
                  src={
                    isSignedIn
                      ? user?.imageUrl
                      : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="avatar"
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />

                {/* Text */}
                <div>
                  <p className="font-semibold text-gray-800">
                    {isSignedIn ? user?.firstName : "Hello, Guest"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isSignedIn ? "Premium Member" : "Free User"}
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE BUTTON */}
              {isSignedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-3 rounded-xl text-sm shadow"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    openStyledSignIn();
                    setIsOpen(false);
                  }}
                  className="bg-blue-500 text-white px-4 py-3 rounded-xl text-sm shadow whitespace-nowrap min-w-[80px] text-center"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col p-4 space-y-3">
            <MobileLink
              to="/"
              activeSection={activeSection}
              setIsOpen={setIsOpen}
            >
              Home
            </MobileLink>
            <MobileLink
              to="/courses"
              activeSection={activeSection}
              setIsOpen={setIsOpen}
            >
              Courses
            </MobileLink>
            <MobileLink
              to="/blog"
              activeSection={activeSection}
              setIsOpen={setIsOpen}
            >
              Blog
            </MobileLink>
            <MobileLink
              to="/my-learning"
              activeSection={activeSection}
              setIsOpen={setIsOpen}
            >
              My Learning
            </MobileLink>
            <MobileLink
              to="/contact"
              activeSection={activeSection}
              setIsOpen={setIsOpen}
            >
              Contact
            </MobileLink>
          </div>
        </div>
      </div>
    </>
  );
};

// NavLink
// Desktop NavLink
const NavLink = ({ to, children, activeSection }) => {
  const sectionName = to.replace("/", "") || "home";
  const isActive = activeSection === sectionName;

  return (
    <Link
      to={to}
      className={`relative group ${
        isActive ? "text-indigo-600" : "text-gray-700"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 transition-all ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

// MobileLink
const MobileLink = ({ to, children, activeSection, setIsOpen }) => {
  const sectionName = to.replace("/", "") || "home";
  const isActive = activeSection === sectionName;

  return (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className={`block text-lg font-semibold transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-indigo-400 to-blue-400 text-white px-4 py-3 rounded-xl shadow-md scale-[1.02]"
          : "text-gray-800 px-4 py-3 rounded-xl hover:bg-gray-100 hover:translate-x-1"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
