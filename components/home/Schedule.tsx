import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Schedule() {
  return (
    <section className="stadium-bg" style={{ padding: "4rem 0", backgroundColor: "#ffffff" }} aria-labelledby="horarios-heading">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={badgeStyle}>Sede Chorrillos</span>
          <h2 id="horarios-heading" style={sectionTitleStyle}>Horarios de Entrenamiento</h2>
          <p style={sectionSubStyle}>Todas las categorías entrenan sábados y domingos en nuestra sede.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {[
            { dia: "Sábado", rango: "4:30 PM – 8:30 PM" },
            { dia: "Domingo", rango: "4:30 PM – 8:30 PM" },
          ].map((item) => (
            <div key={item.dia} style={{ backgroundColor: "#ffffff", border: "1px solid #e8ecf8", borderRadius: "12px", padding: "1.5rem 2.5rem", textAlign: "center", minWidth: "180px", boxShadow: "0 1px 4px rgba(26,35,126,0.06)" }}>
              <p style={{ fontFamily: "var(--font-raleway)", fontWeight: 700, fontSize: "1.1rem", color: "#0d1b4b", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>{item.dia}</p>
              <p style={{ color: "#1a237e", fontWeight: 700, fontSize: "1rem", margin: 0 }}>{item.rango}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/horarios" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#1a237e", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em", borderBottom: "2px solid #1a237e", paddingBottom: "2px" }}>
            VER HORARIOS POR CATEGORÍA <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}

const badgeStyle: React.CSSProperties = { display: "inline-block", backgroundColor: "transparent", border: "1px solid #1a237e", color: "#1a237e", padding: "3px 14px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.75rem" };
const sectionTitleStyle: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 0.5rem", textTransform: "uppercase" };
const sectionSubStyle: React.CSSProperties = { color: "#5a6a8a", fontSize: "1rem", margin: 0 };
