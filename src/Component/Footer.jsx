import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">Lunexa</h1>
          <p className="mt-4 text-gray-400">
            Master coding and become job-ready with our guided learning paths
            and real-world projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-blue-500 transition">
                Courses
              </a>
            </li>

            <li>
              <a href="#blog" className="hover:text-blue-500 transition">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#/my-learning"
                className="hover:text-blue-500 transition"
              >
                MyLearning
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/jenil-hariyani-3b7a03371/"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Jenil-Hariyani"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/jenil_hariyani_/?next=&hl=en"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get latest updates and courses.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-3 items-start sm:items-stretch"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-[80%] sm:w-full px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-800 text-gray-200"
            />

            <button
              type="submit"
              className="w-[50%] sm:w-full py-3 bg-blue-600 rounded-full text-white font-semibold hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm space-y-2">
        <p>© {new Date().getFullYear()} Lunexa. All rights reserved.</p>

        <p className="text-xs text-gray-400 max-w-2xl mx-auto">
          This project is for educational purposes. All videos are embedded from
          YouTube and belong to their respective creators.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
