import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LaboratoryTesting() {
  const tests = [
    {
      title: "Blood Test",
      description: "Routine CBC, lipid profile, liver function tests, and more.",
    },
    {
      title: "Urine Test",
      description: "Complete urinalysis and micro analysis for kidney health.",
    },
    {
      title: "Diabetes Screening",
      description: "HbA1c, fasting glucose, and postprandial tests for diabetic care.",
    },
    {
      title: "Thyroid Panel",
      description: "TSH, T3, T4 testing for accurate thyroid condition analysis.",
    },
    {
      title: "Cardiac Markers",
      description: "Troponin, CK-MB, and lipid profiles to check heart health.",
    },
    {
      title: "Vitamin Deficiency Tests",
      description: "Vitamin D, B12, iron deficiency and related metabolic panels.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#317C82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Laboratory & Diagnostic Testing</h1>
          <p className="mt-4 text-lg text-white/90">
            Fast, accurate, and professional lab tests with home sample collection.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-[#1C5F62] text-lg max-w-3xl mx-auto leading-relaxed">
          Carekov provides convenient and professional laboratory testing services with
          certified technicians visiting your home for sample collection. Get timely and
          accurate reports without visiting a diagnostic center.
        </p>
      </section>

      {/* Tests Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {tests.map((test, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-xl font-bold text-[#317C82]">{test.title}</h3>
              <p className="mt-2 text-gray-600">{test.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D3A24C] py-10 text-center text-white">
        <h2 className="text-3xl font-semibold">Need a Lab Test Done?</h2>
        <p className="mt-2 text-white/90">Book home sample collection easily with Carekov.</p>
        <a
          href="/book-appointment"
          className="inline-block mt-5 px-8 py-3 rounded-md bg-white text-[#317C82] font-semibold hover:opacity-90"
        >
          Book Now
        </a>
      </section>

      <Footer />
    </>
  );
}
