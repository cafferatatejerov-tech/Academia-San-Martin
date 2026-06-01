import type { Metadata } from "next";
import { Inter, Oswald, Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ACADEMIA } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${ACADEMIA.nombre} ${ACADEMIA.distrito} | Inscripciones Abiertas`,
    template: `%s | ${ACADEMIA.nombreCorto}`,
  },
  description: `La mejor academia de fútbol en ${ACADEMIA.distrito}, Lima. Categorías desde 3 años hasta adultos, entrenadores certificados. ¡Inscríbete ahora!`,
  metadataBase: new URL(ACADEMIA.url),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${oswald.variable} ${raleway.variable}`}>
      <body className="min-h-screen" style={{ backgroundColor: "#f5f7fc", color: "#1a1a2e" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
