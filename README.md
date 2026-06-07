# LaFiM — Site Institucional

Site institucional do **Laboratório de Física dos Materiais (LaFiM)** da UFMA.

## Stack

| Camada      | Tecnologia                          |
|-------------|-------------------------------------|
| Framework   | Next.js 15 (App Router, TypeScript) |
| Estilo      | Tailwind CSS v4                     |
| CMS         | Decap CMS                           |
| Hospedagem  | Cloudflare Pages                    |
| Repositório | GitHub (researchgroups-ufma/lafim)  |

## Desenvolvimento local

```bash
npm install
npm run dev
```

O site roda em `http://localhost:3000`.

## Estrutura principal

| Pasta            | Descrição                                      |
|------------------|------------------------------------------------|
| `app/`           | Páginas do Next.js (App Router)                |
| `components/`    | Componentes reutilizáveis                      |
| `content/`       | Arquivos Markdown editados pelo CMS            |
| `lib/`           | Utilitários: config.ts e mdx.ts                |
| `public/admin/`  | Painel editorial Decap CMS                     |

## Para editar dados ou identidade visual do grupo

Edite `lib/config.ts` — é o único arquivo que precisa ser alterado
para adaptar o template a um novo grupo de pesquisa.

## Para editar o conteúdo (membros, publicações, notícias)

Acesse `/admin` no site em produção e autentique com sua conta GitHub.

## Deploy

Qualquer push na branch `main` dispara um rebuild automático no Cloudflare Pages.
