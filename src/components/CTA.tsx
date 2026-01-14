type CTAProps = {
  text: string;
  onClick: () => void;
};

export default function CTA({ text, onClick }: CTAProps) {
  return (
    <div className="text-center pt-6">
      <button
        onClick={onClick}
        className="bg-[#1C5F62] text-white px-8 py-3 rounded-md hover:bg-[#174e50] transition"
      >
        {text}
      </button>
    </div>
  );
}
