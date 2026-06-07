/**
 * HighlightsSection — Seção de destaques da homepage
 *
 * Exibe uma lista de destaques cadastrados pelo pesquisador no CMS.
 * Cada destaque tem título, descrição, imagem opcional e legenda.
 * A posição da imagem (esquerda ou direita) é configurável por item.
 *
 * Se não houver destaques cadastrados, a seção não é renderizada.
 *
 * Usado em: app/(site)/page.tsx
 *
 * Props:
 *   highlights — array de destaques lidos de content/highlights/
 */

type Highlight = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  image_caption?: string;
  image_position?: "left" | "right";
  order?: number;
};

type HighlightsSectionProps = {
  highlights: Highlight[];
};

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  // Não renderiza nada se não houver destaques cadastrados
  if (highlights.length === 0) return null;

  return (
    <section
      style={{ borderBottom: "1px solid var(--color-border)" }}
      className="section-padding"
    >
      <div className="container-site">

        {highlights.map((item, index) => {
          const imageOnLeft = item.image_position === "left";

          return (
            <div
              key={item.slug}
              style={{
                display: "grid",
                // Se tiver imagem: duas colunas. Se não: uma coluna
                gridTemplateColumns: item.image ? (imageOnLeft ? "260px 1fr" : "1fr 260px") : "1fr",
                gap: "2.5rem",
                alignItems: "start",
                marginBottom: index < highlights.length - 1 ? "3rem" : 0,
                paddingBottom: index < highlights.length - 1 ? "3rem" : 0,
                borderBottom: index < highlights.length - 1
                  ? "1px solid var(--color-border)"
                  : "none",
              }}
            >
              {/* Imagem à esquerda */}
              {item.image && imageOnLeft && (
                <figure style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <img
                    src={item.image}
                    alt={item.image_caption || item.title}
                    style={{
                      width: "100%",
                      border: "1px solid var(--color-border-strong)",
                    }}
                  />
                  {item.image_caption && (
                    <figcaption style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-subtle)",
                      marginTop: "0.5rem",
                      textAlign: "center",
                      fontStyle: "italic",
                    }}>
                      {item.image_caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Texto */}
              <div style={{ order: imageOnLeft ? 2 : 1 }}>
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
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "var(--color-text-muted)",
                    fontWeight: 300,
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Imagem à direita */}
              {item.image && !imageOnLeft && (
                <figure style={{ display: "flex", flexDirection: "column", alignItems: "center", order: 2 }}>
                  <img
                    src={item.image}
                    alt={item.image_caption || item.title}
                    style={{
                      width: "100%",
                      border: "1px solid var(--color-border-strong)",
                    }}
                  />
                  {item.image_caption && (
                    <figcaption style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-subtle)",
                      marginTop: "0.5rem",
                      textAlign: "center",
                      fontStyle: "italic",
                    }}>
                      {item.image_caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          );
        })}

      </div>
    </section>
  );
}
