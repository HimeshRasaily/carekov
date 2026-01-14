import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";


export default function OxygenConcentrator() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/products/oxygen-concentrator";

  return (
    <>
      <Head>
        <title>Oxygen Concentrator | CareKov</title>
        <meta name="description" content="Medical-grade oxygen concentrators for safe respiratory care at home." />
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Oxygen Concentrator</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Reliable oxygen concentrators designed to support respiratory care safely and comfortably at home.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-14">
          <Block title="Product Overview">
            <p>
              CareKov oxygen concentrators provide a continuous supply of oxygen for patients requiring respiratory
              support. Designed for ease of use, they are suitable for long-term home care.
            </p>
          </Block>

          <Block title="Key Features">
            <ul>
              <li>Continuous oxygen delivery</li>
              <li>Low-noise operation</li>
              <li>Easy-to-use control panel</li>
              <li>Compact and portable design</li>
            </ul>
          </Block>

          <Block title="Ideal For">
            <ul>
              <li>Patients with respiratory conditions</li>
              <li>Seniors requiring oxygen support</li>
              <li>Post-hospital respiratory recovery</li>
            </ul>
          </Block>

          <Block title="Availability">
            <ul>
              <li>Available for rent or enquiry</li>
              <li>Installation guidance provided</li>
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

/* Shared Components */
function Block({ title, children }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#317C82] mb-4">{title}</h2>
      <div className="text-gray-600 space-y-2">{children}</div>
    </div>
  );
}

function CTA({ onClick, text }: any) {
  return (
    <div className="bg-[#317C82] text-white rounded-2xl p-10 text-center">
      <button onClick={onClick} className="bg-white text-[#317C82] px-6 py-3 rounded-md font-medium">
        {text}
      </button>
    </div>
  );
}

function AuthPopup({ onClose, redirect }: any) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
        <h3 className="text-xl font-semibold text-[#1C5F62]">Registration Required</h3>
        <p className="mt-3 text-gray-600">Please register or login to enquire about this product.</p>
        <div className="mt-6 flex gap-4 justify-center">
          <button onClick={() => router.push(`/register?redirect=${redirect}`)} className="px-5 py-2 bg-[#317C82] text-white rounded-md">Register</button>
          <button onClick={() => router.push(`/login?redirect=${redirect}`)} className="px-5 py-2 border rounded-md">Login</button>
        </div>
        <button onClick={onClose} className="mt-4 text-sm underline text-gray-500">Cancel</button>
      </div>
    </div>
  );
}
