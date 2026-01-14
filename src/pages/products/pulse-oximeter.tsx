import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";
import CTA from "../../components/CTA";


export default function PulseOximeter() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/products/pulse-oximeter";

  return (
    <>
      <Head>
        <title>Pulse Oximeter | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Pulse Oximeter</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Non-invasive device to monitor oxygen saturation and pulse rate at home.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-14">
          <Block title="Product Overview">
            <p>
              Pulse oximeters provide quick and accurate readings of oxygen levels and pulse rate.
            </p>
          </Block>

          <Block title="Key Features">
            <ul>
              <li>Accurate SpO₂ and pulse readings</li>
              <li>Lightweight and portable</li>
              <li>One-button operation</li>
            </ul>
          </Block>

          <Block title="Ideal For">
            <ul>
              <li>Respiratory monitoring</li>
              <li>Post-COVID recovery</li>
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
