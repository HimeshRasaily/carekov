import ProductTemplate from "./_template";

export default function AdultDiapers() {
  return (
    <ProductTemplate
      title="Adult Diapers"
      description="Comfortable and absorbent adult diapers designed for dignity and hygiene."
      overview="Adult diapers help manage incontinence discreetly while ensuring comfort, skin protection, and confidence."
      features={[
        "High absorbency",
        "Comfortable fit",
        "Odour control",
        "Skin-friendly materials",
      ]}
      idealFor={[
        "Seniors with incontinence",
        "Bedridden patients",
        "Long-term home care",
      ]}
    />
  );
}
