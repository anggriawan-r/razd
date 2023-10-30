import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className="mb-6 text-3xl font-medium">{children}</h2>;
}
