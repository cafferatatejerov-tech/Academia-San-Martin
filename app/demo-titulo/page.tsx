export default function DemoTitulo() {
  const slogan = "Forma al Campeón que Llevas Dentro";

  return (
    <div style={{ backgroundColor: "#0d1b4b" }}>
      <style>{`
        .demo-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
          position: relative;
        }
        .demo-label {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          color: rgba(255,255,255,0.3);
          font-size: 0.7rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .sub {
          color: rgba(255,255,255,0.45);
          font-size: 0.95rem;
          margin-top: 1.5rem;
          font-family: var(--font-raleway);
          letter-spacing: 0.04em;
        }
      `}</style>

      {/* 1 — Oswald actual */}
      <div className="demo-section">
        <span className="demo-label">1 — Oswald (actual)</span>
        <h1 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(3rem, 9vw, 6rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", lineHeight: 0.95, margin: 0, letterSpacing: "0.01em" }}>
          {slogan}
        </h1>
        <p className="sub">Academia de Fútbol San Martín · Chorrillos</p>
      </div>

      {/* 2 — Oswald spacing ancho */}
      <div className="demo-section">
        <span className="demo-label">2 — Oswald + spacing ancho</span>
        <h1 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", lineHeight: 1.1, margin: 0, letterSpacing: "0.18em" }}>
          {slogan}
        </h1>
        <div style={{ width: 60, height: 3, backgroundColor: "#4fc3f7", margin: "1.5rem auto 0" }} />
        <p className="sub">Academia de Fútbol San Martín · Chorrillos</p>
      </div>

      {/* 3 — Raleway 800 */}
      <div className="demo-section">
        <span className="demo-label">3 — Raleway 800</span>
        <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800, color: "#fff", textTransform: "uppercase", lineHeight: 1.0, margin: 0, letterSpacing: "0.06em" }}>
          {slogan}
        </h1>
        <p className="sub">Academia de Fútbol San Martín · Chorrillos</p>
      </div>

      {/* 4 — Raleway 800 italic */}
      <div className="demo-section">
        <span className="demo-label">4 — Raleway italic</span>
        <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800, color: "#fff", textTransform: "uppercase", lineHeight: 1.0, margin: 0, fontStyle: "italic" }}>
          {slogan}
        </h1>
        <p className="sub">Academia de Fútbol San Martín · Chorrillos</p>
      </div>

      {/* 5 — Raleway con palabra acento celeste */}
      <div className="demo-section">
        <span className="demo-label">5 — Raleway + acento celeste</span>
        <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800, color: "#fff", textTransform: "uppercase", lineHeight: 1.05, margin: 0 }}>
          Forma al <span style={{ color: "#4fc3f7" }}>Campeón</span><br/>que Llevas Dentro
        </h1>
        <p className="sub">Academia de Fútbol San Martín · Chorrillos</p>
      </div>

      {/* 6 — Oswald muy grande una línea */}
      <div className="demo-section">
        <span className="demo-label">6 — Oswald gigante</span>
        <h1 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(4rem, 12vw, 9rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", lineHeight: 0.88, margin: 0, letterSpacing: "-0.01em" }}>
          Forma al<br/>Campeón
        </h1>
        <p style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontWeight: 400, color: "rgba(255,255,255,0.55)", textTransform: "uppercase", letterSpacing: "0.25em", margin: "1.5rem 0 0" }}>que llevas dentro</p>
      </div>

      {/* 7 — Oswald acento + línea lateral */}
      <div className="demo-section">
        <span className="demo-label">7 — Oswald + línea lateral</span>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div style={{ width: 4, height: "120px", backgroundColor: "#4fc3f7", flexShrink: 0 }} />
          <h1 style={{ fontFamily: "var(--font-oswald)", fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", lineHeight: 0.95, margin: 0, textAlign: "left" }}>
            {slogan}
          </h1>
        </div>
        <p className="sub">Academia de Fútbol San Martín · Chorrillos</p>
      </div>

      {/* 8 — Raleway outline */}
      <div className="demo-section">
        <span className="demo-label">8 — Outline + relleno</span>
        <h1 style={{ fontFamily: "var(--font-raleway)", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 800, textTransform: "uppercase", lineHeight: 1.0, margin: 0 }}>
          <span style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>Forma al </span>
          <span style={{ color: "#ffffff" }}>Campeón</span>
          <br/>
          <span style={{ color: "transparent", WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}>que Llevas </span>
          <span style={{ color: "#ffffff" }}>Dentro</span>
        </h1>
        <p className="sub">Academia de Fútbol San Martín · Chorrillos</p>
      </div>

    </div>
  );
}
