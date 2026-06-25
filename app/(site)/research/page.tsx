/**
 * page.tsx — Página Linhas de Pesquisa
 *
 * Lista todas as linhas de pesquisa do laboratório em grade de cards.
 * Os dados vêm dos arquivos em content/research/ via getCollection().
 *
 * Server Component — lê o conteúdo do servidor diretamente.
 */

import { getCollection } from "@/lib/mdx";

export default async function ResearchPage() {
  // Ignora o arquivo de exemplo (placeholder.md) do template
  const lines = (await getCollection("research")).filter(
    (item) => item.slug !== "placeholder"
  );

  return (
    <section className="section-padding">
      <div className="container-site">
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>O que investigamos</p>
        <h1 className="section-title">Linhas de Pesquisa</h1>
        <span className="title-accent" />

        {/* Grid fluido: ~3 colunas no desktop, 2 no tablet, 1 no mobile */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          }}
        >
          {lines.map((line) => {
            const title = line.title as string;
            const summary = line.summary as string | undefined;

            return (
              <div key={line.slug} className="card">
                <h2 style={{ fontWeight: 500, marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {title}
                </h2>
                {summary && (
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                    {summary}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
