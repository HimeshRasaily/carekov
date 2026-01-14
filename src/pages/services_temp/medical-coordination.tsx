import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";

export default function MedicalCoordination() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/services/medical-coordination";

  return (
    <>
      <Head>
        <title>Medical Coordination Services | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Medical Coordination Services
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            End-to-end coordination of medical services so seniors and families
            don’t have to manage healthcare logistics alone.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <Block title="What This Service Covers">
            <li>Doctor home visit coordination</li>
            <li>Lab test scheduling and sample collection</li>
            <li>Medicine ordering and delivery</li>
            <li>Medical equipment arrangement</li>
            <li>Hospital admission and discharge coordination</li>
          </Block>

          <Block title="Who Is This For">
            <li>Families managing elderly care remotely</li>
            <li>Seniors with multiple medical dependencies</li>
            <li>Post-hospitalisation care coordination</li>
          </Block>

          <CTA
            onClick={() => setShowPopup(true)}
            text="Register to Request Coordination"
          />
        </section>
      </main>

      <Footer />
      <AuthPopup show={showPopup} setShow={setShowPopup} redirect={redirectPath} />
    </>
  );
}
