import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";

export default function TeleconsultationSpecialist() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/services/teleconsultation-specialist";

  return (
    <>
      <Head>
        <title>Teleconsultation – Specialist | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Teleconsultation – Specialist
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Online consultations with medical specialists across disciplines.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <Block title="Specialists Available">
            <li>Neurologist</li>
            <li>Dermatologist</li>
            <li>Psychologist</li>
            <li>Geriatrician</li>
          </Block>

          <CTA onClick={() => setShowPopup(true)} text="Register to Consult Specialist" />
        </section>
      </main>

      <Footer />
      <AuthPopup show={showPopup} setShow={setShowPopup} redirect={redirectPath} />
    </>
  );
}
