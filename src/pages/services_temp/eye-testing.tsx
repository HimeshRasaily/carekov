import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";

export default function EyeTesting() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/services/eye-testing";

  return (
    <>
      <Head>
        <title>Eye Testing at Home | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Eye Testing at Home
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Professional eye examinations conducted at home for comfort and ease.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <Block title="What’s Included">
            <li>Vision assessment</li>
            <li>Refraction testing</li>
            <li>Prescription guidance</li>
            <li>Follow-up recommendations</li>
          </Block>

          <CTA onClick={() => setShowPopup(true)} text="Register to Book Eye Test" />
        </section>
      </main>

      <Footer />
      <AuthPopup show={showPopup} setShow={setShowPopup} redirect={redirectPath} />
    </>
  );
}
