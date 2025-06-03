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
    <section id='about' className="px-4 py-20 mx-auto max-w-screen-xl md:px-24 lg:px-8 bg-white text-gray-800">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
        <p className="text-lg text-gray-600">
          We are grounded by principles that shape how we grow AI in Eswatini — with integrity, collaboration, and meaningful impact.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {coreValues.map((value, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 bg-gray-50 p-5 rounded-xl shadow-sm transition hover:shadow-lg hover:scale-105 duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-300 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5 text-red-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-800">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
