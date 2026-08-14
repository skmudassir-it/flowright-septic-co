import type { Metadata } from "next";
import { PageHero } from "@/components/ui-blocks";
import { StatsStrip } from "@/components/ui-blocks";
import { CtaBand } from "@/components/ui-blocks";
import { FadeIn, GlassCard, IconBadge } from "@/components/ui-blocks";
import { HeartHandshake, Leaf, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FlowRight Septic Co. is a locally owned septic company with 25+ years of experience serving Springfield and surrounding counties.",
  openGraph: {
    title: "About Us | FlowRight Septic Co.",
    description:
      "Locally owned, 25+ years of septic expertise, thousands of systems serviced.",
    images: ["/images/about.jpg"],
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Every job is performed to code with certified equipment — your family, our crew, and the environment come first.",
  },
  {
    icon: Users,
    title: "Neighborly Service",
    text: "We treat every property like our own street. Respectful, tidy, and communicative from the first call.",
  },
  {
    icon: Leaf,
    title: "Stewards of the Land",
    text: "Proper septic care protects groundwater and watersheds. We dispose of all waste at permitted facilities.",
  },
  {
    icon: HeartHandshake,
    title: "Honest Advice",
    text: "If your system does not need work, we will tell you. Trust is the foundation of a 25-year reputation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Locally Owned, Obsessively Reliable"
        sub="For over 25 years, FlowRight Septic Co. has kept septic systems healthy across Springfield and the surrounding counties — one clean, honest job at a time."
        image="/images/about.jpg"
        alt="The FlowRight Septic Co. team in front of a service truck"
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <GlassCard className="h-full">
                <IconBadge>
                  <v.icon className="h-6 w-6" />
                </IconBadge>
                <h3 className="font-display mt-4 text-lg font-bold">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-14">
          <GlassCard className="p-8 md:p-12">
            <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
              Our Story
            </h2>
            <div className="mt-4 grid gap-6 text-muted-foreground md:grid-cols-2">
              <p className="leading-relaxed">
                FlowRight started in 1999 with one truck, a used vacuum pump,
                and a simple promise: show up when you say you will, price the
                job before you start, and leave the property cleaner than you
                found it. That promise built a business the old-fashioned way —
                one referral at a time.
              </p>
              <p className="leading-relaxed">
                Today our fleet covers pumping, camera inspections,
                installation, drain field repair, and commercial grease trap
                service across the region. We are still family-owned, still
                answering the phone ourselves, and still standing behind every
                job with a written warranty.
              </p>
            </div>
          </GlassCard>
        </FadeIn>
      </section>
      <StatsStrip />
      <CtaBand />
    </>
  );
}
