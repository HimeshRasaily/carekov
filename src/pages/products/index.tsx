import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function ProductsIndex() {
  return (
    <>
      <Head>
        <title>Products | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Our Products</h1>
          <p className="mt-4 text-gray-600">
            Essential medical and care products for home and elderly care.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Adult Diapers", "adult-diapers"],
            ["BP Monitor", "bp-monitor"],
            ["Glucometer", "glucometer"],
            ["Hospital Bed", "hospital-bed"],
            ["Mobility Aids", "mobility-aids"],
            ["Oxygen Concentrator", "oxygen-concentrator"],
            ["Pulse Oximeter", "pulse-oximeter"],
            ["Wheelchair", "wheelchair"],
          ].map(([name, slug]) => (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className="border p-6 rounded-md hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-[#1C5F62]">{name}</h2>
              <p className="text-gray-600 mt-2">View details</p>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
