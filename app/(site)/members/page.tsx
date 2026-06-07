/**
 * page.tsx — Página Membros
 *
 * Lista todos os membros do laboratório agrupados por função.
 * Os dados vêm dos arquivos em content/members/ via getCollection().
 *
 * Fase 4: os cards receberão Morphing Dialog (Motion Primitives)
 * com bio completa, links acadêmicos e publicações ao clicar.
 *
 * TODO (Fase 2): implementar grid de MemberCard com dados reais.
 */

export default function MembersPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Membros</h1>
        <span className="title-accent" />
        {/* TODO (Fase 2): conectar com getCollection("members") */}
        <p style={{ color: "var(--color-text-muted)" }}>Conteúdo em construção.</p>
      </div>
    </section>
  );
}
