import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import Block from "../../components/Block";

export default function NutritionPrograms() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/services/nutrition-programs";

  return (
    <>
      <Head>
        <title>Nutrition Programs | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">
            Nutrition Programs
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Personalised nutrition plans designed for senior health and chronic care.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          <Block title="Program Includes">
            <li>Diet assessment</li>
            <li>Personalised meal planning</li>
            <li>Condition-specific nutrition</li>
            <li>Regular follow-ups</li>
          </Block>

          <CTA onClick={() => setShowPopup(true)} text="Register for Nutrition Program" />
        </section>
      </main>

      <Footer />
      <AuthPopup show={showPopup} setShow={setShowPopup} redirect={redirectPath} />
    </>
  );
}
