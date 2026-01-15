import Block from "../../components/ui/Block";
import CTA from "../../components/ui/CTA";

type ProductTemplateProps = {
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
};

export default function ProductTemplate({
  title,
  description,
  features = [],
  ctaText = "Book Appointment",
  onCtaClick,
}: ProductTemplateProps) {
  return (
    <main className="py-12">
      <Block title={title}>
        <p className="text-gray-700">{description}</p>

        {features.length > 0 && (
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        <CTA
          text={ctaText}
          onClick={
            onCtaClick ??
            (() => {
              window.location.href = "/book-appointment";
            })
          }
        />
      </Block>
    </main>
  );
}
