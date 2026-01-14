import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BPMonitor() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/products/bp-monitor";

  return (
    <>
      <Head>
        <title>Blood Pressure Monitor | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Blood Pressure Monitor</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Easy-to-use blood pressure monitors for accurate home health tracking.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-14">
          <Block title="Product Overview">
            <p>
              Blood pressure monitors allow seniors to track vitals regularly and manage hypertension effectively.
            </p>
          </Block>

          <Block title="Key Features">
            <ul>
              <li>Accurate digital readings</li>
              <li>Easy-to-read display</li>
              <li>Compact and portable</li>
            </ul>
          </Block>

          <Block title="Ideal For">
            <ul>
              <li>Seniors with high blood pressure</li>
              <li>Chronic care monitoring</li>
            </ul>
          </Block>

          <Block title="Availability">
            <ul>
              <li>Available on enquiry</li>
            </ul>
          </Block>

          <CTA onClick={() => setShowPopup(true)} text="Register to Enquire" />
        </section>
      </main>

      <Footer />
      {showPopup && <AuthPopup onClose={() => setShowPopup(false)} redirect={redirectPath} />}
    </>
  );
}
