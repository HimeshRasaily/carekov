import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function Glucometer() {
  const router = useRouter();

  return (
    <>
      <Head><title>Glucometer | CareKov</title></Head>
      <Header />

      <main className="min-h-screen bg-white">
        <section className="bg-gray-50 py-20 text-center px-4">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Glucometer</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Reliable glucometers for blood sugar monitoring at home.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-6">
          <ul className="list-disc list-inside text-gray-700">
            <li>Fast readings</li>
            <li>Accurate results</li>
            <li>Easy operation</li>
          </ul>

          <div className="text-center">
            <button
              onClick={() => router.push("/book-appointment")}
              className="bg-[#1C5F62] text-white px-8 py-3 rounded-md"
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
