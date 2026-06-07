/**
 * page.tsx — Página Publicações
 *
 * Lista todas as publicações do laboratório com filtros por área de pesquisa.
 * Os dados vêm dos arquivos em content/publications/ via getCollection().
 *
 * TODO (Fase 2): implementar lista de PublicationEntry com filtros por área.
 */

export default function PublicationsPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Publicações</h1>
        <span className="title-accent" />
        {/* TODO (Fase 2): conectar com getCollection("publications") */}
        <p style={{ color: "var(--color-text-muted)" }}>Conteúdo em construção.</p>
      </div>
    </section>
  );
}
