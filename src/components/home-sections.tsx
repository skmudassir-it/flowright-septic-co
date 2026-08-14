"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { features } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeIn, GlassCard, IconBadge } from "./ui-blocks";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-6xl px-4 pt-36 pb-10 md:pt-44">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Licensed · Insured · 24/7 Emergency
          </span>
          <h1 className="font-display mt-5 text-4xl font-bold tracking-tight text-balance md:text-6xl">
            Septic Care You Can{" "}
            <span className="bg-gradient-to-r from-primary to-[#177a70] bg-clip-text text-transparent">
              Count On
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
            Pumping, inspections, installation, and repair for homes and
            businesses — fast, clean, and priced upfront. Over 12,000 systems
            serviced and counting.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-gradient-to-r from-primary to-[#177a70] px-8 text-base text-white shadow-xl shadow-primary/25"
              )}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full border-primary/25 bg-white/60 px-8 text-base text-primary backdrop-blur-md hover:bg-white/80"
              )}
            >
              Explore Services
            </Link>
          </div>
        </FadeIn>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="glass relative h-72 overflow-hidden rounded-3xl p-2 md:h-96">
            <Image
              src="/images/hero.jpg"
              alt="FlowRight septic service truck at a suburban home"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="glass-strong absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl px-5 py-3 md:left-8">
            <span className="font-display text-2xl font-bold text-primary">
              4.9★
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              500+ five-star
              <br />
              customer reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <FadeIn className="mb-10 max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
          Why FlowRight
        </span>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
          The Septic Company Neighbors Trust
        </h2>
      </FadeIn>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 0.08}>
            <GlassCard className="h-full">
              <IconBadge>
                <f.icon className="h-6 w-6" />
              </IconBadge>
              <h3 className="font-display mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
