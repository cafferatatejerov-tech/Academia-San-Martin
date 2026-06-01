import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "success" | "warning" | "neutral";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const colors: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: "rgba(26, 35, 126, 0.4)", color: "#8899bb", border: "1px solid #1a237e" },
    success: { backgroundColor: "rgba(16, 185, 129, 0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)" },
    warning: { backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.3)" },
    neutral: { backgroundColor: "rgba(30, 45, 74, 0.6)", color: "#8899bb", border: "1px solid #1e2d4a" },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "100px",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
        ...colors[variant],
      }}
    >
      {children}
    </span>
  );
}
