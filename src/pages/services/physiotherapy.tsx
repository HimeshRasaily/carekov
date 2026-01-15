import ServiceTemplate from "../../components/services/ServiceTemplate";
export default function Physiotherapy() {
  return (
    <ServiceTemplate
      title="Physiotherapy at Home"
      description="Personalized physiotherapy sessions in the comfort of your home."
      includes={[
        "Pain management",
        "Mobility improvement",
        "Post-surgery rehabilitation",
      ]}
    />
  );
}
