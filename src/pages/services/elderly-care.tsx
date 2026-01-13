"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";

export default function ElderlyCareService() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Elderly Care Services | CareKov</title>
      </Head>

      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">Elderly Care</h1>

        <p className="mb-6 text-gray-600">
          Professional elderly care services at home, including daily assistance,
          medical support, and companionship.
        </p>

        <button
          onClick={() => router.push("/auth/login")}
          className="px-6 py-3 bg-[#317C82] text-white rounded-lg"
        >
          Book Now
        </button>
      </main>
    </>
  );
}
