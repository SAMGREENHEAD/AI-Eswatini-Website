import { useRef } from "react";
import ai1 from "../assets/chat.jpg"; // pick your preferred hero image

export default function Hero() {
  const wrapRef = useRef(null);

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", String((x - 0.5) * 2));
    el.style.setProperty("--ry", String((y - 0.5) * 2));
  };

  const handleLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0");
    el.style.setProperty("--ry", "0");
  };

  return (
    <section className="font-roboto w-full bg-gray-900 text-gray-100 rounded-2xl min-h-screen">
      {/* Animations */}
      <style>{`
        @keyframes swazi { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ "--rx": 0, "--ry": 0 }}
        className="  px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left (Text) */}
          <div
            className="text-center lg:text-left lg:max-w-2xl transition-transform duration-300 ease-out reduce-motion align-items-center"
            style={{
              transform: `translate3d(calc(var(--rx) * 6px), calc(var(--ry) * 6px), 0)
                          rotateX(calc(var(--ry) * -4deg)) rotateY(calc(var(--rx) * 4deg))`,
            }}
          >
            <h1 className="font-bold leading-tight text-4xl sm:text-5xl xl:text-6xl">
              <span className="!font-lobster italic font-bold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                               bg-clip-text text-transparent [background-size:300%_100%]
                               animate-[swazi_8s_linear_infinite] reduce-motion mx-">
                AI Eswatini
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-prose mx-auto lg:mx-0">
              Driving inclusive and responsible Artificial Intelligence in Eswatini through{" "}
              <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                    bg-clip-text text-transparent [background-size:300%_100%]
                    animate-[swazi_12s_linear_infinite] reduce-motion">research</span>,{" "}
              <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                    bg-clip-text text-transparent [background-size:300%_100%]
                    animate-[swazi_12s_linear_infinite] reduce-motion">education</span>,{" "}
              <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                    bg-clip-text text-transparent [background-size:300%_100%]
                    animate-[swazi_12s_linear_infinite] reduce-motion">innovation</span>, and{" "}
              <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                    bg-clip-text text-transparent [background-size:300%_100%]
                    animate-[swazi_12s_linear_infinite] reduce-motion">policy advocacy</span>.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
              <a
                href="#about"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold
                           rounded bg-red-600 text-white hover:bg-red-700 transition"
              >
                Get Started
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold
                           border rounded border-gray-300 text-gray-100 hover:bg-yellow-200 hover:text-gray-900 transition"
              >
                Explore Projects
              </a>
            </div>
          </div>

          {/* Right (Static Image) */}
          <div
            className="p-2 sm:p-6 mt-4 lg:mt-0 flex items-center justify-center transition-transform duration-300 ease-out reduce-motion"
            style={{
              transform: `translate3d(calc(var(--rx) * -8px), calc(var(--ry) * -8px), 0)
                          rotateX(calc(var(--ry) * 3deg)) rotateY(calc(var(--rx) * -3deg))`,
              animation: "floaty 6s ease-in-out infinite",
            }}
          >
            <img
              src={ai1}
              alt="AI Eswatini illustration"
              loading="lazy"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-xl h-auto
                         rounded-xl shadow-lg ring-1 ring-black/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
