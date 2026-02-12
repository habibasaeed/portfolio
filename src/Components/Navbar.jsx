import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold text-primary">Habiba</h1>

        <div className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-zinc-400 hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-4 space-y-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block text-zinc-400 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
