import ProductTemplate from "./_template";

export default function Wheelchair() {
  return (
    <ProductTemplate
      title="Wheelchair"
      description="Comfortable and durable wheelchairs for everyday mobility."
      overview="Wheelchairs provide mobility support for individuals with limited movement."
      features={[
        "Comfortable seating",
        "Durable frame",
        "Easy maneuverability",
        "Foldable design",
      ]}
      idealFor={[
        "Mobility-impaired users",
        "Elderly individuals",
        "Post-injury support",
      ]}
    />
  );
}
