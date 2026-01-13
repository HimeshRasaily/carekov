import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | CareKov</title>
        <meta
          name="description"
          content="Learn about CareKov’s mission, vision, and commitment to compassionate, reliable elderly care at home."
        />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        <h1 className="text-3xl font-bold text-[#1C5F62] mb-6">
          About CareKov
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Caring for Elders, Where They Belong
        </p>

        <section className="space-y-6 leading-relaxed">
          <p>
            Carekov is dedicated to providing compassionate, reliable, and
            personalized elderly care at home. We believe ageing should be
            supported with dignity, comfort, and respect. By delivering quality
            care in the familiar surroundings of home, we help seniors live safer,
            healthier, and more fulfilling lives.
          </p>

          <p>
            At Carekov, we understand that every elder has unique physical,
            emotional, and medical needs. Our services are designed to support not
            only seniors but also their families by offering peace of mind through
            dependable care, transparent processes, and trained professionals.
          </p>

          <h2 className="text-2xl font-semibold text-[#317C82] mt-12">
            Our Vision
          </h2>

          <p>
            To become a trusted eldercare partner by making quality home-based care
            accessible, affordable, and compassionate, ensuring seniors age with
            dignity, independence, and emotional wellbeing.
          </p>

          <h2 className="text-2xl font-semibold text-[#317C82] mt-12">
            Our Mission
          </h2>

          <p>
            To deliver holistic and dependable elderly care through a strong focus
            on service excellence, empathy, and simplified care solutions guided by
            evidence-based practices and modern care management.
          </p>

          <h2 className="text-2xl font-semibold text-[#317C82] mt-12">
            Our Areas of Care
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Elderly companionship and daily assistance</li>
            <li>Post-hospital and recovery care</li>
            <li>Chronic disease and medication management</li>
            <li>Palliative and comfort care</li>
            <li>Dementia and cognitive support</li>
            <li>Mobility and physiotherapy assistance</li>
            <li>Caregiver support and family coordination</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#317C82] mt-12">
            Why CareKov
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Person-centred care tailored to individual needs</li>
            <li>Trained and verified caregivers</li>
            <li>Comfort and continuity of care at home</li>
            <li>Transparent processes with family involvement</li>
            <li>A balance of compassion and clinical reliability</li>
          </ul>

          <p className="mt-10 font-medium">
            Carekov exists to ensure that ageing is not faced alone but supported
            with care, trust, and humanity.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
