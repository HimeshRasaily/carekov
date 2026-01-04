"use client";

import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>CareKov Services</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold text-[#1C5F62] text-center">
            Our Healthcare Services
          </h1>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Explore professional healthcare services delivered at your home,
            tailored to your needs.
          </p>

<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {/* Home Nursing */}
  <a
    href="/services/home-nursing"
    className="p-6 border rounded-xl bg-white
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold text-[#317C82]">
      Home Nursing & Health Monitoring
    </h3>
    <p className="mt-3 text-gray-600">
      Professional nursing care, health monitoring, and medical support
      delivered at home.
    </p>
  </a>

  {/* Elderly Care */}
  <a
    href="/services/elderly-care"
    className="p-6 border rounded-xl bg-white
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold text-[#317C82]">
      Elderly Care & Daily Assistance
    </h3>
    <p className="mt-3 text-gray-600">
      Compassionate daily support, companionship, and assistance for seniors.
    </p>
  </a>

  {/* Physiotherapy */}
  <a
    href="/services/physiotherapy"
    className="p-6 border rounded-xl bg-white
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold text-[#317C82]">
      Physiotherapy at Home
    </h3>
    <p className="mt-3 text-gray-600">
      Recovery, rehabilitation, and mobility improvement at your home.
    </p>
  </a>

  {/* Doctor Consultation */}
  <a
    href="/services/doctor-consultation"
    className="p-6 border rounded-xl bg-white
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold text-[#317C82]">
      Doctor & Specialist Consultation
    </h3>
    <p className="mt-3 text-gray-600">
      Teleconsultations and home visits by verified doctors and specialists.
    </p>
  </a>

  {/* Lab Testing */}
  <a
    href="/services/lab-testing"
    className="p-6 border rounded-xl bg-white
               transition-all duration-300 ease-out
               hover:-translate-y-1 hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold text-[#317C82]">
      Lab Tests at Home
    </h3>
    <p className="mt-3 text-gray-600">
      Home sample collection and diagnostic testing with trusted labs.
    </p>
  </a>
</div>

        </section>
      </main>

      <Footer />
    </>
  );
}
