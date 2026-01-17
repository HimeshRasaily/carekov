import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, ConfirmationResult } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";
import {
  sendPhoneOtp,
  sendEmailOtp,
  isPhoneNumber,
  isEmail,
  verifyEmailLink,
} from "../../lib/firebase/auth";

export default function RegisterPage() {
  const router = useRouter();
  const auth = getAuth();

  // 🔐 OTP & auth state
  const [verified, setVerified] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  // 🧾 Registration state
  const [careFor, setCareFor] = useState<"self" | "parent" | "">("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    relation: "",
  });

  // 🔐 Handle email magic link
  useEffect(() => {
    const run = async () => {
      const emailVerified = await verifyEmailLink();
      if (emailVerified) setVerified(true);
    };
    run();
  }, []);

  // 🔐 Handle existing login
  useEffect(() => {
    if (auth.currentUser) setVerified(true);
  }, [auth.currentUser]);

  // ⏳ OTP resend cooldown
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((c) => c - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCooldown]);

  // 📤 Send OTP
  const sendOtp = async () => {
    setSending(true);

    try {
      if (isPhoneNumber(identifier)) {
        const result = await sendPhoneOtp(identifier);
        setConfirmationResult(result);
        setOtpSent(true);
        setResendCooldown(30);
      } else if (isEmail(identifier)) {
        await sendEmailOtp(identifier);
        setOtpSent(true);
        setResendCooldown(30);
      } else {
        alert("Please enter a valid phone number or email");
      }
    } catch (err: any) {
      alert(err.message || "Failed to send OTP");
    }

    setSending(false);
  };

  // 📲 Verify phone OTP
  const verifyPhoneOtp = async () => {
    if (!confirmationResult) return;

    try {
      await confirmationResult.confirm(otp);
      setVerified(true);
    } catch {
      alert("Invalid OTP. Please try again.");
    }
  };

  // 📝 Form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Save registration
  const handleSubmit = async () => {
    if (!auth.currentUser) return;

    setLoading(true);

    await setDoc(doc(db, "clients", auth.currentUser.uid), {
      uid: auth.currentUser.uid,
      careFor,
      profile: {
        fullName: form.fullName,
        phone: form.phone,
        relation: careFor === "parent" ? form.relation : null,
      },
      createdAt: serverTimestamp(),
    });

    router.push("/profile/complete");
  };

  // 🔐 OTP SCREEN
  if (!verified) {
    return (
      <div style={container}>
        {/* STEP INDICATOR */}
        <div style={{ marginBottom: 20, fontSize: 14, color: "#666" }}>
          <strong>Step 1:</strong> Verify &nbsp;→&nbsp;
          Step 2: Registration &nbsp;→&nbsp;
          Step 3: Medical Profile
        </div>

        <h2>Verify Email or Mobile</h2>
        <p style={{ color: "#555", marginBottom: 16 }}>
          Enter your phone number or email to receive an OTP
        </p>

        <input
          placeholder="Email or mobile number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          style={input}
        />

        <button onClick={sendOtp} disabled={sending} style={button}>
          {sending ? "Sending OTP..." : "Send OTP"}
        </button>

        <div id="recaptcha-container"></div>

        {/* PHONE OTP */}
        {confirmationResult && (
          <>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={input}
            />

            <button onClick={verifyPhoneOtp} style={button}>
              Verify OTP
            </button>
          </>
        )}

        {/* EMAIL MESSAGE */}
        {otpSent && !confirmationResult && (
          <p style={{ marginTop: 12, color: "#0f766e" }}>
            A secure sign-in link has been sent to your email.
          </p>
        )}

        {/* RESEND OTP */}
        {otpSent && (
          <button
            onClick={sendOtp}
            disabled={resendCooldown > 0}
            style={{
              marginTop: 10,
              background: "transparent",
              border: "none",
              color: resendCooldown > 0 ? "#999" : "#0f766e",
              cursor: resendCooldown > 0 ? "not-allowed" : "pointer",
              fontWeight: 500,
            }}
          >
            {resendCooldown > 0
              ? `Resend OTP in ${resendCooldown}s`
              : "Resend OTP"}
          </button>
        )}
      </div>
    );
  }

  // 🧾 REGISTRATION FORM
  return (
    <div style={container}>
      <h2>Care Registration</h2>

      <div style={card}>
        <h3>Who will receive the care?</h3>

        <label style={radio}>
          <input
            type="radio"
            checked={careFor === "self"}
            onChange={() => setCareFor("self")}
          />
          I will receive the care
        </label>

        <label style={radio}>
          <input
            type="radio"
            checked={careFor === "parent"}
            onChange={() => setCareFor("parent")}
          />
          My parent / elderly family member
        </label>
      </div>

      {careFor && (
        <div style={card}>
          <h3>Basic Details</h3>

          <input
            name="fullName"
            placeholder={
              careFor === "self"
                ? "Your full name"
                : "Elderly person’s full name"
            }
            value={form.fullName}
            onChange={handleChange}
            style={input}
          />

          <input
            name="phone"
            placeholder="Contact phone number"
            value={form.phone}
            onChange={handleChange}
            style={input}
          />

          {careFor === "parent" && (
            <input
              name="relation"
              placeholder="Relation (e.g. Son, Daughter)"
              value={form.relation}
              onChange={handleChange}
              style={input}
            />
          )}

          <button onClick={handleSubmit} disabled={loading} style={button}>
            {loading ? "Saving..." : "Complete Registration"}
          </button>
        </div>
      )}
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

const card: React.CSSProperties = {
  background: "#ffffff",
  padding: 20,
  marginTop: 20,
  borderRadius: 12,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  marginTop: 12,
  borderRadius: 8,
  border: "1px solid #ccc",
};

const button: React.CSSProperties = {
  marginTop: 20,
  width: "100%",
  padding: "12px",
  borderRadius: 8,
  background: "#0f766e",
  color: "#fff",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};

const radio: React.CSSProperties = {
  display: "block",
  marginTop: 10,
};
