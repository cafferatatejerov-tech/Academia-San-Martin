"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ACADEMIA, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Registrar eventos nativos del DOM — más confiable que React en iOS
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const handler = () => setOpen(true);
    btn.addEventListener("click", handler);
    btn.addEventListener("touchstart", handler, { passive: true });
    return () => {
      btn.removeEventListener("click", handler);
      btn.removeEventListener("touchstart", handler);
    };
  }, []);

  return (
    <>
      <style>{`
        .nav-logo { width: 90px; height: 90px; border-radius: 50%; overflow: hidden; }
        @media (min-width: 768px) { .nav-logo { width: 100px; height: 100px; } }
        @media (min-width: 1024px) { .nav-logo { width: 110px; height: 110px; } }
      `}</style>

      <header style={{ position: isHome ? "absolute" : "relative", top: 0, left: 0, right: 0, zIndex: 9999, backgroundColor: isHome ? "transparent" : "#ffffff", borderBottom: isHome ? "none" : "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "100px" }}>

          <Link href="/" aria-label="Inicio">
            <div className="nav-logo">
              <Image src="/logo1.png" alt="Logo" width={110} height={110}
                style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} priority />
            </div>
          </Link>

          <button
            ref={btnRef}
            type="button"
            aria-label="Abrir menú"
            style={{
              background: "#0d1b4b",
              border: "none",
              borderRadius: "8px",
              color: "#ffffff",
              cursor: "pointer",
              padding: "10px 12px",
              lineHeight: 0,
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(13,27,75,0.55)" }}
          aria-hidden="true" />
      )}

      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        zIndex: 10001,
        width: "min(300px, 85vw)",
        background: "#fff",
        display: "flex", flexDirection: "column",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.28s ease",
        boxShadow: "-4px 0 24px rgba(0,0,0,0.15)",
        overflowY: "auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", borderBottom: "1px solid #e2e6f0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden" }}>
              <Image src="/logo1.png" alt="Logo" width={50} height={50}
                style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontFamily: "var(--font-raleway)", fontWeight: 700, fontSize: "1rem", color: "#1a237e" }}>San Martín</span>
          </div>
          <button type="button" onClick={() => setOpen(false)}
            style={{ background: "none", border: "1px solid #e2e6f0", borderRadius: "8px", padding: "8px", cursor: "pointer", color: "#5a6a8a", lineHeight: 0, WebkitTapHighlightColor: "transparent" }}
            aria-label="Cerrar menú">
            <X size={20} />
          </button>
        </div>

        <nav style={{ padding: "0.5rem", flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              style={{ display: "flex", alignItems: "center", padding: "14px 12px", color: "#1a237e", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600, borderRadius: "8px", fontFamily: "var(--font-raleway)", minHeight: "52px" }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid #e2e6f0" }}>
          <Link href="/inscribete" onClick={() => setOpen(false)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#1a237e", color: "#fff", padding: "14px", borderRadius: "8px", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-raleway)" }}>
            INSCRÍBETE AHORA
          </Link>
          <p style={{ color: "#8899bb", fontSize: "0.75rem", textAlign: "center", margin: "0.75rem 0 0" }}>{ACADEMIA.horarioAtencion}</p>
        </div>
      </div>
    </>
  );
}
