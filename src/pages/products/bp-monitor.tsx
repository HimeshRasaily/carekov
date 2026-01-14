import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MobilityAids() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/products/mobility-aids";

  return (
    <>
      <Head>
        <title>Mobility Aids & Walkers | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Mobility Aids & Walkers</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Supportive walking aids designed to improve balance, confidence, and independence.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-14">
          <Block title="Product Overview">
            <p>
              Mobility aids and walkers help seniors move safely and confidently while reducing the risk of falls.
            </p>
          </Block>

          <Block title="Key Features">
            <ul>
              <li>Lightweight yet sturdy build</li>
              <li>Adjustable height</li>
              <li>Comfortable hand grips</li>
              <li>Stable base for safety</li>
            </ul>
          </Block>

          <Block title="Ideal For">
            <ul>
              <li>Seniors with balance issues</li>
              <li>Post-injury recovery</li>
              <li>Daily walking support</li>
            </ul>
          </Block>

          <Block title="Availability">
            <ul>
              <li>Available on enquiry</li>
              <li>Delivery assistance provided</li>
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

/* Shared components are IDENTICAL – copy from Oxygen Concentrator file */
