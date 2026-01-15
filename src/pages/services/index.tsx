"use client";


import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";


export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | CareKov</title>
        <meta
          name="description"
          content="Explore CareKov’s elderly care services including daily assistance, nursing care, physiotherapy, subscriptions, and emergency support."
        />
      </Head>

      <Header />

      <main className="min-h-screen">

        {/* HERO */}
        <section className="bg-[#317C82] py-20 text-white text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Comprehensive elderly care services designed to support seniors with
            dignity, safety, and compassion.
          </p>
        </section>

        {/* REGULAR SERVICES */}
        <Section title="Regular Care Services">
          <ServiceCard
            title="Errand Assistance"
            desc="Groceries, medicines, bill payments, appointment booking, and product or equipment requirements."
            link="/services/errand-assistance"
          />
          <ServiceCard
            title="Daily Living Assistance"
            desc="Support with bathing, hygiene, mobility, feeding, and toilet assistance for safe daily living."
            link="/services/daily-living-assistance"
          />
          <ServiceCard
            title="Nursing & Health Monitoring"
            desc="Regular vitals monitoring, medication administration, and basic wound care by trained nurses."
            link="/services/nursing-health-monitoring"
          />
        </Section>

        {/* ON-DEMAND SERVICES */}
        <Section title="On-Demand Medical Services">
          <ServiceCard
            title="Advanced Nursing (On-Call)"
            desc="Certified nurse visits for medication administration, wound care, and clinical monitoring."
            link="/services/advanced-nursing"
          />
          <ServiceCard
            title="Physiotherapy at Home"
            desc="Licensed physiotherapist sessions for pain management, rehabilitation, and mobility improvement."
            link="/services/physiotherapy"
          />
          <ServiceCard
            title="Medical Coordination Services"
            desc="Coordination for doctor visits, lab tests, medicines, equipment, vaccinations, and hospitalization."
            link="/services/medical-coordination"
          />
          <ServiceCard
            title="Vaccination at Home"
            desc="Safe and convenient vaccination services delivered at home by trained professionals."
            link="/services/vaccination-at-home"
          />
          <ServiceCard
            title="Eye Testing at Home"
            desc="Professional eye check-ups and vision assessments conducted at home."
            link="/services/eye-testing"
          />
          <ServiceCard
            title="Nutrition Programs"
            desc="Personalized diet plans and nutritional guidance for seniors and chronic care needs."
            link="/services/nutrition-programs"
          />
          <ServiceCard
            title="Teleconsultation – General Doctor"
            desc="Remote consultations with general physicians for quick medical advice."
            link="/services/teleconsultation-general"
          />
          <ServiceCard
            title="Teleconsultation – Specialist"
            desc="Online consultations with specialists including neurologists, psychologists, geriatricians, and more."
            link="/services/teleconsultation-specialist"
          />
        </Section>

        {/* SUBSCRIPTION PLANS */}
        <Section title="Subscription-Based Care Plans">
          <PlanCard
            title="Basic Care Subscription"
            desc="For independent seniors needing light support and regular check-ins."
          />
          <PlanCard
            title="Companion Care Subscription"
            desc="For seniors requiring companionship and daily assistance."
          />
          <PlanCard
            title="Comprehensive Elder Care Plan"
            desc="End-to-end elderly care with dedicated care management and medical coordination."
          />
        </Section>

        {/* EMERGENCY & POST HOSPITAL */}
        <Section title="Emergency & Recovery Support">
          <PlanCard
            title="Emergency Assistance"
            desc="Ambulance coordination, hospital admission support, and family notification during emergencies."
            cta="Get Help"
          />
          <PlanCard
            title="Post-Hospitalisation Care"
            desc="Structured recovery support including monitoring, medication coordination, and follow-up care."
          />
        </Section>

      </main>

      <Footer />
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ title, children }: any) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-semibold text-[#1C5F62] mb-12 text-center">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, link }: any) {
  return (
    <Link href={link}>
      <div className="p-6 border rounded-xl bg-white hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
        <h3 className="text-xl font-semibold text-[#317C82]">{title}</h3>
        <p className="mt-3 text-gray-600">{desc}</p>
        <p className="mt-4 text-sm font-medium text-[#317C82]">
          View Details →
        </p>
      </div>
    </Link>
  );
}

function PlanCard({ title, desc, cta = "Enquire Now" }: any) {
  return (
    <div className="p-6 border rounded-xl bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-[#317C82]">{title}</h3>
      <p className="mt-3 text-gray-600">{desc}</p>
      <button className="mt-6 px-5 py-2 bg-[#D3A24C] text-white rounded-md">
        {cta}
      </button>
    </div>
  );
}
