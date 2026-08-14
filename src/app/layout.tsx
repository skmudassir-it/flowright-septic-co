import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowright-septic-co.amsitservices.com"),
  title: {
    default: "FlowRight Septic Co. | Septic Pumping, Inspection & Repair",
    template: "%s | FlowRight Septic Co.",
  },
  description:
    "Septic tank pumping, inspections, installation, repair, and grease trap cleaning for homes and businesses. Licensed, insured, and upfront pricing. Call (555) 123-4567.",
  keywords: [
    "septic tank pumping",
    "septic inspection",
    "septic installation",
    "drain field repair",
    "grease trap cleaning",
    "septic repair",
    "FlowRight Septic",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FlowRight Septic Co.",
    title: "FlowRight Septic Co. | Septic Pumping, Inspection & Repair",
    description:
      "Septic care you can count on — pumping, inspection, installation, and repair.",
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowRight Septic Co.",
    description: "Septic care you can count on.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <div className="relative min-h-screen overflow-x-clip">
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
