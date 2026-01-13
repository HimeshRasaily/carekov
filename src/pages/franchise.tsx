import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FranchisePartnership() {
  return (
    <>
      <Head>
        <title>Franchise Partnership | CareKov</title>
        <meta
          name="description"
          content="Partner with CareKov through our franchise program and bring trusted elderly care services to your community."
        />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        <h1 className="text-3xl font-bold text-[#1C5F62] mb-8">
          Franchise Partnership
        </h1>

        <section className="space-y-6 leading-relaxed">
          <p>
            At Carekov, we are committed to expanding access to quality elderly
            care across communities. Our Franchise Partnership program offers a
            unique opportunity for entrepreneurs and healthcare professionals
            to join our mission and bring trusted care services to more seniors.
          </p>

          <h2 className="text-2xl font-semibold text-[#317C82] mt-12">
            Why Partner with Carekov?
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Proven Business Model:</strong> Leverage our established
              brand, systems, and operational support to start and grow your
              Carekov franchise.
            </li>
            <li>
              <strong>Comprehensive Training:</strong> Receive thorough training
              in elderly care services, customer support, and business management.
            </li>
            <li>
              <strong>Marketing Support:</strong> Benefit from national and local
              marketing campaigns, promotional materials, and online visibility.
            </li>
            <li>
              <strong>Exclusive Territories:</strong> Gain access to protected
              regions, ensuring a focused and sustainable approach to growth.
            </li>
            <li>
              <strong>Ongoing Assistance:</strong> From operations to product
              sourcing, our team provides continuous guidance to ensure success.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#317C82] mt-12">
            Who Can Join?
          </h2>

          <p>
            Entrepreneurs, healthcare professionals, or individuals passionate
            about elderly care and community well-being are welcome to apply. No
            prior healthcare experience is required, as full training is provided.
          </p>

          <h2 className="text-2xl font-semibold text-[#317C82] mt-12">
            How to Apply
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Fill out the franchise inquiry form.</li>
            <li>Attend an initial consultation and briefing session.</li>
            <li>Complete training and set up your Carekov franchise.</li>
            <li>
              Start providing exceptional elderly care services in your region.
            </li>
          </ol>

          <p className="mt-10 font-medium">
            Join the Carekov family and help create safer, healthier, and more
            comfortable lives for seniors everywhere. Together, we can make a
            meaningful difference.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
