import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function TeleconsultationGeneral() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/services/teleconsultation-general";

  return (
    <>
      <Head>
        <title>Teleconsultation – General Doctor | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Teleconsultation – General Doctor
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Quick medical consultations with qualified general physicians.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <Block title="Consultation Covers">
            <li>General health concerns</li>
            <li>Medication guidance</li>
            <li>Follow-up advice</li>
          </Block>

          <CTA onClick={() => setShowPopup(true)} text="Register to Consult" />
        </section>
      </main>

      <Footer />
      <AuthPopup show={showPopup} setShow={setShowPopup} redirect={redirectPath} />
    </>
  );
}
