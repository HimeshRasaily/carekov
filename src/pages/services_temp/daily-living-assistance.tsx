import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function DailyLivingAssistance() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const redirectPath = "/services/daily-living-assistance";

  return (
    <>
      <Head>
        <title>Daily Living Assistance | CareKov</title>
        <meta
          name="description"
          content="Daily living assistance services for seniors including hygiene support, mobility assistance, feeding, and day-to-day care at home."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#1C5F62]">
              Daily Living Assistance
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Compassionate day-to-day support to help seniors live safely,
              comfortably, and with dignity at home.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-4 py-16 space-y-14">

          {/* Service Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              Service Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Daily Living Assistance focuses on helping seniors with essential
              everyday activities that may become challenging due to age,
              illness, or limited mobility. CareKov provides trained caregivers
              who ensure comfort, safety, and respectful assistance throughout
              the day.
            </p>
          </div>

          {/* What’s Included */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              What’s Included
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Bathing, grooming, and personal hygiene assistance</li>
              <li>Mobility support including walking and transfers</li>
              <li>Feeding assistance and meal support</li>
              <li>Toilet assistance and continence care</li>
              <li>Basic companionship and emotional support</li>
            </ul>
          </div>

          {/* Who It’s For */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              Who Is This Service For?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Seniors requiring assistance with daily self-care activities</li>
              <li>Elders with mobility limitations or chronic conditions</li>
              <li>Post-hospitalisation patients during recovery</li>
              <li>Families seeking reliable in-home support for loved ones</li>
            </ul>
          </div>

          {/* How CareKov Delivers */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              How CareKov Delivers This Service
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Trained and background-verified caregivers</li>
              <li>Care plans tailored to individual needs</li>
              <li>Respectful, compassionate, and professional support</li>
              <li>Regular supervision and family communication</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#317C82] text-white rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold">
              Need Help With Daily Care?
            </h3>
            <p className="mt-3 text-white/90">
              Register with CareKov to arrange daily living assistance for your
              loved ones.
            </p>

            <button
              onClick={() => setShowPopup(true)}
              className="mt-6 bg-white text-[#317C82] px-6 py-3 rounded-md font-medium hover:opacity-90"
            >
              Register to Book
            </button>
          </div>

        </section>
      </main>

      <Footer />

      {/* REGISTER REQUIRED POPUP */}
      {showPopup && (
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
                onClick={() =>
                  router.push(`/register?redirect=${redirectPath}`)
                }
                className="px-5 py-2 bg-[#317C82] text-white rounded-md"
              >
                Register
              </button>

              <button
                onClick={() =>
                  router.push(`/login?redirect=${redirectPath}`)
                }
                className="px-5 py-2 border rounded-md"
              >
                Login
              </button>
            </div>

            <button
              onClick={() => setShowPopup(false)}
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
