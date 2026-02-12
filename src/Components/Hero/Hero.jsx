import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Greeting */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Hi, I'm <span className="text-white">Habiba</span>
        </h1>

        {/* Title */}
        <h3 className="mt-6 text-3xl md:text-4xl font-bold leading-tight">
          <TypeAnimation
            sequence={[
              "React Frontend Developer",
              2000,
              "Building Scalable Web Apps",
              2000,
              "Clean UI & Performance Focused",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent"
          />
        </h3>

        {/* Description */}
        <p className="mt-8 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          I build modern, responsive web applications using React and create
          smooth, engaging user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "#projects")}
            className="bg-primary hover:bg-purple-700 transition px-8 py-3 rounded-xl font-medium text-white"
          >
            View Projects
          </button>

          <button
            onClick={() => (window.location.href = "#contact")}
            className="border border-zinc-700 hover:border-primary px-8 py-3 rounded-xl transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
