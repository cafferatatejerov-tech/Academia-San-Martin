import { type ReactNode, type CSSProperties } from "react";

interface LightSectionProps {
  children: ReactNode;
  id?: string;
  style?: CSSProperties;
  tint?: "white" | "blue"; // white = bg-white/95, blue = bg-[#f0f2fb]/95
  ariaLabelledBy?: string;
}

export function LightSection({ children, id, style, tint = "white", ariaLabelledBy }: LightSectionProps) {
  const overlayColor = tint === "blue" ? "rgba(240,242,251,0.95)" : "rgba(255,255,255,0.95)";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      {/* Imagen de fondo muy tenue */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/bg-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
        aria-hidden="true"
      />
      {/* Overlay semitransparente */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: overlayColor,
        }}
        aria-hidden="true"
      />
      {/* Contenido */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {children}
      </div>
    </section>
  );
}
