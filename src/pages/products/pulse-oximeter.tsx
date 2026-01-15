import ProductTemplate from "../../components/products/ProductTemplate";


export default function OxygenConcentrator() {
  return (
    <ProductTemplate
      title="Oxygen Concentrator"
      description="Reliable oxygen concentrators for continuous oxygen therapy."
      overview="Oxygen concentrators provide a steady oxygen supply for patients with respiratory conditions."
      features={[
        "Continuous oxygen flow",
        "Energy efficient",
        "Low maintenance",
        "Quiet operation",
      ]}
      idealFor={[
        "COPD patients",
        "Respiratory care",
        "Home oxygen therapy",
      ]}
    />
  );
}
