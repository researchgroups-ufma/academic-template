/**
 * Hero — Seção principal fullscreen do site LaFiM
 *
 * Comportamento:
 *   - Ocupa 100% da altura da tela (100svh)
 *   - Exibe imagem de fundo com overlay escuro para legibilidade
 *   - 1 imagem: exibe estática, sem carrossel
 *   - 2+ imagens: ativa carrossel automático com transição de fade suave
 *   - Logo SVG do LaFiM posicionada no canto inferior esquerdo
 *   - Linha horizontal separando logo do subtítulo
 *   - Subtítulo abaixo da linha
 *
 * Props:
 *   images   — array de caminhos das imagens (obrigatório, mínimo 1)
 *   subtitle — texto exibido abaixo da linha separadora (opcional)
 *
 * Usado em: app/(site)/page.tsx
 *
 * ATENÇÃO: precisa de "use client" para useState e useEffect do carrossel.
 */

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type HeroProps = {
  images: string[];
  subtitle?: string;
};

export default function Hero({ images, subtitle }: HeroProps) {
  // Índice da imagem atualmente visível no carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Controla a opacidade durante a transição de fade entre imagens
  const [opacity, setOpacity] = useState(1);

  // Ativa o carrossel automático apenas se houver mais de uma imagem
  useEffect(() => {
    if (images.length <= 1) return; // sem carrossel para uma única imagem

    const interval = setInterval(() => {
      // Inicia o fade out da imagem atual
      setOpacity(0);

      // Após o fade out (600ms), troca a imagem e faz fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setOpacity(1);
      }, 600);

    }, 5000); // troca de imagem a cada 5 segundos

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",        /* ocupa exatamente a altura visível da tela */
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",  /* conteúdo ancorado no canto inferior       */
      }}
    >

      {/* ── Imagem de fundo ─────────────────────────────────────────────────
          Transition controla o fade suave entre imagens do carrossel.
          O opacity muda via useState quando o carrossel avança.           */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: opacity,
          transition: "opacity 0.6s ease-in-out", /* duração do fade         */
        }}
      >
        <Image
          src={images[currentIndex]}
          alt="Imagem do laboratório"
          fill                          /* preenche o container pai           */
          priority                      /* carrega antes das outras imagens   */
          style={{ objectFit: "cover" }} /* cobre sem distorcer               */
          sizes="100vw"
        />
      </div>

      {/* ── Overlay escuro ──────────────────────────────────────────────────
          Gradiente da esquerda (mais escuro) para a direita (transparente).
          Garante legibilidade do texto sobre qualquer imagem de fundo.    */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.6) 50%, rgba(8,8,8,0.2) 100%)",
        }}
      />

      {/* ── Overlay inferior ────────────────────────────────────────────────
          Gradiente vertical extra na parte inferior para o texto           */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 50%)",
        }}
      />

      {/* ── Conteúdo — canto inferior esquerdo ─────────────────────────────
          zIndex 10 garante que fique acima dos overlays                   */}
      <div
        className="container-site"
        style={{
          position: "relative",
          zIndex: 10,
          paddingBottom: "4rem",  /* espaço entre o conteúdo e a borda inferior */
          maxWidth: "700px",      /* limita a largura do bloco de texto         */
        }}
      >

        {/* Logo SVG do LaFiM */}
        <img
          src="/logo/lafim_branco.svg"
          alt="LaFiM — Laboratório de Física dos Materiais"
          style={{
            height: "auto",
            width: "min(1800px, 180vw)", /* responsivo — não ultrapassa 55% da tela */
            marginBottom: "1.5rem",
          }}
        />

        {/* Linha horizontal separadora — estilo Unearthly Materials */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(245, 245, 240, 0.3)", /* branco sutil      */
            marginBottom: "1.25rem",
          }}
        />

        {/* Subtítulo abaixo da linha */}
        {subtitle && (
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              fontWeight: 300,
              letterSpacing: "0.02em",
              maxWidth: "480px",
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Indicadores do carrossel — só aparecem com 2+ imagens */}
        {images.length > 1 && (
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)} /* clique manual no indicador */
                style={{
                  width: index === currentIndex ? "1.5rem" : "0.4rem",
                  height: "0.4rem",
                  borderRadius: "999px",
                  backgroundColor: index === currentIndex
                    ? "var(--color-primary)"   /* ativo — âmbar               */
                    : "rgba(245,245,240,0.3)", /* inativo — branco sutil      */
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease", /* anima a mudança de largura  */
                }}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
