import { useState } from "react";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase";
import AuthLayout from "../../components/auth/AuthLayout";

export default function RegisterProvider() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!firstName || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const cred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "providers", cred.user.uid), {
        uid: cred.user.uid,
        role: "provider",
        firstName,
        email,
        createdAt: serverTimestamp(),
        profileStatus: "incomplete",
      });

      router.replace("/");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Register as Service Provider"
      subtitle="Create your account to start offering services on CareKov"
    >
      <form onSubmit={handleRegister}>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={input}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

        <button disabled={loading} style={button}>
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
    </AuthLayout>
  );
}

/* ---------- styles ---------- */

const input: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  marginTop: 14,
  borderRadius: 8,
  border: "1px solid #ccc",
};

const button: React.CSSProperties = {
  marginTop: 24,
  width: "100%",
  padding: "14px",
  borderRadius: 10,
  background: "#317C82",
  color: "#fff",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};
