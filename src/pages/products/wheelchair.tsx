import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";

export default function Wheelchair() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/products/wheelchair";

  return (
    <>
      <Head>
        <title>Wheelchair | CareKov</title>
        <meta
          name="description"
          content="Reliable and comfortable wheelchairs designed to support mobility, independence, and safety."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Wheelchair
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Reliable and comfortable wheelchairs designed to support mobility,
            independence, and safety for seniors and patients.
          </p>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-4 py-16 space-y-14">

          <Block title="Product Overview">
            <p>
              CareKov wheelchairs are designed for both indoor and outdoor use,
              offering stability, comfort, and ease of movement. They are suitable
              for short-term recovery as well as long-term mobility support.
            </p>
          </Block>

          <Block title="Key Features">
            <ul>
              <li>Lightweight and durable frame</li>
              <li>Comfortable seating with arm and foot support</li>
              <li>Easy maneuverability</li>
              <li>Foldable design for storage and transport</li>
            </ul>
          </Block>

          <Block title="Ideal For">
            <ul>
              <li>Seniors with limited mobility</li>
              <li>Post-surgery recovery patients</li>
              <li>Individuals with walking difficulties</li>
              <li>Long-term mobility assistance</li>
            </ul>
          </Block>

          <Block title="Availability">
            <ul>
              <li>Available for rent or enquiry</li>
              <li>Home delivery and support available</li>
            </ul>
          </Block>

          {/* CTA */}
          <CTA
            onClick={() => setShowPopup(true)}
            text="Register to Enquire"
          />

        </section>
      </main>

      <Footer />

      {/* REGISTER POPUP */}
      {showPopup && (
        <AuthPopup
          onClose={() => setShowPopup(false)}
          redirect={redirectPath}
        />
      )}
    </>
  );
}

/* ---------- SHARED COMPONENTS ---------- */

function Block({ title, children }: any) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#317C82] mb-4">
        {title}
      </h2>
      <div className="text-gray-600 space-y-2">
        {children}
      </div>
    </div>
  );
}

function CTA({ onClick, text }: any) {
  return (
    <div className="bg-[#317C82] text-white rounded-2xl p-10 text-center">
      <button
        onClick={onClick}
        className="bg-white text-[#317C82] px-6 py-3 rounded-md font-medium"
      >
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
        <h3 className="text-xl font-semibold text-[#1C5F62]">
          Registration Required
        </h3>
        <p className="mt-3 text-gray-600">
          Please register or login to enquire about this product.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={() =>
              router.push(`/register?redirect=${redirect}`)
            }
            className="px-5 py-2 bg-[#317C82] text-white rounded-md"
          >
            Register
          </button>

          <button
            onClick={() =>
              router.push(`/login?redirect=${redirect}`)
            }
            className="px-5 py-2 border rounded-md"
          >
            Login
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 text-sm underline text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
