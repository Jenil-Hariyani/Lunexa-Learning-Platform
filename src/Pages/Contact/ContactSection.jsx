import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#f4f6fb] py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-blue-600 tracking-[3px] text-sm font-semibold uppercase">
          Contact
        </p>
        <h2 className="text-[32px] md:text-[38px] font-bold text-gray-900 mt-2">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 mt-3">
          Have a question or want to work together? Fill out the form or reach
          us directly.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">Rajkot , Gujrat</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">contact@Lunexa.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+91 99041 43421</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Send Message
          </motion.button>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-green-600 font-semibold text-center mt-2"
            >
              Your message has been sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
