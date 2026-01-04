import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function BookAppointment() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#317C82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Book an Appointment</h1>
          <p className="mt-4 text-lg text-white/90">
            Schedule home visits, medical services, or consultations at your convenience.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-xl shadow-sm p-8 space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">Full Name</label>
              <input
                type="text"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Contact Number
              </label>
              <input
                type="tel"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            {/* Select Service */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Select Service
              </label>
              <select
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              >
                <option value="">-- Select Service --</option>
                <option>Home Nursing</option>
                <option>Physiotherapy</option>
                <option>Elderly Care</option>
                <option>Medical Equipment Rental</option>
                <option>Laboratory Testing</option>
                <option>Specialised Medical Care</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Preferred Appointment Date
              </label>
              <input
                type="date"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">Address</label>
              <textarea
                required
                rows={3}
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#317C82] text-white rounded-md text-lg hover:opacity-90"
            >
              Book Appointment
            </button>
          </form>
        ) : (
          <div className="p-10 border rounded-xl bg-green-50 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-[#317C82]">
              Appointment Request Submitted!
            </h2>
            <p className="text-[#1C5F62] mt-3">
              Our team will contact you shortly to confirm your appointment.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
