import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Check, ArrowLeft } from "lucide-react";
import { getCategoryBySlug, CATEGORIAS } from "@/lib/categories";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return CATEGORIAS.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.nombre} Chorrillos | Academia San Martín | ${cat.edadTexto}`,
    description: `${cat.descripcion} Horario: ${cat.horario}. Precio: S/ ${cat.precio}/mes.`,
    path: `/categorias/${slug}`,
  });
}

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      {/* Hero */}
      <section style={{ padding: "4rem 1.5rem 3rem", backgroundColor: "#0d1b4b" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <Link href="/categorias" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#8899bb", textDecoration: "none", fontSize: "0.88rem" }}>
              <ArrowLeft size={15} aria-hidden="true" /> Todas las categorías
            </Link>
            <span style={{ display: "inline-block", backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {cat.edadTexto}
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 7vw, 4rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 1rem", lineHeight: 1 }}>
            {cat.nombre}
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "1rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 0 2rem" }}>
            {cat.descripcionLarga}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/inscribete" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#ffffff", color: "#1a237e", padding: "13px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", minHeight: "50px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
              INSCRIBIRME — S/ {cat.precio}/mes
            </Link>
            <Link href={`https://wa.me/51999999999?text=${encodeURIComponent(`Hola, quiero info sobre ${cat.nombre}`)}`} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#25d366", color: "#ffffff", padding: "13px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", minHeight: "50px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
              WHATSAPP
            </Link>
          </div>
        </div>
      </section>

      {/* Detalle */}
      <section style={{ padding: "3rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {/* Qué aprenden */}
          <div>
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.4rem", fontWeight: 700, color: "#0d1b4b", textTransform: "uppercase", margin: "0 0 1.25rem" }}>¿Qué aprenderán?</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cat.aprenden.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#4a5578", fontSize: "0.93rem", lineHeight: 1.5 }}>
                  <Check size={17} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(26,35,126,0.05)" }}>
              <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.75rem", textTransform: "uppercase" }}>Horario</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={18} style={{ color: "#1a237e" }} aria-hidden="true" />
                <p style={{ color: "#4a5578", fontSize: "0.93rem", margin: 0 }}>{cat.horario}</p>
              </div>
            </div>

            <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(26,35,126,0.05)" }}>
              <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.75rem", textTransform: "uppercase" }}>Documentos requeridos</h3>
              <ul style={{ margin: 0, padding: "0 0 0 1rem", color: "#4a5578", fontSize: "0.88rem", lineHeight: 1.9 }}>
                {cat.requisitos.map((req) => <li key={req}>{req}</li>)}
              </ul>
            </div>

            <div style={{ backgroundColor: "#1a237e", borderRadius: "12px", padding: "1.5rem", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-raleway)", fontSize: "2.5rem", fontWeight: 700, color: "#ffffff", margin: "0 0 4px" }}>S/ {cat.precio}</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", margin: "0 0 1.25rem" }}>por mes · matrícula gratuita</p>
              <Link href="/inscribete" style={{ display: "block", backgroundColor: "#ffffff", color: "#1a237e", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", minHeight: "48px", textAlign: "center", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
                INSCRIBIRME AHORA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
