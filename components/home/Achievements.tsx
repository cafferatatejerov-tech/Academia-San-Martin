"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { LOGROS } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";

const GRADIENTS = [
  "linear-gradient(160deg, #0d1b4b 0%, #1a237e 60%, #243b8a 100%)",
  "linear-gradient(160deg, #091022 0%, #152a6e 60%, #1e3a8a 100%)",
  "linear-gradient(160deg, #0a1628 0%, #1a237e 60%, #2d4499 100%)",
  "linear-gradient(160deg, #0d1b4b 0%, #1c3070 60%, #1a237e 100%)",
  "linear-gradient(160deg, #080f20 0%, #1a237e 60%, #2040a0 100%)",
  "linear-gradient(160deg, #0a1628 0%, #162d72 60%, #1a237e 100%)",
];

export function Achievements() {
  const [current, setCurrent] = useState(0);
  const total = LOGROS.length;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const getIndex = (offset: number) => (current + offset + total) % total;

  useEffect(() => {
    const btnPrev = prevRef.current;
    const btnNext = nextRef.current;
    if (!btnPrev || !btnNext) return;
    const hPrev = () => setCurrent((c) => (c - 1 + total) % total);
    const hNext = () => setCurrent((c) => (c + 1) % total);
    btnPrev.addEventListener("touchstart", hPrev, { passive: true });
    btnNext.addEventListener("touchstart", hNext, { passive: true });
    return () => {
      btnPrev.removeEventListener("touchstart", hPrev);
      btnNext.removeEventListener("touchstart", hNext);
    };
  }, [total]);

  return (
    <section
      style={{ padding: "4rem 0 4rem", backgroundColor: "#0d1b4b", overflow: "hidden" }}
      aria-labelledby="logros-heading"
    >
      {/* Título */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h2
          id="logros-heading"
          style={{
            fontFamily: "var(--font-raleway)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "#ffffff",
            margin: 0,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#ffffff" }}>SAN MARTÍN</span>
          <span style={{ color: "#3949ab" }}> | LOGROS</span>
        </h2>
      </div>

      {/* Carousel */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>

        {/* Flecha izquierda */}
        <button
          ref={prevRef}
          type="button"
          onClick={prev}
          aria-label="Anterior"
          style={{
            position: "absolute", left: "clamp(6px, 3vw, 48px)", zIndex: 20,
            width: 52, height: 52, borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#ffffff", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Track */}
        <>
          <style>{`
            .achievements-track { display: flex; align-items: center; gap: 16px; width: 100%; max-width: 1100px; padding: 0 80px; box-sizing: border-box; }
            .achievements-peek { flex: 0 0 clamp(120px, 18vw, 220px); height: clamp(200px, 28vw, 360px); border-radius: 10px; overflow: hidden; cursor: pointer; opacity: 0.55; transition: opacity 200ms; flex-shrink: 0; }
            @media (max-width: 640px) {
              .achievements-track { padding: 0 48px; }
              .achievements-peek { display: none; }
            }
          `}</style>
          <div className="achievements-track">
            {/* Card izquierda (peek) */}
            <div className="achievements-peek" onClick={prev}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
            >
              <PeekCard logro={LOGROS[getIndex(-1)]} gradIndex={getIndex(-1)} />
            </div>

            {/* Card central (featured) */}
            <div style={{ flex: 1, minWidth: 0, borderRadius: "10px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                >
                  <FeaturedCard logro={LOGROS[current]} gradIndex={current} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Card derecha (peek) */}
            <div className="achievements-peek" onClick={next}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
            >
              <PeekCard logro={LOGROS[getIndex(1)]} gradIndex={getIndex(1)} />
            </div>
          </div>
        </>


        {/* Flecha derecha */}
        <button
          ref={nextRef}
          type="button"
          onClick={next}
          aria-label="Siguiente"
          style={{
            position: "absolute", right: "clamp(6px, 3vw, 48px)", zIndex: 20,
            width: 52, height: 52, borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#ffffff", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            WebkitTapHighlightColor: "transparent",
            touchAction: "manipulation",
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "1.75rem" }}>
        {LOGROS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            onTouchStart={() => setCurrent(i)}
            aria-label={`Ir al logro ${i + 1}`}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: "4px",
              backgroundColor: i === current ? "#3949ab" : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 250ms ease, background-color 250ms ease",
              WebkitTapHighlightColor: "transparent",
              touchAction: "manipulation",
              minWidth: 8,
            }}
          />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ logro, gradIndex }: { logro: (typeof LOGROS)[number]; gradIndex: number }) {
  return (
    <div style={{ position: "relative", height: "clamp(260px, 35vw, 460px)", background: GRADIENTS[gradIndex % GRADIENTS.length] }}>
      {/* Patrón */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" }} aria-hidden="true" />

      {/* Icono trofeo esquina superior derecha — como el play de Cristal */}
      <div style={{ position: "absolute", top: 16, right: 16, width: 42, height: 42, borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Trophy size={20} style={{ color: "#fbbf24" }} aria-hidden="true" />
      </div>

      {/* Overlay degradado inferior */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(to top, rgba(5,8,20,0.95) 0%, transparent 100%)" }} aria-hidden="true" />

      {/* Texto inferior — como Cristal TV */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#93a8f4", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Academia San Martín
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem" }}>|</span>
          <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>{logro.año}</span>
        </div>
        <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 700, color: "#ffffff", margin: "0 0 6px", lineHeight: 1.2, textTransform: "uppercase" }}>
          {logro.titulo}
        </h3>
        <span style={{ display: "inline-block", backgroundColor: "rgba(57,73,171,0.5)", color: "#c5cfff", padding: "2px 10px", borderRadius: "4px", fontSize: "0.72rem", fontWeight: 700 }}>
          Cat. {logro.categoria}
        </span>
      </div>
    </div>
  );
}

function PeekCard({ logro, gradIndex }: { logro: (typeof LOGROS)[number]; gradIndex: number }) {
  return (
    <div style={{ position: "relative", height: "100%", background: GRADIENTS[gradIndex % GRADIENTS.length] }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" }} aria-hidden="true" />

      {/* Icono trofeo esquina superior derecha */}
      <div style={{ position: "absolute", top: 12, right: 12, width: 34, height: 34, borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Trophy size={16} style={{ color: "#fbbf24" }} aria-hidden="true" />
      </div>

      {/* Overlay inferior */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(5,8,20,0.9) 0%, transparent 100%)" }} aria-hidden="true" />

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 14px" }}>
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: "0.8rem", fontWeight: 700, color: "#ffffff", margin: 0, lineHeight: 1.25, textTransform: "uppercase", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {logro.titulo}
        </p>
      </div>
    </div>
  );
}
