import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Block from "../../components/Block";
import CTA from "../../components/CTA";
import { useRouter } from "next/router";

type ProductPageProps = {
  title: string;
  description: string;
  overview: string;
  features: string[];
  idealFor: string[];
};

export default function ProductTemplate({
  title,
  description,
  overview,
  features,
  idealFor,
}: ProductPageProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title} | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gray-50 py-20 text-center px-4">
          <h1 className="text-4xl font-bold text-[#1C5F62]">{title}</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <Block title="Product Overview">
            <p>{overview}</p>
          </Block>

          <Block title="Key Features">
            <ul className="list-disc list-inside space-y-1">
              {features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Block>

          <Block title="Ideal For">
            <ul className="list-disc list-inside space-y-1">
              {idealFor.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Block>

          <CTA
            text="Register to Enquire"
            onClick={() => router.push("/book-appointment")}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
