import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function LaboratoryTesting() {
  const tests = [
    {
      title: "Blood Test",
      slug: "blood-test",
      description:
        "Comprehensive blood testing including CBC, lipid profile, liver and kidney function.",
      sample: "Blood",
      fasting: "Required (8–10 hrs)",
      reportTime: "24–48 Hours",
      elderlyFriendly: true,
    },
    {
      title: "Urine Test",
      slug: "urine-test",
      description:
        "Detailed urine analysis to evaluate kidney function, infection, and hydration levels.",
      sample: "Urine",
      fasting: "Not Required",
      reportTime: "24 Hours",
      elderlyFriendly: true,
    },
    {
      title: "Diabetes Screening",
      slug: "diabetes-screening",
      description:
        "HbA1c, fasting glucose, and post-prandial tests for diabetes monitoring.",
      sample: "Blood",
      fasting: "Required",
      reportTime: "24 Hours",
      elderlyFriendly: true,
    },
    {
      title: "Thyroid Panel",
      slug: "thyroid-panel",
      description:
        "TSH, T3, and T4 tests to diagnose and monitor thyroid conditions.",
      sample: "Blood",
      fasting: "Not Required",
      reportTime: "24–48 Hours",
      elderlyFriendly: true,
    },
    {
      title: "Cardiac Markers",
      slug: "cardiac-markers",
      description:
        "Heart health tests including lipid profile, CK-MB, and troponin markers.",
      sample: "Blood",
      fasting: "May Be Required",
      reportTime: "24 Hours",
      elderlyFriendly: true,
    },
    {
      title: "Vitamin Deficiency Tests",
      slug: "vitamin-deficiency-tests",
      description:
        "Vitamin D, B12, iron and nutrition deficiency panels for fatigue and weakness.",
      sample: "Blood",
      fasting: "Not Required",
      reportTime: "24–48 Hours",
      elderlyFriendly: true,
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#317C82] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">
            Laboratory & Diagnostic Testing at Home
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Safe, accurate, and elderly-friendly lab testing with professional
            home sample collection.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <p className="text-[#1C5F62] text-lg max-w-4xl mx-auto leading-relaxed">
          CareKov provides certified laboratory testing services with trained
          technicians visiting your home. Ideal for elderly patients, chronic
          care monitoring, and preventive health checkups—without hospital visits.
        </p>
      </section>

      {/* Lab Test Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, idx) => (
            <Link
              key={idx}
              href={`/lab-testing/${test.slug}`}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl border bg-white shadow-sm hover:shadow-lg transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-[#317C82]">
                  {test.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  {test.description}
                </p>

                <div className="mt-4 space-y-1 text-sm text-gray-700">
                  <p>
                    <strong>Sample:</strong> {test.sample}
                  </p>
                  <p>
                    <strong>Fasting:</strong> {test.fasting}
                  </p>
                  <p>
                    <strong>Reports:</strong> {test.reportTime}
                  </p>
                </div>

                {test.elderlyFriendly && (
                  <div className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-[#E8F4F5] text-[#317C82] font-semibold">
                    Senior Friendly • Home Collection
                  </div>
                )}

                <div className="mt-6">
                  <span className="inline-block text-sm font-semibold text-[#317C82] group-hover:underline">
                    View Test Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D3A24C] py-12 text-center text-white">
        <h2 className="text-3xl font-semibold">
          Need a Lab Test for Yourself or an Elderly Family Member?
        </h2>
        <p className="mt-3 text-white/90 max-w-xl mx-auto">
          Book a home sample collection with trained professionals. No hospital
          visits required.
        </p>

        <Link
          href="/book-appointment"
          className="inline-block mt-6 px-8 py-3 rounded-md bg-white text-[#317C82] font-semibold hover:opacity-90"
        >
          Book Appointment
        </Link>
      </section>

      <Footer />
    </>
  );
}
