const About = () => {
  return (
    <section id="about" className="py-24 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          About <span className="text-primary">Me</span>
        </h2>

        <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
          I'm a React Frontend Developer passionate about building modern,
          scalable, and user-focused web applications. I have hands-on
          experience integrating REST APIs, implementing authentication systems,
          and designing responsive UI using Tailwind CSS.
        </p>

        <p className="mt-6 text-zinc-500 leading-relaxed">
          I enjoy solving real-world problems, improving performance, and
          continuously learning new technologies to grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
