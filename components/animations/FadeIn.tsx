/**
 * FadeIn — Wrapper de animação fade in ao entrar na tela
 *
 * Fase 1: pass-through simples — renderiza os filhos sem animação.
 *         Existe para que os componentes já possam importar e usar FadeIn
 *         sem precisar alterar o código quando a animação for implementada.
 *
 * Fase 4: será substituído por motion.div com Framer Motion.
 *         Implementação planejada:
 *           - useInView() para detectar quando o elemento entra na tela
 *           - variants com opacity 0→1 e translateY 20px→0
 *           - prop delay para stagger entre múltiplos elementos
 *
 * Uso atual:
 *   <FadeIn><MemberCard ... /></FadeIn>
 *
 * Uso na Fase 4 (mesmo código, animação acontece automaticamente):
 *   <FadeIn delay={0.2}><MemberCard ... /></FadeIn>
 *
 * Props:
 *   children — conteúdo a ser animado (obrigatório)
 *   delay    — atraso em segundos antes da animação iniciar (opcional)
 *              usado para criar efeito de stagger entre elementos do grid
 */

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function FadeIn({ children }: FadeInProps) {
  /* TODO (Fase 4): substituir por motion.div com useInView e variants */
  return <>{children}</>;
}
