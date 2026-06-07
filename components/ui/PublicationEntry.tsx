/**
 * PublicationEntry — Entrada de publicação acadêmica
 *
 * Exibe uma publicação em formato de lista com todos os metadados relevantes.
 * Usado na página /publications e em seções de destaque da homepage.
 *
 * Comportamento dos links:
 *   - DOI: monta a URL completa com https://doi.org/{doi}
 *   - arXiv: monta a URL completa com https://arxiv.org/abs/{arxiv}
 *   - Ambos abrem em nova aba (target="_blank")
 *   - Se não houver DOI nem arXiv, a seção de links não é renderizada
 *
 * O badge "Em destaque" aparece quando featured: true no frontmatter do .md.
 *
 * Props:
 *   title    — título do artigo (obrigatório)
 *   authors  — autores separados por vírgula (obrigatório)
 *   year     — ano de publicação (obrigatório)
 *   type     — tipo: Artigo, Preprint, Tese, etc. (obrigatório)
 *   journal  — nome do periódico (opcional)
 *   doi      — identificador DOI sem a URL base, ex: "10.1103/..." (opcional)
 *   arxiv    — ID do arXiv sem a URL base, ex: "2401.12345" (opcional)
 *   featured — se true, exibe badge dourado de destaque (opcional)
 */

type PublicationEntryProps = {
  title: string;
  authors: string;
  year: number;
  type: string;
  journal?: string;
  doi?: string;
  arxiv?: string;
  featured?: boolean;
};

export default function PublicationEntry({
  title, authors, year, type, journal, doi, arxiv, featured,
}: PublicationEntryProps) {
  return (
    <div
      style={{
        padding: "1.5rem 0",
        borderBottom: "1px solid var(--color-border)",
      }}
    >

      {/* Badges de tipo e destaque */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
        <span className="badge badge-muted">{type}</span>
        {featured && <span className="badge badge-primary">Em destaque</span>}
      </div>

      {/* Título */}
      <p style={{ fontWeight: 500, marginBottom: "0.25rem", lineHeight: 1.4 }}>
        {title}
      </p>

      {/* Autores, ano e periódico */}
      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "0.5rem" }}>
        {authors} · {year}
        {journal && ` · ${journal}`}
      </p>

      {/* Links externos — só renderiza se houver pelo menos um */}
      {(doi || arxiv) && (
        <div style={{ display: "flex", gap: "1rem" }}>

          {/* Link DOI — monta URL completa a partir do identificador */}
          {doi && (
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem", color: "var(--color-primary)" }}
            >
              DOI ↗
            </a>
          )}

          {/* Link arXiv — monta URL completa a partir do ID */}
          {arxiv && (
            <a
              href={`https://arxiv.org/abs/${arxiv}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.8rem", color: "var(--color-primary)" }}
            >
              arXiv ↗
            </a>
          )}

        </div>
      )}

    </div>
  );
}
