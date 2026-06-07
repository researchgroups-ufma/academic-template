/**
 * layout.tsx — Layout das páginas públicas do site LaFiM
 *
 * Neste branch (lafim-design) o Header horizontal foi substituído
 * pelo SideNav — menu lateral fixo no lado direito da tela,
 * inspirado no layout do Unearthly Materials.
 *
 * O Footer permanece no rodapé de todas as páginas.
 */

import SideNav from "@/components/layout/SideNav";
import Footer from "@/components/layout/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Menu lateral fixo no lado direito */}
      <SideNav />

      {/* Sem paddingTop — o Hero ocupa 100svh e o menu fica sobreposto */}
      <main>
        {children}
      </main>

      <Footer />
    </>
  );
}
