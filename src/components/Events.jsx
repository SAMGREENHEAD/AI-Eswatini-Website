import ai1 from "../assets/ai1.jpg";
import chat from "../assets/chat.jpg";
import prime from "../assets/prime.jpg";
import key from "../assets/key.jpg";

export default function Events() {
  const events = [
    {
      tag: "UNESWA",
      title: "AI in Digital Transformation",
      date: "June 1, 2024",
      views: "2.1K views",
      img: ai1,
    },
    {
      tag: "Manzini",
      title: "AI Applications",
      date: "August 8, 2025",
      views: "8 views",
      img: chat,
    },
    {
      tag: "Hackathon",
      title: "Want to promote AI sustainability? This is for you",
      date: "August 20, 2025",
      views: "3K views",
      img: prime,
    },
    {
      tag: "Convenire",
      title: "Indaba X Eswatini",
      date: "September 8, 2025",
      views: "2 views",
      img: key,
    },
  ];

  return (
    <section id='events'className="py-20 bg-white text-gray-800">
      <div className="container px-6 mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-bold text-blue-900">Current Events</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Join our mission to grow AI across Eswatini — one event at a time.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, idx) => (
            <article
              key={idx}
              className="bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              <img
                alt={event.title}
                className="object-cover w-full h-52 rounded-t-lg"
                src={event.img}
              />
              <div className="flex flex-col flex-1 p-5">
                <span className="text-xs font-semibold tracking-wide uppercase text-red-600">
                  {event.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-blue-900">
                  {event.title}
                </h3>
                <div className="flex justify-between mt-auto pt-4 text-xs text-gray-600">
                  <span>{event.date}</span>
                  <span>{event.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
