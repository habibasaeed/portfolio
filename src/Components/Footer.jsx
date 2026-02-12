import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-l from-purple-900/10 via-black to-black"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <h3 className="mt-8 text-xl md:text-2xl font-semibold">
          Let's build something amazing 🚀
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          I'm currently open for Frontend opportunities, internships, or
          freelance collaborations. Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="mt-10 space-y-5 flex flex-col items-center">
          <div className="flex items-center gap-3 text-zinc-400">
            <FaEnvelope className="text-primary" />
            <a
              href="mailto:habiba.saeed033@gmail.com"
              className="hover:text-primary transition"
            >
              habiba.saeed033@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <FaPhone className="text-primary" />
            <a
              href="tel:+201013611745"
              className="hover:text-primary transition"
            >
              +20 101 361 1745
            </a>
          </div>

          <div className="flex items-center gap-3 text-zinc-400">
            <FaLinkedin className="text-primary" />
            <a
              href="https://linkedin.com/in/habibasaeedd"
              className="hover:text-primary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
