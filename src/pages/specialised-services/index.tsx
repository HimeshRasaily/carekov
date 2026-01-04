import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SpecialisedServices() {
  const specialised = [
    {
      title: "ICU at Home",
      description:
        "Advanced clinical care at home with trained nurses, monitors, and medical equipment.",
    },
    {
      title: "Post-Surgery Rehabilitation",
      description:
        "Specialised recovery programs with physiotherapists and visiting clinicians.",
    },
    {
      title: "Dementia & Alzheimer's Care",
      description:
        "Expert caregivers trained for memory care, behaviour management, and family support.",
    },
    {
      title: "Chronic Disease Management",
      description:
        "Long-term clinical and lifestyle support for cardiac, diabetic, and respiratory patients.",
    },
    {
      title: "Palliative Care",
      description:
        "Comfort-focused care with emotional, physical, and spiritual support for patients and families.",
    },
    {
      title: "Advanced Lab Sample Collection",
      description:
        "Home collection for specialised tests requiring controlled handling.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#D3A24C] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Specialised Services</h1>
          <p className="mt-4 text-lg text-white/90">
            High-level medical and rehabilitative care powered by Carekov.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-[#1C5F62] mb-8 text-center">
          Explore Our Specialised Care Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {specialised.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-xl font-bold text-[#317C82]">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
