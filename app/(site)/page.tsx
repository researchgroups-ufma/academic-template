/**
 * page.tsx — Homepage (Template)
 *
 * Conceito: "página de rosto de periódico".
 *   1. Hero — masthead, nome do grupo em serifa, resumo e colofão
 *   2. Sumário das linhas de pesquisa (table of contents numerado)
 *   3. Últimas notícias
 *   4. Chamada para contato
 *
 * Server Component — lê o conteúdo do servidor via getCollection().
 */

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { getCollection, formatDate } from "@/lib/mdx";

export default async function HomePage() {
  const research = (await getCollection("research")).filter((i) => i.slug !== "placeholder");

  const news = (await getCollection("news"))
    .filter((i) => i.slug !== "placeholder")
    .sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime())
    .slice(0, 3);

  return (
    <div>

      {/* ── Hero — página de rosto ─────────────────────────────────────────── */}
      <section
        style={{ minHeight: "86svh", display: "flex", alignItems: "center" }}
        className="section-padding"
      >
        <div className="container-site" style={{ width: "100%" }}>

          {/* Masthead — running head do periódico */}
          <p className="eyebrow rise" style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.75rem" }}>
            <span style={{ color: "var(--color-primary)" }}>§</span>
            {siteConfig.university} · {siteConfig.department}
          </p>

          {/* Nome do grupo */}
          <h1
            className="rise"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5.25rem)",
              fontWeight: 500,
              maxWidth: "16ch",
              lineHeight: 1.05,
              animationDelay: "0.08s",
            }}
          >
            {siteConfig.name}
          </h1>

          <span className="title-accent rise" style={{ animationDelay: "0.16s" }} />

          {/* Resumo / abstract */}
          <p
            className="rise"
            style={{
              fontSize: "1.2rem",
              color: "var(--color-text-muted)",
              maxWidth: "56ch",
              marginBottom: "2.5rem",
              animationDelay: "0.24s",
            }}
          >
            {siteConfig.description}
          </p>

          {/* Ações */}
          <div className="rise" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", animationDelay: "0.32s" }}>
            <Link href="/research" className="btn-primary">Conhecer a pesquisa</Link>
            <Link href="/about" className="btn-ghost">Sobre o grupo</Link>
          </div>

          {/* Colofão — imprint do periódico */}
          <p className="meta rise" style={{ marginTop: "3.5rem", animationDelay: "0.4s" }}>
            {siteConfig.email} &nbsp;·&nbsp; {siteConfig.location}
          </p>

        </div>
      </section>

      {/* ── Sumário das linhas de pesquisa ─────────────────────────────────── */}
      {research.length > 0 && (
        <section className="section-padding" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="container-site">

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Linhas de pesquisa</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>O que investigamos</h2>
              </div>
              <Link href="/research" className="link-rubric" style={{ fontSize: "0.9rem" }}>
                Ver todas →
              </Link>
            </div>

            {/* Sumário numerado — o índice de um caderno de periódico */}
            <div>
              {research.slice(0, 5).map((line, i) => (
                <div key={line.slug} className="index-row">
                  <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 500, marginBottom: "0.35rem" }}>
                      {line.title as string}
                    </h3>
                    {(line.summary as string | undefined) && (
                      <p style={{ color: "var(--color-text-muted)", maxWidth: "60ch" }}>
                        {line.summary as string}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ── Últimas notícias ───────────────────────────────────────────────── */}
      {news.length > 0 && (
        <section className="section-padding" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-subtle)" }}>
          <div className="container-site">

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Notícias</p>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Últimas atualizações</h2>
              </div>
              <Link href="/news" className="link-rubric" style={{ fontSize: "0.9rem" }}>
                Todas as notícias →
              </Link>
            </div>

            <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {news.map((item) => {
                const title = item.title as string;
                const date = item.date as string | undefined;
                const category = item.category as string | undefined;
                const excerpt = item.excerpt as string | undefined;

                return (
                  <article key={item.slug} className="card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {category && <div><span className="badge badge-muted">{category}</span></div>}
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.25 }}>
                      {title}
                    </h3>
                    {date && <p className="meta">{formatDate(date)}</p>}
                    {excerpt && <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)" }}>{excerpt}</p>}
                  </article>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ── Chamada para contato ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <div
            style={{
              border: "1px solid var(--color-border-strong)",
              borderRadius: "6px",
              padding: "3rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: "46ch" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 500, marginBottom: "0.5rem" }}>
                Quer colaborar ou ingressar no grupo?
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                Recebemos estudantes, propostas de parceria e dúvidas sobre nossa pesquisa.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">Entrar em contato</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
