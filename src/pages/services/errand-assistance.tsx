import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ErrandAssistance() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const redirectPath = "/services/errand-assistance";

  return (
    <>
      <Head>
        <title>Errand Assistance | CareKov</title>
        <meta
          name="description"
          content="Errand assistance services for seniors including groceries, medicines, bill payments, appointments, and daily necessities."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#1C5F62]">
              Errand Assistance
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Reliable assistance for daily errands so seniors can live
              independently without stress.
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
              Errand Assistance is designed to help seniors manage everyday tasks
              that may become difficult due to age, mobility limitations, or
              health conditions. CareKov assigns trained attendants or caregivers
              to handle essential errands safely, reliably, and on time.
            </p>
          </div>

          {/* What’s Included */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              What’s Included
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Grocery shopping and daily essentials purchase</li>
              <li>Medicine pickup and pharmacy coordination</li>
              <li>Utility bill payments and document submission</li>
              <li>Appointment booking and accompaniment if required</li>
              <li>Coordination for medical equipment or service needs</li>
            </ul>
          </div>

          {/* Who It’s For */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              Who Is This Service For?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Seniors living independently who need occasional assistance</li>
              <li>Families living away who want reliable local support</li>
              <li>Elders with mobility or health-related restrictions</li>
              <li>Post-hospital recovery patients needing short-term help</li>
            </ul>
          </div>

          {/* How CareKov Delivers */}
          <div>
            <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
              How CareKov Delivers This Service
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Verified and trained attendants</li>
              <li>Task tracking and completion confirmation</li>
              <li>Transparent communication with family members</li>
              <li>Flexible scheduling based on senior needs</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-[#317C82] text-white rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-semibold">
              Need Help With Daily Errands?
            </h3>
            <p className="mt-3 text-white/90">
              Register with CareKov to arrange trusted errand assistance for your
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
