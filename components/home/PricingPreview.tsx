"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { CATEGORIAS } from "@/lib/categories";

const INCLUDES = ["Entrenamiento técnico y táctico", "Entrenador certificado FPF", "Grupos reducidos", "Torneos internos"];

export function PricingPreview() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "5rem 0", backgroundColor: "#f0f2fb" }} aria-labelledby="precios-heading">
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/bg-crowd.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)", opacity: 0.06 }} aria-hidden="true" />
      <div style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={badgeStyle}>Transparencia</span>
            <h2 id="precios-heading" style={sectionTitleStyle}>Precios Claros y Justos</h2>
            <p style={sectionSubStyle}>Somos la única academia en Chorrillos con precios publicados.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.25rem" }}>
            {CATEGORIAS.map((cat, i) => (
              <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }}>
                <div style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(26,35,126,0.06)", display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ height: "4px", backgroundColor: "#1a237e" }} aria-hidden="true" />
                  <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.1rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.2rem", textTransform: "uppercase" }}>{cat.nombre}</h3>
                    <p style={{ color: "#8899bb", fontSize: "0.82rem", margin: "0 0 1rem" }}>{cat.edadTexto}</p>
                    <div style={{ marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-raleway)", fontSize: "2.2rem", fontWeight: 700, color: "#1a237e" }}>S/ {cat.precio}</span>
                      <span style={{ color: "#8899bb", fontSize: "0.82rem" }}>/mes</span>
                    </div>
                    <ul style={{ listStyle: "none", margin: "0 0 1.25rem", padding: 0, flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {INCLUDES.map((item) => (
                        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#4a5578", fontSize: "0.83rem" }}>
                          <Check size={14} style={{ color: "#1a237e", flexShrink: 0, marginTop: 2 }} aria-hidden="true" />{item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/inscribete" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", backgroundColor: "#1a237e", color: "#ffffff", padding: "11px", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "0.88rem", minHeight: "44px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em", transition: "background-color 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3949ab")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a237e")}
                    >
                      INSCRIBIRME <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/precios" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#1a237e", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
              VER TABLA COMPARATIVA COMPLETA <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "#1a237e", color: "#ffffff", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.5rem", textTransform: "uppercase" };
const sectionSubStyle: React.CSSProperties = { color: "#5a6a8a", fontSize: "1rem", margin: 0 };
