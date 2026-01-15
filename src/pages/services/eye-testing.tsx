import ServiceTemplate from "../../components/services/ServiceTemplate";
export default function EyeTesting() {
  return (
    <ServiceTemplate
      title="Eye Testing at Home"
      description="Professional eye testing services delivered at your doorstep."
      includes={[
        "Vision assessment",
        "Refraction testing",
        "Prescription guidance",
      ]}
    />
  );
}
