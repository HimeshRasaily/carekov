import React from 'react';

// CareKov Homepage - Single-file React component (Tailwind CSS + shadcn conventions)
// Default export: CareKovHomepage
// Notes: - Tailwind utility classes used. - Replace icons with lucide-react or other icon set as needed.
//        - Meant to be dropped into a Next.js / React app that already includes Tailwind.

const FeatureCard: React.FC<{title: string; desc: string; icon?: React.ReactNode}> = ({title, desc, icon}) => (
  <div className="bg-white/80 dark:bg-slate-800/60 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
        {icon ?? <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
      </div>
    </div>
  </div>
);

export default function CareKovHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">

      {/* NAV */}
      <header className="backdrop-blur sticky top-0 z-50 bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">CK</div>
            <div>
              <span className="font-semibold">CareKov</span>
              <div className="text-xs text-slate-500 dark:text-slate-400">Care coordination, simplified</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button className="ml-4 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm">Get started</button>
          </nav>
          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2 rounded-md">☰</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              CareKov — coordinate medical care, simply.
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              A platform for caregivers, clinics and families to schedule, monitor and record medical tasks securely — with easy auditing and clear roles.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium">Request demo</a>
              <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700">Explore features</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-xs text-sm text-slate-500">
              <div>HIPAA-ready workflows</div>
              <div>Offline-first caching</div>
              <div>Blockchain verification option</div>
              <div>Role-based access</div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-[16/11] bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md flex items-center justify-center">
              <div className="text-center p-6">
                <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium mb-4">Dashboard</div>
                <div className="text-slate-600 dark:text-slate-300">App mockup / screenshot goes here</div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-4 text-xs text-slate-500">Live demo available</div>
          </div>
        </section>

        {/* TRUST */}
        <section className="mt-12 flex items-center justify-between gap-4 bg-white/60 dark:bg-slate-900/40 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
          <div className="text-sm text-slate-600 dark:text-slate-300">Trusted by clinics, caregivers and families</div>
          <div className="flex items-center gap-4 opacity-80 text-sm">
            <div>Hospital A</div>
            <div>Clinic B</div>
            <div>CareCircle</div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-12">
          <h2 className="text-2xl font-semibold">Key features</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
            Everything you need to manage clinical tasks, schedules and permissioned access in one place.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Clinical Tasks & Checklists" desc="Create step-by-step tasks (e.g., medication, wound care) with timestamps and verification." />
            <FeatureCard title="Role-based Access" desc="Assign permissions to caregivers, nurses, and family members. Clear audit trail for every action." />
            <FeatureCard title="Offline-first & Sync" desc="Work even without internet; data syncs securely when online. Ideal for low-connectivity areas." />
            <FeatureCard title="Audit & Verification" desc="Immutable logs and optional blockchain anchoring for critical records." />
            <FeatureCard title="Scheduling & Reminders" desc="Smart reminders and calendar integrations to reduce missed care tasks." />
            <FeatureCard title="Reporting & Exports" desc="Generate reports for clinicians, admin, or families—CSV & PDF export ready." />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="mt-12">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="text-xl font-semibold">1. Add patient & team</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Create a patient profile and add caregivers with roles.</p>
            </div>
            <div className="p-5 bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="text-xl font-semibold">2. Assign tasks</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Create checklists, attachments and verification steps for each task.</p>
            </div>
            <div className="p-5 bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-700">
              <div className="text-xl font-semibold">3. Audit & report</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">All actions are recorded — export or anchor to verify authenticity.</p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Who benefits</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800/40">
              <h3 className="font-semibold">Hospitals & Clinics</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Standardize task workflows across departments for compliance.</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-emerald-50 dark:from-slate-800/40">
              <h3 className="font-semibold">Home Care Agencies</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Assign home nurses and track visits, vitals and meds seamlessly.</p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-yellow-50 dark:from-slate-800/40">
              <h3 className="font-semibold">Families & Caregivers</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Keep family informed and provide auditable task completion history.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What users say</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="p-5 bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-200">"CareKov reduced missed meds by 83% in our ward."</p>
              <footer className="mt-3 text-sm text-slate-500">— Dr. Ananya, Hospital Admin</footer>
            </blockquote>
            <blockquote className="p-5 bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-200">"Offline sync saved us during a power outage — lifesaver."</p>
              <footer className="mt-3 text-sm text-slate-500">— CareCircle Agency</footer>
            </blockquote>
            <blockquote className="p-5 bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-200">"Easy to train staff; clean audit trails for compliance."</p>
              <footer className="mt-3 text-sm text-slate-500">— Clinic Manager</footer>
            </blockquote>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">Flexible plans for clinics, agencies and small teams. Contact us for enterprise pricing.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white/60">
              <div className="text-sm font-medium">Startup</div>
              <div className="mt-2 text-3xl font-extrabold">₹0</div>
              <div className="mt-2 text-sm text-slate-600">Limited features — great for testing and small teams.</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Up to 3 patients</li>
                <li>Basic tasks & reminders</li>
                <li>Email support</li>
              </ul>
              <button className="mt-6 w-full px-4 py-3 bg-indigo-600 text-white rounded-xl">Start free</button>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white/60">
              <div className="text-sm font-medium">Pro</div>
              <div className="mt-2 text-3xl font-extrabold">₹999/mo</div>
              <div className="mt-2 text-sm text-slate-600">For clinics and growing agencies.</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Unlimited patients</li>
                <li>Offline sync & reports</li>
                <li>Priority support</li>
              </ul>
              <button className="mt-6 w-full px-4 py-3 bg-indigo-600 text-white rounded-xl">Get Pro</button>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-700 bg-white/60">
              <div className="text-sm font-medium">Enterprise</div>
              <div className="mt-2 text-3xl font-extrabold">Custom</div>
              <div className="mt-2 text-sm text-slate-600">Tailored for hospitals with compliance & SSO needs.</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Dedicated onboarding</li>
                <li>Custom integrations</li>
                <li>Audit & compliance support</li>
              </ul>
              <button className="mt-6 w-full px-4 py-3 border border-indigo-600 text-indigo-600 rounded-xl">Contact sales</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-3">
            <details className="p-4 rounded-lg bg-white/60 border border-slate-100 dark:border-slate-700">
              <summary className="font-medium">Is CareKov HIPAA compliant?</summary>
              <p className="mt-2 text-sm text-slate-600">We provide a HIPAA-ready deployment; contact us for compliance details and hosting options.</p>
            </details>
            <details className="p-4 rounded-lg bg-white/60 border border-slate-100 dark:border-slate-700">
              <summary className="font-medium">Does it work offline?</summary>
              <p className="mt-2 text-sm text-slate-600">Yes — the app is designed offline-first using local caching and reliable sync when network returns.</p>
            </details>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="p-6 rounded-2xl bg-indigo-600 text-white">
            <h3 className="text-xl font-semibold">Ready to improve care coordination?</h3>
            <p className="mt-2 text-sm opacity-90">Request a demo or talk to our team about deployment and compliance.</p>
            <div className="mt-4">
              <a href="/demo" className="inline-block px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium">Request demo</a>
            </div>
          </div>

          <form className="p-6 rounded-2xl bg-white/60 border border-slate-100 dark:border-slate-700">
            <label className="block text-sm">Name</label>
            <input className="mt-1 w-full rounded-md p-2 border border-slate-200 dark:border-slate-700 bg-transparent" />
            <label className="block text-sm mt-3">Email</label>
            <input className="mt-1 w-full rounded-md p-2 border border-slate-200 dark:border-slate-700 bg-transparent" />
            <label className="block text-sm mt-3">Message</label>
            <textarea className="mt-1 w-full rounded-md p-2 border border-slate-200 dark:border-slate-700 bg-transparent" rows={4}></textarea>
            <button type="submit" className="mt-4 w-full px-4 py-3 bg-indigo-600 text-white rounded-xl">Send request</button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-700 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} CareKov — All rights reserved.</div>
          <div className="text-sm flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
