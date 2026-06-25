/**
 * page.tsx — Página Notícias
 *
 * Lista as notícias do laboratório em ordem cronológica reversa.
 * Os dados vêm dos arquivos em content/news/ via getCollection().
 *
 * ATENÇÃO: o campo date vem do CMS como string ISO ou objeto Date.
 * Sempre use formatDate(item.date) para renderizar — nunca diretamente.
 *
 * Server Component — lê o conteúdo do servidor diretamente.
 */

import { getCollection, formatDate } from "@/lib/mdx";

export default async function NewsPage() {
  // Ignora o exemplo (placeholder.md) e ordena por data (mais recentes primeiro)
  const news = (await getCollection("news"))
    .filter((item) => item.slug !== "placeholder")
    .sort(
      (a, b) =>
        new Date(b.date as string).getTime() - new Date(a.date as string).getTime()
    );

  return (
    <section className="section-padding">
      <div className="container-site">
        <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Acontecimentos do grupo</p>
        <h1 className="section-title">Notícias</h1>
        <span className="title-accent" />

        {/* Grid fluido: ~3 colunas no desktop, 2 no tablet, 1 no mobile */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {news.map((item) => {
            const title = item.title as string;
            const date = item.date as string | undefined;
            const category = item.category as string | undefined;
            const excerpt = item.excerpt as string | undefined;
            const cover = item.cover_image as string | undefined;

            return (
              <article
                key={item.slug}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                {/* Imagem de capa (16/9) — só renderiza se existir */}
                {cover && (
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      borderRadius: "0.375rem",
                      overflow: "hidden",
                      backgroundColor: "var(--color-bg-subtle)",
                    }}
                  >
                    <img
                      src={cover}
                      alt={title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                )}

                {category && (
                  <div>
                    <span className="badge badge-muted">{category}</span>
                  </div>
                )}

                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.25 }}>
                  {title}
                </h2>

                {date && <p className="meta">{formatDate(date)}</p>}

                {excerpt && (
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
                    {excerpt}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
