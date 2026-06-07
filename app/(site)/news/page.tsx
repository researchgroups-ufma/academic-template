/**
 * page.tsx — Página Notícias
 *
 * Server Component — lê todas as notícias de content/news/
 * via getCollection(), ordena por data e exibe em lista.
 *
 * ATENÇÃO: campos de data sempre via formatDate() — nunca renderizar diretamente.
 */

import { getCollection, formatDate } from "@/lib/mdx";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = { title: "Notícias" };

export default async function NewsPage() {
  const allNews = await getCollection("news");

  // Remove placeholder e ordena por data — mais recente primeiro
  const news = allNews
    .filter((n) => n.slug !== "placeholder")
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date as string).getTime() : 0;
      const dateB = b.date ? new Date(b.date as string).getTime() : 0;
      return (isNaN(dateB) ? 0 : dateB) - (isNaN(dateA) ? 0 : dateA);
    });

  return (
    <div>
      <PageHeader title="Notícias" />

      <main>
        <div className="container-site">
          <section style={{ padding: "4rem 0" }}>

            {news.length === 0 ? (
              <p style={{ color: "var(--color-text-subtle)" }}>
                Nenhuma notícia cadastrada ainda.
              </p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {news.map((item, index) => (
                  <div
                    key={item.slug}
                    style={{
                      display: "grid",
                      gridTemplateColumns: (item.cover_image as string | undefined) ? "1fr 200px" : "1fr",
                      gap: "2rem",
                      alignItems: "start",
                      padding: "2rem 0",
                      borderBottom: "1px solid var(--color-border)",
                      borderTop: index === 0 ? "1px solid var(--color-border)" : "none",
                    }}
                  >
                    {/* Conteúdo */}
                    <div>
                      {/* Categoria e data */}
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                        {(item.category as string | undefined) && (
                          <span className="badge badge-primary">
                            {item.category as string}
                          </span>
                        )}
                        <span style={{ fontSize: "0.8rem", color: "var(--color-text-subtle)" }}>
                          {formatDate(item.date as string)}
                        </span>
                      </div>

                      {/* Título */}
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.2rem",
                          fontWeight: 500,
                          color: "var(--color-text)",
                          marginBottom: "0.5rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title as string}
                      </h2>

                      {/* Resumo */}
                      {(item.excerpt as string | undefined) && (
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--color-text-muted)",
                            fontWeight: 300,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.excerpt as string}
                        </p>
                      )}
                    </div>

                    {/* Imagem de capa — só renderiza se existir */}
                    {(item.cover_image as string | undefined) && (
                      <img
                        src={item.cover_image as string}
                        alt={item.title as string}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                          border: "1px solid var(--color-border-strong)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

          </section>
        </div>
      </main>
    </div>
  );
}
