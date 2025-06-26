import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Destination", link: "#destination" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ];

  return (
   <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.png" height={200}
            alt="VivahaVerse Logo"
            className="h-5 w-5 border-yellow-400 shadow-lg bg-white/90 p-1 rounded-full"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-xl font-body tracking-wide">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative group transition duration-300"
              >
                <span className="group-hover:text-yellow-300">{item.name}</span>
                <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {open ? (
            <X className="h-8 w-8 text-yellow-300" onClick={() => setOpen(false)} />
          ) : (
            <Menu className="h-8 w-8 text-yellow-300" onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#ff11cc] text-white px-6 pb-4 space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-yellow-300">
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className="block py-2 text-lg hover:text-yellow-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
