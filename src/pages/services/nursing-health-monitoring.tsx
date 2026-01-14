import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NursingHealthMonitoring() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const redirectPath = "/services/nursing-health-monitoring";

  return (
    <>
      <Head>
        <title>Nursing & Health Monitoring | CareKov</title>
        <meta
          name="description"
          content="Professional nursing and health monitoring services at home including vitals monitoring, medication administration, and basic wound care."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#1C5F62]">
              Nursing & Health Monitoring
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Skilled nursing care and regular health monitoring delivered
              safely and professionally at home.
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
              Nursing & Health Monitoring services are designed for seniors who
              require medical supervision, medication support, and regular
              monitoring of vital signs. CareKov provides trained and licensed
              nursing professionals to ensure clinical care is delivered
              accurately and consistently at home.
            </p>
          </div>

          {/* What’s Included */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              What’s Included
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Monitoring of vital signs (BP, blood sugar, oxygen levels)</li>
              <li>Medication administration and adherence support</li>
              <li>Basic wound care and dressing changes</li>
              <li>Post-operative and chronic condition monitoring</li>
              <li>Coordination with doctors and family updates</li>
            </ul>
          </div>

          {/* Who It’s For */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              Who Is This Service For?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Seniors with chronic health conditions</li>
              <li>Post-hospitalisation patients needing medical supervision</li>
              <li>Elders requiring regular vitals monitoring</li>
              <li>Families seeking professional nursing care at home</li>
            </ul>
          </div>

          {/* How CareKov Delivers */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              How CareKov Delivers This Service
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Qualified and verified nursing professionals</li>
              <li>Structured care plans based on medical requirements</li>
              <li>Accurate documentation and reporting</li>
              <li>Transparent communication with families</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#317C82] text-white rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold">
              Need Professional Nursing Care at Home?
            </h3>
            <p className="mt-3 text-white/90">
              Register with CareKov to arrange nursing and health monitoring
              services for your loved ones.
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
