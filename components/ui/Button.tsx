import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  external?: boolean;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: "#1a237e",
    color: "#ffffff",
    border: "2px solid #3949ab",
  },
  secondary: {
    backgroundColor: "#3949ab",
    color: "#ffffff",
    border: "2px solid #3949ab",
  },
  outline: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid #3949ab",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#8899bb",
    border: "2px solid transparent",
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: "0.85rem", minHeight: "36px" },
  md: { padding: "12px 24px", fontSize: "0.95rem", minHeight: "44px" },
  lg: { padding: "14px 32px", fontSize: "1.05rem", minHeight: "52px" },
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  disabled = false,
  ariaLabel,
  external = false,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontWeight: 600,
    borderRadius: "6px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    textDecoration: "none",
    transition: "background-color 0.15s, transform 0.1s, opacity 0.15s",
    fontFamily: "var(--font-inter)",
    width: fullWidth ? "100%" : "auto",
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  if (href) {
    return (
      <Link
        href={href}
        style={baseStyle}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
