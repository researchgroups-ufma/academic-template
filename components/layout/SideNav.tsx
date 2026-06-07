/**
 * SideNav — Menu de navegação lateral fixo no lado direito
 *
 * Comportamento:
 *   - Posicionado fixo no lado direito da tela, centralizado verticalmente
 *   - Links verticais separados por linhas horizontais
 *   - Link ativo destacado em âmbar dourado via usePathname()
 *   - Item "Pesquisa" tem subitem "Infraestrutura" que aparece quando
 *     a rota atual começa com /research
 *
 * Fase 4: animações com Framer Motion:
 *   - Subitem desliza com AnimatePresence + motion.div
 *   - Indicador âmbar animado acompanha o link ativo (layoutId)
 *   - Entrada dos links com stagger ao carregar a página
 *
 * Dados lidos de lib/config.ts:
 *   - navLinks — array com label e href de cada item do menu
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/config";

// Subitens de cada link principal
// Para adicionar subitens a outro link no futuro,
// adicione uma nova entrada neste objeto
const SUB_ITEMS: Record<string, { label: string; href: string }[]> = {
  "/research": [
    { label: "Infraestrutura", href: "/research/infrastructure" },
  ],
};

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      style={{
        position: "fixed",
        top: "50%",
        right: "2.5rem",
        transform: "translateY(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {navLinks.map((link, index) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href + "/");
        const subItems = SUB_ITEMS[link.href];

        // Exibe subitens quando a rota atual é o link pai ou uma sub-rota dele
        const showSubItems =
          subItems && (isActive || pathname.startsWith(link.href + "/"));

        return (
          <div key={link.href}>

            {/* Linha separadora acima de cada item */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(245, 245, 240, 0.2)",
              }}
            />

            {/* Link principal */}
            <Link
              href={link.href}
              style={{
                display: "block",
                textAlign: "right",
                padding: "0.6rem 0",
                fontSize: "0.875rem",
                fontWeight: isActive ? 500 : 400,
                letterSpacing: "0.04em",
                color: isActive
                  ? "var(--color-primary)"
                  : "var(--color-text)",
                transition: "color 0.15s ease",
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </Link>

            {/* Subitens — visíveis quando o link pai está ativo */}
            {/* TODO (Fase 4): substituir por AnimatePresence + motion.div */}
            {showSubItems &&
              subItems.map((sub) => {
                const subActive = pathname === sub.href;
                return (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    style={{
                      display: "block",
                      textAlign: "right",
                      padding: "0.35rem 0",
                      fontSize: "0.775rem",
                      letterSpacing: "0.04em",
                      color: subActive
                        ? "var(--color-primary)"
                        : "var(--color-text-muted)",
                      transition: "color 0.15s ease",
                      whiteSpace: "nowrap",
                      borderRight: subActive
                        ? "2px solid var(--color-primary)"
                        : "2px solid transparent",
                      paddingRight: "0.5rem",
                    }}
                  >
                    {sub.label}
                  </Link>
                );
              })}

            {/* Linha separadora abaixo do último item */}
            {index === navLinks.length - 1 && (
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(245, 245, 240, 0.2)",
                }}
              />
            )}

          </div>
        );
      })}
    </nav>
  );
}
