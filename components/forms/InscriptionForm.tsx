"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { CATEGORIAS } from "@/lib/categories";

interface FormData {
  nombreJugador: string;
  fechaNacimiento: string;
  nombreApoderado: string;
  telefono: string;
  email: string;
  categoria: string;
  sede: string;
  mensaje: string;
}

const INITIAL_DATA: FormData = {
  nombreJugador: "",
  fechaNacimiento: "",
  nombreApoderado: "",
  telefono: "",
  email: "",
  categoria: "",
  sede: "chorrillos",
  mensaje: "",
};

export function InscriptionForm({ preselectedCategory }: { preselectedCategory?: string }) {
  const [data, setData] = useState<FormData>({ ...INITIAL_DATA, categoria: preselectedCategory ?? "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!data.nombreJugador.trim()) newErrors.nombreJugador = "El nombre del jugador es obligatorio.";
    if (!data.fechaNacimiento) newErrors.fechaNacimiento = "La fecha de nacimiento es obligatoria.";
    if (!data.nombreApoderado.trim()) newErrors.nombreApoderado = "El nombre del apoderado es obligatorio.";
    if (!data.telefono.trim()) newErrors.telefono = "El teléfono es obligatorio.";
    if (!data.email.trim() || !data.email.includes("@")) newErrors.email = "Ingresa un correo electrónico válido.";
    if (!data.categoria) newErrors.categoria = "Selecciona una categoría.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector("[aria-invalid='true']") as HTMLElement;
      firstError?.focus();
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem",
          backgroundColor: "#0f1a2e",
          borderRadius: "16px",
          border: "1px solid #1e2d4a",
        }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={56} style={{ color: "#10b981", margin: "0 auto 1rem" }} aria-hidden="true" />
        <h3 style={{ fontFamily: "var(--font-raleway)", fontSize: "1.8rem", color: "#ffffff", margin: "0 0 0.75rem" }}>
          ¡Solicitud enviada con éxito!
        </h3>
        <p style={{ color: "#8899bb", fontSize: "1rem", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
          Hemos recibido tu solicitud de inscripción. Un miembro de nuestro equipo
          te contactará por WhatsApp en menos de 24 horas.
        </p>
        <p style={{ color: "#8899bb", fontSize: "0.9rem" }}>
          ¿Tienes una consulta urgente?{" "}
          <a href={`https://wa.me/51999999999`} style={{ color: "#3949ab", fontWeight: 600 }}>
            Escríbenos por WhatsApp
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
      aria-label="Formulario de inscripción"
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
        <Field
          id="nombreJugador"
          label="Nombre del jugador"
          required
          error={errors.nombreJugador}
        >
          <input
            id="nombreJugador"
            name="nombreJugador"
            type="text"
            required
            value={data.nombreJugador}
            onChange={handleChange}
            placeholder="Ej: Sebastián García"
            aria-invalid={!!errors.nombreJugador}
            aria-describedby={errors.nombreJugador ? "nombreJugador-error" : undefined}
            autoComplete="off"
            style={inputStyle}
          />
        </Field>

        <Field
          id="fechaNacimiento"
          label="Fecha de nacimiento"
          helper="Usamos esto para sugerirte la categoría correcta."
          required
          error={errors.fechaNacimiento}
        >
          <input
            id="fechaNacimiento"
            name="fechaNacimiento"
            type="date"
            required
            value={data.fechaNacimiento}
            onChange={handleChange}
            aria-invalid={!!errors.fechaNacimiento}
            aria-describedby={errors.fechaNacimiento ? "fechaNacimiento-error" : "fechaNacimiento-helper"}
            style={{ ...inputStyle, colorScheme: "dark" }}
          />
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
        <Field id="nombreApoderado" label="Nombre del apoderado" required error={errors.nombreApoderado}>
          <input
            id="nombreApoderado"
            name="nombreApoderado"
            type="text"
            required
            value={data.nombreApoderado}
            onChange={handleChange}
            placeholder="Ej: Carlos Ramírez"
            aria-invalid={!!errors.nombreApoderado}
            aria-describedby={errors.nombreApoderado ? "nombreApoderado-error" : undefined}
            autoComplete="name"
            style={inputStyle}
          />
        </Field>

        <Field id="telefono" label="Teléfono (WhatsApp)" required error={errors.telefono}>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            value={data.telefono}
            onChange={handleChange}
            placeholder="+51 999 999 999"
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
            autoComplete="tel"
            inputMode="tel"
            style={inputStyle}
          />
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
        <Field id="email" label="Correo electrónico" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={data.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            inputMode="email"
            style={inputStyle}
          />
        </Field>

        <Field id="categoria" label="Categoría de interés" required error={errors.categoria}>
          <select
            id="categoria"
            name="categoria"
            required
            value={data.categoria}
            onChange={handleChange}
            aria-invalid={!!errors.categoria}
            aria-describedby={errors.categoria ? "categoria-error" : undefined}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="">Seleccionar categoría...</option>
            {CATEGORIAS.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.nombre} — {c.edadTexto}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="mensaje" label="Mensaje (opcional)">
        <textarea
          id="mensaje"
          name="mensaje"
          value={data.mensaje}
          onChange={handleChange}
          rows={3}
          placeholder="¿Alguna pregunta o comentario adicional?"
          style={{ ...inputStyle, resize: "vertical", minHeight: "88px", lineHeight: 1.5 }}
        />
      </Field>

      {/* Document requirements */}
      <div
        style={{
          backgroundColor: "rgba(26, 35, 126, 0.15)",
          border: "1px solid rgba(57, 73, 171, 0.3)",
          borderRadius: "8px",
          padding: "1rem 1.25rem",
        }}
      >
        <p style={{ color: "#8899bb", fontSize: "0.85rem", fontWeight: 600, margin: "0 0 0.5rem" }}>
          Documentos requeridos para la inscripción:
        </p>
        <ul style={{ margin: 0, padding: "0 0 0 1.2rem", color: "#8899bb", fontSize: "0.82rem", lineHeight: 1.8 }}>
          <li>Copia DNI del menor y apoderado</li>
          <li>Partida de nacimiento</li>
          <li>2 fotos carnet</li>
          <li>Constancia médica / seguro de salud</li>
        </ul>
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          backgroundColor: loading ? "#1e2d4a" : "#1a237e",
          color: "#ffffff",
          padding: "16px 32px",
          borderRadius: "8px",
          border: "2px solid #3949ab",
          fontWeight: 700,
          fontSize: "1.05rem",
          cursor: loading ? "not-allowed" : "pointer",
          minHeight: "56px",
          transition: "background-color 0.15s",
          width: "100%",
        }}
      >
        {loading ? (
          <>
            <span
              style={{
                width: 20,
                height: 20,
                border: "2px solid rgba(255,255,255,0.3)",
                borderTopColor: "#ffffff",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
                display: "inline-block",
              }}
              aria-hidden="true"
            />
            Enviando solicitud...
          </>
        ) : (
          <>
            <Send size={20} aria-hidden="true" />
            Enviar Inscripción
          </>
        )}
      </button>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  helper,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        htmlFor={id}
        style={{ color: "#8899bb", fontSize: "0.85rem", fontWeight: 600 }}
      >
        {label}
        {required && (
          <span style={{ color: "#ef4444", marginLeft: "4px" }} aria-label="obligatorio">
            *
          </span>
        )}
      </label>
      {children}
      {helper && !error && (
        <p id={`${id}-helper`} style={{ color: "#8899bb", fontSize: "0.78rem", margin: 0 }}>
          {helper}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" style={{ color: "#ef4444", fontSize: "0.8rem", margin: 0 }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#0a0f1e",
  border: "1px solid #1e2d4a",
  borderRadius: "6px",
  padding: "10px 14px",
  color: "#ffffff",
  fontSize: "0.95rem",
  outline: "none",
  minHeight: "44px",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};
