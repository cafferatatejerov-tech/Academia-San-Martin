"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ACADEMIA } from "@/lib/constants";

export function Hero() {
  return (
    <section
      style={{ position: "relative", minHeight: "100dvh", display: "flex", alignItems: "center", overflow: "hidden", backgroundColor: "#0d1b4b" }}
      aria-label="Presentación de la academia"
    >
      <style>{`
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1920&q=80);
          background-size: cover;
          background-position: center 30%;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: rgba(10, 18, 60, 0.42);
        }
        .hero-content {
          position: relative; z-index: 10;
          width: 100%; max-width: 1280px;
          margin: 0 auto;
          padding: 7rem 1.5rem 4rem;
        }
        .hero-inner { max-width: 680px; }
        .hero-h1 {
          font-family: var(--font-oswald);
          font-size: clamp(3rem, 9vw, 6rem);
          font-weight: 700; color: #ffffff;
          line-height: 0.95; margin: 0 0 1.5rem;
          text-transform: uppercase; letter-spacing: 0.01em;
        }
        .hero-btns { display: flex; flex-wrap: wrap; gap: 1rem; }


        @media (max-width: 640px) {
          .hero-bg {
            background-size: cover;
            background-position: 55% center;
          }
          .hero-overlay {
            background: rgba(8,15,50,0.58);
          }
          .hero-content {
            padding: 80px 1.5rem 3rem;
            min-height: 100dvh;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-inner {
            max-width: 100%;
            text-align: center;
          }
          .hero-h1 {
            font-size: clamp(2.2rem, 11vw, 3rem);
            margin-bottom: 0.75rem;
            line-height: 1.05;
          }
          .hero-btns {
            gap: 0.75rem;
            justify-content: center;
          }
          .hero-btns a {
            flex: 1;
            justify-content: center;
            padding: 13px 12px !important;
            font-size: 0.88rem !important;
          }
          .hero-line { margin: 0 auto 1.25rem; }
          .hero-sub { text-align: center; margin-left: auto; margin-right: auto; }
        }
      `}</style>

      <div className="hero-bg" role="img" aria-label="Cancha de fútbol" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content" style={{ display: "flex", flexDirection: "column" }}>
        <div className="hero-inner">
          <h1 className="hero-h1">{ACADEMIA.slogan}</h1>
          <div className="hero-line" style={{ width: "50px", height: "4px", backgroundColor: "#ffffff", marginBottom: "1.25rem", borderRadius: "2px" }} aria-hidden="true" />
          <p className="hero-sub" style={{ color: "#d0d8f0", fontSize: "1rem", lineHeight: 1.7, margin: "0 0 2rem", maxWidth: "500px" }}>
            {ACADEMIA.nombre} · Categorías desde 3 años hasta adultos. Entrenadores certificados FPF.
          </p>
          <div className="hero-btns">
            <Link href="/inscribete" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#ffffff", color: "#1a237e", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", minHeight: "50px", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
              INSCRÍBETE AHORA
            </Link>
            <Link href="/categorias" style={{ display: "inline-flex", alignItems: "center", backgroundColor: "transparent", color: "#ffffff", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: 600, fontSize: "1rem", minHeight: "50px", border: "2px solid rgba(255,255,255,0.5)", fontFamily: "var(--font-raleway)", letterSpacing: "0.04em" }}>
              VER CATEGORÍAS
            </Link>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.4)", zIndex: 10 }} aria-hidden="true">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
