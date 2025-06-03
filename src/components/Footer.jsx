import { useState } from "react";
import logo from '../assets/image.png';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer id='footer' className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">

        {/* Newsletter Section */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Stay Informed</h3>
          <p className="text-gray-600 mb-4">Get updates on our events, programs, and AI projects in Eswatini.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo + Mission */}
          <div className="lg:w-1/3 space-y-4">
            <a href="/" aria-label="Back to homepage" className="flex items-center space-x-2">
              <img src={logo} alt="AI Eswatini Logo" className="w-28 h-auto" />
            </a>
            <p className="text-sm text-gray-600">
              AI Eswatini is a community of innovators, researchers, and changemakers advancing responsible Artificial Intelligence in Eswatini through open collaboration, research, education, and policy engagement.
            </p>
          </div>

          {/* Link Groups */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm lg:w-2/3">
            <div>
              <h3 className="font-semibold text-blue-900 uppercase mb-2">Programs</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-red-600 transition">Student Chapters</a></li>
                <li><a href="#" className="hover:text-red-600 transition">AI for Schools</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Research Labs</a></li>
                <li><a href="#" className="hover:text-red-600 transition">AI Fellowships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 uppercase mb-2">Resources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-red-600 transition">Open Datasets</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Workshops & Webinars</a></li>
                <li><a href="#" className="hover:text-red-600 transition">GitHub Projects</a></li>
                <li><a href="#" className="hover:text-red-600 transition">AI Ethics Toolkit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 uppercase mb-2">Community</h3>
              <ul className="space-y-1">
                <li>
                  <button onClick={() => setShowModal(true)} className="hover:text-red-600 transition">
                    Become a Member
                  </button>
                </li>
                <li><a href="#" className="hover:text-red-600 transition">Volunteer</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Contribute</a></li>
                <li><a href="#" className="hover:text-red-600 transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 uppercase mb-2">Connect</h3>
              <div className="flex space-x-4 mb-2">
                <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-700 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-400 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-800 transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="GitHub" className="text-gray-600 hover:text-black transition">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p className="text-xs text-gray-500">
                info@aieswatini.org<br />
                Mbabane, Eswatini
              </p>
            </div>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="text-center text-sm mt-10">
          <span className="text-gray-600">Language: </span>
          <button className="text-blue-700 font-medium hover:underline">English</button> | 
          <button className="text-blue-700 font-medium hover:underline">SiSwati</button>
        </div>

        {/* Copyright */}
        <div className="py-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} AI Eswatini. Empowering Africa through Responsible AI.
        </div>
      </div>

      {/* Join Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full space-y-4 shadow-xl">
            <h2 className="text-2xl font-bold text-blue-900">Join AI Eswatini</h2>
            <p className="text-sm text-gray-600">
              Be part of a growing community advancing AI for social good.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <button className="w-full px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">
                Join Now
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-red-500 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
