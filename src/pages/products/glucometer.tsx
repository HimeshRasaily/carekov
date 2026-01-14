import ProductTemplate from "./_template";

export default function Glucometer() {
  return (
    <ProductTemplate
      title="Glucometer"
      description="Simple and reliable glucometers for blood sugar monitoring."
      overview="Glucometers allow seniors to regularly track blood glucose levels safely at home."
      features={[
        "Fast readings",
        "Easy operation",
        "Compact design",
        "Accurate results",
      ]}
      idealFor={[
        "Diabetic patients",
        "Elderly individuals",
        "Home health care",
      ]}
    />
  );
}
