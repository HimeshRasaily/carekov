import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BookAppointment() {
  return (
    <>
      <Head>
        <title>Book Appointment | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white">
        {/* INTRO / COPY SECTION */}
        <section className="bg-gradient-to-r from-[#1C5F62] to-[#2E8B8B] py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">
              Book Trusted Elderly Care Services
            </h1>

            <p className="mt-6 text-white/90 text-lg leading-relaxed">
              At CareKov, we understand that caring for your loved ones requires
              more than just medical support — it requires trust, empathy, and
              reliability. Our curated elderly care services are designed to
              provide comfort, dignity, and professional care right at home.
            </p>

            <p className="mt-4 text-white/90">
              Choose the service you need and book an appointment in just a few
              simple steps.
            </p>

            <div className="mt-8 w-24 h-1 bg-[#E6C87A] mx-auto rounded-full"></div>
          </div>
        </section>

        {/* SERVICE CARDS SECTION */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-2xl font-semibold text-[#1C5F62] text-center mb-10">
            Our Elderly Care Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Elderly Care Assistance",
                desc: "Daily living support, companionship, and personal care for seniors at home.",
              },
              {
                title: "Nursing Care",
                desc: "Qualified nurses for post-hospital care, injections, wound dressing, and monitoring.",
              },
              {
                title: "Physiotherapy at Home",
                desc: "Personalized physiotherapy sessions to improve mobility and recovery.",
              },
              {
                title: "Medical Equipment Support",
                desc: "Access to essential medical equipment such as hospital beds, oxygen concentrators, and more.",
              },
              {
                title: "Eye Testing at Home",
                desc: "Professional eye testing services delivered at your doorstep.",
              },
              {
                title: "Doctor Teleconsultation",
                desc: "Consult experienced doctors from the comfort of your home.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-6 bg-white hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#1C5F62]">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM SECTION */}
{/* BOOKING FORM SECTION */}
<section className="bg-[#F3FAFA] py-24 px-4">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-semibold text-[#1C5F62] text-center mb-10">
      Appointment Details
    </h2>

    <form className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          className="mt-1 w-full border rounded-md px-4 py-2"
          placeholder="Enter your name"
        />
      </div>

      {/* Mobile / Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mobile / Email
        </label>
        <input
          type="text"
          className="mt-1 w-full border rounded-md px-4 py-2"
          placeholder="Enter mobile number or email"
        />
      </div>

      {/* Client Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Client Name
        </label>
        <input
          type="text"
          className="mt-1 w-full border rounded-md px-4 py-2"
          placeholder="Name of person receiving care"
        />
      </div>

      {/* Client Mobile / Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Client Mobile / Email
        </label>
        <input
          type="text"
          className="mt-1 w-full border rounded-md px-4 py-2"
          placeholder="Client contact details"
        />
      </div>

      {/* Select City */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select City
        </label>
        <select className="mt-1 w-full border rounded-md px-4 py-2">
          <option>Select city</option>
          <option>Mumbai</option>
          <option>Pune</option>
        </select>
      </div>

      {/* Select Service */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Service
        </label>
        <select className="mt-1 w-full border rounded-md px-4 py-2">
          <option>Select service</option>
          <option>Elderly Care Assistance</option>
          <option>Nursing Care</option>
          <option>Physiotherapy</option>
          <option>Medical Equipment</option>
          <option>Eye Testing</option>
          <option>Doctor Consultation</option>
        </select>
      </div>

      {/* Preferred Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Preferred Appointment Date
        </label>
        <input
          type="date"
          className="mt-1 w-full border rounded-md px-4 py-2"
        />
      </div>

      {/* Time Slot */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Preferred Time Slot
        </label>
        <select className="mt-1 w-full border rounded-md px-4 py-2">
          <option>Select time slot</option>
          <option>9:00 AM – 10:00 AM (1 hr)</option>
          <option>10:00 AM – 11:00 AM (1 hr)</option>
          <option>11:00 AM – 1:00 PM (2 hrs)</option>
          <option>2:00 PM – 4:00 PM (2 hrs)</option>
          <option>4:00 PM – 5:00 PM (1 hr)</option>
        </select>
      </div>

      {/* Client Address */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Client Address
        </label>
        <textarea
          rows={3}
          className="mt-1 w-full border rounded-md px-4 py-2"
          placeholder="Full address where service is required"
        ></textarea>
      </div>

      {/* Remarks */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Remarks
        </label>
        <textarea
          rows={3}
          className="mt-1 w-full border rounded-md px-4 py-2"
          placeholder="Any special instructions or notes"
        ></textarea>
      </div>

      {/* Submit */}
      <div className="md:col-span-2 text-center pt-6">
        <button
          type="submit"
          className="bg-[#1C5F62] text-white px-12 py-3 rounded-md hover:bg-[#174e50] transition"
        >
          Submit Appointment Request
        </button>
      </div>
    </form>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}
