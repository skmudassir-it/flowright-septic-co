import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui-blocks";
import { FadeIn, GlassCard } from "@/components/ui-blocks";
import { QuoteForm } from "@/components/quote-form";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Request a free septic service quote. Call, email, or use the form — we reply within one business day. 24/7 emergency service.",
  openGraph: {
    title: "Contact & Free Quote | FlowRight Septic Co.",
    description: "Get a free, no-obligation quote from FlowRight Septic Co.",
    images: ["/images/cta.jpg"],
  },
};

const cards = [
  {
    icon: Phone,
    title: "Call or text",
    lines: [contact.phone, "24/7 emergency line"],
    href: contact.phoneHref,
  },
  {
    icon: Mail,
    title: "Email us",
    lines: [contact.email, "Replies within 1 business day"],
    href: `mailto:${contact.email}`,
  },
  {
    icon: MapPin,
    title: "Visit",
    lines: [contact.address, "Serving Springfield & beyond"],
    href: undefined,
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon–Fri 7am–6pm", "Sat 8am–2pm"],
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get Your Free Quote Today"
        sub="Tell us about your system and we will call you back with an upfront, itemized price — usually within one business day."
        image="/images/cta.jpg"
        alt="FlowRight technician shaking hands with a happy homeowner"
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {cards.map((c) => (
                <GlassCard key={c.title} className="p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-primary">
                        {c.title}
                      </h3>
                      {c.lines.map((line) => (
                        <p
                          key={line}
                          className="mt-0.5 text-sm text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-3">
            <GlassCard className="p-7 md:p-10">
              <h2 className="font-display text-2xl font-bold text-primary">
                Request a Free Quote
              </h2>
              <p className="mt-1 mb-7 text-sm text-muted-foreground">
                Fill this out and we will call you back with a price — no
                obligation, no spam.
              </p>
              <QuoteForm />
            </GlassCard>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
