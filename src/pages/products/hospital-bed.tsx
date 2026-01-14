import ProductTemplate from "./_template";

export default function HospitalBed() {
  return (
    <ProductTemplate
      title="Hospital Bed"
      description="Adjustable hospital beds for enhanced comfort and patient care."
      overview="Hospital beds provide ergonomic support and adjustable positioning for patients requiring long-term care."
      features={[
        "Height adjustment",
        "Backrest and leg elevation",
        "Sturdy construction",
        "Easy mobility",
      ]}
      idealFor={[
        "Bedridden patients",
        "Post-surgery recovery",
        "Home nursing care",
      ]}
    />
  );
}
