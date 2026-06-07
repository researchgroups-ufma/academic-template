/**
 * page.tsx — Página Contato
 *
 * Exibe as informações de contato do laboratório.
 * Os dados (e-mail, localização) são lidos de lib/config.ts.
 *
 * TODO (Fase 2): implementar layout completo com endereço e mapa.
 */

import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Contato</h1>
        <span className="title-accent" />
        {/* E-mail lido de lib/config.ts — para alterar, edite apenas o config */}
        <p style={{ color: "var(--color-text-muted)" }}>{siteConfig.email}</p>
      </div>
    </section>
  );
}
