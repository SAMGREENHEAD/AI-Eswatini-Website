import { useState, useEffect } from 'react';
import logo from '../assets/image.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optional: Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact us ', href: '#footer' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-sans">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2">
          <img src={logo} alt="AI Eswatini Logo" className="w-24 h-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium text-gray-800">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="hover:text-blue-700 transition">
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4">
          <a href="#blog" className="px-5 py-2 bg-white text-blue-800 border border-blue-700 rounded hover:bg-blue-100 transition">Blog</a>
          <a href="#join" className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">Join</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col space-y-2 mt-4 text-sm font-medium text-gray-800">
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} className="hover:text-blue-700 transition">
                {label}
              </a>
            ))}
            <a href="#blog" className="pt-4 border-t border-gray-100 text-blue-700">Blog</a>
            <a href="#join" className="text-yellow-600 font-bold">Join</a>
          </nav>
        </div>
      )}
    </header>
  );
}
