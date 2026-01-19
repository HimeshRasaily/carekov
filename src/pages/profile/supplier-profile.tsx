import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase/firebase";
import AuthLayout from "../../components/auth/AuthLayout";

/* ======================================================
   SUPPLIER PROFILE – FULL, ONE FILE, SPARK SAFE
   ====================================================== */

export default function SupplierProfile() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [profileStatus, setProfileStatus] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(null);

  /* ---------------- BASIC BUSINESS DETAILS ---------------- */
  const [business, setBusiness] = useState({
    businessName: "",
    supplierType: "",
    contactPerson: "",
    designation: "",
    email: "",
    primaryContact: "",
    alternateContact: "",
  });

  /* ---------------- ADDRESS ---------------- */
  const [address, setAddress] = useState({
    registeredAddress: "",
    registeredCity: "",
    registeredState: "",
    registeredPincode: "",
    warehouseAddress: "",
    warehouseCity: "",
    warehouseState: "",
    warehousePincode: "",
  });

  /* ---------------- IDENTIFICATION ---------------- */
  const [identification, setIdentification] = useState({
    gstNumber: "",
    gstLink: "",
    panNumber: "",
    panLink: "",
    tradeLicenseNumber: "",
    tradeLicenseLink: "",
  });

  /* ---------------- BANK ---------------- */
  const [bank, setBank] = useState({
    accountHolder: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
    branch: "",
  });

  /* ---------------- PRODUCT CATEGORIES ---------------- */
  const [productCategories, setProductCategories] = useState([]);
  const [otherCategory, setOtherCategory] = useState("");

  /* ---------------- PRODUCTS ---------------- */
  const [products, setProducts] = useState([
    {
      productName: "",
      category: "",
      brand: "",
      model: "",
      unitPrice: "",
      moq: "",
      availability: "",
    },
  ]);

  /* ---------------- CERTIFICATIONS ---------------- */
  const [certifications, setCertifications] = useState([
    { name: "", authority: "", link: "" },
  ]);

  /* ---------------- DECLARATION ---------------- */
  const [acceptedDeclaration, setAcceptedDeclaration] = useState(false);

  /* ---------------- AUTH ---------------- */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return router.replace("/login/supplier");

      const snap = await getDoc(doc(db, "suppliers", user.uid));
      if (!snap.exists()) return router.replace("/");

      const data = snap.data();
      setBusiness((b) => ({ ...b, email: data.email || "" }));
      setProfileStatus(data.profileStatus || null);
      setVerificationStatus(data.verificationStatus || null);

      setLoading(false);
    });

    return () => unsub();
  }, []);

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async () => {
    if (!acceptedDeclaration) {
      alert("Please accept the declaration to proceed.");
      return;
    }

    setSaving(true);
    try {
      await updateDoc(doc(db, "suppliers", auth.currentUser.uid), {
        business,
        address,
        identification,
        bank,
        productCategories: productCategories.includes("Others")
          ? productCategories
              .filter((c) => c !== "Others")
              .concat(otherCategory)
          : productCategories,
        products,
        certifications,
        profileStatus: "complete",
        verificationStatus: "pending",
      });

      setProfileStatus("complete");
      setVerificationStatus("pending");
      alert("Supplier profile submitted successfully.");
    } catch (e) {
      console.error(e);
      alert("Failed to submit profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return null;

  return (
    <AuthLayout
      title="Supplier Profile"
      subtitle="Complete your supplier profile to list products and equipment on CareKov"
      maxWidth={1150}
    >
      {/* STATUS */}
      {profileStatus === "complete" && verificationStatus === "pending" && (
        <div style={banner}>
          ✅ Your profile has been submitted and is currently under review.
        </div>
      )}

      {/* BASIC BUSINESS DETAILS */}
      <Section title="BASIC BUSINESS DETAILS">
        <Grid>
          <Input label="Business Name" value={business.businessName}
            onChange={(e) => setBusiness({ ...business, businessName: e.target.value })} />
          <Select label="Type of Supplier" value={business.supplierType}
            options={["Individual","Proprietorship","Partnership","Private Limited","LLP"]}
            onChange={(e) => setBusiness({ ...business, supplierType: e.target.value })} />
          <Input label="Contact Person Name" value={business.contactPerson}
            onChange={(e) => setBusiness({ ...business, contactPerson: e.target.value })} />
          <Input label="Designation" value={business.designation}
            onChange={(e) => setBusiness({ ...business, designation: e.target.value })} />
          <ReadOnly label="Official Email ID" value={business.email} />
          <Input label="Primary Contact Number" value={business.primaryContact}
            onChange={(e) => setBusiness({ ...business, primaryContact: e.target.value })} />
          <Input label="Alternate Contact Number" value={business.alternateContact}
            onChange={(e) => setBusiness({ ...business, alternateContact: e.target.value })} />
        </Grid>
      </Section>

      {/* BUSINESS ADDRESS */}
      <Section title="BUSINESS ADDRESS">
        <Grid>
          <Textarea label="Registered Address" value={address.registeredAddress}
            onChange={(e) => setAddress({ ...address, registeredAddress: e.target.value })} />
          <Input label="City" value={address.registeredCity}
            onChange={(e) => setAddress({ ...address, registeredCity: e.target.value })} />
          <Input label="State" value={address.registeredState}
            onChange={(e) => setAddress({ ...address, registeredState: e.target.value })} />
          <Input label="Pincode" value={address.registeredPincode}
            onChange={(e) => setAddress({ ...address, registeredPincode: e.target.value })} />

          <Textarea label="Warehouse / Store Address (Optional)" value={address.warehouseAddress}
            onChange={(e) => setAddress({ ...address, warehouseAddress: e.target.value })} />
          <Input label="Warehouse City" value={address.warehouseCity}
            onChange={(e) => setAddress({ ...address, warehouseCity: e.target.value })} />
          <Input label="Warehouse State" value={address.warehouseState}
            onChange={(e) => setAddress({ ...address, warehouseState: e.target.value })} />
          <Input label="Warehouse Pincode" value={address.warehousePincode}
            onChange={(e) => setAddress({ ...address, warehousePincode: e.target.value })} />
        </Grid>
      </Section>

      {/* IDENTIFICATION */}
      <Section title="BUSINESS IDENTIFICATION DETAILS">
        <Grid>
          <Input label="GST Number" value={identification.gstNumber}
            onChange={(e) => setIdentification({ ...identification, gstNumber: e.target.value })} />
          <Input label="GST Certificate Link" value={identification.gstLink}
            onChange={(e) => setIdentification({ ...identification, gstLink: e.target.value })} />
          <Input label="PAN Number" value={identification.panNumber}
            onChange={(e) => setIdentification({ ...identification, panNumber: e.target.value })} />
          <Input label="PAN Card Link" value={identification.panLink}
            onChange={(e) => setIdentification({ ...identification, panLink: e.target.value })} />
          <Input label="Trade License Number" value={identification.tradeLicenseNumber}
            onChange={(e) => setIdentification({ ...identification, tradeLicenseNumber: e.target.value })} />
          <Input label="Trade License Link" value={identification.tradeLicenseLink}
            onChange={(e) => setIdentification({ ...identification, tradeLicenseLink: e.target.value })} />
        </Grid>
      </Section>

      {/* BANK */}
      <Section title="BANK & PAYMENT DETAILS">
        <Grid>
          <Input label="Account Holder Name" value={bank.accountHolder}
            onChange={(e) => setBank({ ...bank, accountHolder: e.target.value })} />
          <Input label="Bank Name" value={bank.bankName}
            onChange={(e) => setBank({ ...bank, bankName: e.target.value })} />
          <Input label="Account Number" value={bank.accountNumber}
            onChange={(e) => setBank({ ...bank, accountNumber: e.target.value })} />
          <Input label="IFSC Code" value={bank.ifsc}
            onChange={(e) => setBank({ ...bank, ifsc: e.target.value })} />
          <Input label="Branch Name" value={bank.branch}
            onChange={(e) => setBank({ ...bank, branch: e.target.value })} />
        </Grid>
      </Section>

      {/* PRODUCT CATEGORIES */}
      <Section title="PRODUCT & EQUIPMENT DETAILS">
        <CheckboxGroup
          label="Product Categories"
          options={[
            "Medical Equipment",
            "Mobility Aids",
            "Elderly Care Products",
            "Surgical Supplies",
            "Home Care Devices",
            "Consumables",
            "Others",
          ]}
          selected={productCategories}
          setSelected={setProductCategories}
        />

        {productCategories.includes("Others") && (
          <Input label="Specify Other Category"
            value={otherCategory}
            onChange={(e) => setOtherCategory(e.target.value)} />
        )}

        <Table
          columns={[
            "Product Name",
            "Category",
            "Brand",
            "Model",
            "Unit Price",
            "Minimum Order Quantity",
            "Availability",
          ]}
          rows={products}
          setRows={setProducts}
        />
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="CERTIFICATIONS & AUTHORIZATIONS">
        <Table
          columns={[
            "Certification Name",
            "Issuing Authority",
            "Certificate Link",
          ]}
          rows={certifications}
          setRows={setCertifications}
        />
      </Section>

      {/* DECLARATION */}
      <Section title="TERMS & DECLARATION">
        <label>
          <input
            type="checkbox"
            checked={acceptedDeclaration}
            onChange={(e) => setAcceptedDeclaration(e.target.checked)}
          />{" "}
          I confirm that all products supplied are genuine and comply with applicable
          medical and safety regulations. I agree to CareKov’s supplier terms and
          conditions.
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
          : "Submit Supplier Profile"}
      </button>
    </AuthLayout>
  );
}

/* ================= HELPERS ================= */

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{ fontWeight: 700 }}>{title}</h3>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {children}
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <input {...props} style={input} />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <textarea {...props} style={{ ...input, height: 70 }} />
    </div>
  );
}

function ReadOnly({ label, value }) {
  return (
    <div>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <input value={value} disabled style={{ ...input, background: "#eee" }} />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <select {...props} style={input}>
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function CheckboxGroup({ label, options, selected, setSelected }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <strong>{label}</strong>
      <div>
        {options.map((o) => (
          <label key={o} style={{ marginRight: 12 }}>
            <input
              type="checkbox"
              checked={selected.includes(o)}
              onChange={() =>
                setSelected(
                  selected.includes(o)
                    ? selected.filter((x) => x !== o)
                    : [...selected, o]
                )
              }
            />{" "}
            {o}
          </label>
        ))}
      </div>
    </div>
  );
}

function Table({ columns, rows, setRows }) {
  const addRow = () =>
    setRows([...rows, Object.fromEntries(columns.map((c) => [c, ""]))]);

  const removeRow = (i) =>
    setRows(rows.filter((_, idx) => idx !== i));

  return (
    <div>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns.length},1fr) auto`,
            gap: 8,
            marginBottom: 8,
          }}
        >
          {columns.map((c) => (
            <input
              key={c}
              placeholder={c}
              value={row[c] || ""}
              onChange={(e) => {
                const r = [...rows];
                r[i][c] = e.target.value;
                setRows(r);
              }}
              style={input}
            />
          ))}
          <button onClick={() => removeRow(i)}>❌</button>
        </div>
      ))}
      <button onClick={addRow}>+ Add Row</button>
    </div>
  );
}

/* ================= STYLES ================= */

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: 8,
  border: "1px solid #ccc",
};

const btn = {
  marginTop: 30,
  padding: "14px 30px",
  borderRadius: 10,
  background: "#317C82",
  color: "#fff",
  border: "none",
  fontWeight: 700,
};

const banner: React.CSSProperties = {
  background: "#FFF7E6",
  border: "1px solid #FFD591",
  padding: "16px",
  borderRadius: 10,
  marginBottom: 24,
  color: "#8C6D1F",
  fontWeight: 600,
  textAlign: "center",
};
