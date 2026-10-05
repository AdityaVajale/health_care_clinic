import { useState } from "react";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="appointment" className="bg-[#edf4f0] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#438278]">
            Appointments
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#163c3a] md:text-5xl">
            Take the first step toward better health.
          </h2>

          <p className="mt-6 leading-8 text-[#63756f]">
            Send us your details and preferred appointment time. Our clinic
            team can contact you to confirm the appointment.
          </p>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-[#899791]">
              Call the clinic
            </p>

            <a
              href="tel:+919890918684"
              className="mt-2 block text-2xl font-bold text-[#14544f]"
            >
              +91 98909 18684
            </a>

            <p className="mt-2 text-sm text-[#71817c]">
              Open until 10:00 PM
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-xl md:p-9">

          {submitted && (
            <div className="mb-6 rounded-2xl border border-[#b9ddcf] bg-[#e7f6ef] p-4 text-sm font-semibold text-[#14544f]">
              ✓ Your appointment request has been sent successfully.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 md:grid-cols-2"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#38524d]">
                Full Name
              </label>

              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-[#d9e6e0] bg-[#f9fbfa] px-4 py-3.5 text-sm outline-none transition focus:border-[#438278]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#38524d]">
                Phone Number
              </label>

              <input
                required
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-2xl border border-[#d9e6e0] bg-[#f9fbfa] px-4 py-3.5 text-sm outline-none transition focus:border-[#438278]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#38524d]">
                Preferred Date
              </label>

              <input
                required
                type="date"
                className="w-full rounded-2xl border border-[#d9e6e0] bg-[#f9fbfa] px-4 py-3.5 text-sm outline-none focus:border-[#438278]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#38524d]">
                Preferred Time
              </label>

              <select
                required
                className="w-full rounded-2xl border border-[#d9e6e0] bg-[#f9fbfa] px-4 py-3.5 text-sm outline-none focus:border-[#438278]"
              >
                <option value="">Select time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-[#38524d]">
                Reason for Visit
              </label>

              <textarea
                rows="4"
                placeholder="Briefly describe your concern..."
                className="w-full resize-none rounded-2xl border border-[#d9e6e0] bg-[#f9fbfa] px-4 py-3.5 text-sm outline-none focus:border-[#438278]"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#14544f] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg md:col-span-2"
            >
              Request Appointment
            </button>

            <p className="text-center text-xs text-[#899791] md:col-span-2">
              This form is for appointment requests. For urgent medical
              emergencies, contact emergency services immediately.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}