"use client";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";


export default function Home() {
  return (
    <>
      <Head>
        <title>Carekov —  Old Age & Medical Care at Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Preview Section */}
<AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-[#1C5F62] text-center">

            Our Services
          </h2>

          <div className="p-6 border rounded-xl bg-white
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-lg">

            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold text-[#317C82]">Home Nursing</h3>
              <p className="mt-2 text-gray-600">
                Professional caregivers providing medical assistance at home.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold text-[#317C82]">Physiotherapy</h3>
              <p className="mt-2 text-gray-600">
                Physiotherapy sessions tailored for recovery & rehabilitation.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold text-[#317C82]">Elderly Care</h3>
              <p className="mt-2 text-gray-600">
                Assistance for daily activities, companionship, and wellness support.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/services"
              className="px-6 py-3 rounded-md bg-[#317C82] text-white hover:opacity-90"
            >
              View All Services
            </a>
          </div>
        </section>
</AnimatedSection>

        {/* WHY CHOOSE CAREKOV */}

<AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-[#1C5F62] text-center mb-10">
            Why Choose CareKov?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-[#317C82]">Compassionate Care</h3>
              <p className="text-gray-600 mt-2">
                Our caregivers treat every patient like family.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold text-[#317C82]">Medical Expertise</h3>
              <p className="text-gray-600 mt-2">
                Experienced and certified healthcare professionals.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-lg font-semibold text-[#317C82]">Fast Response</h3>
              <p className="text-gray-600 mt-2">
                Quick appointment scheduling without delays.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-lg font-semibold text-[#317C82]">Care At Home</h3>
              <p className="text-gray-600 mt-2">
                Receive trusted care in the comfort of your home.
              </p>
            </div>
          </div>
        </section>
</AnimatedSection>

        {/* CTA BANNER */}
<AnimatedSection>
        <section className="bg-[#317C82] py-14 text-center text-white mt-4">
          <h2 className="text-3xl font-semibold">
            Carekov delivers care, not just service.
          </h2>
          <p className="mt-3 text-white/85">
            Experience compassionate healthcare tailored to your needs.
          </p>
          <a
            href="/book-appointment"
            className="inline-block mt-6 px-8 py-3 bg-[#D3A24C] text-[#1C5F62] font-semibold rounded-md hover:opacity-90"
          >
            Book Now
          </a>
	
        </section>
</AnimatedSection>

        {/* Contact Preview Section */}
<AnimatedSection>
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#317C82]">
                Need Help?
              </h3>
              <p className="text-gray-600 mt-3">
                Contact our care advisors for guidance or support.
              </p>

              <a
                href="/contact"
                className="inline-block mt-5 px-6 py-3 bg-[#D3A24C] text-white rounded-md hover:opacity-90"
              >
                Contact Us
              </a>
            </div>

            <div className="flex-1 bg-white border rounded-xl shadow-sm p-6">
              <h4 className="text-lg font-semibold text-[#1C5F62]">Quick Inquiry</h4>

              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-md px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-md px-3 py-2"
                />
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full border rounded-md px-3 py-2"
                ></textarea>

                <button
                  type="button"
                  className="w-full py-3 bg-[#317C82] text-white rounded-md hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
</AnimatedSection>
      </main>

      <Footer />
    </>
  );
}
