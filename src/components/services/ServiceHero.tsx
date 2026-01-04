"use client";

export default function ServiceHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-[#1C5F62]">
          {title}
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
