import type { Metadata } from "next";
import { PageHero } from "@/components/ui-blocks";
import { ServicesGrid } from "@/components/ui-blocks";
import { CtaBand } from "@/components/ui-blocks";

export const metadata: Metadata = {
  title: "Septic Services",
  description:
    "Septic tank pumping, inspections, installation, drain field repair, grease trap cleaning, repairs, and permits — all in one place.",
  openGraph: {
    title: "Septic Services | FlowRight Septic Co.",
    description:
      "Complete septic services: pumping, inspection, installation, repair, and more.",
    images: ["/images/og.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every Septic Service, One Trusted Team"
        sub="From routine pumping to full system replacement, our licensed technicians handle every part of your septic system — with upfront pricing and same-week scheduling."
        image="/images/hero.jpg"
        alt="FlowRight septic service truck at a suburban home"
      />
      <ServicesGrid />
      <CtaBand />
    </>
  );
}
