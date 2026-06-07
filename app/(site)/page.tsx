/**
 * page.tsx — Homepage do site LaFiM
 *
 * É a primeira página que o visitante vê ao acessar o site (rota "/").
 *
 * Estrutura atual (Fase 1 — esqueleto):
 *   - Seção Hero com nome do laboratório e descrição
 *
 * O que será adicionado na Fase 2:
 *   - Hero completo com imagem de fundo lida de content/about/index.md
 *   - Seção de Linhas de Pesquisa em destaque
 *   - Grid de Membros principais
 *   - Últimas Notícias
 *
 * Este é um Server Component — não tem "use client".
 * Pode ler arquivos do servidor diretamente via getCollection() e getSingleFile().
 */

import { siteConfig } from "@/lib/config";

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ────────────────────────────────────────────────────────────
          Ocupa a altura total da tela (100svh) e centraliza o conteúdo.
          svh (small viewport height) funciona melhor que vh em mobile,
          pois desconsidera a barra de endereço do navegador.

          TODO (Fase 2): substituir pelo Hero completo com imagem,
          animações Framer Motion e dados lidos do content/about/index.md  */}
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
        }}
        className="section-padding"
      >
        <div className="container-site">

          {/* Indicador institucional acima do título */}
          <p
            style={{
              color: "var(--color-primary)",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            {siteConfig.university}
          </p>

          {/* Título principal — nome completo do laboratório */}
          <h1
            className="section-title"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              maxWidth: "18ch",
              marginBottom: 0,
            }}
          >
            {siteConfig.name}
          </h1>

          {/* Traço dourado de acento abaixo do título */}
          <span className="title-accent" />

          {/* Descrição curta do laboratório */}
          <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
            {siteConfig.description}
          </p>

        </div>
      </section>

    </div>
  );
}
