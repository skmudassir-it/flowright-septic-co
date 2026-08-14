"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, Quote, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, services, stats, testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#177a70] text-white shadow-lg shadow-primary/20">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <FadeIn className={cn("mb-10 max-w-2xl", center && "mx-auto text-center")}>
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-base text-muted-foreground text-pretty">{sub}</p>
      ) : null}
    </FadeIn>
  );
}

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <FadeIn>
        <div className="glass-strong grid grid-cols-2 gap-8 rounded-3xl px-8 py-10 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading
        eyebrow="What We Do"
        title="Septic Services, Done Right"
        sub="From routine pumping to full system replacement — one team for every part of your septic system."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => (
          <FadeIn key={s.slug} delay={i * 0.08}>
            <Link href={`/services/${s.slug}`} className="group block h-full">
              <GlassCard className="h-full overflow-hidden p-0">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-accent-foreground/80">
                      {s.fromPrice}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function TestimonialSlider() {
  const reduce = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const frame = requestAnimationFrame(onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionHeading
        eyebrow="Testimonials"
        title="What Our Customers Say"
        sub="Real reviews from homeowners and businesses across the region."
      />
      <FadeIn>
        <div className={cn(reduce && "grid gap-6 md:grid-cols-3")}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((t) => (
                <div className="embla__slide" key={t.name}>
                  <GlassCard className="flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <Quote className="h-7 w-7 text-accent" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                      “{t.quote}”
                    </p>
                    <div className="mt-5 border-t border-primary/10 pt-4">
                      <div className="font-semibold text-primary">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
          {!reduce && (
            <div className="embla__dots">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "embla__dot",
                    i === selected && "is-selected"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        sub="Straight answers to the questions we hear most often."
      />
      <FadeIn>
        <div className="glass rounded-3xl px-6">
          <Accordion type="single" collapsible defaultValue="faq-0">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-[#146b62] to-[#177a70] px-8 py-14 text-center shadow-2xl shadow-primary/25 md:px-16">
          <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <h2 className="font-display relative text-3xl font-bold text-white md:text-4xl">
            Ready for Septic Peace of Mind?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Get a free, no-obligation quote today. We will inspect your system,
            explain your options, and give you an upfront price.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-accent text-accent-foreground shadow-lg shadow-black/20 hover:bg-accent/90"
              )}
            >
              Get My Free Quote
            </Link>
            <Link
              href="tel:+15551234567"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              )}
            >
              Call (555) 123-4567
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-36 pb-10 md:pt-44">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            {eyebrow}
          </span>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
            {sub}
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="glass relative h-64 overflow-hidden rounded-3xl p-2 md:h-80">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-2xl object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
