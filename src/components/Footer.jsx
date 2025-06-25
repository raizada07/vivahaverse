export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-heading">VivahaVerse</h2>
          <p className="text-sm font-body text-accent mt-1">
            Elegant Indian Event Planner
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 font-body text-sm">
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#services" className="hover:text-accent transition">Services</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
          <li><a href="#privacy" className="hover:text-accent transition">Privacy</a></li>
        </ul>
      </div>

      <div className="text-center text-xs text-accent mt-6 font-body">
        © {new Date().getFullYear()} VivahaVerse. All rights reserved.
      </div>
    </footer>
  );
}
