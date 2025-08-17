import { useRef, useState, useEffect } from "react";
import ai1 from "../assets/chat.jpg";
import ai2 from "../assets/ai1.jpg";
import ai3 from "../assets/prime.jpg";

export default function Hero() {
  const wrapRef = useRef(null);

  // slideshow state
  const images = [ai1, ai2, ai3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // change image every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rx = (x - 0.5) * 2;
    const ry = (y - 0.5) * 2;

    el.style.setProperty("--rx", String(rx));
    el.style.setProperty("--ry", String(ry));
  };

  const handleLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0");
    el.style.setProperty("--ry", "0");
  };

  return (
    <section
      className="!font-roboto relative w-screen max-w-none
                 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
                 dark:bg-gray-100 dark:text-gray-800"
    >
      {/* Animations */}
      <style>{`
        @keyframes swazi {
          0%   { background-position:   0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes floaty {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-6px); }
        }
      `}</style>

      <div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group mx-auto max-w-7xl px-6 sm:py-12 lg:py-24
                   flex flex-col lg:flex-row justify-between"
        style={{ "--rx": 0, "--ry": 0 }}
      >
        {/* Left (Text) */}
        <div
          className="flex flex-col justify-center p-6 text-center lg:text-left lg:max-w-xl
                     transition-transform duration-300 ease-out
                     group-hover:scale-[1.03]"
          style={{
            transform: `translate3d(calc(var(--rx) * 6px), calc(var(--ry) * 6px), 0)
               rotateX(calc(var(--ry) * -4deg))
               rotateY(calc(var(--rx) * 4deg))`,
          }}
        >
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            <span
              className="!font-lobster italic font-bold
                bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                bg-clip-text text-transparent
                [background-size:300%_100%]
                animate-[swazi_8s_linear_infinite]"
            >
              Welcome
            </span>{" "}
            to{" "}
            <span
              className="font-lobster italic font-bold
                bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                bg-clip-text text-transparent
                [background-size:300%_100%]
                animate-[swazi_8s_linear_infinite]"
            >
              AI Eswatini
            </span>
          </h1>

          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Driving inclusive and responsible Artificial Intelligence in Eswatini
            through{" "}
            <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                bg-clip-text text-transparent
                [background-size:300%_100%]
                animate-[swazi_12s_linear_infinite]">
              research
            </span>
            ,{" "}
            <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                bg-clip-text text-transparent
                [background-size:300%_100%]
                animate-[swazi_12s_linear_infinite]">
              education
            </span>
            ,{" "}
            <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                bg-clip-text text-transparent
                [background-size:300%_100%]
                animate-[swazi_12s_linear_infinite]">
              innovation
            </span>
            , and{" "}
            <span className="font-semibold bg-[linear-gradient(90deg,#3E5EB9,#FFD900,#D21034,#FFD900,#3E5EB9)]
                bg-clip-text text-transparent
                [background-size:300%_100%]
                animate-[swazi_12s_linear_infinite]">
              policy advocacy
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
            <a
              href="#about"
              className="px-8 py-3 text-lg font-semibold rounded bg-red-600 text-gray-50 hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#projects"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-800 hover:bg-yellow-200 transition"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* Right (Image slideshow) */}
        <div
          className="flex items-center justify-center p-6 mt-8 lg:mt-0
                     transition-transform duration-300 ease-out
                     group-hover:scale-[1.04] relative"
          style={{
            transform: `translate3d(calc(var(--rx) * -8px), calc(var(--ry) * -8px), 0)
               rotateX(calc(var(--ry) * 3deg))
               rotateY(calc(var(--rx) * -3deg))`,
            animation: "floaty 6s ease-in-out infinite",
          }}
        >
          <img
            key={currentIndex}
            src={images[currentIndex]}
            alt="AI Eswatini illustration"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]
                       will-change-transform transition-opacity duration-1000"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
