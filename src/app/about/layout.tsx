import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ItaloPath | The Anti-Consultancy Philosophy',
  description: 'Built out of frustration with misleading agents and hidden charges. We provide strictly legal, transparent pathways to Italian universities.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
