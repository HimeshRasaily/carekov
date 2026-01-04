import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Franchise() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    {
      title: "Fast-Growing Healthcare Market",
      desc: "Home healthcare services are expanding rapidly with increasing demand for elderly care, physiotherapy, and diagnostics.",
    },
    {
      title: "Strong Brand Identity",
      desc: "Carekov provides premium branding, technology support, and operations assistance.",
    },
    {
      title: "Low Startup Cost",
      desc: "Begin with minimal infrastructure using Carekov’s scalable service model.",
    },
    {
      title: "Training & Operational Support",
      desc: "We provide onboarding, training modules, SOPs, and real-time support.",
    },
    {
      title: "Exclusive Territory Rights",
      desc: "Grow your region exclusively with full marketing and operations backing.",
    },
    {
      title: "Technology-Powered Business",
      desc: "You get access to the Carekov platform, CRM, scheduling system, and client management tools.",
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-[#317C82] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Franchise Partnership</h1>
        <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
          Become a part of Carekov’s expanding healthcare network and bring quality medical services to your region.
        </p>
      </section>

      {/* WHY PARTNER */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-[#1C5F62]">
          Why Partner with Carekov?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#317C82]">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h3 className="text-2xl font-semibold text-center text-[#1C5F62] mb-8">
          Partnership Enquiry Form
        </h3>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-xl shadow-sm p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">Full Name</label>
              <input
                type="text"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">Phone Number</label>
              <input
                type="tel"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">Email</label>
              <input
                type="email"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">City / Region</label>
              <input
                type="text"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1C5F62]">
                Message (optional)
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#317C82] text-white rounded-md text-lg hover:opacity-90"
            >
              Submit Enquiry
            </button>
          </form>
        ) : (
          <div className="p-10 bg-green-50 border rounded-xl text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-[#317C82]">Enquiry Submitted!</h2>
            <p className="mt-3 text-[#1C5F62]">
              Our franchise team will reach out to you shortly.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
