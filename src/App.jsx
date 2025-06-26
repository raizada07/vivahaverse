""// File: src/App.jsx

import Navbar from "./components/Navbar.jsx";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { motion } from "framer-motion";




export default function App() {
  const [selectedService, setSelectedService] = useState(null);
 const getPhotosForService = (key) => {
  const imageCounts = {
    destination: 14,
    haldi: 6,
    mehandi: 2,
    reception: 6,
    sangeet: 0,
    stage: 6,
    traditional: 0,
  };

  const count = imageCounts[key] || 0;
  const base = import.meta.env.BASE_URL || "";
  return Array.from({ length: count }, (_, i) => `${base}images/${key}/${i + 1}.jpg`);
};

  const [currentPage, setCurrentPage] = useState("home");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_utnjle3",
        "template_3xbhzif",
        form.current,
        "ym_MAJJnjzu--SMWY"
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
   <div
  className="font-body min-h-screen bg-fixed bg-cover bg-center text-primary"
  style={{
    backgroundImage: `url('/images/bg1.png')`, // ← apna image path daalo
  }}
>
      <Navbar />

      <main className="pt-24">  {/* 24 = enough height to push below navbar */}

        {currentPage === "home" && (
          <>
            {/* Hero Section */}
            {/* Hero Section */}
<motion.section
  id="home"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative h-[80vh] flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden"
>
  {/* Background image layer */}
  <img
    src="/assets/bg.jpg"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
  />

  {/* Content upar */}
  <motion.h1
    className="text-5xl md:text-6xl font-heading mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
  >
    Welcome to VivahaVerse
  </motion.h1>

  <motion.p
    className="text-lg md:text-xl font-body max-w-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    Royal weddings, cultural traditions, and grand celebrations beautifully curated for your dream day.
  </motion.p>
</motion.section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 bg-white text-center">
              <h2 className="text-3xl font-heading text-primary mb-12">Our Services</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
  { label: "Destination Wedding 🌍", key: "destination" },
  { label: "Mehendi Ceremony 🌿", key: "mehandi" },
  { label: "Sangeet Night 🎶", key: "sangeet" },
  { label: "Haldi Function 💛", key: "haldi" },
  { label: "Reception 🎉", key: "reception" },
  { label: "Traditional Decor 🏵️", key: "traditional" },
  { label: "Stage Decoration 🎭", key: "stage" },
].map((item, i) => (
  <motion.div
    key={i}
    className={`bg-background p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer ${
      selectedService === item.key ? "border-2 border-primary" : ""
    }`}
    onClick={() => setSelectedService(item.key)}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
  >
    <h3 className="text-xl font-semibold font-heading">{item.label}</h3>
  </motion.div>
))}
              </div>
            </section>
            

            {/* Gallery Section */}
        <section id="gallery" className="py-20 px-6 bg-background text-center">
  <h2 className="text-3xl font-heading text-primary mb-10">Gallery</h2>

  {selectedService ? (
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-lg text-gray-600 font-body mb-6 capitalize">
        Showing: <strong className="text-primary">{selectedService}</strong> images
      </p>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {getPhotosForService(selectedService).map((src, i) => (
          <div
      key={i}
      className="rounded-xl overflow-hidden shadow-lg border-2 border-yellow-400"
    >
            <img
        src={src}
        alt={`Gallery ${i}`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

          </div>
        ))}
      </div>
    </div>
  ) : (
    <p className="text-gray-500 italic text-lg">Select a service above to see the gallery.</p>
  )}
</section>


            {/* Contact Section */}
            <motion.section
              id="contact"
              className="py-20 px-6 bg-white text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading text-primary mb-6">Contact Us</h2>
              <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto grid gap-4 text-left">
                <input type="text" placeholder="Your Name" className="p-3 border rounded" required />
                <input type="email" placeholder="Your Email" className="p-3 border rounded" required />
                <textarea placeholder="Your Message" rows="4" className="p-3 border rounded" required></textarea>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-6 rounded-full font-semibold hover:bg-accent hover:text-primary transition"
                >
                  Send Message
                </button>
              </form>
            </motion.section>
          </>
        )}

        {currentPage === "about" && (
          <section id="about" className="py-20 px-6 bg-white text-center">
            <h2 className="text-3xl font-heading text-primary mb-4">About Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-body">
              VivahaVerse is your one-stop royal wedding planner. From destination weddings to traditional rituals, we handle everything with elegance and excellence.
            </p>
            <button
              className="mt-8 inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-accent hover:text-primary transition"
              onClick={() => setCurrentPage("home")}
            >
              Back to Home
            </button>
          </section>
        )}

        {/* Footer With Social Icons */}
        <footer className="bg-primary text-white text-center py-8">
          <p className="font-body mb-4">© 2025 VivahaVerse. All rights reserved.</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400 transition">   @instagram</a>
            <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400 transition">    @facebook</a>
            <a href="https://wa.me/918461836729" target="_blank" className="hover:text-yellow-400 transition">   @whatsaap</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
