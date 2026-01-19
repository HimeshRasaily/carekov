import { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ClientLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);

      const cred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 🔒 Ensure this user is a CLIENT
      const ref = doc(db, "clients", cred.user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await auth.signOut();
        setError("This account is not registered as a Client");
        return;
      }

      router.replace("/");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Login as Client"
      subtitle="Access your CareKov account and manage your services"
    >
      <form onSubmit={handleLogin}>
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
          {loading ? "Logging in..." : "Login"}
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
