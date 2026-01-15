import React from "react";

type BlockProps = {
  title: string;
  children: React.ReactNode;
};

export default function Block({ title, children }: BlockProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-[#1C5F62]">
        {title}
      </h2>
      <div className="text-gray-700 space-y-2">
        {children}
      </div>
    </div>
  );
}
