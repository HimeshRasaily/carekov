import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../lib/firebase/firebase";
import Link from "next/link";

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
      // 1️⃣ Create Auth user
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = result.user;

      // 2️⃣ Create Firestore client document
      await setDoc(doc(db, "clients", user.uid), {
        uid: user.uid,
        firstName,
        lastName,
        email,
        role: "client",
        profileComplete: false,
        createdAt: serverTimestamp(),
      });

      // 3️⃣ Redirect (homepage will wait for auth hydration)
      window.location.replace("/");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Registration failed");
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <h2>Create your CareKov account</h2>
      <p style={{ color: "#555", marginBottom: 24 }}>
        This will only take a moment. You can complete your profile later.
      </p>

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
    </div>
  );
}

/* ---------- styles ---------- */

const container: React.CSSProperties = {
  maxWidth: 420,
  margin: "40px auto",
  padding: 20,
  fontFamily: "system-ui, sans-serif",
};

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
