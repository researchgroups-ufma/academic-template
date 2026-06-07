/**
 * SectionHeader — Cabeçalho padronizado para seções do site
 *
 * Garante consistência visual entre todas as seções do site.
 * Renderiza três elementos em sequência:
 *   1. Título principal (h2)
 *   2. Traço dourado de acento
 *   3. Subtítulo descritivo (opcional)
 *
 * Uso:
 *   <SectionHeader title="Membros" subtitle="Conheça a equipe do laboratório" />
 *   <SectionHeader title="Publicações" />  ← sem subtítulo também funciona
 *
 * Props:
 *   title    — texto do título principal (obrigatório)
 *   subtitle — texto descritivo abaixo do traço dourado (opcional)
 */

type SectionHeaderProps = {
  title: string;
  subtitle?: string; /* o ? indica que é opcional — o componente funciona sem ele */
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "3rem" }}>

      {/* Título principal da seção */}
      <h2 className="section-title">{title}</h2>

      {/* Traço dourado decorativo — classe definida em globals.css */}
      <span className="title-accent" />

      {/* Subtítulo só é renderizado se a prop for fornecida
          O && é um "short-circuit": se subtitle for undefined, nada é exibido */}
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}

    </div>
  );
}
