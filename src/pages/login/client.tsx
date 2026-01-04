import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function ClientLogin() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-[#317C82] text-white py-14 text-center">
        <h1 className="text-4xl font-bold">Client Login</h1>
        <p className="mt-3 text-lg text-white/90">
          Access your Carekov dashboard and manage your services easily.
        </p>
      </section>

      {/* LOGIN FORM */}
      <section className="max-w-md mx-auto px-4 py-16">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-xl shadow-sm p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-medium text-[#1C5F62]">
                Registered Mobile Number
              </label>
              <input
                type="tel"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1C5F62]">OTP</label>
              <input
                type="number"
                required
                className="mt-2 w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#317C82]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#317C82] text-white rounded-md text-lg hover:opacity-90"
            >
              Log In
            </button>
          </form>
        ) : (
          <div className="p-10 border rounded-xl bg-green-50 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-[#317C82]">
              Login successful!
            </h2>
            <p className="text-[#1C5F62] mt-3">
              Redirecting you to your dashboard...
            </p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
