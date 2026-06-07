/**
 * SideNav — Menu de navegação lateral fixo no lado direito
 *
 * Animações implementadas com Framer Motion:
 *   1. Dropdown do subitem — AnimatePresence + motion.div deslizando para baixo
 *   2. Indicador de link ativo — ponto âmbar com layoutId que se move entre links
 *   3. Hover scale — texto aumenta levemente ao passar o mouse (scale 1.0 → 1.05)
 *
 * Para adicionar subitens a outro link:
 *   Adicione uma nova entrada no objeto SUB_ITEMS.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/config";

// Subitens de cada link principal
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
        const showSubItems = subItems && pathname.startsWith(link.href);

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

            {/* Link principal com hover scale e indicador âmbar animado */}
            <motion.div
              whileHover={{ scale: 1.05 }}          /* escala leve no hover    */
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{ transformOrigin: "right center" }} /* escala a partir da direita */
            >
              <Link
                href={link.href}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "0.5rem",
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
                {/* Indicador âmbar — usa layoutId para animar entre links */}
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    style={{
                      display: "block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.4,
                    }}
                  />
                )}
                {link.label}
              </Link>
            </motion.div>

            {/* Subitens — dropdown animado com AnimatePresence */}
            <AnimatePresence>
              {showSubItems && subItems.map((sub) => {
                const subActive = pathname === sub.href;
                return (
                  <motion.div
                    key={sub.href}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      style={{ transformOrigin: "right center" }}
                    >
                      <Link
                        href={sub.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: "0.4rem",
                          padding: "0.35rem 0",
                          fontSize: "0.775rem",
                          letterSpacing: "0.04em",
                          color: subActive
                            ? "var(--color-primary)"
                            : "var(--color-text-muted)",
                          transition: "color 0.15s ease",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {/* Indicador do subitem ativo */}
                        {subActive && (
                          <motion.span
                            layoutId="active-indicator"
                            style={{
                              display: "block",
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "var(--color-primary)",
                              flexShrink: 0,
                            }}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.4,
                            }}
                          />
                        )}
                        {sub.label}
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

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
