import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Home Nursing",
      description: "Professional caregivers providing medical assistance at home.",
    },
    {
      title: "Physiotherapy",
      description: "Clinical physiotherapy sessions delivered at your doorstep.",
    },
    {
      title: "Elderly Care Assistance",
      description: "Compassionate support for activities of daily living.",
    },
    {
      title: "Medical Equipment Rental",
      description: "Rent wheelchairs, hospital beds, concentrators and more.",
    },
    {
      title: "Health Monitoring",
      description: "Daily vitals tracking for chronic patients.",
    },
    {
      title: "Medication Management",
      description: "Timely reminders, dispensing support, and refill follow-ups.",
    },
  ];

  return (
    <>
      <Head>
        <title>Services | CareKov</title>
        <meta
          name="description"
          content="Explore CareKov’s home healthcare services including nursing, physiotherapy, elderly care, and medical equipment rentals."
        />
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-[#317C82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg text-white/90">
            Quality healthcare services delivered to your home.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-[#1C5F62] mb-8 text-center">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-[#317C82]">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
