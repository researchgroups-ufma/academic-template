/**
 * EquipmentCard — Card de equipamento do laboratório
 *
 * Estado fechado: foto, nome e descrição breve.
 * Ao clicar: abre modal com foto maior, descrição completa,
 * fabricante e modelo.
 *
 * Fase 4: o modal será substituído pelo Morphing Dialog do Motion Primitives.
 *
 * Props:
 *   title        — nome do equipamento (obrigatório)
 *   summary      — descrição breve exibida no card (obrigatório)
 *   description  — descrição completa exibida no modal (opcional)
 *   photo        — caminho da foto em /uploads/ (opcional)
 *   manufacturer — fabricante do equipamento (opcional)
 *   model        — modelo do equipamento (opcional)
 */

"use client";

import { useState } from "react";

type EquipmentCardProps = {
  title: string;
  summary: string;
  description?: string;
  photo?: string;
  manufacturer?: string;
  model?: string;
};

export default function EquipmentCard({
  title, summary, description, photo, manufacturer, model,
}: EquipmentCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Card fechado ──────────────────────────────────────────────────── */}
      <div
        onClick={() => setOpen(true)}
        className="structure-card"
        style={{
          cursor: "pointer",
          backgroundColor: "var(--color-bg-elevated)",
          border: "1px solid var(--color-border-strong)",
          borderRadius: "0.5rem",
          overflow: "hidden",
          transition: "border-color 0.2s ease",
        }}
      >
        {/* Foto ou placeholder */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4 / 3",
            backgroundColor: "var(--color-bg-subtle)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {photo ? (
            <img
              src={photo}
              alt={title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            /* Placeholder com ícone de equipamento quando não há foto */
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ fontSize: "2rem", opacity: 0.3 }}>⚙</span>
              <span style={{ fontSize: "0.7rem", color: "var(--color-text-subtle)" }}>
                Sem foto
              </span>
            </div>
          )}
        </div>

        {/* Informações do card */}
        <div style={{ padding: "1.25rem" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--color-text)",
              marginBottom: "0.4rem",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--color-text-muted)",
              fontWeight: 300,
              lineHeight: 1.5,
              marginBottom: "0.75rem",
            }}
          >
            {summary}
          </p>
          {/* Fabricante e modelo se disponíveis */}
          {(manufacturer || model) && (
            <p style={{ fontSize: "0.72rem", color: "var(--color-text-subtle)" }}>
              {[manufacturer, model].filter(Boolean).join(" · ")}
            </p>
          )}
          <p style={{ fontSize: "0.7rem", color: "var(--color-text-subtle)", marginTop: "0.75rem" }}>
            Ver detalhes →
          </p>
        </div>
      </div>

      {/* ── Modal de detalhes ─────────────────────────────────────────────── */}
      {open && (
        <>
          {/* Overlay — clique fora fecha o modal */}
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              zIndex: 200,
            }}
          />

          {/* Conteúdo do modal */}
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 201,
              backgroundColor: "var(--color-bg-elevated)",
              border: "1px solid var(--color-border-strong)",
              borderRadius: "0.75rem",
              width: "min(640px, 90vw)",
              maxHeight: "85vh",
              overflowY: "auto",
              padding: "2rem",
            }}
          >
            {/* Botão fechar */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                color: "var(--color-text-muted)",
                fontSize: "1.25rem",
                cursor: "pointer",
                lineHeight: 1,
              }}
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Foto grande */}
            {photo && (
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  borderRadius: "0.375rem",
                  marginBottom: "1.5rem",
                  backgroundColor: "var(--color-bg-subtle)",
                }}
              >
                <img
                  src={photo}
                  alt={title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}

            {/* Nome */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                fontWeight: 500,
                color: "var(--color-text)",
                marginBottom: "0.25rem",
              }}
            >
              {title}
            </p>

            {/* Fabricante e modelo */}
            {(manufacturer || model) && (
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--color-primary)",
                  marginBottom: "1.25rem",
                }}
              >
                {[manufacturer, model].filter(Boolean).join(" · ")}
              </p>
            )}

            {/* Linha divisória */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--color-border)",
                marginBottom: "1.25rem",
              }}
            />

            {/* Descrição completa */}
            {description ? (
              description.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "var(--color-text-muted)",
                    fontWeight: 300,
                    marginBottom: "0.85rem",
                  }}
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-subtle)" }}>
                {summary}
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
}
