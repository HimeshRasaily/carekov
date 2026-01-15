import ServiceTemplate from "../../components/services/ServiceTemplate";

export default function MedicalCoordination() {
  return (
    <ServiceTemplate
      title="SERVICE TITLE"
      description="ONE LINE DESCRIPTION"
      includes={[
        "Point one",
        "Point two",
        "Point three",
      ]}
    />
  );
}
