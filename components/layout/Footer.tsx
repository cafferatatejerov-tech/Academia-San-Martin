import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ACADEMIA, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d1b4b", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        .footer-bottom {
          border-top: 1px solid #1e2d5a;
          padding-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #ffffff", padding: "3px", boxSizing: "border-box", backgroundColor: "#ffffff" }}>
                <Image src="/logo1.png" alt="Logo Academia San Martín" width={64} height={64}
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-raleway)", fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{ACADEMIA.nombre}</p>
                <p style={{ color: "#8899bb", fontSize: "0.78rem", margin: 0, fontStyle: "italic" }}>"{ACADEMIA.lema}"</p>
              </div>
            </div>
            <p style={{ color: "#8899bb", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
              {ACADEMIA.slogan}
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { href: `https://www.instagram.com/${ACADEMIA.instagram}`, label: "Instagram", icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { href: `https://www.facebook.com/${ACADEMIA.facebook}`, label: "Facebook", icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { href: `https://wa.me/${ACADEMIA.whatsapp}`, label: "WhatsApp", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>, bg: "#25d366" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width: 36, height: 36, backgroundColor: s.bg ?? "#1e2d5a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", textDecoration: "none", transition: "opacity 0.15s" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 style={footerHeading}>Navegación</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <Link href={link.href} style={footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={footerHeading}>Contacto</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {[
                { Icon: MapPin, text: ACADEMIA.direccion },
                { Icon: Phone, text: ACADEMIA.whatsappDisplay, href: `https://wa.me/${ACADEMIA.whatsapp}` },
                { Icon: Mail, text: ACADEMIA.email, href: `mailto:${ACADEMIA.email}` },
                { Icon: Clock, text: ACADEMIA.horarioAtencion },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <Icon size={16} style={{ color: "#8899bb", flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  {href ? <a href={href} style={{ color: "#8899bb", fontSize: "0.88rem", textDecoration: "none" }}>{text}</a> : <p style={{ color: "#8899bb", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>{text}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h3 style={footerHeading}>Categorías</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { href: "/categorias/baby-futbol", label: "Baby Fútbol (3–5 años)" },
                { href: "/categorias/futbol-base", label: "Fútbol Base (6–12 años)" },
                { href: "/categorias/juvenil", label: "Juvenil (14–17 años)" },
                { href: "/categorias/adultos", label: "Adultos / Amateur" },
                { href: "/categorias/arqueros", label: "Escuela de Arqueros" },
                { href: "/categorias/femenino", label: "Fútbol Femenino" },
              ].map((cat) => (
                <li key={cat.href} style={{ marginBottom: "0.5rem" }}>
                  <Link href={cat.href} style={footerLink}>{cat.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p style={{ color: "#5a6a8a", fontSize: "0.82rem", margin: 0 }}>© 2025 {ACADEMIA.nombre}. Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/contacto" style={{ color: "#5a6a8a", fontSize: "0.82rem", textDecoration: "none" }}>Libro de Reclamaciones</Link>
            <Link href="/contacto" style={{ color: "#5a6a8a", fontSize: "0.82rem", textDecoration: "none" }}>Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerHeading: React.CSSProperties = { fontFamily: "var(--font-raleway)", fontSize: "0.9rem", fontWeight: 700, color: "#ffffff", margin: "0 0 1rem", textTransform: "uppercase", letterSpacing: "0.08em" };
const footerLink: React.CSSProperties = { color: "#8899bb", textDecoration: "none", fontSize: "0.88rem" };
