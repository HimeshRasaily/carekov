import ProductTemplate from "../../components/products/ProductTemplate";


export default function MobilityAids() {
  return (
    <ProductTemplate
      title="Mobility Aids"
      description="Mobility aids that help seniors move safely and confidently."
      overview="Mobility aids reduce the risk of falls and improve independence for elderly individuals."
      features={[
        "Lightweight design",
        "Durable materials",
        "Easy to use",
        "Enhanced stability",
      ]}
      idealFor={[
        "Elderly individuals",
        "Post-injury recovery",
        "Limited mobility users",
      ]}
    />
  );
}
