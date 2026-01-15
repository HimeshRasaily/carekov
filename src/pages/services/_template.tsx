import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

type ServiceTemplateProps = {
  title: string;
  description: string;
  includes: string[];
};

export default function ServiceTemplate({
  title,
  description,
  includes,
}: ServiceTemplateProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white">
        <section className="bg-gray-50 py-20 text-center px-4">
          <h1 className="text-4xl font-bold text-[#1C5F62]">{title}</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-[#1C5F62] mb-4">
            What’s Included
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {includes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <button
              onClick={() => router.push("/book-appointment")}
              className="bg-[#1C5F62] text-white px-8 py-3 rounded-md hover:bg-[#174e50] transition"
            >
              Book Appointment
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
