import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ACADEMIA } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros | Academia de Fútbol San Martín Chorrillos",
  description: "Conoce la historia, misión y valores de la Academia de Fútbol San Martín en Chorrillos. Entrenadores certificados FPF.",
  path: "/nosotros",
});

const VALORES = [
  { titulo: "Disciplina", descripcion: "El compromiso y la constancia como base de todo logro deportivo y personal." },
  { titulo: "Respeto", descripcion: "Hacia compañeros, entrenadores, rivales e instalaciones." },
  { titulo: "Superación", descripcion: "Siempre dar el máximo, independientemente del marcador." },
  { titulo: "Trabajo en equipo", descripcion: "El fútbol y la vida se ganan juntos. Nadie llega lejos solo." },
  { titulo: "Integridad", descripcion: "Actuar con honestidad dentro y fuera de la cancha." },
];

const ENTRENADORES = [
  { nombre: "Prof. [Nombre]", cargo: "Director Técnico", credenciales: "Licencia FPF · 10+ años de experiencia", descripcion: "Responsable de la metodología general de la academia." },
  { nombre: "Prof. [Nombre]", cargo: "Entrenador Baby Fútbol y Fútbol Base", credenciales: "Licencia FPF · Especialista en primera infancia", descripcion: "Experto en el desarrollo motor y técnico de niños de 3 a 12 años." },
  { nombre: "Prof. [Nombre]", cargo: "Entrenador Juvenil y Pre-Juvenil", credenciales: "Licencia FPF · Ex-jugador profesional", descripcion: "Formador de jugadores con proyección competitiva." },
  { nombre: "Prof. [Nombre]", cargo: "Entrenador de Arqueros", credenciales: "Especialista en porteros · Licencia FPF", descripcion: "Coach exclusivo de porteros para todas las categorías." },
];

export default function NosotrosPage() {
  return (
    <div style={{ backgroundColor: "#f5f7fc" }}>
      {/* Hero */}
      <section style={{ padding: "1.5rem 1.5rem 1.5rem", backgroundColor: "#0d1b4b", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 0.75rem" }}>
            Nuestra Historia
          </h1>
          <p style={{ color: "#c5cde8", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            {ACADEMIA.nombre} nació con un objetivo claro: ofrecer a los niños y jóvenes de Chorrillos una formación futbolística de calidad, accesible y con valores.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {[
            { titulo: "Misión", contenido: "Formar futbolistas y personas íntegras en Chorrillos, con metodología certificada FPF, entrenadores comprometidos y una cultura de excelencia, disciplina y trabajo en equipo." },
            { titulo: "Visión", contenido: "Ser la academia de fútbol de referencia en el sur de Lima, reconocida por la calidad de su formación, la transparencia con las familias y la proyección de sus jugadores." },
          ].map((item) => (
            <div key={item.titulo} style={{ backgroundColor: "#f5f7fc", borderRadius: "12px", padding: "2rem", borderLeft: "4px solid #1a237e" }}>
              <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.4rem", fontWeight: 700, color: "#1a237e", textTransform: "uppercase", margin: "0 0 1rem" }}>{item.titulo}</h2>
              <p style={{ color: "#4a5578", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{item.contenido}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#f5f7fc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={badgeStyle}>Identidad</span>
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#0d1b4b", textTransform: "uppercase", margin: "0.75rem 0 0" }}>Nuestros Valores</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {VALORES.map((v) => (
              <div key={v.titulo} style={{ backgroundColor: "#ffffff", borderRadius: "10px", padding: "1.5rem", borderLeft: "3px solid #1a237e", boxShadow: "0 2px 8px rgba(26,35,126,0.06)" }}>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.05rem", fontWeight: 700, color: "#1a237e", margin: "0 0 0.5rem", textTransform: "uppercase" }}>{v.titulo}</h3>
                <p style={{ color: "#4a5578", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{v.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuerpo técnico */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={badgeStyle}>Equipo</span>
            <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, color: "#0d1b4b", textTransform: "uppercase", margin: "0.75rem 0 0.5rem" }}>Nuestro Cuerpo Técnico</h2>
            <p style={{ color: "#5a6a8a", fontSize: "0.95rem" }}>Profesionales certificados comprometidos con tu desarrollo.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {ENTRENADORES.map((e, i) => (
              <article key={i} style={{ backgroundColor: "#f5f7fc", borderRadius: "12px", padding: "1.75rem", border: "1px solid #e8ecf8" }}>
                <div style={{ width: 56, height: 56, backgroundColor: "#1a237e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-raleway)", fontWeight: 700, fontSize: "1.3rem", color: "#ffffff", marginBottom: "1rem" }} aria-hidden="true">
                  {String.fromCharCode(65 + i)}
                </div>
                <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.05rem", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.2rem" }}>{e.nombre}</h3>
                <p style={{ color: "#1a237e", fontSize: "0.85rem", fontWeight: 700, margin: "0 0 0.4rem" }}>{e.cargo}</p>
                <p style={{ color: "#8899bb", fontSize: "0.78rem", margin: "0 0 0.75rem" }}>{e.credenciales}</p>
                <p style={{ color: "#4a5578", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{e.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "transparent", border: "1px solid #1a237e", color: "#1a237e", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" };
