/**
 * page.tsx — Página Sobre
 *
 * Exibe a apresentação institucional do laboratório.
 * Os dados vêm de content/about/index.md via getSingleFile().
 *
 * TODO (Fase 2): implementar layout completo com missão, histórico
 * e imagem lidos do arquivo de conteúdo.
 */

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Sobre</h1>
        <span className="title-accent" />
        {/* TODO (Fase 2): conectar com getSingleFile("about/index.md") */}
        <p style={{ color: "var(--color-text-muted)" }}>Conteúdo em construção.</p>
      </div>
    </section>
  );
}
