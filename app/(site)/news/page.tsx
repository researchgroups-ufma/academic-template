/**
 * page.tsx — Página Notícias
 * TODO (Fase 2): conectar com getCollection("news")
 */

import PageHeader from "@/components/ui/PageHeader";

export const metadata = { title: "Notícias" };

export default function NewsPage() {
  return (
    <div>
      <PageHeader title="Notícias" />
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
