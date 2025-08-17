import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import robert from "../assets/Robert.jpg";
import khanyi from "../assets/Khanyi.png";
import malaza from "../assets/Malaza.jpg";
import sam from "../assets/Sam.jpg";

export default function Team() {
  const members = [
    {
      name: "Robert Selemani",
      role: " ",
      img: robert,
      desc:
        "Passionate about building scalable systems and driving innovation in technology.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Samkelo Msibi",
      role: " ",
      img: sam,
      desc:
        "Passionate about AI4D, information security, and development of secure compliant systems.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Bandile Malaza",
      role: " ",
      img: malaza,
      desc:
        "Passionate about innovative system development and innovative solutions.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Khanyisile Magagula",
      role: " ",
      img: khanyi,
      desc:
        "Passionate in AI research and sustainability, ensuring long-term stability and growth.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="bg-gray-700 dark:bg-gray-900 py-12 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {members.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center text-center bg-blue-800 dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="w-36 h-36 rounded-full object-cover border-4 border-yellow-400 shadow-sm mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-50 dark:text-gray-100">
                {m.name}
              </h3>
              <span className="text-sm text-gray-50 dark:text-gray-400 mb-3">
                {m.role}
              </span>
              <p className="text-gray-50 dark:text-gray-300 text-sm leading-relaxed max-w-xs mb-4">
                {m.desc}
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {m.socials.linkedin && (
                  <a
                    href={m.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-sky-900"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {m.socials.twitter && (
                  <a
                    href={m.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:text-sky-900"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {m.socials.github && (
                  <a
                    href={m.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-50 dark:text-gray-300 hover:text-black"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
