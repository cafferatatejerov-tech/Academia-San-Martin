import Image from "next/image";
import { ACADEMIA } from "@/lib/constants";

export default function DemoBanner() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <style>{`
        .banner {
          position: relative;
          width: 100%;
          max-width: 1100px;
          overflow: hidden;
          padding: 3.5rem 3rem;
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .banner-bg {
          position: absolute;
          inset: 0;
          background-color: #1a1f9c;
          background-image:
            radial-gradient(ellipse at 0% 0%, rgba(255,255,255,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(0,0,0,0.3) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 50%, rgba(26,35,160,0.6) 0%, transparent 80%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.015) 2px,
              rgba(255,255,255,0.015) 4px
            );
          background-size: cover;
        }
        .banner-stripe {
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 6px;
          background: rgba(255,255,255,0.15);
        }
        .banner-logo {
          position: relative; z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          border-right: 1px solid rgba(255,255,255,0.15);
          padding-right: 3rem;
        }
        .banner-logo p {
          font-family: var(--font-raleway);
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 0.08em;
          margin: 0;
          line-height: 1.2;
        }
        .banner-content {
          position: relative; z-index: 2;
          display: flex;
          gap: 3rem;
          flex: 1;
          flex-wrap: wrap;
        }
        .banner-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .banner-item-label {
          font-family: var(--font-raleway);
          font-size: 0.7rem;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
        .banner-item-value {
          font-family: var(--font-raleway);
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          line-height: 1.3;
        }
        .banner-divider {
          width: 1px;
          background: rgba(255,255,255,0.12);
          align-self: stretch;
        }
        @media (max-width: 640px) {
          .banner { flex-direction: column; padding: 2rem 1.5rem; }
          .banner-logo { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); padding-right: 0; padding-bottom: 1.5rem; }
          .banner-divider { display: none; }
        }
      `}</style>

      <div className="banner">
        <div className="banner-bg" />
        <div className="banner-stripe" />

        {/* Logo + nombre */}
        <div className="banner-logo">
          <Image src="/logo1.png" alt="Logo" width={70} height={70} style={{ objectFit: "contain" }} />
          <p>Academia<br/>San Martín<br/>Chorrillos</p>
        </div>

        {/* Info horizontal */}
        <div className="banner-content">
          <div className="banner-item">
            <span className="banner-item-label">Entrenamientos</span>
            <span className="banner-item-value">Sábados y<br/>Domingos</span>
          </div>

          <div className="banner-divider" />

          <div className="banner-item">
            <span className="banner-item-label">Horarios</span>
            <span className="banner-item-value">4:30 PM –<br/>8:30 PM</span>
          </div>

          <div className="banner-divider" />

          <div className="banner-item">
            <span className="banner-item-label">Categorías</span>
            <span className="banner-item-value">Desde 3 años<br/>hasta Adultos</span>
          </div>

          <div className="banner-divider" />

          <div className="banner-item">
            <span className="banner-item-label">Ubicación</span>
            <span className="banner-item-value">{ACADEMIA.direccion}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
