/**
 * ResearchSection — Seção de Pesquisa da homepage
 *
 * Estrutura:
 *   - Título "Pesquisa" com traço dourado
 *   - Texto introdutório
 *   - Grid de cards de linhas de pesquisa (borda lateral âmbar)
 *   - Dois projetos em destaque com imagem e texto lado a lado
 *
 * Dados: recebe as linhas de pesquisa como prop (lidas em page.tsx via getCollection)
 *
 * Props:
 *   researchLines — array de linhas de pesquisa do laboratório
 */

type ResearchLine = {
  slug: string;
  title: string;
  summary: string;
};

type ResearchSectionProps = {
  researchLines: ResearchLine[];
};

export default function ResearchSection({ researchLines }: ResearchSectionProps) {
  return (
    <section
      id="research"
      className="section-padding"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="container-site">

        {/* ── Cabeçalho ──────────────────────────────────────────────────── */}
        <h2 className="section-title">Pesquisa</h2>
        <span className="title-accent" />

        {/* Texto introdutório */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--color-text-muted)",
            marginBottom: "3rem",
            maxWidth: "720px",
            fontWeight: 300,
          }}
        >
          Desenvolvemos pesquisa de fronteira em física da matéria condensada,
          nanomateriais e supercondutividade. Nosso trabalho combina abordagens
          teóricas, experimentais e computacionais para investigar as propriedades
          fundamentais dos materiais.
        </p>

        {/* ── Grid de linhas de pesquisa ──────────────────────────────────
            Exibe os cards apenas se houver linhas cadastradas no CMS.
            Cada card tem borda lateral âmbar — traço de identidade do LaFiM */}
        {researchLines.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "4rem",
            }}
          >
            {researchLines.map((line) => (
              <div
                key={line.slug}
                style={{
                  borderLeft: "3px solid var(--color-primary)", /* traço âmbar lateral */
                  padding: "1rem 1.25rem",
                  backgroundColor: "var(--color-bg-elevated)",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--color-text)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {line.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {line.summary}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ── Projeto em destaque 1 — imagem à direita ───────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 260px",
            gap: "2.5rem",
            alignItems: "start",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {/* Texto do projeto */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "var(--color-text)",
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}
            >
              {/* TODO (Fase 6): substituir pelo título real do projeto */}
              Projeto de Pesquisa em Destaque
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                fontWeight: 300,
                marginBottom: "0.85rem",
              }}
            >
              {/* TODO (Fase 6): substituir pela descrição real do projeto */}
              Descrição do projeto de pesquisa principal do laboratório.
              Este campo será preenchido com o conteúdo real fornecido pelo grupo.
            </p>
          </div>

          {/* Imagem ou placeholder */}
          <figure style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-strong)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* TODO (Fase 6): substituir por <img src={project.image} /> */}
              <span
                style={{
                  color: "var(--color-text-subtle)",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  padding: "1rem",
                  fontStyle: "italic",
                }}
              >
                Imagem do projeto
              </span>
            </div>
            <figcaption
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-subtle)",
                marginTop: "0.5rem",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              {/* TODO (Fase 6): legenda real da imagem */}
              Legenda da figura
            </figcaption>
          </figure>
        </div>

        {/* ── Projeto em destaque 2 — imagem à esquerda ──────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Imagem à esquerda */}
          <figure style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1.3",
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-strong)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "var(--color-text-subtle)",
                  fontSize: "0.8rem",
                  textAlign: "center",
                  padding: "1rem",
                  fontStyle: "italic",
                }}
              >
                Imagem do projeto
              </span>
            </div>
            <figcaption
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-subtle)",
                marginTop: "0.5rem",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Legenda da figura
            </figcaption>
          </figure>

          {/* Texto à direita */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 500,
                color: "var(--color-text)",
                marginBottom: "1rem",
                lineHeight: 1.3,
              }}
            >
              Segundo Projeto em Destaque
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                fontWeight: 300,
              }}
            >
              Descrição do segundo projeto de pesquisa do laboratório.
              Este campo será preenchido com o conteúdo real fornecido pelo grupo.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
