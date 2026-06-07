/**
 * PageCards — Cards de navegação para Membros e Publicações
 *
 * Dois cards lado a lado que direcionam o visitante para as
 * páginas principais do site. Funcionam como atalhos visuais.
 *
 * Hover: borda âmbar + fundo levemente elevado
 *
 * Usado em: app/(site)/page.tsx (homepage)
 */

"use client";
import Link from "next/link";
import { InView } from "@/components/motion-primitives/in-view";
import { motion } from "framer-motion";

export default function PageCards() {
  // Dados dos cards — para adicionar mais cards, adicione um objeto neste array
  const cards = [
    {
      href: "/members",
      label: "Equipe",
      title: "Membros do laboratório",
      description:
        "Conheça os professores, doutorandos, mestrandos e alunos de iniciação científica que integram o LaFiM.",
      cta: "Ver membros →",
    },
    {
      href: "/publications",
      label: "Produção científica",
      title: "Publicações",
      description:
        "Lista completa de artigos publicados em periódicos internacionais, com links para arXiv e DOI.",
      cta: "Ver publicações →",
    },
  ];

  return (
    <section
      className="section-padding"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="container-site">

        {/* Grid de dois cards lado a lado */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.href}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
            <Link
              href={card.href}
              style={{
                display: "block",
                textDecoration: "none",
                border: "1px solid var(--color-border-strong)",
                padding: "1.75rem 2rem",
                backgroundColor: "var(--color-bg-elevated)",
                transition: "border-color 0.2s ease, background-color 0.2s ease",
              }}
              /* Hover via CSS class — inline style não suporta :hover */
              className="page-card-link"
            >
              {/* Label superior em âmbar */}
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                {card.label}
              </p>

              {/* Título do card */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "0.4rem",
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              {/* Descrição */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>

              {/* CTA — seta de navegação */}
              <p
                style={{
                  marginTop: "1.25rem",
                  fontSize: "0.8rem",
                  color: "var(--color-primary)",
                  fontWeight: 500,
                }}
              >
                {card.cta}
              </p>
            </Link>
            </motion.div>
          ))}
        </div>
        </InView>

      </div>
    </section>
  );
}
