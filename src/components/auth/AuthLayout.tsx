import React from "react";
type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: number;
};


export default function AuthLayout({
  title,
  subtitle,
  children,
  maxWidth = 420,
}: Props) {
  return (
    <div style={page}>
      <div style={{ ...card, maxWidth }}>
        <h2 style={titleStyle}>{title}</h2>
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        <div style={{ marginTop: 24 }}>{children}</div>
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const page: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(135deg, #e6f4f1 0%, #ffffff 60%)",
  padding: 20,
};

const card: React.CSSProperties = {
  width: "100%",
  maxWidth: 420,
  background: "#fff",
  padding: 28,
  borderRadius: 14,
  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  fontFamily: "system-ui, sans-serif",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 22,
  fontWeight: 600,
};

const subtitleStyle: React.CSSProperties = {
  marginTop: 6,
  color: "#555",
  fontSize: 14,
};
