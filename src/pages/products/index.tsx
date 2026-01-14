import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";


export default function ProductsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/products";

  return (
    <>
      <Head>
        <title>Products & Equipments | CareKov</title>
        <meta
          name="description"
          content="Browse CareKov’s medical products and equipment for elderly care, home recovery, and health monitoring."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-[#317C82] py-20 text-white text-center">
          <h1 className="text-4xl font-bold">Products & Equipments</h1>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto">
            Trusted medical equipment and care products to support safe,
            comfortable, and independent living at home.
          </p>
        </section>

        {/* MEDICAL EQUIPMENT */}
        <Section title="Medical Equipment">
          <ProductCard title="Hospital Bed" href="/products/hospital-bed" />
          <ProductCard title="Wheelchair" href="/products/wheelchair" />
          <ProductCard title="Oxygen Concentrator" href="/products/oxygen-concentrator" />
          <ProductCard title="Mobility Aids & Walkers" href="/products/mobility-aids" />
        </Section>

        {/* HEALTH MONITORING */}
        <Section title="Health Monitoring Devices">
          <ProductCard title="Blood Pressure Monitor" href="/products/bp-monitor" />
          <ProductCard title="Glucometer" href="/products/glucometer" />
          <ProductCard title="Pulse Oximeter" href="/products/pulse-oximeter" />
        </Section>

        {/* DAILY CARE */}
        <Section title="Daily Care Products">
          <ProductCard title="Adult Diapers" href="/products/adult-diapers" />
        </Section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 text-center">
          <h2 className="text-2xl font-semibold text-[#1C5F62]">
            Need Help Choosing the Right Product?
          </h2>
          <p className="mt-3 text-gray-600">
            Register with CareKov to enquire about availability, pricing, and delivery.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="mt-6 bg-[#317C82] text-white px-6 py-3 rounded-md"
          >
            Register to Enquire
          </button>
        </section>

      </main>

      <Footer />

      {/* REGISTER REQUIRED POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
            <h3 className="text-xl font-semibold text-[#1C5F62]">
              Registration Required
            </h3>
            <p className="mt-3 text-gray-600">
              To enquire about products and equipment, please register first.
            </p>

            <div className="mt-6 flex gap-4 justify-center">
              <button
                onClick={() => router.push(`/register?redirect=${redirectPath}`)}
                className="px-5 py-2 bg-[#317C82] text-white rounded-md"
              >
                Register
              </button>

              <button
                onClick={() => router.push(`/login?redirect=${redirectPath}`)}
                className="px-5 py-2 border rounded-md"
              >
                Login
              </button>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 text-sm underline text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title, children }: any) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold text-[#1C5F62] mb-10 text-center">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

function ProductCard({ title, href }: any) {
  return (
    <Link href={href}>
      <div className="p-6 border rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
        <h3 className="text-lg font-semibold text-[#317C82]">
          {title}
        </h3>
        <p className="mt-3 text-gray-600">
          High-quality, verified products suitable for elderly care and home use.
        </p>
        <p className="mt-4 text-sm text-[#317C82] font-medium">
          View Details →
        </p>
      </div>
    </Link>
  );
}
