// About.jsx
export default function About() {
  const coreValues = [
    "Openness",
    "Collaboration",
    "Innovation",
    "Ethics & Responsibility",
    "Inclusion & Diversity",
    "Impact",
  ];

  return (
    <section id="about" className="relative py-20 bg-blue-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-">
        {/* Floating glass panel */}
        <div
          className="
            relative rounded-3xl
            bg-blue-950/15
            backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md
            border border-t-blue-900/10 ring-1 ring-inset ring-red-950
            shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]
            px-6 md:px-12 lg:px-16 py-12 text-white
          "
        >
          {/* Soft glow to sell the 'floating' effect */}
          <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-blue-950/5 blur-2xl" />

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-extrabold text-yellow-300 drop-shadow mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-white/85">
              We are grounded by principles that shape how we grow AI in Eswatini —
              with integrity, collaboration, and meaningful impact.
            </p>
          </div>

          {/* Values */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, idx) => (
              <li
                key={idx}
                className="
                  flex items-center gap-4 p-5
                  rounded-xl
                  bg-white/5 hover:bg-white/10
                  backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm
                  border border-white/10
                  shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)]
                  transition-transform duration-200 hover:-translate-y-0.5
                "
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5 text-red-600"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
