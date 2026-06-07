/**
 * PageTransition — Transição suave entre páginas
 *
 * Fase 1: pass-through simples — renderiza os filhos sem animação.
 *         Existe para que o layout já possa importar e usar PageTransition
 *         sem precisar alterar o código quando a animação for implementada.
 *
 * Fase 4: será implementado com AnimatePresence + motion.div do Framer Motion.
 *         Implementação planejada:
 *           - AnimatePresence detecta quando uma página é desmontada
 *           - motion.div com variants de fade in/out suave
 *           - key={pathname} para disparar a animação a cada troca de rota
 *
 * Uso atual (em app/(site)/layout.tsx):
 *   <PageTransition>{children}</PageTransition>
 *
 * Props:
 *   children — conteúdo da página atual (obrigatório)
 */

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  /* TODO (Fase 4): substituir por AnimatePresence + motion.div */
  return <>{children}</>;
}
