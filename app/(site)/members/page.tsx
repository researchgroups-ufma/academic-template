/**
 * page.tsx — Página Membros
 *
 * Lista todos os membros do laboratório agrupados por função.
 * Os dados vêm dos arquivos em content/members/ via getCollection().
 *
 * Server Component — lê o conteúdo do servidor diretamente.
 */

import { getCollection } from "@/lib/mdx";
import MemberCard from "@/components/ui/MemberCard";

// Ordem de exibição dos grupos por função
const ROLE_ORDER = [
  "Pesquisador Sênior",
  "Pós-Doutorando",
  "Doutorando",
  "Mestrando",
  "Iniciação Científica",
  "Alumni",
];

export default async function MembersPage() {
  const members = await getCollection("members");

  return (
    <section className="section-padding">
      <div className="container-site">
        <h1 className="section-title">Membros</h1>
        <span className="title-accent" />

        {ROLE_ORDER.map((role) => {
          // Filtra os membros desta função e ordena por ano de entrada (asc)
          const group = members
            .filter((m) => (m.role as string | undefined) === role)
            .sort((a, b) => Number(a.year_start ?? 0) - Number(b.year_start ?? 0));

          // Não renderiza grupos vazios
          if (group.length === 0) return null;

          return (
            <div key={role} style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "1.5rem",
                }}
              >
                {role}
              </h2>

              {/* Grid fluido: ~4 colunas no desktop, 2 no tablet, 1 no mobile */}
              <div
                style={{
                  display: "grid",
                  gap: "1.5rem",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                }}
              >
                {group.map((m) => (
                  <MemberCard
                    key={m.slug}
                    name={m.title as string}
                    role={m.role as string}
                    research_area={m.research_area as string | undefined}
                    photo={m.photo as string | undefined}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
