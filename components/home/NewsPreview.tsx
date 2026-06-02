import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const NOTICIAS_PREVIEW = [
  { slug: "edad-empezar-academia-futbol", titulo: "¿A qué edad pueden empezar los niños en una academia de fútbol?", resumen: "Muchos padres se preguntan cuándo es el momento ideal. Te explicamos todo sobre el desarrollo infantil y el fútbol.", fecha: "15 Ene 2026", categoria: "Tips de Fútbol", imagen: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80" },
  { slug: "vacaciones-utiles-2026-futbol-chorrillos", titulo: "Vacaciones útiles 2026: fútbol para niños en Chorrillos", resumen: "Este verano tu hijo puede aprender fútbol con los mejores coaches de Chorrillos. Inscripciones abiertas.", fecha: "10 Ene 2026", categoria: "Vacaciones Útiles", imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80" },
  { slug: "como-elegir-academia-futbol-lima", titulo: "Cómo elegir la mejor academia de fútbol para tu hijo en Lima", resumen: "Guía para padres: qué preguntar y qué señales revelan si una academia es realmente profesional.", fecha: "5 Ene 2026", categoria: "Tips de Fútbol", imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80" },
];

export function NewsPreview() {
  return (
    <section className="stadium-bg" style={{ padding: "4rem 0", backgroundColor: "#ffffff" }} aria-labelledby="noticias-heading">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
          <div>
            <span style={badgeStyle}>Blog</span>
            <h2 id="noticias-heading" style={{ ...sectionTitleStyle, marginTop: "0.5rem" }}>Últimas Noticias</h2>
          </div>
          <Link href="/noticias" style={{ color: "#1a237e", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
            VER TODAS <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {NOTICIAS_PREVIEW.map((noticia) => (
            <article key={noticia.slug}>
              <Link href={`/noticias/${noticia.slug}`} style={{ display: "block", backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", overflow: "hidden", textDecoration: "none" }}>
                <div style={{ height: "190px", backgroundImage: `url(${noticia.imagen})`, backgroundSize: "cover", backgroundPosition: "center" }} role="img" aria-label={noticia.titulo} />
                <div style={{ padding: "1.4rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ backgroundColor: "#eef0ff", color: "#1a237e", padding: "3px 10px", borderRadius: "4px", fontSize: "0.73rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{noticia.categoria}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#8899bb", fontSize: "0.75rem" }}><Calendar size={11} aria-hidden="true" />{noticia.fecha}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.05rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.6rem", lineHeight: 1.3 }}>{noticia.titulo}</h3>
                  <p style={{ color: "#5a6a8a", fontSize: "0.83rem", lineHeight: 1.6, margin: "0 0 1rem" }}>{noticia.resumen}</p>
                  <span style={{ color: "#1a237e", fontSize: "0.83rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
                    LEER MÁS <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "transparent", border: "1px solid #1a237e", color: "#1a237e", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#0d1b4b", margin: 0, textTransform: "uppercase" };
