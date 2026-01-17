import { useState } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";

export default function MedicalProfilePage() {
  const router = useRouter();
  const auth = getAuth();

  const [loading, setLoading] = useState(false);

  const [medical, setMedical] = useState({
    conditions: [] as string[],
    allergies: "",
    medications: "",
    bloodGroup: "",
    emergencyContact: "",
  });

  const toggleCondition = (condition: string) => {
    setMedical((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
    }));
  };

  const handleSubmit = async () => {
    if (!auth.currentUser) return;

    setLoading(true);

    await updateDoc(doc(db, "clients", auth.currentUser.uid), {
      medicalProfile: medical,
      profileStatus: "complete",
    });

    router.push("/");
  };

  return (
    <div style={container}>
      <h2>Medical Profile</h2>
      <p style={{ color: "#555" }}>
        This helps us provide safe and personalised care.
      </p>

      {/* CONDITIONS */}
      <div style={card}>
        <h3>Existing Conditions</h3>

        {[
          "Diabetes",
          "Blood Pressure",
          "Heart Condition",
          "Asthma",
          "Arthritis",
        ].map((c) => (
          <label key={c} style={checkbox}>
            <input
              type="checkbox"
              checked={medical.conditions.includes(c)}
              onChange={() => toggleCondition(c)}
            />
            {c}
          </label>
        ))}
      </div>

      {/* OTHER DETAILS */}
      <div style={card}>
        <h3>Other Medical Details</h3>

        <input
          placeholder="Allergies (if any)"
          value={medical.allergies}
          onChange={(e) =>
            setMedical({ ...medical, allergies: e.target.value })
          }
          style={input}
        />

        <input
          placeholder="Current medications"
          value={medical.medications}
          onChange={(e) =>
            setMedical({ ...medical, medications: e.target.value })
          }
          style={input}
        />

        <input
          placeholder="Blood Group (optional)"
          value={medical.bloodGroup}
          onChange={(e) =>
            setMedical({ ...medical, bloodGroup: e.target.value })
          }
          style={input}
        />

        <input
          placeholder="Emergency Contact Number"
          value={medical.emergencyContact}
          onChange={(e) =>
            setMedical({
              ...medical,
              emergencyContact: e.target.value,
            })
          }
          style={input}
        />
      </div>

      <button onClick={handleSubmit} disabled={loading} style={button}>
        {loading ? "Saving..." : "Complete Profile"}
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
  marginTop: 30,
  width: "100%",
  padding: "14px",
  borderRadius: 10,
  background: "#0f766e",
  color: "#fff",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};

const checkbox: React.CSSProperties = {
  display: "block",
  marginTop: 8,
};
