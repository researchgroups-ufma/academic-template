/**
 * MemberCard — Card de membro do laboratório
 *
 * Fase 1: versão estática simples com foto, nome, função e linha de pesquisa.
 * Fase 4: será substituída pela versão com Morphing Dialog (Motion Primitives).
 *         O dialog expandido exibirá bio completa, links acadêmicos
 *         (Lattes, ORCID, Google Scholar, arXiv) e publicações ao clicar.
 *
 * Comportamento da foto:
 *   - Se a prop photo for fornecida, exibe a imagem do membro
 *   - Se não houver foto, exibe um placeholder com a inicial do nome
 *     em âmbar dourado sobre fundo escuro
 *
 * Uso:
 *   <MemberCard name="João Silva" role="Doutorando" research_area="Supercondutividade" />
 *
 * Props:
 *   name          — nome completo do membro (obrigatório)
 *   role          — função no laboratório, ex: Doutorando (obrigatório)
 *   research_area — linha de pesquisa vinculada (opcional)
 *   photo         — caminho da imagem em /uploads/ (opcional)
 */

type MemberCardProps = {
  name: string;
  role: string;
  research_area?: string; /* opcional — nem todo membro tem linha definida   */
  photo?: string;         /* opcional — exibe placeholder se não houver foto */
};

export default function MemberCard({ name, role, research_area, photo }: MemberCardProps) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

      {/* ── Foto ou placeholder ─────────────────────────────────────────────
          aspectRatio 1/1 garante que o container seja sempre quadrado,
          independente da largura do card no grid                           */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          borderRadius: "0.375rem",
          overflow: "hidden",              /* recorta a imagem no formato quadrado */
          backgroundColor: "var(--color-bg-subtle)",
        }}
      >
        {photo ? (
          /* Imagem real do membro — objectFit cover preenche sem distorcer */
          <img
            src={photo}
            alt={`Foto de ${name}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          /* Placeholder com inicial do nome quando não há foto disponível */
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: 600,
              color: "var(--color-primary)", /* inicial em âmbar dourado */
            }}
          >
            {name.charAt(0)} {/* pega apenas a primeira letra do nome */}
          </div>
        )}
      </div>

      {/* ── Informações do membro ──────────────────────────────────────────── */}
      <div>
        {/* Nome completo */}
        <p style={{ fontWeight: 500, marginBottom: "0.25rem" }}>{name}</p>

        {/* Função em âmbar — destaca a posição do membro */}
        <p style={{ fontSize: "0.85rem", color: "var(--color-primary)", marginBottom: "0.25rem" }}>
          {role}
        </p>

        {/* Linha de pesquisa — só renderiza se a prop existir */}
        {research_area && (
          <p style={{ fontSize: "0.8rem", color: "var(--color-text-subtle)" }}>
            {research_area}
          </p>
        )}
      </div>

    </div>
  );
}
