import { useState } from "react";
import { SiReact, SiNodedotjs, SiExpress, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Medilo – Medical Platform",
    shortDesc:
      "Full-stack medical appointment system with authentication & dashboards.",
    fullDesc:
      "Medilo is a full-stack medical platform that supports role-based access (Admin, Doctor, Patient), appointment booking, blog system, profile management and dashboard features.",
    cover: "/projects/medilo.jpg",
    images: [
      "/projects/medilo1.jpg",
      "/projects/medilo7.jpg",
      "/projects/medilo2.jpg",
      "/projects/medilo3.jpg",
      "/projects/medilo4.jpg",
      "/projects/medilo5.jpg",
      "/projects/medilo6.jpg",
      "/projects/admin.jpg",
    ],
    tech: [SiReact, SiNodedotjs, SiExpress],
  },
  {
    title: "Tasty Bite – Food E-commerce",
    shortDesc: "Modern food ordering application with cart & filtering system.",
    fullDesc:
      "Food e-commerce application featuring dynamic menu, filtering categories, cart management and responsive design.",
    cover: "/projects/tastybite.jpg",
    images: [
      "/projects/tastybite.jpg",
      "/projects/tastybite2.jpg",
      "/projects/tastybite3.jpg",
      "/projects/tastybite4.jpg",
      "/projects/tastybite5.jpg",
      "/projects/tastybite6.jpg",
    ],
    tech: [SiReact, SiTailwindcss],
  },
  {
    title: "Traffic – Smart Landing Page",
    shortDesc: "Modern landing page for AI-based traffic monitoring system.",
    fullDesc:
      "Traffic is a clean and responsive landing page built to showcase a smart AI & IoT traffic monitoring solution. It includes feature sections, app preview mockups, call-to-action areas, and structured marketing layout.",
    cover: "/projects/traffic.jpg",
    images: [
      "/projects/traffic.jpg",
      "/projects/traffic3.jpg",
      "/projects/traffic1.jpg",
    ],
    tech: [SiReact, SiTailwindcss],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 px-6 " id="projects">
      <div className="max-w-6xl mx-auto" >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-primary">Projects</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelected(project)}
              className="cursor-pointer bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-primary transition hover:-translate-y-2"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm">{project.shortDesc}</p>

                {/* Tech Logos */}
                <div className="mt-4 flex gap-4">
                  {project.tech.map((Icon, i) => (
                    <Icon
                      key={i}
                      size={24}
                      className="text-zinc-400 group-hover:text-primary transition"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 max-w-4xl w-full rounded-2xl p-8 relative overflow-y-auto max-h-[90vh] animate-fadeIn"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>

            <p className="text-zinc-400 mb-6 leading-relaxed">
              {selected.fullDesc}
            </p>

            {/* Tech Logos */}
            <div className="flex gap-4 mb-8">
              {selected.tech.map((Icon, i) => (
                <Icon key={i} size={28} className="text-primary" />
              ))}
            </div>

            {/* Images Gallery */}
            <div className="grid md:grid-cols-2 gap-6">
              {selected.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="project"
                  className="rounded-lg border border-zinc-800"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
