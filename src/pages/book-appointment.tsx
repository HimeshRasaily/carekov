"use client";

import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const router = useRouter();

  const requireAuth = () => setShowAuthPopup(true);

  return (
    <>
      <Head>
        <title>CareKov Services</title>
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#1C5F62]">
              Our Elderly Care Services
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive elderly care services designed to support seniors
              with dignity, safety, and compassion.
            </p>
          </div>
        </section>

        {/* REGULAR SERVICES */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-[#317C82] mb-8">
            Regular Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Errand Assistance",
                desc: "Groceries, medicines, bill payments, appointments and product procurement."
              },
              {
                name: "Daily Living Assistance",
                desc: "Bathing, hygiene, mobility, feeding, and toileting support."
              },
              {
                name: "Nursing & Health Monitoring",
                desc: "Vitals monitoring, medication support, and basic wound care."
              }
            ].map((service) => (
              <div
                key={service.name}
                className="border rounded-xl bg-white p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#317C82]">
                  {service.name}
                </h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>

                <div className="mt-4 text-sm text-gray-500">
                  Starting from <strong>₹ — / visit</strong>
                </div>

                <button
                  onClick={requireAuth}
                  className="mt-6 w-full bg-[#317C82] text-white py-2 rounded-md hover:opacity-90"
                >
                  Book Service
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ON DEMAND */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-[#317C82] mb-8">
              On-Demand Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Advanced Nursing",
                "Physiotherapy at Home",
                "Doctor Home Visit Coordination",
                "Lab Tests at Home",
                "Vaccination at Home",
                "Eye Testing at Home",
                "Nutrition Programs",
                "Teleconsultation"
              ].map((service) => (
                <div
                  key={service}
                  className="border rounded-xl bg-white p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-[#317C82]">
                    {service}
                  </h3>

                  <div className="mt-4 text-sm text-gray-500">
                    Charges vary by service
                  </div>

                  <button
                    onClick={requireAuth}
                    className="mt-6 w-full bg-[#317C82] text-white py-2 rounded-md hover:opacity-90"
                  >
                    Book Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUBSCRIPTION PLANS */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-[#317C82] mb-8">
            Subscription Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Care Subscription",
                bestFor: "Independent seniors",
                price: "Monthly Plan",
                includes: [
                  "Daily check-in calls",
                  "Medication reminders",
                  "Weekly caregiver visit",
                  "Emergency escalation"
                ]
              },
              {
                name: "Companion Care Subscription",
                bestFor: "Semi-dependent seniors",
                price: "Quarterly Plan",
                includes: [
                  "Caregiver companionship",
                  "Daily assistance",
                  "Medication support",
                  "Family updates"
                ]
              },
              {
                name: "Comprehensive Elder Care Plan",
                bestFor: "Fully dependent seniors",
                price: "Premium Annual Plan",
                includes: [
                  "Dedicated care manager",
                  "Attendant & nursing visits",
                  "Medical coordination",
                  "Emergency response"
                ]
              }
            ].map((plan) => (
              <div
                key={plan.name}
                className="border rounded-xl bg-white p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-[#317C82]">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Best for: {plan.bestFor}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {plan.includes.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>

                <div className="mt-4 text-sm font-medium text-gray-700">
                  {plan.price}
                </div>

                <button
                  onClick={requireAuth}
                  className="mt-6 w-full bg-[#D3A24C] text-white py-2 rounded-md hover:opacity-90"
                >
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* EMERGENCY */}
        <section className="bg-[#317C82] py-16 text-white text-center">
          <h2 className="text-2xl font-semibold">
            Emergency Assistance
          </h2>
          <p className="mt-3 text-white/90">
            Immediate coordination for ambulance, hospital admission, and family notification.
          </p>

          <button
            onClick={requireAuth}
            className="mt-6 bg-white text-[#317C82] px-6 py-3 rounded-md font-medium"
          >
            Get Help Now
          </button>
        </section>

      </main>

      <Footer />

      {/* REGISTER REQUIRED POPUP */}
      {showAuthPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
            <h3 className="text-xl font-semibold text-[#1C5F62]">
              Registration Required
            </h3>
            <p className="mt-3 text-gray-600">
              To ensure safe and personalised elderly care, please register before booking.
            </p>

            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => router.push("/register")}
                className="px-5 py-2 bg-[#317C82] text-white rounded-md"
              >
                Register
              </button>
              <button
                onClick={() => router.push("/login")}
                className="px-5 py-2 border rounded-md"
              >
                Login
              </button>
            </div>

            <button
              onClick={() => setShowAuthPopup(false)}
              className="mt-4 text-sm text-gray-500 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
