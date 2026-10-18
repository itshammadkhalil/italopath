import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Process & Timeline',
  description:
    'Step-by-step timeline for Italian university admission — from application to arrival. Covers Universitaly, visa processing, and pre-departure preparation.',
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
