import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_utnjle3",      // ✅ Your EmailJS service ID
        "template_3xbhzif",     // ✅ Your EmailJS template ID
        form.current,
        "ym_MAJJnjzu--SMWY"     // ✅ Your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section
      className="relative bg-gradient-to-r from-[#ffd700] via-[#fff8dc] to-[#f5deb3] py-16 px-4"
      id="contact"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-yellow-100/40 z-0" />

      {/* Form Card */}
      <div className="max-w-xl mx-auto relative z-10 bg-white/20 backdrop-blur-xl border border-yellow-400 rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-heading text-[#8B7500] mb-6 text-center drop-shadow-lg">
          Get in Touch
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-[#3b2f00]">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border border-yellow-500 p-3 rounded bg-white/80 focus:outline-yellow-600"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border border-yellow-500 p-3 rounded bg-white/80 focus:outline-yellow-600"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-yellow-500 p-3 rounded bg-white/80 focus:outline-yellow-600"
          />
          <button
            type="submit"
            className="bg-yellow-700 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded shadow-md hover:shadow-xl transition"
          >
            Send Message
          </button>
        </form>

        {sent && (
          <p className="text-yellow-800 text-center mt-4 font-body font-bold animate-pulse">
            ✅ Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </section>
  );
}
