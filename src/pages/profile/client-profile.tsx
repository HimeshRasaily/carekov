import { useState } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase/firebase";

export default function MedicalProfilePage() {
  const router = useRouter();
  const auth = getAuth();

  const [loading, setLoading] = useState(false);

  /* ---------------- PHOTO PREVIEW (LOCAL ONLY) ---------------- */
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  /* ---------------- BASIC DETAILS ---------------- */
  const [basic, setBasic] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
    diet: "",
    emergencyContact: "",
  });

  /* ---------------- MEDICAL ---------------- */
  const [medical, setMedical] = useState({
    conditions: [] as string[],
    allergies: "",
    medications: "",
    memoryIssues: "",
    otherIssues: "",
  });

  /* ---------------- DOCTORS ---------------- */
  const [doctors, setDoctors] = useState([
    { name: "", speciality: "", contact: "" },
  ]);

  const [physio, setPhysio] = useState({ name: "", contact: "" });
  const [dietician, setDietician] = useState({ name: "", contact: "" });

  const [prescriptionLink, setPrescriptionLink] = useState("");

  const [acceptedDeclaration, setAcceptedDeclaration] = useState(false);

  const toggleCondition = (condition: string) => {
    setMedical((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
    }));
  };

  const addDoctor = () =>
    setDoctors([...doctors, { name: "", speciality: "", contact: "" }]);

  const removeDoctor = (i: number) =>
    setDoctors(doctors.filter((_, idx) => idx !== i));

  const handleSubmit = async () => {
    if (!auth.currentUser) return;

    if (!acceptedDeclaration) {
      alert("Please accept the declaration to continue.");
      return;
    }

    setLoading(true);

    await updateDoc(doc(db, "clients", auth.currentUser.uid), {
      clientProfile: {
        photoPreviewUsed: true, // flag for future migration
        basicDetails: basic,
        medicalProfile: medical,
        doctors,
        physiotherapist: physio,
        dietician,
        prescriptionLink,
      },
      profileStatus: "complete",
    });

    router.push("/");
  };

  return (
    <div style={container}>
      <h2>Client Medical Profile</h2>
      <p style={{ color: "#555" }}>
        This helps us provide safe and personalised care.
      </p>

      {/* PHOTO */}
      <div style={cardCenter}>
        <label>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setPhotoPreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          <div style={avatar}>
            {photoPreview ? (
              <img src={photoPreview} style={avatarImg} />
            ) : (
              <span>Upload Photo</span>
            )}
          </div>
        </label>
      </div>

      {/* BASIC DETAILS */}
      <div style={card}>
        <h3>Basic Details</h3>

        <input placeholder="Age" value={basic.age}
          onChange={(e) => setBasic({ ...basic, age: e.target.value })} style={input} />

        <select value={basic.gender}
          onChange={(e) => setBasic({ ...basic, gender: e.target.value })} style={input}>
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input placeholder="Height (cms)" value={basic.height}
          onChange={(e) => setBasic({ ...basic, height: e.target.value })} style={input} />

        <input placeholder="Weight (kgs)" value={basic.weight}
          onChange={(e) => setBasic({ ...basic, weight: e.target.value })} style={input} />

        <input placeholder="Blood Group" value={basic.bloodGroup}
          onChange={(e) => setBasic({ ...basic, bloodGroup: e.target.value })} style={input} />

        <select value={basic.diet}
          onChange={(e) => setBasic({ ...basic, diet: e.target.value })} style={input}>
          <option value="">Diet</option>
          <option>Veg</option>
          <option>Non Veg</option>
        </select>

        <input placeholder="Emergency Contact Number"
          value={basic.emergencyContact}
          onChange={(e) => setBasic({ ...basic, emergencyContact: e.target.value })}
          style={input} />
      </div>

      {/* CONDITIONS */}
      <div style={card}>
        <h3>Existing Conditions</h3>
        {["Diabetes", "Blood Pressure", "Heart Condition", "Asthma", "Arthritis"].map((c) => (
          <label key={c} style={checkbox}>
            <input
              type="checkbox"
              checked={medical.conditions.includes(c)}
              onChange={() => toggleCondition(c)}
            />{" "}
            {c}
          </label>
        ))}
      </div>

      {/* MEDICAL DETAILS */}
      <div style={card}>
        <h3>Other Medical Details</h3>

        <input placeholder="Allergies"
          value={medical.allergies}
          onChange={(e) => setMedical({ ...medical, allergies: e.target.value })}
          style={input} />

        <input placeholder="Current Medications"
          value={medical.medications}
          onChange={(e) => setMedical({ ...medical, medications: e.target.value })}
          style={input} />

        <input placeholder="Memory Related Issues"
          value={medical.memoryIssues}
          onChange={(e) => setMedical({ ...medical, memoryIssues: e.target.value })}
          style={input} />

        <input placeholder="Other Issues Needing Attention"
          value={medical.otherIssues}
          onChange={(e) => setMedical({ ...medical, otherIssues: e.target.value })}
          style={input} />
      </div>

      {/* DOCTORS */}
      <div style={card}>
        <h3>Current Doctors</h3>
        {doctors.map((d, i) => (
          <div key={i}>
            <input placeholder="Doctor Name" value={d.name}
              onChange={(e) => {
                const x = [...doctors]; x[i].name = e.target.value; setDoctors(x);
              }} style={input} />
            <input placeholder="Speciality" value={d.speciality}
              onChange={(e) => {
                const x = [...doctors]; x[i].speciality = e.target.value; setDoctors(x);
              }} style={input} />
            <input placeholder="Contact Number" value={d.contact}
              onChange={(e) => {
                const x = [...doctors]; x[i].contact = e.target.value; setDoctors(x);
              }} style={input} />
            {doctors.length > 1 && (
              <button onClick={() => removeDoctor(i)}>Remove</button>
            )}
          </div>
        ))}
        <button onClick={addDoctor}>+ Add Doctor</button>
      </div>

      {/* PHYSIO / DIETICIAN */}
      <div style={card}>
        <h3>Physiotherapist / Dietician</h3>

        <input placeholder="Physiotherapist Name"
          value={physio.name}
          onChange={(e) => setPhysio({ ...physio, name: e.target.value })}
          style={input} />

        <input placeholder="Physiotherapist Contact"
          value={physio.contact}
          onChange={(e) => setPhysio({ ...physio, contact: e.target.value })}
          style={input} />

        <input placeholder="Dietician Name"
          value={dietician.name}
          onChange={(e) => setDietician({ ...dietician, name: e.target.value })}
          style={input} />

        <input placeholder="Dietician Contact"
          value={dietician.contact}
          onChange={(e) => setDietician({ ...dietician, contact: e.target.value })}
          style={input} />
      </div>

      {/* PRESCRIPTION */}
      <div style={card}>
        <h3>Prescriptions / Reports</h3>
        <input placeholder="Drive / Dropbox Link"
          value={prescriptionLink}
          onChange={(e) => setPrescriptionLink(e.target.value)}
          style={input} />
      </div>

      {/* DECLARATION */}
      <div style={card}>
        <label>
          <input
            type="checkbox"
            checked={acceptedDeclaration}
            onChange={(e) => setAcceptedDeclaration(e.target.checked)}
          />{" "}
          I confirm the above medical information is true to the best of my knowledge.
        </label>
      </div>

      <button onClick={handleSubmit} disabled={loading} style={button}>
        {loading ? "Saving..." : "Complete Profile"}
      </button>
    </div>
  );
}

/* ---------- styles ---------- */

const container: React.CSSProperties = {
  maxWidth: 520,
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

const cardCenter: React.CSSProperties = {
  ...card,
  textAlign: "center",
};

const avatar: React.CSSProperties = {
  width: 120,
  height: 120,
  borderRadius: "50%",
  border: "2px dashed #ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  cursor: "pointer",
};

const avatarImg: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
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
