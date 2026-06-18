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
  fontSize: "0.8rem",
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
        <h1 className="section-title">Publicações</h1>
        <span className="title-accent" />

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
                style={{ padding: "1.5rem 0", borderBottom: "1px solid var(--color-border)" }}
              >
                {/* Badge com o tipo da publicação */}
                {type && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span className="badge badge-muted">{type}</span>
                  </div>
                )}

                {/* Título */}
                <p style={{ fontWeight: 500, marginBottom: "0.25rem", lineHeight: 1.4 }}>
                  {title}
                </p>

                {/* Autores e ano */}
                {authors && (
                  <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
                    {authors}
                    {year ? ` · ${year}` : ""}
                  </p>
                )}

                {/* Periódico */}
                {journal && (
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-subtle)", marginBottom: "0.5rem" }}>
                    {journal}
                  </p>
                )}

                {/* Links externos — apenas os que existirem */}
                {(doi || arxiv || pdf) && (
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
