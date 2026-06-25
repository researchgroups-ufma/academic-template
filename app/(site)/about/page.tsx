/**
 * page.tsx — Página Sobre
 *
 * Exibe a apresentação institucional do laboratório.
 * Os dados vêm de content/about/index.md via getSingleFile().
 *
 * Server Component — lê o conteúdo do servidor diretamente.
 */

import type { CSSProperties } from "react";
import { getSingleFile } from "@/lib/mdx";

// Rótulos de seção — running head monoespaçado com marcador de rubrica
const labelStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  fontSize: "0.72rem",
  fontWeight: 500,
  color: "var(--color-text-subtle)",
  marginBottom: "0.9rem",
};

export default async function AboutPage() {
  const about = await getSingleFile("about/index.md");

  const title = about.title as string | undefined;
  const subtitle = about.subtitle as string | undefined;
  const mission = about.mission as string | undefined;
  const history = about.history as string | undefined;
  const affiliations = about.affiliations as string[] | undefined;

  return (
    <section className="section-padding">
      <div className="container-site">
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Sobre o grupo</p>
        <h1 className="section-title">{title ?? "Sobre"}</h1>
        <span className="title-accent" />
        {subtitle && <p className="section-subtitle">{subtitle}</p>}

        {/* Missão */}
        {mission && (
          <div style={{ marginBottom: "3rem" }}>
            <p style={labelStyle}>Missão</p>
            <p style={{ color: "var(--color-text)", maxWidth: "70ch" }}>{mission}</p>
          </div>
        )}

        {/* Histórico — preserva as quebras de linha do conteúdo */}
        {history && (
          <div style={{ marginBottom: "3rem" }}>
            <p style={labelStyle}>Histórico</p>
            <p style={{ color: "var(--color-text-muted)", whiteSpace: "pre-line", maxWidth: "70ch" }}>
              {history}
            </p>
          </div>
        )}

        {/* Afiliações */}
        {affiliations && affiliations.length > 0 && (
          <div>
            <p style={labelStyle}>Afiliações</p>
            <ul style={{ listStyle: "none" }}>
              {affiliations.map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", gap: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}
                >
                  <span style={{ color: "var(--color-primary)" }}>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
