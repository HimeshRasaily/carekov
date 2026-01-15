import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function AdultDiapers() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Adult Diapers | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white">
        <section className="bg-gray-50 py-20 text-center px-4">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Adult Diapers</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Comfortable and absorbent adult diapers designed for dignity and hygiene.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#1C5F62] mb-3">
              Product Overview
            </h2>
            <p className="text-gray-700">
              Adult diapers help manage incontinence discreetly while ensuring comfort,
              skin protection, and confidence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1C5F62] mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>High absorbency</li>
              <li>Comfortable fit</li>
              <li>Odour control</li>
              <li>Skin-friendly materials</li>
            </ul>
          </div>

          <div className="text-center pt-6">
            <button
              onClick={() => router.push("/book-appointment")}
              className="bg-[#1C5F62] text-white px-8 py-3 rounded-md hover:bg-[#174e50]"
            >
              Enquire Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
