/**
 * Header — Barra de navegação fixa no topo do site
 *
 * Comportamento visual:
 *   - Fixo no topo da página (não some ao rolar)
 *   - Fundo preto semi-transparente com efeito de blur (backdropFilter)
 *   - Borda inferior sutil para separar do conteúdo abaixo
 *   - Link da página atual destacado em âmbar via usePathname()
 *
 * Dados lidos de lib/config.ts:
 *   - siteConfig.acronym — sigla exibida como logo (ex: "Template")
 *   - navLinks           — array com label e href de cada item do menu
 *
 * Para adicionar ou remover itens do menu:
 *   Edite apenas o array navLinks em lib/config.ts — não mexa neste arquivo.
 *
 * Usado em: app/(site)/layout.tsx (layout das páginas públicas)
 *
 * ATENÇÃO: precisa de "use client" para usar o hook usePathname(),
 * que detecta a rota atual e destaca o link ativo no menu.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navLinks } from "@/lib/config";

export default function Header() {
  // usePathname retorna a rota atual, ex: "/members" ou "/"
  // Usado para comparar com o href de cada link e destacar o ativo
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "fixed",          /* fica no topo mesmo ao rolar a página   */
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,                /* fica acima de todo o conteúdo da página */
        borderBottom: "1px solid var(--color-border)",
        backdropFilter: "blur(12px)",                 /* vidro fosco          */
        WebkitBackdropFilter: "blur(12px)",           /* suporte Safari/iOS   */
        backgroundColor: "rgba(247, 247, 244, 0.82)", /* papel translúcido    */
      }}
    >
      <div
        className="container-site"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", /* logo à esquerda, menu à direita */
          height: "4rem",                  /* altura fixa da navbar            */
        }}
      >

        {/* ── Logo / Sigla ──────────────────────────────────────────────────
            Clicável — leva para a homepage ao clicar                       */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.5rem",
          }}
        >
          {/* Marcador de rubrica + sigla em tinta */}
          <span style={{ color: "var(--color-primary)", fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>§</span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
            }}
          >
            {siteConfig.acronym}
          </span>
        </Link>

        {/* ── Links de navegação ────────────────────────────────────────────
            Gerados dinamicamente a partir de navLinks em lib/config.ts
            O link ativo recebe cor primária; os demais ficam em text-muted  */}
        <nav aria-label="Navegação principal">
          <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none" }}>
            {navLinks.map((link) => {
              // Compara o href do link com a rota atual para detectar o ativo
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      padding: "0.4rem 0.75rem",
                      borderRadius: "0.375rem",
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 500 : 400,
                      color: isActive
                        ? "var(--color-primary)"    /* ativo — âmbar           */
                        : "var(--color-text-muted)", /* inativo — cinza claro  */
                      transition: "color 0.15s ease",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </header>
  );
}
