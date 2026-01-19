import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase";
import Header from "../../components/Header";

export default function ProviderDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [profileStatus, setProfileStatus] = useState("incomplete");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace("/dashboard/provider");
        return;
      }

      const snap = await getDoc(doc(db, "providers", user.uid));
      if (!snap.exists()) {
        router.replace("/");
        return;
      }

      setFirstName(snap.data().firstName || "");
      setProfileStatus(snap.data().profileStatus || "incomplete");
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return null;

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold">
          Welcome, {firstName}
        </h1>

        <p className="mt-4 text-gray-600">
          Provider profile status:{" "}
          <strong>{profileStatus}</strong>
        </p>

        {profileStatus !== "complete" && (
          <button
            onClick={() => router.push("/profile/provider-complete")}
            className="mt-6 px-6 py-3 bg-[#317C82] text-white rounded-md"
          >
            Complete provider profile
          </button>
        )}
      </main>
    </>
  );
}
