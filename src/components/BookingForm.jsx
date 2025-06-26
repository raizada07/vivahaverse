export default function BookingForm() {
  return (
    <section className="bg-white py-16 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-heading text-primary mb-6 text-center">Book Your Event</h2>
        <form className="space-y-4" name="booking_form">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="text"
            name="event_type"
            placeholder="Event Type (Wedding, Birthday, etc.)"
            className="w-full border p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Additional Details..."
            rows="4"
            className="w-full border p-3 rounded"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded hover:bg-accent hover:text-primary transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
