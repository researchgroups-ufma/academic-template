/**
 * PageHeader — Cabeçalho padronizado para todas as páginas internas
 *
 * Exibe fundo escuro elevado, eyebrow com identificação do grupo
 * e título da página. Padrão visual consistente em todo o site.
 *
 * Uso:
 *   <PageHeader title="Membros" />
 *   <PageHeader title="Publicações" eyebrow="LaFiM · UFMA" />
 *
 * Props:
 *   title   — título da página (obrigatório)
 *   eyebrow — texto acima do título (opcional — padrão: sigla · universidade)
 */

import { siteConfig } from "@/lib/config";

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
};

export default function PageHeader({ title, eyebrow }: PageHeaderProps) {
  return (
    <div className="page-header">
      <p className="page-header-eyebrow">
        {eyebrow ?? `${siteConfig.acronym} · ${siteConfig.university}`}
      </p>
      <h1 className="section-title">{title}</h1>
    </div>
  );
}
