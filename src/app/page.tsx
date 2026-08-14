import type { Metadata } from "next";
import {
  CtaBand,
  FaqSection,
  ServicesGrid,
  StatsStrip,
  TestimonialSlider,
} from "@/components/ui-blocks";
import { FeaturesSection, Hero } from "@/components/home-sections";
import { SITE_URL, contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "FlowRight Septic Co. | Septic Pumping, Inspection & Repair",
  description:
    "Septic tank pumping, inspections, installation, and repair for homes and businesses. Licensed, insured, upfront pricing, 24/7 emergency service.",
  openGraph: {
    title: "FlowRight Septic Co. | Septic Pumping, Inspection & Repair",
    description:
      "Septic care you can count on — pumping, inspection, installation, and repair.",
    images: ["/images/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FlowRight Septic Co.",
  description:
    "Septic tank pumping, inspection, installation, and repair for homes and businesses.",
  url: SITE_URL,
  telephone: contact.phone,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    addressLocality: "Springfield",
    addressRegion: "IL",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 07:00-18:00",
  priceRange: "$$",
  image: `${SITE_URL}/images/og.jpg`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeaturesSection />
      <StatsStrip />
      <ServicesGrid limit={6} />
      <TestimonialSlider />
      <FaqSection />
      <CtaBand />
    </>
  );
}
