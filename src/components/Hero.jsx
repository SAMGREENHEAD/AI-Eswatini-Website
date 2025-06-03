import ai from '../assets/ai.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white text-gray-900 font-[Inter] overflow-hidden min-h-screen pt-32">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-yellow-300 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-red-400 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left: Text */}
        <div className="max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-blue-900 animate-slide-in-down">
            Welcome to <span className="text-red-600">AI Eswatini</span>
          </h1>
          <p className="text-lg text-gray-700 animate-fade-in delay-150">
            Driving inclusive and responsible Artificial Intelligence in Eswatini through research, education, innovation, and policy advocacy.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4 animate-fade-in delay-300">
            <a href="#about" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition duration-300">
              Get Started
            </a>
            <a href="#projects" className="px-6 py-3 border border-blue-700 text-blue-700 rounded hover:bg-blue-700 hover:text-white transition duration-300">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full max-w-md animate-slide-in-up delay-200 flex justify-center lg:justify-end">
          <img
            src={ai}
            alt="AI circuit brain"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
