import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/ui-blocks";
import { CtaBand } from "@/components/ui-blocks";
import { FadeIn, GlassCard } from "@/components/ui-blocks";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent septic service pricing — pumping, inspection, repair, and installation starting prices. Upfront, itemized quotes before any work.",
  openGraph: {
    title: "Pricing | FlowRight Septic Co.",
    description:
      "Upfront, honest pricing for every septic service. Quotes before any work begins.",
    images: ["/images/pricing.jpg"],
  },
};

const tiers = [
  {
    name: "Pumping",
    price: "$249",
    unit: "starting",
    blurb: "Routine tank pumping with a free system health check.",
    items: [
      "Residential and commercial tanks",
      "Health check included",
      "Same-week scheduling",
    ],
    featured: false,
  },
  {
    name: "Inspection",
    price: "$189",
    unit: "starting",
    blurb: "Pre-purchase and maintenance inspections with reports.",
    items: [
      "Camera scoping available",
      "Same-day written report",
      "Realtor-ready documentation",
    ],
    featured: false,
  },
  {
    name: "Installation",
    price: "$4,900",
    unit: "starting",
    blurb: "New tanks and full systems, permitted and code-compliant.",
    items: [
      "Permits handled for you",
      "Yard restoration included",
      "5-year workmanship warranty",
    ],
    featured: true,
  },
  {
    name: "Repairs",
    price: "$350",
    unit: "starting",
    blurb: "Pumps, alarms, lids, and pipes fixed on the first visit.",
    items: [
      "Most parts on the truck",
      "Full-system test after repair",
      "24/7 emergency dispatch",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Honest Prices, Zero Surprises"
        sub="Every quote is written, itemized, and confirmed before we start. These starting prices give you a clear sense of what to expect."
        image="/images/pricing.jpg"
        alt="Technician reviewing a pricing estimate with a homeowner"
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <GlassCard
                className={cn(
                  "flex h-full flex-col",
                  t.featured &&
                    "border-accent/40 bg-gradient-to-b from-white/80 to-accent/10"
                )}
              >
                {t.featured ? (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    Most Popular
                  </span>
                ) : (
                  <span className="mb-3 inline-flex h-6 w-fit items-center rounded-full bg-primary/10 px-3 text-xs font-semibold text-primary">
                    {t.name}
                  </span>
                )}
                {t.featured ? (
                  <h3 className="font-display text-lg font-bold">{t.name}</h3>
                ) : null}
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-bold text-primary">
                    {t.price}
                  </span>
                  <span className="text-xs text-muted-foreground">{t.unit}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "mt-6 w-full rounded-full",
                    t.featured
                      ? "bg-gradient-to-r from-primary to-[#177a70] text-white"
                      : "border border-primary/25 bg-white/60 text-primary hover:bg-white/80"
                  )}
                >
                  Get an Exact Quote
                </Link>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12">
          <GlassCard className="p-8 text-center">
            <h2 className="font-display text-xl font-bold text-primary">
              Every quote includes a free health check
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              Drain field repairs start at $3,200, grease trap cleaning at
              $180, and permits &amp; compliance at $120. Financing is available
              on tanks, drain fields, and full replacements. Call us for a
              same-day estimate.
            </p>
            <Link
              href="tel:+15551234567"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 rounded-full bg-gradient-to-r from-primary to-[#177a70] text-white"
              )}
            >
              Call (555) 123-4567
            </Link>
          </GlassCard>
        </FadeIn>
      </section>
      <CtaBand />
    </>
  );
}
