// components/Section.tsx
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}
export const Section = ({ title, subtitle, children }: SectionProps) => (
  <section className="mb-8">
    <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
      {title}
    </h1>
    <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">{subtitle}</p>
    {children}
  </section>
);
