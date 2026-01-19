import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase";
import Link from "next/link";
import AuthLayout from "../../components/auth/AuthLayout";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔒 HARD BLOCK: logged-in users cannot stay on register page
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        window.location.replace("/");
      }
    });
    return () => unsub();
  }, []);

  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all required fields");
      return;
    }

    if (!acceptedTerms) {
      alert("Please accept Terms & Conditions and Privacy Policy");
      return;
    }

    setLoading(true);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user;

      await setDoc(doc(db, "clients", user.uid), {
        uid: user.uid,
        firstName,
        lastName,
        email,
        role: "client",
        profileStatus: "incomplete",
        createdAt: serverTimestamp(),
      });

      window.location.replace("/");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Registration failed");
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your CareKov account"
      subtitle="This will only take a moment. You can complete your profile later."
    >
      <input
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={input}
      />

      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={input}
      />

      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={input}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <label style={terms}>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <span>
          I agree to the{" "}
          <Link href="/terms-and-conditions" target="_blank">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" target="_blank">
            Privacy Policy
          </Link>
        </span>
      </label>

      <button onClick={handleRegister} disabled={loading} style={button}>
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </AuthLayout>
  );
}

/* ---------- styles ---------- */

const input: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  marginTop: 12,
  borderRadius: 8,
  border: "1px solid #ccc",
};

const button: React.CSSProperties = {
  marginTop: 20,
  width: "100%",
  padding: "12px",
  borderRadius: 8,
  background: "#317C82",
  color: "#fff",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};

const terms: React.CSSProperties = {
  display: "flex",
  gap: 8,
  marginTop: 16,
  fontSize: 14,
};
