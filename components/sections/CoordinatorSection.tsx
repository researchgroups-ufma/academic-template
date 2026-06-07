/**
 * CoordinatorSection — Seção "Sobre o Coordenador" da homepage
 *
 * Estrutura:
 *   - Texto à esquerda com bio do coordenador
 *   - Foto à direita (ou placeholder se não houver foto)
 *
 * Os dados vêm do membro com role "Coordenador" em content/members/
 * A página.tsx passa o coordenador como prop após filtrar a coleção.
 *
 * Props:
 *   name     — nome completo do coordenador
 *   bio      — biografia/texto descritivo
 *   photo    — caminho da foto (opcional)
 *   lattes   — URL do Lattes (opcional)
 *   email    — e-mail institucional (opcional)
 */

type CoordinatorSectionProps = {
  name: string;
  bio: string;
  photo?: string;
  lattes?: string;
  email?: string;
};

export default function CoordinatorSection({
  name, bio, photo, lattes, email,
}: CoordinatorSectionProps) {
  return (
    <section
      id="coordinator"
      className="section-padding"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="container-site">

        {/* Cabeçalho */}
        <h2 className="section-title">Sobre o Coordenador</h2>
        <span className="title-accent" />

        {/* Layout: texto à esquerda, foto à direita */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 200px",
            gap: "3rem",
            alignItems: "start",
          }}
        >

          {/* ── Texto ──────────────────────────────────────────────────────── */}
          <div>
            {/* Bio — cada parágrafo separado por \n\n no frontmatter */}
            {bio.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontSize: "0.97rem",
                  lineHeight: 1.85,
                  color: "var(--color-text-muted)",
                  fontWeight: 300,
                  marginBottom: "1.1rem",
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Links acadêmicos */}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              {lattes && (
                <a
                  href={lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-primary)",
                    fontWeight: 500,
                  }}
                >
                  Currículo Lattes ↗
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-primary)",
                    fontWeight: 500,
                  }}
                >
                  {email}
                </a>
              )}
            </div>
          </div>

          {/* ── Foto ───────────────────────────────────────────────────────── */}
          <figure style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {photo ? (
              <img
                src={photo}
                alt={`Foto de ${name}`}
                style={{
                  width: "100%",
                  aspectRatio: "0.8",
                  objectFit: "cover",
                  border: "1px solid var(--color-border-strong)",
                }}
              />
            ) : (
              /* Placeholder quando não há foto disponível */
              <div
                style={{
                  width: "100%",
                  aspectRatio: "0.8",
                  backgroundColor: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border-strong)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 600,
                  }}
                >
                  {name.charAt(0)} {/* inicial do nome como placeholder */}
                </span>
              </div>
            )}
            <figcaption
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-subtle)",
                textAlign: "center",
                marginTop: "0.5rem",
                fontStyle: "italic",
              }}
            >
              {name} · UFMA
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  );
}
