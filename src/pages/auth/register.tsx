import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase";
import { sendEmailOtp, verifyEmailLink } from "../../lib/firebase/auth";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  // 🔐 Auth state
  const [verified, setVerified] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sending, setSending] = useState(false);

  // 🧾 Stage 1 registration state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [saving, setSaving] = useState(false);

  // 🔐 Verify email magic link
  useEffect(() => {
    const run = async () => {
      const ok = await verifyEmailLink();
      if (ok) setVerified(true);
    };
    run();
  }, []);

  // 🔐 Block logged-in users
  useEffect(() => {
    if (auth.currentUser) setVerified(true);
  }, []);

  // Prefill email if available
  useEffect(() => {
    if (auth.currentUser?.email) {
      setEmail(auth.currentUser.email);
    }
  }, []);

  // 📤 Send email OTP (magic link)
  const sendOtp = async () => {
    if (!emailInput) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setSending(true);
      await sendEmailOtp(emailInput);
      setOtpSent(true);
    } catch (err: any) {
      alert(err.message || "Failed to send verification email.");
    } finally {
      setSending(false);
    }
  };

  // ✅ Stage 1 submit
  const handleStage1Submit = async () => {
    if (!firstName || !lastName || !email) {
      alert("Please fill all required fields.");
      return;
    }

    if (!acceptedTerms) {
      alert("Please accept Terms & Conditions and Privacy Policy.");
      return;
    }

    const user = auth.currentUser;
    if (!user) return;

    try {
      setSaving(true);

      await setDoc(
        doc(db, "clients", user.uid),
        {
          uid: user.uid,
          firstName,
          lastName,
          email,
          role: "client",
          isProfileComplete: false,
          termsAccepted: true,
          termsAcceptedAt: serverTimestamp(),
          createdAt: serverTimestamp(),
        },
        { merge: true }
      );

      router.push("/");
    } catch (err) {
      console.error("Stage 1 registration failed", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // 🔐 EMAIL OTP SCREEN
  if (!verified) {
    return (
      <div style={container}>
        <div style={{ marginBottom: 20, fontSize: 14, color: "#666" }}>
          <strong>Step 1:</strong> Verify Email → Step 2: Registration → Step 3: Profile
        </div>

        <h2>Verify your email</h2>
        <p style={{ color: "#555", marginBottom: 16 }}>
          We’ll send you a secure sign-in link. No SMS required.
        </p>

        <input
          placeholder="Email address"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          style={input}
        />

        <button onClick={sendOtp} disabled={sending} style={button}>
          {sending ? "Sending link..." : "Send verification link"}
        </button>

        {otpSent && (
          <p style={{ marginTop: 12, color: "#0f766e" }}>
            Check your email and click the verification link.
          </p>
        )}
      </div>
    );
  }

  // 🧾 STAGE 1 REGISTRATION
  return (
    <div style={container}>
      <h2>Tell us a bit about you</h2>
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

      <button onClick={handleStage1Submit} disabled={saving} style={button}>
        {saving ? "Saving..." : "Continue"}
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
