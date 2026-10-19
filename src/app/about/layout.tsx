import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Transparent Italy Education Consultancy',
  description:
    'Zero fake visa guarantees, 100% document transparency, and direct guidance for admissions to public universities in Italy. Built out of frustration with misleading agents and hidden charges.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
