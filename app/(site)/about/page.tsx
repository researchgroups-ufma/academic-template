/**
 * page.tsx — Página Sobre
 * TODO (Fase 2): conectar com getSingleFile("about/index.md")
 */

import PageHeader from "@/components/ui/PageHeader";

export const metadata = { title: "Sobre" };

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="Sobre" />
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
