import { useRef } from "react";
import ai1 from "../assets/chat.jpg"; // hero image

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
    <section
      className="
        font-roboto
        w-screen max-w-none ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
        bg-gray-900 text-gray-100 rounded-2xl relative
      "
    >
      {/* Animations */}
      <style>{`
        @keyframes swazi { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* MAIN HERO */}
      <div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ "--rx": 0, "--ry": 0 }}
        className="pt-20 pb-28 min-h-[85vh] flex items-center py-16 lg:py-20"
      >
        <div
          className="
            w-full mx-auto px-4 sm:px-6 lg:px-8
            max-w-[1280px] xl:max-w-[1400px]
            grid grid-cols-1 lg:grid-cols-2 items-center gap-3 sm:gap-4 lg:gap-5
          "
        >
          {/* Left: Text */}
          <div
            className="
              lg:max-w-xl text-center lg:text-left px-11
              transition-transform duration-300 ease-out reduce-motion
            "
            style={{
              transform: `translate3d(calc(var(--rx) * 6px), calc(var(--ry) * 6px), 0)
                          rotateX(calc(var(--ry) * -4deg)) rotateY(calc(var(--rx) * 4deg))`,
            }}
          >
            <h1
              className="
                font-bold leading-tight tracking-tight
                text-[clamp(2.25rem,4.5vw,4rem)]
              "
            >
              <span
                className="
                  !font-lobster italic font-bold px-10 text-center
                  bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                  bg-clip-text text-transparent [background-size:300%_100%]
                  animate-[swazi_8s_linear_infinite] reduce-motion
                "
              >
                AI Eswatini
              </span>
            </h1>

            <p className="text-center mt-5 text-lg text-gray-300 leading-relaxed max-w-[60ch] mx-auto lg:mx-0">
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

            <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center justify-center lg:justify-start">
              <a
                href="#about"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold
                           rounded bg-red-600 text-white hover:bg-red-700 transition"
              >
                Get Started
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 text-base sm:text-lg font-semibold
                           border rounded border-gray-300 text-gray-100 hover:bg-yellow-200 hover:text-gray-900 transition"
              >
                Explore Projects
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="
              mt-6 lg:mt-0 flex items-center justify-center lg:justify-start lg:-ml-4 xl:-ml-6
              transition-transform duration-300 ease-out reduce-motion py-25
            "
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
              className="
                w-full
                max-w-[560px] sm:max-w-[620px] lg:max-w-[680px] 2xl:max-w-[760px]
                max-h-[320px] sm:max-h-[420px] lg:max-h-[520px]
                object-contain rounded-2xl shadow-2xl ring-1 ring-black/5
              "
            />
          </div>
        </div>
      </div>

      {/* --- CENTERED TAGLINE, RAISED FROM BOTTOM --- */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2
          bottom-10 sm:bottom-12 lg:bottom-16
          z-40 pointer-events-none
          px-4
        "
      >
        <p
          className="
            text-center text-sm sm:text-base lg:text-lg font-semibold tracking-wide
            text-yellow-300
            supports-[background-clip:text]:bg-[linear-gradient(90deg,#FFD900,#D21034,#3E5EB9)]
            supports-[background-clip:text]:bg-clip-text supports-[background-clip:text]:text-transparent
            [background-size:300%_100%] animate-[swazi_10s_linear_infinite] reduce-motion
            max-w-[95vw] sm:max-w-[80vw] lg:max-w-[60vw]
          "
        >
          To become Eswatini’s leading catalyst for research, development, and responsible adoption of Artificial Intelligence.
        </p>
      </div>
    </section>
  );
}
