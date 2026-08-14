import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  CtaBand,
  FadeIn,
  GlassCard,
  PageHero,
} from "@/components/ui-blocks";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: service.title,
    description: service.short,
    openGraph: {
      title: service.title,
      description: service.short,
      images: [service.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Septic Service"
        title={service.title}
        sub={service.short}
        image={service.image}
        alt={service.title}
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <FadeIn className="lg:col-span-2">
            <GlassCard className="p-8">
              <h2 className="font-display text-2xl font-bold text-primary">
                What&apos;s Included
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {service.long}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-strong sticky top-28 rounded-3xl p-7">
              <div className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Starting at
              </div>
              <div className="font-display mt-1 text-4xl font-bold text-primary">
                {service.fromPrice.replace("From ", "")}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Final price confirmed before any work begins.
              </p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 w-full rounded-full bg-gradient-to-r from-primary to-[#177a70] text-white shadow-lg shadow-primary/25"
                )}
              >
                Get a Quote
              </Link>
              <Link
                href="tel:+15551234567"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "mt-3 w-full rounded-full border-primary/25 bg-white/60 text-primary"
                )}
              >
                Call (555) 123-4567
              </Link>
              <div className="mt-6 border-t border-primary/10 pt-5">
                <div className="text-sm font-semibold text-primary">
                  Service area
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Springfield and all surrounding counties, including rural
                  properties.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
