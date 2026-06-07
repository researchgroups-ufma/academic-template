/**
 * SideNav — Menu de navegação lateral fixo no lado direito
 *
 * Inspirado no layout do Unearthly Materials:
 *   - Posicionado fixo no lado direito da tela
 *   - Links verticais separados por linhas horizontais
 *   - Texto alinhado à direita
 *   - Link ativo destacado em âmbar dourado
 *   - Hover com transição suave de cor
 *
 * Dados lidos de lib/config.ts:
 *   - navLinks — array com label e href de cada item do menu
 *
 * Para adicionar ou remover itens do menu:
 *   Edite apenas o array navLinks em lib/config.ts.
 *
 * Usado em: app/(site)/layout.tsx (substitui o Header)
 *
 * ATENÇÃO: precisa de "use client" para usar usePathname()
 * que detecta a rota atual e destaca o link ativo.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/config";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      style={{
        position: "fixed",       /* fixo — não some ao rolar a página          */
        top: "50%",              /* centralizado verticalmente na tela          */
        right: "2.5rem",        /* distância da borda direita                  */
        transform: "translateY(-50%)", /* ajuste fino para centralização real  */
        zIndex: 100,             /* acima de todo o conteúdo da página          */
        display: "flex",
        flexDirection: "column",
      }}
    >
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <div key={link.href}>

            {/* Linha separadora acima de cada item (incluindo o primeiro) */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(245, 245, 240, 0.2)", /* branco sutil  */
              }}
            />

            {/* Link de navegação */}
            <Link
              href={link.href}
              style={{
                display: "block",
                textAlign: "right",          /* texto alinhado à direita       */
                padding: "0.6rem 0",
                fontSize: "0.875rem",
                fontWeight: isActive ? 500 : 400,
                letterSpacing: "0.04em",
                color: isActive
                  ? "var(--color-primary)"     /* ativo — âmbar dourado        */
                  : "var(--color-text)",        /* inativo — branco             */
                transition: "color 0.15s ease",
                whiteSpace: "nowrap",          /* impede quebra de linha        */
              }}
            >
              {link.label}
            </Link>

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
