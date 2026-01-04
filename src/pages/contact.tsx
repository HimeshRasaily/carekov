import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-[#317C82] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-lg text-white/85">
          We're here to support you with all your home healthcare needs.
        </p>
      </section>

      {/* CONTACT DETAILS */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Left Side - Form */}
        <div>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white border rounded-xl shadow-sm p-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-[#1C5F62]">Full Name</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-[#1C5F62]">Email Address</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="text-sm font-medium text-[#1C5F62]">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-[#1C5F62]">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#317C82] text-white rounded-md text-lg hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="p-10 border rounded-xl bg-green-50 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-[#317C82]">
                Your message has been sent!
              </h2>
              <p className="text-[#1C5F62] mt-3">
                Our team will reach out to you shortly.
              </p>
            </div>
          )}
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#317C82]">Get In Touch</h2>

          <div>
            <p className="text-sm text-[#1C5F62] font-medium">Phone</p>
            <p className="text-gray-700 mt-1">+91 90000 00000</p>
          </div>

          <div>
            <p className="text-sm text-[#1C5F62] font-medium">Email</p>
            <p className="text-gray-700 mt-1">support@carekov.com</p>
          </div>

          <div>
            <p className="text-sm text-[#1C5F62] font-medium">Office Address</p>
            <p className="text-gray-700 mt-1">
              Carekov Healthcare Services  
              Siliguri, West Bengal, India
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="mt-6">
            <div className="w-full h-56 bg-gray-200 rounded-md flex items-center justify-center text-[#1C5F62]">
              Map Placeholder (Google Maps embed here later)
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
