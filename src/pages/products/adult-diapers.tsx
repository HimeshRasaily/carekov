import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AdultDiapers() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const redirectPath = "/products/adult-diapers";

  return (
    <>
      <Head>
        <title>Adult Diapers | CareKov</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#1C5F62]">Adult Diapers</h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Comfortable and absorbent adult diapers designed for dignity and hygiene.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16 space-y-14">
          <Block title="Product Overview">
            <p>
              Adult diapers are designed to manage incontinence discreetly while maintaining comfort and skin safety.
            </p>
          </Block>

          <Block title="Key Features">
            <ul>
              <li>High absorbency</li>
              <li>Comfortable fit</li>
              <li>Odour control</li>
              <li>Skin-friendly materials</li>
            </ul>
          </Block>

          <Block title="Ideal For">
            <ul>
              <li>Seniors with incontinence</li>
              <li>Bedridden patients</li>
              <li>Long-term care needs</li>
            </ul>
          </Block>

          <Block title="Availability">
            <ul>
              <li>Available on enquiry</li>
              <li>Bulk supply options available</li>
            </ul>
          </Block>

          <CTA onClick={() => setShowPopup(true)} text="Register to Enquire" />
        </section>
      </main>

      <Footer />
      {showPopup && <AuthPopup onClose={() => setShowPopup(false)} redirect={redirectPath} />}
    </>
  );
}
