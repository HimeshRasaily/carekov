import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AdvancedNursing() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const redirectPath = "/services/advanced-nursing";

  return (
    <>
      <Head>
        <title>Advanced Nursing (On-Call) | CareKov</title>
        <meta
          name="description"
          content="Advanced on-call nursing services at home including injections, catheter care, wound management, and post-operative nursing care."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#1C5F62]">
              Advanced Nursing (On-Call)
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Professional on-call nursing services delivered at home for
              clinical procedures, medical support, and post-hospital care.
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
              Advanced Nursing (On-Call) is designed for patients who require
              skilled medical care at home on a per-visit basis. CareKov provides
              licensed and experienced nurses to perform clinical procedures
              safely, accurately, and in coordination with doctors and families.
            </p>
          </div>

          {/* What’s Included */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              What’s Included
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Injection administration (IM / IV as prescribed)</li>
              <li>Wound care and dressing changes</li>
              <li>Catheter insertion and catheter care</li>
              <li>Post-operative nursing support</li>
              <li>Monitoring of vital signs during visits</li>
            </ul>
          </div>

          {/* Who It’s For */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              Who Is This Service For?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Patients requiring medical procedures at home</li>
              <li>Post-surgery patients needing short-term nursing care</li>
              <li>Seniors with complex medical needs</li>
              <li>Families seeking professional on-call nursing support</li>
            </ul>
          </div>

          {/* How CareKov Delivers */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              How CareKov Delivers This Service
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Qualified and background-verified nursing professionals</li>
              <li>Strict adherence to medical protocols and hygiene standards</li>
              <li>Coordination with prescribing doctors</li>
              <li>Clear communication and visit documentation</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#317C82] text-white rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold">
              Need Advanced Nursing Care at Home?
            </h3>
            <p className="mt-3 text-white/90">
              Register with CareKov to request on-call advanced nursing services
              delivered safely at home.
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
