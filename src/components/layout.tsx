"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Droplets, Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contact, navLinks, services } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-300",
          scrolled
            ? "glass-strong"
            : "border-white/50 bg-white/60 backdrop-blur-md"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5 pl-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#177a70] text-white">
            <Droplets className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-bold text-primary">
            FlowRight
          </span>
          <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
            Septic Co.
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={contact.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden rounded-full md:inline-flex"
            )}
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden rounded-full bg-gradient-to-r from-primary to-[#177a70] text-white sm:inline-flex"
            )}
          >
            Free Quote
          </Link>
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-primary lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-display text-primary">
                  FlowRight Septic Co.
                </SheetTitle>
                <SheetDescription>
                  Septic care you can count on.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-2">
                {navLinks.map((l) => (
                  <SheetClose key={l.href} asChild>
                    <Link
                      href={l.href}
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants(),
                      "mt-4 rounded-full bg-gradient-to-r from-primary to-[#177a70] text-white"
                    )}
                  >
                    Get a Free Quote
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-8 pt-8">
      <div className="glass-strong rounded-3xl px-8 py-12 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#177a70] text-white">
                <Droplets className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold text-primary">
                FlowRight <span className="text-accent">Septic Co.</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Septic pumping, inspection, installation, and repair — trusted by
              homeowners and businesses for over 25 years.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <i className="fa-brands fa-instagram text-lg" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <i className="fa-brands fa-facebook-f text-lg" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition-colors hover:bg-primary hover:text-white"
              >
                <i className="fa-brands fa-x-twitter text-lg" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks
                .filter((l) => l.href !== "/")
                .map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={contact.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.address}</li>
              <li className="pt-1 text-xs">{contact.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {year} FlowRight Septic Co. All rights reserved.</p>
          <p>
            Licensed &amp; Insured · Serving Springfield and surrounding counties
          </p>
        </div>
      </div>
    </footer>
  );
}
