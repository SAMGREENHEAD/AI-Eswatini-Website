import { useEffect, useRef, useState } from "react";
import logo from "../assets/AI-Eswatini-Logo-NoBG.png";


export default function Header() {
  // Controls the mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Refs for click-outside handling
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Primary navigation links
  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Projects", href: "#projects" },
    { label: "Contact us", href: "#footer" },
  ];

  // Close menu when resizing up to desktop (>= 1024px, Tailwind's lg)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close the mobile menu with ESC key for keyboard + SR users
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when clicking outside the menu/button
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!isOpen) return;
      const target = e.target;
      if (
        menuRef.current && !menuRef.current.contains(target) &&
        buttonRef.current && !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  // Utility to close the menu after navigating
  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      /*
       * Visual shell: sticky, slightly translucent gradient with blur, and subtle shadow
       * - supports-[backdrop-filter]: guards blur on browsers that support it
       */
      className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-blue-300 to-blue-950 backdrop-blur supports-[backdrop-filter]:bg-blue-950/80 border-b-10 border-yellow-400 shadow-md"
    >
      {/* Skip link helps keyboard users jump past the nav quickly */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-black shadow"
      >
        Skip to content
      </a>

      {/* Content container: set your site max width here */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row: h-16 keeps the bar compact but readable */}
        <div className="flex h-16 items-center justify-between">
          {/* Brand / Logo */}
          <a href="#hero" className="flex items-center gap-3" aria-label="AI Eswatini — Home">
            {/*
             * Logo sizing: increase h-12 → h-14 if you want a taller header feel
             * object-contain prevents distortion and keeps aspect ratio
             */}
            <img src={logo} alt="AI Eswatini logo" className="w-35 h-35 md:w-35 md:h-35 object-contain select-none" draggable={false} />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-white/90">
              {navLinks.map(({ label, href }) => (
                <li key={href} className="group">
                  <a
                    href={href}
                    /*
                     * Focus styles are critical for accessibility
                     * Bottom underline grows on hover for a subtle cue
                     */
                    className="relative inline-flex items-center gap-2 rounded-md px-1 py-2 transition hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
                  >
                    {label}
                    <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Calls-to-Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#blog"
              /* Slightly filled blog button to balance the Join CTA visually */
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
            >
              Blog
            </a>
            <a
              href="#join"
              /* Primary CTA uses brand accent (yellow); adjust to your palette */
              className="rounded-xl bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow transition hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
            >
              Join
            </a>
          </div>

          {/* Mobile menu toggle (hamburger / close) */}
          <div className="lg:hidden">
            <button
              ref={buttonRef}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              {/* Icon swaps between hamburger and X */}
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {isOpen ? (
                  // Close icon
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  // Hamburger icon
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        /*
         * Animated height + opacity for a smooth reveal
         * origin-top helps the transform feel natural when used
         */
        className={`lg:hidden origin-top overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-1 py-3 text-base font-medium text-white/90">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
                >
                  {label}
                </a>
              </li>
            ))}
            {/* Divider then CTAs */}
            <li className="mt-2 border-t border-white/10 pt-2">
              <a
                href="#blog"
                onClick={handleNavClick}
                className="block rounded-lg px-3 py-2 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#join"
                onClick={handleNavClick}
                className="block rounded-lg px-3 py-2 font-semibold text-yellow-300 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
              >
                Join
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
