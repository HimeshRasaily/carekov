import Block from "../../components/ui/Block";
import CTA from "../../components/ui/CTA";

type ProductTemplateProps = {
  title: string;
  description: string;
  overview?: string;
  features?: string[];
  idealFor?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
};

export default function ProductTemplate({
  title,
  description,
  overview,
  features = [],
  idealFor = [],
  ctaText = "Book Appointment",
  onCtaClick,
}: ProductTemplateProps) {
  return (
    <main className="py-12">
      <Block title={title}>
        <p className="text-gray-700">{description}</p>

        {overview && (
          <p className="mt-4 text-gray-700">{overview}</p>
        )}

        {features.length > 0 && (
          <>
            <h3 className="mt-6 font-semibold text-gray-900">Features</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {idealFor.length > 0 && (
          <>
            <h3 className="mt-6 font-semibold text-gray-900">Ideal For</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              {idealFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
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
