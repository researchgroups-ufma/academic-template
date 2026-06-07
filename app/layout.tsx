/**
 * layout.tsx — Layout raiz da aplicação
 *
 * Este é o layout de nível mais alto do Next.js (App Router).
 * Ele envolve TODAS as páginas do site, incluindo o painel /admin.
 *
 * Responsabilidades:
 *   - Define as tags <html> e <body> com idioma pt-BR
 *   - Injeta os metadados globais lidos de lib/config.ts
 *   - Renderiza o ThemeProvider que injeta as CSS variables de design
 *   - Importa o globals.css com os estilos base
 *
 * O que NÃO fica aqui:
 *   - Header e Footer ficam em app/(site)/layout.tsx
 *     Isso garante que o painel /admin não herde a navegação do site público
 */

import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import ThemeProvider from "@/components/layout/ThemeProvider";
import "./globals.css";

// Metadados globais lidos do config.ts
// title.template define o padrão para páginas internas: "Membros | LaFiM"
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.acronym} — ${siteConfig.university}`, // aba padrão
    template: `%s | ${siteConfig.acronym}`,                       // páginas internas
  },
  description: siteConfig.description, // texto exibido no Google e redes sociais
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* ThemeProvider injeta as CSS variables do config.ts como style inline */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
