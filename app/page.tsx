import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CategoriesPreview } from "@/components/home/CategoriesPreview";
import { WhyUs } from "@/components/home/WhyUs";
import { Schedule } from "@/components/home/Schedule";
import { Testimonials } from "@/components/home/Testimonials";
import { Achievements } from "@/components/home/Achievements";
import { NewsPreview } from "@/components/home/NewsPreview";
import { LocationSection } from "@/components/home/LocationSection";
import { CTASection } from "@/components/home/CTASection";
import { SPORTS_SCHEMA, LOCAL_BUSINESS_SCHEMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Academia de Fútbol San Martín Chorrillos | Inscripciones Abiertas",
  description: "La mejor academia de fútbol en Chorrillos, Lima. Categorías desde 3 años hasta adultos, entrenadores certificados FPF. ¡Inscríbete ahora!",
  openGraph: {
    title: "Academia de Fútbol San Martín Chorrillos | Inscripciones Abiertas",
    description: "La mejor academia de fútbol en Chorrillos, Lima. Categorías desde 3 años hasta adultos, entrenadores certificados FPF.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPORTS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      <Hero />
      <CategoriesPreview />
      <WhyUs />
      <Schedule />
      <NewsPreview />
      <Testimonials />
      <Achievements />
      <LocationSection />
      <CTASection />
    </>
  );
}
