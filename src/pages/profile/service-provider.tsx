import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase";
import AuthLayout from "../../components/auth/AuthLayout";

/* ======================================================
   SERVICE PROVIDER PROFILE – FULL (SPARK SAFE)
   ====================================================== */

export default function ServiceProviderProfile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
const [profileStatus, setProfileStatus] = useState<string | null>(null);
const [verificationStatus, setVerificationStatus] = useState<string | null>(null);


  /* ---------------- PERSONAL DETAILS ---------------- */
  const [personal, setPersonal] = useState({
    designation: "",
    parentSpouseName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
    identificationMark: "",
    diet: "",
    alternateMobile: "",
    emergencyMobile: "",
    category: "",
    permanentAddress: "",
    permanentState: "",
    permanentCity: "",
    permanentPincode: "",
    correspondenceAddress: "",
    correspondenceState: "",
    correspondenceCity: "",
    correspondencePincode: "",
  });

  /* ---------------- PROFESSIONAL QUALIFICATIONS ---------------- */
  const [professional, setProfessional] = useState([
    { institution: "", university: "", degree: "", specialization: "", marks: "", year: "" },
  ]);

  /* ---------------- SPECIALIZED TRAINING ---------------- */
  const [training, setTraining] = useState([
    { course: "", duration: "", institute: "", phone: "", city: "", marks: "", year: "" },
  ]);

  /* ---------------- EXPERIENCE ---------------- */
  const [currentEmployment, setCurrentEmployment] = useState({
    organisation: "",
    designation: "",
    from: "",
    to: "",
    responsibilities: "",
    assignment: "",
    salary: "",
    city: "",
  });

  const [previousEmployment, setPreviousEmployment] = useState([
    { organisation: "", designation: "", from: "", to: "", responsibilities: "", assignment: "", salary: "", reason: "" },
  ]);

  /* ---------------- VERIFICATION ---------------- */
  const [backgroundVerificationDone, setBackgroundVerificationDone] = useState("");
  const [backgroundReportLink, setBackgroundReportLink] = useState("");

  /* ---------------- LINKS ---------------- */
  const [medicalCertificateLink, setMedicalCertificateLink] = useState("");
  const [resumeLink, setResumeLink] = useState("");

  /* ---------------- REFERENCES ---------------- */
  const [references, setReferences] = useState([
    { name: "", phone: "", address: "", city: "", state: "", pincode: "" },
    { name: "", phone: "", address: "", city: "", state: "", pincode: "" },
  ]);

  /* ---------------- ANTECEDENTS ---------------- */
  const [antecedents, setAntecedents] = useState({
    criminal: "",
    court: "",
    termination: "",
  });

  /* ---------------- GOVT DOCS ---------------- */
  const [govtDocs, setGovtDocs] = useState([
    { type: "", number: "", link: "" },
  ]);

  /* ---------------- DECLARATION ---------------- */
  const [declarationAccepted, setDeclarationAccepted] = useState(false);

  /* ---------------- AUTH ---------------- */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return router.replace("/login/provider");

      const snap = await getDoc(doc(db, "providers", user.uid));
const data = snap.data();
setProfileStatus(data.profileStatus || null);
setVerificationStatus(data.verificationStatus || null);

      if (!snap.exists()) return router.replace("/");

      setName(snap.data().firstName || "");
      setEmail(snap.data().email || "");
      setLoading(false);
    });
    return () => unsub();
  }, []);

  /* ---------------- SAVE ---------------- */
  const handleSubmit = async () => {
    if (!declarationAccepted) {
      alert("Please accept the self declaration");
      return;
    }

    setSaving(true);
    try {
      await updateDoc(doc(db, "providers", auth.currentUser!.uid), {
        serviceProviderProfile: {
          personal,
          professional,
          training,
          currentEmployment,
          previousEmployment,
          backgroundVerificationDone,
          backgroundReportLink,
          medicalCertificateLink,
          resumeLink,
          references,
          antecedents,
          govtDocs,
        },
        profileStatus: "complete",
        verificationStatus: "pending",
      });
      alert("Profile submitted successfully");
    } catch {
      alert("Submission failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return null;

  return (
    <AuthLayout title="Service Provider Profile" subtitle="Please fill all details carefully" maxWidth={1150}>
{profileStatus === "complete" && verificationStatus === "pending" && (
  <div
    style={{
      background: "#FFF7E6",
      border: "1px solid #FFD591",
      padding: "16px",
      borderRadius: "10px",
      marginBottom: "24px",
      color: "#8C6D1F",
      fontWeight: 600,
      textAlign: "center",
    }}
  >
    ✅ Your profile has been submitted successfully and is currently under review.
    <br />
    You will be notified once verification is complete.
  </div>
)}


      {/* ================= PERSONAL DETAILS ================= */}
      <Section title="PERSONAL DETAILS">
        <Grid>
          <ReadOnly label="Name" value={name} />
          <Input label="Current Position / Designation" value={personal.designation} onChange={e => setPersonal({ ...personal, designation: e.target.value })} />
          <Input label="Parents / Spouse Name" value={personal.parentSpouseName} onChange={e => setPersonal({ ...personal, parentSpouseName: e.target.value })} />
          <Input label="Age" value={personal.age} onChange={e => setPersonal({ ...personal, age: e.target.value })} />
          <Select label="Gender" value={personal.gender} options={["Male","Female","Other"]} onChange={e => setPersonal({ ...personal, gender: e.target.value })} />
          <Input label="Height (cms)" value={personal.height} onChange={e => setPersonal({ ...personal, height: e.target.value })} />
          <Input label="Weight (kgs)" value={personal.weight} onChange={e => setPersonal({ ...personal, weight: e.target.value })} />
          <Input label="Blood Group" value={personal.bloodGroup} onChange={e => setPersonal({ ...personal, bloodGroup: e.target.value })} />
          <Input label="Identification Mark" value={personal.identificationMark} onChange={e => setPersonal({ ...personal, identificationMark: e.target.value })} />
          <Select label="Diet" value={personal.diet} options={["Veg","Non Veg"]} onChange={e => setPersonal({ ...personal, diet: e.target.value })} />
          <Input label="Alternate Mobile No" value={personal.alternateMobile} onChange={e => setPersonal({ ...personal, alternateMobile: e.target.value })} />
          <Input label="Emergency Contact No" value={personal.emergencyMobile} onChange={e => setPersonal({ ...personal, emergencyMobile: e.target.value })} />
        </Grid>
      </Section>

      {/* ================= PROFESSIONAL QUALIFICATIONS ================= */}
      <Section title="PROFESSIONAL QUALIFICATIONS">
        <Table
          columns={["Institution","University","Degree","Specialisation","Marks %","Year"]}
          rows={professional}
          setRows={setProfessional}
        />
      </Section>

      {/* ================= SPECIALIZED TRAINING ================= */}
      <Section title="SPECIALIZED TRAINING / ACHIEVEMENTS">
        <p style={hint}>Any specialisations, achievements & relevant certifications</p>
        <Table
          columns={["Course / Certification","Duration","Institute","Phone","City","Marks %","Year"]}
          rows={training}
          setRows={setTraining}
        />
      </Section>

      {/* ================= EXPERIENCE ================= */}
      <Section title="CURRENT ORGANISATION / ROLE">
        <Grid>
          <Input label="Organisation Name" value={currentEmployment.organisation} onChange={e => setCurrentEmployment({ ...currentEmployment, organisation: e.target.value })} />
          <Input label="Designation" value={currentEmployment.designation} onChange={e => setCurrentEmployment({ ...currentEmployment, designation: e.target.value })} />
          <Input label="From" value={currentEmployment.from} onChange={e => setCurrentEmployment({ ...currentEmployment, from: e.target.value })} />
          <Input label="To" value={currentEmployment.to} onChange={e => setCurrentEmployment({ ...currentEmployment, to: e.target.value })} />
          <Textarea label="Nature of Responsibilities" value={currentEmployment.responsibilities} onChange={e => setCurrentEmployment({ ...currentEmployment, responsibilities: e.target.value })} />
          <Textarea label="Special Assignment" value={currentEmployment.assignment} onChange={e => setCurrentEmployment({ ...currentEmployment, assignment: e.target.value })} />
          <Input label="Net Take Home Salary" value={currentEmployment.salary} onChange={e => setCurrentEmployment({ ...currentEmployment, salary: e.target.value })} />
          <Input label="City" value={currentEmployment.city} onChange={e => setCurrentEmployment({ ...currentEmployment, city: e.target.value })} />
        </Grid>
      </Section>

      <Section title="PREVIOUS EMPLOYMENT DETAILS">
        <Table
          columns={["Organisation","Designation","From","To","Responsibilities","Assignment","Salary","Reason for Leaving"]}
          rows={previousEmployment}
          setRows={setPreviousEmployment}
        />
      </Section>

      {/* ================= VERIFICATION ================= */}
      <Section title="IDENTIFICATION & BACKGROUND VERIFICATION">
        <Radio label="Background Verification Done?" value={backgroundVerificationDone} setValue={setBackgroundVerificationDone} />
        {backgroundVerificationDone === "Yes" && (
          <Input label="Report Copy Link (Drive / Dropbox)" value={backgroundReportLink} onChange={e => setBackgroundReportLink(e.target.value)} />
        )}
      </Section>

      {/* ================= MEDICAL ================= */}
      <Section title="DOCTOR / HOSPITAL / MEDICAL CARETAKER CERTIFICATE">
        <Input label="Certificate / Recommendation Letter Link" value={medicalCertificateLink} onChange={e => setMedicalCertificateLink(e.target.value)} />
      </Section>

      {/* ================= RESUME ================= */}
      <Section title="UPLOAD RESUME / CV">
        <Input label="Resume / CV Link" value={resumeLink} onChange={e => setResumeLink(e.target.value)} />
      </Section>

      {/* ================= REFERENCES ================= */}
      <Section title="REFERENCES">
        {references.map((r, i) => (
          <Grid key={i}>
            <Input label={`Reference ${i+1} Name`} value={r.name} />
            <Input label="Mobile No" value={r.phone} />
            <Textarea label="Address" value={r.address} />
            <Input label="City" value={r.city} />
            <Input label="State" value={r.state} />
            <Input label="Pincode" value={r.pincode} />
          </Grid>
        ))}
      </Section>

      {/* ================= ANTECEDENTS ================= */}
      <Section title="CHARACTER & ANTECEDENTS REPORT">
        <Radio label="Criminal offence / police complaint history" value={antecedents.criminal} setValue={v => setAntecedents({ ...antecedents, criminal: v })} />
        <Radio label="Pending court cases in India" value={antecedents.court} setValue={v => setAntecedents({ ...antecedents, court: v })} />
        <Radio label="Suspension / termination by previous employer" value={antecedents.termination} setValue={v => setAntecedents({ ...antecedents, termination: v })} />
      </Section>

      {/* ================= GOVT DOCS ================= */}
      <Section title="GOVERNMENT ID & ADDRESS PROOF">
        <Table
          columns={["Document Type","Document Number","Link"]}
          rows={govtDocs}
          setRows={setGovtDocs}
        />
      </Section>

      {/* ================= DECLARATION ================= */}
      <Section title="SELF DECLARATION">
        <p>
          I hereby declare that all the information furnished above is true and correct
          to the best of my knowledge and belief. I understand that any false information
          may lead to rejection or termination.
        </p>
        <label>
          <input type="checkbox" checked={declarationAccepted} onChange={e => setDeclarationAccepted(e.target.checked)} /> I agree
        </label>
      </Section>

      <button
  onClick={handleSubmit}
  disabled={saving || profileStatus === "complete"}
  style={{
    ...btn,
    opacity: profileStatus === "complete" ? 0.6 : 1,
    cursor: profileStatus === "complete" ? "not-allowed" : "pointer",
  }}
>
  {profileStatus === "complete"
    ? "Profile Submitted"
    : saving
    ? "Submitting..."
    : "Submit Profile"}
</button>

    </AuthLayout>
  );
}

/* ================== HELPERS ================== */

function Section({ title, children }: any) {
  return <div style={{ marginBottom: 40 }}><h3 style={{ fontWeight: 700 }}>{title}</h3>{children}</div>;
}

function Grid({ children }: any) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>{children}</div>;
}

function Input({ label, ...props }: any) {
  return <div><label style={{ fontWeight: 600 }}>{label}</label><input {...props} style={input} /></div>;
}

function ReadOnly({ label, value }: any) {
  return <div><label style={{ fontWeight: 600 }}>{label}</label><input value={value} disabled style={{ ...input, background: "#eee" }} /></div>;
}

function Textarea({ label, ...props }: any) {
  return <div><label style={{ fontWeight: 600 }}>{label}</label><textarea {...props} style={{ ...input, height: 70 }} /></div>;
}

function Select({ label, options, ...props }: any) {
  return (
    <div>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <select {...props} style={input}>
        <option value="">Select</option>
        {options.map((o: string) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function Radio({ label, value, setValue }: any) {
  return (
    <div style={{ marginBottom: 10 }}>
      <strong>{label}</strong>
      <div>
        <label><input type="radio" checked={value==="Yes"} onChange={()=>setValue("Yes")} /> Yes</label>
        <label style={{ marginLeft: 12 }}><input type="radio" checked={value==="No"} onChange={()=>setValue("No")} /> No</label>
      </div>
    </div>
  );
}

function Table({ columns, rows, setRows }: any) {
  const addRow = () => setRows([...rows, Object.fromEntries(columns.map((c: string) => [c, ""]))]);
  const removeRow = (i: number) => setRows(rows.filter((_: any, idx: number) => idx !== i));

  return (
    <div>
      {rows.map((row: any, i: number) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: `repeat(${columns.length},1fr) auto`, gap: 8, marginBottom: 8 }}>
          {columns.map((c: string) => (
            <input key={c} placeholder={c} value={row[c] || ""} onChange={e => {
              const r=[...rows]; r[i][c]=e.target.value; setRows(r);
            }} style={input} />
          ))}
          <button onClick={() => removeRow(i)}>❌</button>
        </div>
      ))}
      <button onClick={addRow}>+ Add Row</button>
    </div>
  );
}

/* ================== STYLES ================== */

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: 8,
  border: "1px solid #ccc",
};

const btn: React.CSSProperties = {
  marginTop: 30,
  padding: "14px 30px",
  borderRadius: 10,
  background: "#317C82",
  color: "#fff",
  border: "none",
  fontWeight: 700,
};

const hint: React.CSSProperties = {
  fontSize: 14,
  color: "#555",
  marginBottom: 10,
};
