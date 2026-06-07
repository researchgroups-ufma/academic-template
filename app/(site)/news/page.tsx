/**
 * page.tsx — Página Notícias
 *
 * Lista as notícias do laboratório em ordem cronológica reversa.
 * Os dados vêm dos arquivos em content/news/ via getCollection().
 *
 * ATENÇÃO: o campo date vem do CMS como string ISO ou objeto Date.
 * Sempre use formatDate(item.date) para renderizar — nunca diretamente.
 *
 * TODO (Fase 2): implementar lista de notícias com data, categoria e excerpt.
 */

export default function NewsPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Notícias</h1>
        <span className="title-accent" />
        {/* TODO (Fase 2): conectar com getCollection("news") */}
        <p style={{ color: "var(--color-text-muted)" }}>Conteúdo em construção.</p>
      </div>
    </section>
  );
}
