/**
 * config.ts — Fonte de verdade do site (Template)
 *
 * Para adaptar o template a outro grupo, edite apenas este arquivo.
 * Todos os componentes leem os dados daqui.
 */

// ─── Identidade do grupo ──────────────────────────────────────────────────────

export const siteConfig = {
  name: "Grupo Acadêmico de Pesquisa",
  acronym: "Template",
  university: "Universidade Federal",
  department: "Departamento de Pesquisa",
  email: "contato@template.edu",
  location: "Cidade, Estado, Brasil",
  url: "https://template.pages.dev",
  description: "Um modelo de site institucional para grupos de pesquisa acadêmica — pessoas, linhas de investigação, publicações e notícias reunidas em um só lugar.",
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
    bg:           "#F7F7F4",  /* papel — off-white neutro-frio (não creme)     */
    bgElevated:   "#FFFFFF",  /* superfícies elevadas: cards                   */
    bgSubtle:     "#EFEFE9",  /* poços/seções alternadas                       */
    primary:      "#A8362F",  /* rubrica — vermelho acadêmico, só como marcador */
    primaryHover: "#8E2A24",  /* rubrica em hover/estado ativo                 */
    primaryMuted: "#C26A5F",  /* rubrica suave — bordas e filetes de hover     */
    text:         "#1A2030",  /* tinta — índigo profundo (cor de marca dominante) */
    textMuted:    "#565E70",  /* descrições e metadados                        */
    textSubtle:   "#7A7F8C",  /* legendas e dados secundários                  */
    border:       "#E4E4DC",  /* filete sutil sobre o papel                    */
    borderStrong: "#D2D2C8",  /* bordas de cards e containers                  */
  },
  fonts: {
    display: "'Newsreader', Georgia, serif",            /* títulos — serifa de periódico  */
    body:    "'IBM Plex Sans', system-ui, sans-serif",  /* corpo e UI                     */
    mono:    "'IBM Plex Mono', ui-monospace, monospace",/* metadados bibliográficos       */
  },
};
