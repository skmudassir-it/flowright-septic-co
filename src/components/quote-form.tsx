"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  service: z.string().optional(),
  message: z.string().min(10, "Tell us a little about your project"),
});

type FormValues = z.infer<typeof schema>;

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Request received!", {
          description: "We will reach out within one business day.",
        });
        reset();
      } else {
        toast.error(data.error ?? "Something went wrong — please try again.");
      }
    } catch {
      toast.error("Network error — please try again.");
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            placeholder="Jane Smith"
            {...register("name")}
            className="h-12 rounded-xl bg-white/70"
          />
          {errors.name ? (
            <p className="text-xs font-medium text-destructive">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            {...register("phone")}
            className="h-12 rounded-xl bg-white/70"
          />
          {errors.phone ? (
            <p className="text-xs font-medium text-destructive">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@example.com"
          {...register("email")}
          className="h-12 rounded-xl bg-white/70"
        />
        {errors.email ? (
          <p className="text-xs font-medium text-destructive">
            {errors.email.message}
          </p>
        ) : null}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="service">Service needed (optional)</Label>
        <Select
          onValueChange={(v) => setValue("service", v)}
          defaultValue=""
        >
          <SelectTrigger
            id="service"
            className="h-12 rounded-xl bg-white/70"
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.title}>
                {s.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Roughly where is the property, and what is going on with the system?"
          {...register("message")}
          className="rounded-xl bg-white/70"
        />
        {errors.message ? (
          <p className="text-xs font-medium text-destructive">
            {errors.message.message}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        disabled={submitting}
        className="h-13 rounded-full bg-gradient-to-r from-primary to-[#177a70] px-8 text-base text-white hover:from-primary hover:to-[#177a70]"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          "Get My Free Quote"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        No spam, no obligation. We reply within one business day.
      </p>
    </form>
  );
}
