import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function VaccinationAtHome() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/services/vaccination-at-home";

  return (
    <>
      <Head>
        <title>Vaccination at Home | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Vaccination at Home
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Safe and convenient vaccination services administered at home by
            trained medical professionals.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <Block title="Service Includes">
            <li>Doctor-prescribed vaccinations</li>
            <li>Cold-chain safety compliance</li>
            <li>Post-vaccination observation</li>
            <li>Digital records & reminders</li>
          </Block>

          <Block title="Ideal For">
            <li>Seniors with mobility challenges</li>
            <li>High-risk individuals</li>
            <li>Families preferring home safety</li>
          </Block>

          <CTA onClick={() => setShowPopup(true)} text="Register to Book Vaccination" />
        </section>
      </main>

      <Footer />
      <AuthPopup show={showPopup} setShow={setShowPopup} redirect={redirectPath} />
    </>
  );
}
