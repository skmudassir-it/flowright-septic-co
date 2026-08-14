import {
  Award,
  CalendarCheck,
  Droplets,
  FileCheck2,
  Gauge,
  HandCoins,
  MapPin,
  PhoneCall,
  Pipette,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SITE_URL = "https://flowright-septic-co.amsitservices.com";

export const contact = {
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@flowrightseptic.com",
  address: "1842 Pump House Road, Springfield",
  hours: "Mon–Fri 7am–6pm · Sat 8am–2pm · 24/7 Emergency",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  image: string;
  fromPrice: string;
  features: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "septic-tank-pumping",
    title: "Septic Tank Pumping",
    short: "Regular pumping keeps your system healthy and prevents costly, smelly backups.",
    long: "We pump residential and commercial septic tanks of every size with fully equipped vacuum trucks. While the tank is open, our technicians check the baffles, risers, and sludge levels so small problems never become expensive ones. Most customers pump every 3–5 years depending on household size.",
    image: "/images/service-pumping.jpg",
    fromPrice: "From $249",
    features: [
      "Full 1,500-gallon capacity vacuum trucks",
      "Tank health check included with every pump",
      "Riser installation available on request",
      "Same-week scheduling in most areas",
    ],
    icon: Pipette,
  },
  {
    slug: "septic-system-inspection",
    title: "Septic System Inspection",
    short: "Pre-purchase and maintenance inspections with camera scoping and written reports.",
    long: "Buying a home with a septic system? Our inspectors provide a complete health report: tank levels, baffle condition, drain field performance, and a camera scope of the lines. We also run routine maintenance inspections to catch issues early and document your system for your records.",
    image: "/images/service-inspection.jpg",
    fromPrice: "From $189",
    features: [
      "Pre-purchase and financing inspections",
      "Camera scoping of tank and drain lines",
      "Written report with photos the same day",
      "Health department documentation support",
    ],
    icon: Gauge,
  },
  {
    slug: "tank-installation-replacement",
    title: "Tank Installation & Replacement",
    short: "New concrete and plastic tanks, sized right for your household and soil.",
    long: "Whether your tank is cracked, undersized, or simply at the end of its life, we design and install the right replacement. We size tanks to your household, soil type, and local code, handle the excavation, and restore your yard when we are done.",
    image: "/images/service-installation.jpg",
    fromPrice: "From $4,900",
    features: [
      "Concrete and high-density plastic tanks",
      "Proper sizing for household and soil",
      "Full excavation, placement, and backfill",
      "Yard restoration included",
    ],
    icon: Droplets,
  },
  {
    slug: "drain-field-repair-replacement",
    title: "Drain Field Repair & Replacement",
    short: "Restore failing leach fields with modern, code-compliant designs.",
    long: "A soggy yard, slow drains, or sewage odors usually point to a failing drain field. We diagnose the cause, then repair or replace your leach field with modern, code-compliant designs — including chamber and gravelless options that work better and last longer in tight soils.",
    image: "/images/service-drainfield.jpg",
    fromPrice: "From $3,200",
    features: [
      "Full soil and perc testing",
      "Chamber and gravelless field options",
      "Root intrusion and compaction fixes",
      "Code-compliant designs, permitted work",
    ],
    icon: MapPin,
  },
  {
    slug: "grease-trap-cleaning",
    title: "Grease Trap Cleaning",
    short: "Commercial grease trap and interceptor service that keeps kitchens compliant.",
    long: "Restaurants and food service operations rely on clean grease traps to stay open. We service grease traps and interceptors of all sizes on a schedule that matches your volume, with full waste documentation for health inspectors and grease hauling records.",
    image: "/images/service-grease.jpg",
    fromPrice: "From $180",
    features: [
      "Scheduled and emergency service",
      "Waste manifest and disposal records",
      "Kitchen-friendly, after-hours visits",
      "All sizes: under-sink to large interceptors",
    ],
    icon: Wrench,
  },
  {
    slug: "septic-system-repairs",
    title: "Septic System Repairs",
    short: "Pumps, alarms, lids, and pipes — fast repairs that protect your system.",
    long: "From a burned-out effluent pump to a broken riser lid, our technicians carry the parts to fix most septic problems on the first visit. We repair or replace pumps, floats, alarms, control panels, lids, and piping, and we always test the full system before we leave.",
    image: "/images/service-repairs.jpg",
    fromPrice: "From $350",
    features: [
      "Effluent pumps, floats, and alarms",
      "Riser, lid, and baffle replacement",
      "Pipe and coupling repairs",
      "Full-system test after every repair",
    ],
    icon: Wrench,
  },
  {
    slug: "permits-compliance",
    title: "Permits & Compliance",
    short: "Permits, health department sign-off, and paperwork handled for you.",
    long: "Septic work comes with paperwork. We handle county permits, health department inspections, and compliance documentation for installations, repairs, and transfers — so you get the approvals you need without chasing forms.",
    image: "/images/service-permits.jpg",
    fromPrice: "From $120",
    features: [
      "County and municipal permit filing",
      "Health department inspection coordination",
      "Real estate disclosure paperwork",
      "System records and compliance letters",
    ],
    icon: FileCheck2,
  },
];

export type Project = {
  title: string;
  location: string;
  scope: string;
  result: string;
  image: string;
  tag: string;
};

export const projects: Project[] = [
  {
    title: "Lakeside Full System Replacement",
    location: "Lakeview Estates",
    scope: "1,000-gallon concrete tank, new drain field, 3-day install",
    result: "Passed county inspection on the first visit",
    image: "/images/project-4.jpg",
    tag: "Residential",
  },
  {
    title: "Farmhouse Drain Field Restoration",
    location: "Rolling Hills",
    scope: "Failed leach field replaced with a chamber system",
    result: "Yard restored to pasture in under two weeks",
    image: "/images/project-2.jpg",
    tag: "Rural",
  },
  {
    title: "Downtown Bistro Grease Trap Program",
    location: "Springfield",
    scope: "Monthly grease trap service for a 12-table bistro",
    result: "Three years of clean health inspections",
    image: "/images/project-3.jpg",
    tag: "Commercial",
  },
  {
    title: "Family Home System Rebuild",
    location: "Maple Grove",
    scope: "Full rebuild: new tank, risers, and drain field",
    result: "System commissioned with a 5-year warranty",
    image: "/images/project-1.jpg",
    tag: "Residential",
  },
];

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote: "They pumped our tank, showed us photos of the inside, and even flagged a baffle issue before it became a disaster. Worth every penny.",
    name: "Margaret H.",
    role: "Homeowner, Springfield",
  },
  {
    quote: "The inspection report before we bought our house was so thorough our lender called to compliment it. Saved us from a very bad purchase.",
    name: "Dan & Priya R.",
    role: "Homebuyers, Maple Grove",
  },
  {
    quote: "Our grease trap service has been flawless for three years. Inspectors love the records they keep. Zero drama.",
    name: "Carlos M.",
    role: "Owner, The Corner Bistro",
  },
  {
    quote: "Tank died on a Friday night. They were here Saturday morning and the new system passed inspection on Monday. Unreal.",
    name: "Jenna T.",
    role: "Homeowner, Lakeview",
  },
  {
    quote: "Upfront price, no surprises, and they restored our yard better than it was before. We will never call anyone else.",
    name: "The Okafor Family",
    role: "Homeowners, Rolling Hills",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How often should I have my septic tank pumped?",
    a: "Most households need pumping every 3–5 years. The exact interval depends on household size, water usage, and tank volume. As a rule of thumb: a 1,000-gallon tank serving a family of four should be pumped about every 4 years.",
  },
  {
    q: "What are the warning signs of septic trouble?",
    a: "Slow drains, gurgling plumbing, sewage odors, a soggy or extra-green patch of lawn over the drain field, and backups are all red flags. If you notice any of these, call us right away — early repairs are far cheaper than replacements.",
  },
  {
    q: "Do you handle permits and health department inspections?",
    a: "Yes. We file county permits, coordinate health department inspections, and provide the documentation needed for installations, repairs, and real estate transactions. You will never have to chase paperwork.",
  },
  {
    q: "Do you offer emergency service?",
    a: "We do. Our 24/7 emergency line covers backups, sewage odors, and system failures. Our technicians carry the parts to fix most pump and alarm problems on the first visit.",
  },
  {
    q: "What does a typical service visit include?",
    a: "Every visit starts with a free system health check: tank levels, baffles, risers, and drain field conditions. We explain what we find, give you an upfront price before any work, and leave your property clean.",
  },
  {
    q: "Do you offer financing or maintenance plans?",
    a: "Yes. We offer simple financing on tanks, drain fields, and full replacements, plus an annual maintenance plan that includes inspections, priority scheduling, and member pricing.",
  },
];

export type Feature = { icon: LucideIcon; title: string; text: string };

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    text: "Fully licensed, bonded, and insured for every job — residential and commercial.",
  },
  {
    icon: CalendarCheck,
    title: "On-Time, Every Time",
    text: "Arrival windows we actually keep. Your schedule matters as much as ours.",
  },
  {
    icon: HandCoins,
    title: "Upfront Pricing",
    text: "A written, itemized price before any work begins. No surprises, ever.",
  },
  {
    icon: Award,
    title: "25+ Years of Experience",
    text: "Thousands of systems serviced across the region. Locally owned and operated.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Emergency Line",
    text: "Backups and failures do not wait for business hours — neither do we.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    text: "Your neighbors, your county, your code. We know the local ground and the local rules.",
  },
];

export const stats = [
  { value: "25+", label: "Years in business" },
  { value: "12,000+", label: "Pumpings completed" },
  { value: "4.9★", label: "Average customer rating" },
  { value: "24/7", label: "Emergency response" },
];
