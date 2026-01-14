import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Block from "../../components/Block";
import CTA from "../../components/CTA";


export default function BPMonitor() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>BP Monitor | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gray-50 py-20 text-center px-4">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Blood Pressure Monitor
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Accurate and easy-to-use blood pressure monitors for reliable
            health tracking at home.
          </p>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          {/* Product Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1C5F62] mb-3">
              Product Overview
            </h2>
            <p className="text-gray-700">
              Blood pressure monitors help track systolic and diastolic
              pressure levels, supporting early detection and effective
              management of hypertension.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1C5F62] mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Clinically accurate readings</li>
              <li>Easy-to-read digital display</li>
              <li>Portable and home-friendly design</li>
              <li>Memory storage for readings</li>
            </ul>
          </div>

          {/* Ideal For */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1C5F62] mb-3">
              Ideal For
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Seniors monitoring blood pressure</li>
              <li>Patients with hypertension</li>
              <li>Routine home health tracking</li>
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1C5F62] mb-3">
              Availability
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Available on enquiry</li>
              <li>Multiple models available</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <button
              onClick={() => router.push("/book-appointment")}
              className="bg-[#1C5F62] text-white px-8 py-3 rounded-md hover:bg-[#174e50] transition"
            >
              Enquire Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
