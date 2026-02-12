import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiGithub,
} from "react-icons/si";

const TechStack = () => {
  const techs = [
    { icon: SiReact, name: "React" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiBootstrap, name: "Bootstrap" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiGithub, name: "GitHub" },
  ];

  return (
    <section className=" px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-primary text-3xl md:text-4xl font-bold">
          Tech Stack
        </h2>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {techs.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 group"
              >
                <Icon
                  size={50}
                  className="text-zinc-400 group-hover:text-primary transition duration-300"
                />
                <span className="text-sm text-zinc-500 group-hover:text-white transition">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
