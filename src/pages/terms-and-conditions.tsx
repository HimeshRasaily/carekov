import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | CareKov</title>
        <meta
          name="description"
          content="Read the Terms and Conditions governing the use of CareKov services, including elderly care, medical assistance, subscriptions, and platform usage."
        />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16 text-gray-700">
        <h1 className="text-3xl font-bold text-[#1C5F62] mb-8">
          Terms and Conditions
        </h1>

        <section className="space-y-6 text-sm leading-relaxed">

          <p>
            The below mentioned terms and conditions (“Terms”) constitute a binding
            and enforceable legal contract between Carekov.com website and app owned
            and managed by MS HYGIENE INDUSTRIES, a Proprietorship company with its
            registered address at 113, Rajprabha Industrial Enclave, Bhoidapada,
            Vasai-East, Palghar, Maharashtra – 401208 (“Carekov”, “We”, “Us”, or
            “Our”) and you, a user of the Services (“you” or “Customer”).
          </p>

          <p>
            By using the Services, you represent and warrant that you have full
            legal capacity and authority to agree to and bind yourself to these
            Terms. If you represent any other person, you confirm that you have the
            necessary power and authority to bind such person to these Terms.
          </p>

          <p>
            These Terms and Conditions constitute a valid and binding legal
            agreement between Carekov, a platform engaged in providing elderly /
            old age / senior citizen care at home, medical assistance, healthcare
            coordination, assistance, and allied services, and the individual or
            entity availing such services.
          </p>

          <p>
            These Terms supersede any prior oral or written understandings relating
            to the services.
          </p>

          <h2 className="text-xl font-semibold text-[#317C82] mt-10">
            About CareKov
          </h2>

          <p>
            Carekov is dedicated to providing compassionate, reliable, and
            personalized elderly care at home via independent attendants /
            caretakers (“CareTakers”) for the Patient. Carekov has engaged
            independent agencies to provide these CareTakers.
          </p>

          <p>
            The agencies are mandated to conduct background checks, police
            verification, and experience verification through independent
            background verification companies. The services are provided by
            CareTakers and not directly by Carekov.
          </p>

          <h2 className="text-xl font-semibold text-[#317C82] mt-10">
            Basic Agreement
          </h2>

          <p>
            The Customer requests Carekov to provide personalized elderly care at
            home or another agreed location. You acknowledge that the service is
            advised by a legal medical practitioner and undertake responsibility
            for the service and associated risks.
          </p>

          <p>
            Carekov does not guarantee recovery or outcomes and is not responsible
            for service errors, criminal activity, or misconduct by CareTakers.
          </p>

          <p>
            You acknowledge that the services involve inherent risks including
            adverse effects, mortality, or permanent disability.
          </p>

          <p>
            You agree to provide a safe environment for CareTakers and authorize
            Carekov to collect and use patient data for service delivery purposes.
          </p>

          <p>
            All payments must be made as agreed and are non-refundable, including
            in cases of service lapse, early termination, or death of the patient.
          </p>

          <h2 className="text-xl font-semibold text-[#317C82] mt-10">
            1. Definitions
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Carekov:</strong> The platform facilitating elder care services.</li>
            <li><strong>CareKov App:</strong> The application providing services.</li>
            <li><strong>Homecare Services:</strong> Services delivered at home.</li>
            <li><strong>Customer:</strong> Person availing or paying for services.</li>
            <li><strong>Elder:</strong> Individual aged 55 years or above.</li>
            <li><strong>Care Taker:</strong> Nurses, attendants, or support staff.</li>
            <li><strong>Member:</strong> Elder covered under subscription plans.</li>
            <li><strong>VAS:</strong> Value Added Services.</li>
            <li><strong>NoK:</strong> Next of Kin.</li>
            <li><strong>Services:</strong> All services offered by Carekov.</li>
            <li><strong>Products / Equipment / Lab Tests:</strong> Items or tests availed.</li>
            <li><strong>Service Fee:</strong> Amount charged by Carekov.</li>
            <li><strong>Subscription Plan:</strong> Structured care plan.</li>
            <li><strong>Franchise Partner:</strong> Authorized local service partner.</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#317C82] mt-10">
            Governing Law and Jurisdiction
          </h2>

          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of India. All disputes shall be subject to the exclusive
            jurisdiction of courts in Mumbai.
          </p>

          <h2 className="text-xl font-semibold text-[#317C82] mt-10">
            Amendments & Severability
          </h2>

          <p>
            Carekov reserves the right to amend these Terms at any time. Continued
            use of services constitutes acceptance of updated Terms.
          </p>

          <p>
            If any provision is held invalid or unenforceable, the remaining
            provisions shall remain in effect.
          </p>

        </section>
      </main>

      <Footer />
    </>
  );
}
