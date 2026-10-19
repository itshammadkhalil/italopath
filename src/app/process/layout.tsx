import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Step-by-Step Italy Student Visa Process Roadmap',
  description:
    'Phase-by-phase timeline: Admissions, document legalisation, Universitaly pre-enrolment, DSU scholarship applications, and VFS visa filing — fully explained.',
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
