/**
 * page.tsx — Página Contato
 * TODO (Fase 2): implementar layout com endereço e mapa
 */

import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/config";

export const metadata = { title: "Contato" };

export default function ContactPage() {
  return (
    <div>
      <PageHeader title="Contato" />
      <main>
        <div className="container-site">
          <section className="section-padding">
            <p style={{ color: "var(--color-text-muted)" }}>{siteConfig.email}</p>
          </section>
        </div>
      </main>
    </div>
  );
}
