/**
 * page.tsx — Página Linhas de Pesquisa
 * TODO (Fase 2): conectar com getCollection("research")
 */

import PageHeader from "@/components/ui/PageHeader";

export const metadata = { title: "Pesquisa" };

export default function ResearchPage() {
  return (
    <div>
      <PageHeader title="Linhas de Pesquisa" />
      <main>
        <div className="container-site">
          <section className="section-padding">
            <p style={{ color: "var(--color-text-muted)" }}>Conteúdo em construção.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
