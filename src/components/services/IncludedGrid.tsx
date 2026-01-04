"use client";

export default function IncludedGrid({
  title = "What’s Included",
  items,
}: {
  title?: string;
  items: string[];
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-[#1C5F62] mb-10 text-center">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item}
            className="p-6 border rounded-xl bg-white text-center"
          >
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
