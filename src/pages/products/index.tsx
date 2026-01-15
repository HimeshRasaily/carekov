import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

const products = [
  {
    name: "Adult Diapers",
    slug: "adult-diapers",
    desc: "Comfortable, absorbent diapers for dignity and daily hygiene.",
    icon: "🩲",
  },
  {
    name: "BP Monitor",
    slug: "bp-monitor",
    desc: "Accurate blood pressure monitoring at home.",
    icon: "🩺",
  },
  {
    name: "Glucometer",
    slug: "glucometer",
    desc: "Reliable blood sugar testing for diabetic care.",
    icon: "🩸",
  },
  {
    name: "Hospital Bed",
    slug: "hospital-bed",
    desc: "Adjustable beds designed for long-term patient comfort.",
    icon: "🛏️",
  },
  {
    name: "Mobility Aids",
    slug: "mobility-aids",
    desc: "Walkers and aids to support safe movement.",
    icon: "🦯",
  },
  {
    name: "Oxygen Concentrator",
    slug: "oxygen-concentrator",
    desc: "Continuous oxygen support for respiratory care.",
    icon: "🫁",
  },
  {
    name: "Pulse Oximeter",
    slug: "pulse-oximeter",
    desc: "Monitor oxygen saturation and pulse instantly.",
    icon: "📟",
  },
  {
    name: "Wheelchair",
    slug: "wheelchair",
    desc: "Durable wheelchairs for everyday mobility needs.",
    icon: "♿",
  },
];

export default function ProductsIndex() {
  return (
    <>
      <Head>
        <title>Products | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
       <section className="bg-gradient-to-r from-[#1C5F62] to-[#2E8B8B] py-24 text-center px-4">
  <h1 className="text-4xl font-bold text-white">
    Our Products
  </h1>

  <p className="mt-4 text-white/90 max-w-3xl mx-auto">
    Essential medical and elderly care products curated for comfort,
    safety, and home healthcare needs.
  </p>

  <div className="mt-8 w-24 h-1 bg-[#E6C87A] mx-auto rounded-full"></div>
</section>


        {/* Product Grid */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group border rounded-xl p-6 hover:shadow-lg transition bg-white"
              >
                <div className="text-4xl mb-4">{p.icon}</div>

                <h2 className="text-xl font-semibold text-[#1C5F62] group-hover:underline">
                  {p.name}
                </h2>

                <p className="mt-2 text-gray-600 text-sm">
                  {p.desc}
                </p>

                <div className="mt-4 text-[#1C5F62] font-medium">
                  View details →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
