import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PhysiotherapyService() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const redirectPath = "/services/physiotherapy";

  return (
    <>
      <Head>
        <title>Physiotherapy at Home | CareKov</title>
        <meta
          name="description"
          content="Professional physiotherapy services at home for pain management, mobility improvement, rehabilitation, and post-surgical recovery."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#1C5F62]">
              Physiotherapy at Home
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Personalized physiotherapy sessions delivered at home to help
              seniors regain strength, mobility, and independence.
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
              Physiotherapy at Home is designed to support recovery, pain
              management, and improved mobility for seniors and patients with
              physical limitations. CareKov connects you with licensed
              physiotherapists who provide structured, goal-oriented therapy
              sessions in the comfort of home.
            </p>
          </div>

          {/* What’s Included */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              What’s Included
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Assessment of mobility, strength, and range of motion</li>
              <li>Personalized exercise and rehabilitation plans</li>
              <li>Pain management therapy and posture correction</li>
              <li>Post-surgical and post-injury rehabilitation</li>
              <li>Progress tracking and therapy adjustments</li>
            </ul>
          </div>

          {/* Who It’s For */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              Who Is This Service For?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Seniors experiencing mobility or balance issues</li>
              <li>Post-operative patients recovering from surgery</li>
              <li>Individuals with arthritis, joint pain, or muscle weakness</li>
              <li>Patients recovering from stroke or neurological conditions</li>
            </ul>
          </div>

          {/* How CareKov Delivers */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              How CareKov Delivers This Service
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Certified and experienced physiotherapists</li>
              <li>Customized therapy plans based on medical assessment</li>
              <li>Flexible scheduling for home visits</li>
              <li>Clear communication with patients and family members</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#317C82] text-white rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold">
              Need Physiotherapy Support at Home?
            </h3>
            <p className="mt-3 text-white/90">
              Register with CareKov to book professional physiotherapy sessions
              tailored to your recovery needs.
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
