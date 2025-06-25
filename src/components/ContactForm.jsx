import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_utnjle3',     // ⬅️ Replace this
        'template_3xbhzif',    // ⬅️ Replace this
        form.current,
        'ym_MAJJnjzu--SMWY'      // ⬅️ Replace this
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
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-heading text-primary text-center mb-6">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full border p-3 rounded" />
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full border p-3 rounded" />
          <textarea name="message" placeholder="Your Message" rows="5" required className="w-full border p-3 rounded" />
          <button type="submit" className="bg-primary text-white px-6 py-3 rounded hover:bg-accent hover:text-primary transition">
            Send Message
          </button>
        </form>
        {sent && (
          <p className="text-green-600 text-center mt-4 font-body">Thank you! Your message has been sent.</p>
        )}
      </div>
    </section>
  );
}
