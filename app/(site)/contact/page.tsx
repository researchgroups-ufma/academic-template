/**
 * page.tsx — Página Contato
 *
 * Exibe as informações de contato do laboratório.
 * Os dados (e-mail, localização, departamento) são lidos de lib/config.ts.
 *
 * Server Component — sem formulário, apenas informações estáticas.
 */

import type { CSSProperties } from "react";
import { siteConfig } from "@/lib/config";

// Estilo dos rótulos (uppercase em âmbar)
const labelStyle: CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "var(--color-primary)",
  marginBottom: "0.5rem",
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Contato</h1>
        <span className="title-accent" />

        {/* Duas colunas no desktop, uma no mobile */}
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {/* Coluna esquerda — informações de contato */}
          <div>
            <p style={labelStyle}>Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{ color: "var(--color-primary)", fontSize: "1.1rem" }}
            >
              {siteConfig.email}
            </a>

            <p style={{ ...labelStyle, marginTop: "2rem" }}>Localização</p>
            <p style={{ color: "var(--color-text-muted)" }}>{siteConfig.location}</p>

            <p style={{ ...labelStyle, marginTop: "2rem" }}>Departamento</p>
            <p style={{ color: "var(--color-text-muted)" }}>{siteConfig.department}</p>
            <p style={{ color: "var(--color-text-muted)" }}>{siteConfig.university}</p>
          </div>

          {/* Coluna direita — convite institucional ao contato */}
          <div>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "50ch" }}>
              Tem interesse em nossa pesquisa, deseja propor uma colaboração ou
              busca oportunidades de pós-graduação e iniciação científica? Entre
              em contato pelo e-mail acima. Teremos prazer em responder dúvidas,
              discutir parcerias e receber estudantes interessados em integrar o
              grupo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
