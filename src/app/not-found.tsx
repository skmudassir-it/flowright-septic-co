import Link from "next/link";
import { Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
      <div className="glass-strong w-full rounded-3xl px-8 py-16">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[#177a70] text-white">
          <Compass className="h-8 w-8" />
        </span>
        <p className="mt-6 text-sm font-semibold tracking-widest text-accent uppercase">
          Error 404
        </p>
        <h1 className="font-display mt-2 text-4xl font-bold text-primary md:text-5xl">
          This Page Took a Wrong Turn
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you are looking for does not exist or has moved. Let us get
          you back on solid ground.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-gradient-to-r from-primary to-[#177a70] text-white"
            )}
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "rounded-full border-primary/25 bg-white/60 text-primary"
            )}
          >
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  );
}
