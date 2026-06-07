/**
 * config.ts — Fonte de verdade do site LaFiM
 *
 * Para adaptar o template a outro grupo, edite apenas este arquivo.
 * Todos os componentes leem os dados daqui.
 */

// ─── Identidade do grupo ──────────────────────────────────────────────────────

export const siteConfig = {
  name: "Laboratório de Física dos Materiais",
  acronym: "LaFiM",
  university: "Universidade Federal do Maranhão",
  department: "Departamento de Física — CCET",
  email: "lafim@ufma.br",
  location: "São Luís, Maranhão, Brasil",
  url: "https://lafim-ufma.pages.dev",
  description: "Pesquisa em física da matéria condensada, nanomateriais e supercondutividade na UFMA.",
};

// ─── Navegação ────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Início",      href: "/" },
  { label: "Pesquisa",    href: "/research" },
  { label: "Membros",     href: "/members" },
  { label: "Publicações", href: "/publications" },
  { label: "Notícias",    href: "/news" },
  { label: "Sobre",       href: "/about" },
  { label: "Contato",     href: "/contact" },
];

export const footerLinks = [
  { label: "Pesquisa",    href: "/research" },
  { label: "Membros",     href: "/members" },
  { label: "Publicações", href: "/publications" },
  { label: "Contato",     href: "/contact" },
];

// ─── Design tokens ────────────────────────────────────────────────────────────
// Espelha as CSS variables de app/globals.css
// Alterar aqui NÃO altera o CSS — os dois precisam estar sincronizados

export const designTokens = {
  colors: {
    bg:           "#080808",
    bgElevated:   "#111111",
    bgSubtle:     "#1a1a1a",
    primary:      "#E8A020",
    primaryHover: "#F5B830",
    primaryMuted: "#C8881A",
    text:         "#F5F5F0",
    textMuted:    "#A0A09A",
    textSubtle:   "#606060",
    border:       "#222222",
    borderStrong: "#333333",
  },
  fonts: {
    display: "'Google Sans Flex', 'Google Sans', sans-serif",
    body:    "'IBM Plex Sans', system-ui, sans-serif",
  },
};
