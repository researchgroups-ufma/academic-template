/**
 * page.tsx — Página Publicações
 *
 * Lista todas as publicações do laboratório em ordem cronológica reversa.
 * Os dados vêm dos arquivos em content/publications/ via getCollection().
 *
 * Server Component — lê o conteúdo do servidor diretamente.
 */

import type { CSSProperties } from "react";
import { getCollection } from "@/lib/mdx";

// Estilo compartilhado dos links externos (DOI, arXiv, PDF)
const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.78rem",
  letterSpacing: "0.03em",
  color: "var(--color-primary)",
};

export default async function PublicationsPage() {
  // Ignora o exemplo (placeholder.md) e ordena por ano (mais recentes primeiro)
  const publications = (await getCollection("publications"))
    .filter((item) => item.slug !== "placeholder")
    .sort((a, b) => Number(b.year ?? 0) - Number(a.year ?? 0));

  return (
    <section className="section-padding">
      <div className="container-site">
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Produção científica</p>
        <h1 className="section-title">Publicações</h1>
        <span className="title-accent" />

        {/* Lista de referências — ano em monoespaçada à esquerda, registro à direita */}
        <div>
          {publications.map((pub) => {
            const title = pub.title as string;
            const authors = pub.authors as string | undefined;
            const year = pub.year as number | undefined;
            const journal = pub.journal as string | undefined;
            const type = pub.type as string | undefined;
            const doi = pub.doi as string | undefined;
            const arxiv = pub.arxiv as string | undefined;
            const pdf = pub.pdf as string | undefined;

            return (
              <article
                key={pub.slug}
                style={{
                  display: "grid",
                  gridTemplateColumns: "4.5rem 1fr",
                  gap: "1.25rem",
                  padding: "1.75rem 0",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                {/* Coluna do ano — coordenada bibliográfica */}
                <span className="meta" style={{ paddingTop: "0.15rem", color: "var(--color-primary)" }}>
                  {year ?? "—"}
                </span>

                <div>
                  {/* Título */}
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 500, marginBottom: "0.4rem", lineHeight: 1.3 }}>
                    {title}
                  </h2>

                  {/* Autores */}
                  {authors && (
                    <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", marginBottom: "0.3rem" }}>
                      {authors}
                    </p>
                  )}

                  {/* Periódico + tipo */}
                  <p style={{ marginBottom: "0.75rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.6rem" }}>
                    {journal && (
                      <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem", color: "var(--color-text-muted)" }}>
                        {journal}
                      </span>
                    )}
                    {type && <span className="badge badge-muted">{type}</span>}
                  </p>

                  {/* Links externos — apenas os que existirem */}
                  {(doi || arxiv || pdf) && (
                    <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                      {doi && (
                        <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                          DOI ↗
                        </a>
                      )}
                      {arxiv && (
                        <a href={arxiv} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                          arXiv ↗
                        </a>
                      )}
                      {pdf && (
                        <a href={pdf} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                          PDF ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
