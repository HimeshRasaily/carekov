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
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            At Carekov, we make accessing quality elderly care simple and
            convenient. Schedule consultations, health check-ups, and
            personalized care services with ease.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#317C82]">Easy Scheduling</h3>
            <p className="text-sm text-gray-600 mt-2">
              Select the service, date, and time that works best for you.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#317C82]">
              Qualified Professionals
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Meet experienced doctors, physiotherapists, and caregivers.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#317C82]">
              Reminders & Notifications
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Receive timely reminders so nothing is missed.
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#317C82]">Flexible Options</h3>
            <p className="text-sm text-gray-600 mt-2">
              Choose between in-person visits or virtual consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-2xl shadow-sm p-8 space-y-6"
          >
            {/* Your Name */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Your Name
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            {/* Your Contact */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Your Mobile Number / Email ID
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            {/* Client Name */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Client Name
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            {/* Client Contact */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Client’s Mobile Number / Email ID
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Select City
              </label>
              <select
                required
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
              >
                <option value="">-- Select City --</option>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Select Service
              </label>
              <select
                required
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
              >
                <option value="">-- Select Service --</option>
                <option disabled>Elderly Care (Coming Soon)</option>
                <option disabled>Home Nursing</option>
                <option disabled>Physiotherapy</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1C5F62]">
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  required
                  className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C5F62]">
                  Preferred Time Slot
                </label>
                <select
                  required
                  className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
                >
                  <option value="">-- Select Time --</option>
                  <option>Morning (9 AM – 12 PM)</option>
                  <option>Afternoon (12 PM – 4 PM)</option>
                  <option>Evening (4 PM – 8 PM)</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Client Address
              </label>
              <textarea
                required
                rows={3}
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
              ></textarea>
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Remarks
              </label>
              <textarea
                rows={3}
                className="mt-2 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-[#317C82]"
                placeholder="Any additional information..."
              ></textarea>
            </div>

            {/* Submit */}
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
