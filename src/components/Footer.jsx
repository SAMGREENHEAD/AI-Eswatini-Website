import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/AI-Eswatini-Logo-NoBG.png";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  // Simple email regex for client-side validation
  const isValidEmail = (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    if (!isValidEmail(email)) {
      setMsg({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    try {
      setSubmitting(true);
      // TODO: Replace with your endpoint (Mailchimp/Formspree/Firebase).
      // Example Formspree demo (replace XYZ with your form id):
      // await fetch("https://formspree.io/f/XYZ", { method: "POST", body: new FormData(e.target) });

      // Simulate async
      await new Promise((r) => setTimeout(r, 900));

      setMsg({ type: "success", text: "Thanks! You're subscribed." });
      setEmail("");
    } catch (err) {
      setMsg({
        type: "error",
        text:
          "Something went wrong while subscribing. Please try again shortly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative w-screen max-w-none ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]  text-gray-50 dark:bg-gray-900 dark:text-gray-100"
      aria-labelledby="site-footer-heading"
    >
      {/* Full-bleed yellow line */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-2 bg-yellow-500" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <h2 id="site-footer-heading" className="sr-only">
          Site footer
        </h2>

        {/* Newsletter */}
        <section
          aria-labelledby="newsletter-heading"
          className="bg-blue-900 rounded-lg shadow-md mb-12 max-w-3xl mx-auto text-center p-6"
        >
          <h3
            id="newsletter-heading"
            className="text-2xl font-bold text-yellow-300 mb-2"
          >
            Stay Informed
          </h3>
          <p className="text-blue-100 mb-4">
            Get updates on our events, programs, and AI projects in Eswatini.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row justify-center gap-3"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded border border-blue-300/60 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-80"
              aria-invalid={msg.type === "error" ? "true" : "false"}
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-60 transition"
            >
              {submitting ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          <div
            className={`mt-3 text-sm min-h-[1.5rem] ${
              msg.type === "success"
                ? "text-green-200"
                : msg.type === "error"
                ? "text-red-200"
                : "text-transparent"
            }`}
            role="status"
            aria-live="polite"
          >
            {msg.text || "."}
          </div>
        </section>

        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo + Mission */}
          <div className="lg:w-1/3 space-y-4">
            <a
              href="/"
              aria-label="Back to homepage"
              className="flex items-center space-x-3"
            >
              <img
                src={logo}
                alt="AI Eswatini logo"
                className="w-40 h-40 md:w-48 md:h-48 object-contain"
              />
              <span className="sr-only">AI Eswatini</span>
            </a>
            <p className="text-sm font-aptos">
              AI Eswatini is a community of innovators, researchers, and
              changemakers advancing responsible Artificial Intelligence in
              Eswatini through collaboration, research, education, and policy
              engagement.
            </p>

            {/* Socials */}
            <div className="mt-4" aria-label="Social media">
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://facebook.com/aieswatini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-700 hover:scale-110 hover:text-blue-600 shadow-sm transition"
                    aria-label="Facebook"
                  >
                    <FaFacebookF aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/aieswatini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-700 hover:scale-110 hover:text-sky-500 shadow-sm transition"
                    aria-label="Twitter"
                  >
                    <FaTwitter aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/ai-eswatini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-700 hover:scale-110 hover:text-blue-700 shadow-sm transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ai-eswatini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-700 hover:scale-110 hover:text-black shadow-sm transition"
                    aria-label="GitHub"
                  >
                    <FaGithub aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Link Groups */}
          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm lg:w-2/3">
            <div>
              <h3 className="font-semibold text-yellow-600 uppercase mb-2">
                Programs
              </h3>
              <ul className="space-y-1">
                <li><a href="/programs/chapters" className="hover:text-red-500 focus:underline">Student Chapters</a></li>
                <li><a href="/programs/ai-for-schools" className="hover:text-red-500 focus:underline">AI for Schools</a></li>
                <li><a href="/programs/research-labs" className="hover:text-red-500 focus:underline">Research Labs</a></li>
                <li><a href="/programs/fellowships" className="hover:text-red-500 focus:underline">AI Fellowships</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600 uppercase mb-2">
                Resources
              </h3>
              <ul className="space-y-1">
                <li><a href="/resources/datasets" className="hover:text-red-500 focus:underline">Open Datasets</a></li>
                <li><a href="/resources/workshops" className="hover:text-red-500 focus:underline">Workshops & Webinars</a></li>
                <li><a href="https://github.com/ai-eswatini" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 focus:underline">GitHub Projects</a></li>
                <li><a href="/resources/ethics" className="hover:text-red-500 focus:underline">AI Ethics Toolkit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600 uppercase mb-2">
                Community
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setShowModal(true)}
                    className="hover:text-red-500 focus:underline"
                  >
                    Become a Member
                  </button>
                </li>
                <li><a href="/community/volunteer" className="hover:text-red-500 focus:underline">Volunteer</a></li>
                <li><a href="/community/contribute" className="hover:text-red-500 focus:underline">Contribute</a></li>
                <li><a href="/events" className="hover:text-red-500 focus:underline">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-600 uppercase mb-2">
                Connect
              </h3>
              <address className="not-italic text-xs text-gray-700 dark:text-gray-300">
                <a href="mailto:info@aieswatini.org" className="hover:underline">
                  info@aieswatini.org
                </a>
                <br />
                Mbabane, Eswatini
              </address>
              <div className="mt-3 space-x-3 text-xs text-gray-600 dark:text-gray-400">
                <a href="/privacy" className="hover:text-red-500 focus:underline">Privacy</a>
                <span aria-hidden="true">•</span>
                <a href="/terms" className="hover:text-red-500 focus:underline">Terms</a>
                <span aria-hidden="true">•</span>
                <a href="/cookies" className="hover:text-red-500 focus:underline">Cookies</a>
              </div>
            </div>
          </nav>
        </div>

        {/* Back to top */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-black font-medium shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            aria-label="Back to top"
          >
            <FaArrowUp aria-hidden="true" /> Back to Top
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-sm text-center font-medium text-gray-700 dark:text-gray-300">
          © {year} AI Eswatini. Empowering Africa through Responsible AI.
        </div>
      </div>

      {/* Join Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-heading"
        >
          <div className="bg-white text-gray-900 p-6 rounded-lg max-w-md w-full space-y-4 shadow-xl">
            <h2 id="join-heading" className="text-2xl font-bold text-blue-900">
              Join AI Eswatini
            </h2>
            <p className="text-sm text-gray-600">
              Be part of a growing community advancing AI for social good.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <label className="block">
                <span className="sr-only">Full name</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </label>
              <label className="block">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </label>
              <button className="w-full px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Join Now
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-red-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
