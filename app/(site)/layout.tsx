/**
 * layout.tsx — Layout das páginas públicas do site
 *
 * Este layout envolve todas as páginas dentro da pasta app/(site)/.
 * É aqui que o Header e o Footer são incluídos — eles aparecem
 * automaticamente em todas as páginas públicas sem precisar repetir.
 *
 * Por que existe a pasta (site)?
 *   A pasta com parênteses é um "Route Group" do Next.js App Router.
 *   O parêntese faz com que o nome da pasta NÃO apareça na URL.
 *   Exemplo: app/(site)/about/page.tsx → URL final é /about (não /site/about)
 *   Isso permite separar o layout do site público do layout do painel /admin,
 *   que fica fora desta pasta e não herda Header nem Footer.
 *
 * Estrutura visual de toda página pública:
 *   <Header />         ← navbar fixa no topo
 *   <main>             ← conteúdo específico de cada página
 *     {children}
 *   </main>
 *   <Footer />         ← rodapé institucional
 *
 * Usado por: todas as páginas em app/(site)/
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Navbar fixa — lê links de navegação de lib/config.ts */}
      <Header />

      {/* paddingTop compensa a altura da navbar fixa (4rem = 64px)
          sem isso o topo do conteúdo ficaria escondido atrás do Header */}
      <main style={{ paddingTop: "4rem" }}>
        {children}
      </main>

      {/* Rodapé institucional — lê dados de lib/config.ts */}
      <Footer />
    </>
  );
}
