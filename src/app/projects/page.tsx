import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/ui-blocks";
import { CtaBand } from "@/components/ui-blocks";
import { FadeIn, GlassCard } from "@/components/ui-blocks";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Real septic projects — full system replacements, drain field restorations, and commercial grease trap programs.",
  openGraph: {
    title: "Projects & Case Studies | FlowRight Septic Co.",
    description: "Recent septic projects from FlowRight Septic Co.",
    images: ["/images/project-1.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Recent Projects We Are Proud Of"
        sub="From lakeside rebuilds to restaurant grease programs — real work, real results, systems that pass inspection the first time."
        image="/images/project-4.jpg"
        alt="Lakeside septic system replacement project"
      />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <GlassCard className="h-full overflow-hidden p-0">
                <div className="relative h-56">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 rounded-full bg-white/80 text-primary backdrop-blur-md">
                    {p.tag}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-0.5 text-xs font-semibold tracking-wide text-accent-foreground/80 uppercase">
                    {p.location}
                  </p>
                  <dl className="mt-4 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-semibold text-primary">
                        Scope:
                      </dt>
                      <dd className="text-muted-foreground">{p.scope}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-semibold text-primary">
                        Result:
                      </dt>
                      <dd className="text-muted-foreground">{p.result}</dd>
                    </div>
                  </dl>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
