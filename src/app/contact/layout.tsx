import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Eligibility Evaluation",
  description:
    "Submit your academic profile for a free assessment. Our Italy education specialists will evaluate your eligibility for Italian universities and DSU scholarships within 24–48 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
