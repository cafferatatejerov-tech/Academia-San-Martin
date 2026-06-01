import type { Metadata } from "next";
import { ACADEMIA } from "./constants";

const BASE_URL = ACADEMIA.url;

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: ACADEMIA.nombre,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "es_PE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export const SPORTS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: ACADEMIA.nombre,
  description: `Academia de fútbol en ${ACADEMIA.distrito}, ${ACADEMIA.ciudad}. Categorías desde 3 años hasta adultos.`,
  url: BASE_URL,
  telephone: ACADEMIA.whatsappDisplay,
  email: ACADEMIA.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ACADEMIA.direccion,
    addressLocality: ACADEMIA.distrito,
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  sport: "Fútbol",
  openingHours: "Mo-Sa 09:00-19:00",
  sameAs: [
    `https://www.instagram.com/${ACADEMIA.instagram}`,
    `https://www.facebook.com/${ACADEMIA.facebook}`,
  ],
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: ACADEMIA.nombre,
  url: BASE_URL,
  telephone: ACADEMIA.whatsappDisplay,
  email: ACADEMIA.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ACADEMIA.direccion,
    addressLocality: ACADEMIA.distrito,
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.1591, // TODO: reemplazar con coordenadas reales de Chorrillos
    longitude: -77.0197,
  },
  openingHours: "Mo-Sa 09:00-19:00",
};
