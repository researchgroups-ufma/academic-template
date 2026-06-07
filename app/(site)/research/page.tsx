/**
 * page.tsx — Página Linhas de Pesquisa
 *
 * Lista todas as linhas de pesquisa do laboratório.
 * Os dados vêm dos arquivos em content/research/ via getCollection().
 *
 * TODO (Fase 2): implementar grid de cards com dados reais.
 */

export default function ResearchPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Linhas de Pesquisa</h1>
        <span className="title-accent" />
        {/* TODO (Fase 2): conectar com getCollection("research") */}
        <p style={{ color: "var(--color-text-muted)" }}>Conteúdo em construção.</p>
      </div>
    </section>
  );
}
