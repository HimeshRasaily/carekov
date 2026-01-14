import ProductTemplate from "./_template";

export default function BPMonitor() {
  return (
    <ProductTemplate
      title="Blood Pressure Monitor"
      description="Accurate and easy-to-use BP monitors for reliable home health tracking."
      overview="Blood pressure monitors help track vital signs and manage hypertension effectively."
      features={[
        "Clinically accurate readings",
        "Digital display",
        "Portable design",
        "Memory storage",
      ]}
      idealFor={[
        "Seniors",
        "Hypertension patients",
        "Routine health monitoring",
      ]}
    />
  );
}
