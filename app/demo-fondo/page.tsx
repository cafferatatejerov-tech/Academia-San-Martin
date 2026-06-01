export default function DemoFondo() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#242C8F" }}>
      <style>{`
        .grunge-wrap {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background-color: #242C8F;
        }

        /* Capa de ruido real con SVG filter */
        .grunge-noise {
          position: absolute; inset: 0; z-index: 1;
          opacity: 0.18;
          filter: url(#grunge);
          background: white;
        }

        /* Manchas desgastadas con blur */
        .grunge-spots {
          position: absolute; inset: 0; z-index: 2;
          background-image:
            radial-gradient(ellipse 180px 120px at 12% 18%, rgba(255,255,255,0.09) 0%, transparent 100%),
            radial-gradient(ellipse 90px 200px at 88% 8%, rgba(255,255,255,0.07) 0%, transparent 100%),
            radial-gradient(ellipse 220px 80px at 55% 88%, rgba(255,255,255,0.08) 0%, transparent 100%),
            radial-gradient(ellipse 100px 150px at 78% 52%, rgba(255,255,255,0.06) 0%, transparent 100%),
            radial-gradient(ellipse 160px 100px at 22% 72%, rgba(255,255,255,0.07) 0%, transparent 100%),
            radial-gradient(ellipse 120px 180px at 40% 35%, rgba(0,0,0,0.12) 0%, transparent 100%),
            radial-gradient(ellipse 200px 90px at 90% 78%, rgba(0,0,0,0.15) 0%, transparent 100%),
            radial-gradient(ellipse 80px 80px at 5% 95%, rgba(0,0,0,0.1) 0%, transparent 100%);
        }

        /* Variaciones de tonalidad azul */
        .grunge-tones {
          position: absolute; inset: 0; z-index: 3;
          background-image:
            radial-gradient(ellipse at 0% 0%, #2f3db5 0%, transparent 55%),
            radial-gradient(ellipse at 100% 0%, #1a2280 0%, transparent 45%),
            radial-gradient(ellipse at 100% 100%, #0f1560 0%, transparent 55%),
            radial-gradient(ellipse at 0% 100%, #1e28a0 0%, transparent 45%),
            radial-gradient(ellipse at 50% 50%, #2a34a8 0%, transparent 60%);
          mix-blend-mode: multiply;
          opacity: 0.6;
        }

        /* Viñeta */
        .grunge-vignette {
          position: absolute; inset: 0; z-index: 4;
          background: radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.65) 100%);
        }

        /* Contenido */
        .grunge-content {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          min-height: 100vh;
          padding: 4rem 2rem;
          text-align: center;
        }
      `}</style>

      {/* SVG Filter para ruido/grunge real */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="grunge" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      <div className="grunge-wrap">
        <div className="grunge-noise" aria-hidden="true" />
        <div className="grunge-spots" aria-hidden="true" />
        <div className="grunge-tones" aria-hidden="true" />
        <div className="grunge-vignette" aria-hidden="true" />

        <div className="grunge-content">
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "3rem" }}>
            DEMO FONDO GRUNGE
          </p>
          <h2 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 700, color: "#ffffff", textTransform: "uppercase", margin: "0 0 1rem" }}>
            ¿Por Qué Elegirnos?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", marginBottom: "3rem" }}>
            Más que una academia — una escuela de vida a través del fútbol.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {["Entrenadores FPF", "Metodología Certificada", "Familia"].map((t) => (
              <div key={t} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", padding: "1.5rem 2rem", color: "#fff", fontFamily: "var(--font-raleway)", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {t}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "4rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem", width: "100%", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            {["Academia San Martín", "✦", "Chorrillos · Lima", "✦", "Certificados FPF", "✦", "Inscripciones Abiertas"].map((t, i) => (
              <span key={i} style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", fontFamily: "var(--font-raleway)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
