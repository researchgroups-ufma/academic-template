# Tarefa: Adicionar animações InView em três componentes

## Contexto
Projeto Next.js 15 + Tailwind CSS v4 + Framer Motion + Motion Primitives.
O componente `InView` está em `components/motion-primitives/in-view.tsx`.
O `motion` vem de `framer-motion`.

## REGRAS IMPORTANTES
- Faça APENAS as modificações descritas abaixo
- NÃO altere nenhuma outra parte dos arquivos
- NÃO mude estilos, lógica ou estrutura existente
- Adicione apenas os imports necessários e envolva os elementos indicados

---

## Modificação 1 — `components/sections/ResearchSection.tsx`

### Adicionar imports no topo do arquivo (após os imports existentes):
```tsx
import { InView } from "@/components/motion-primitives/in-view";
```

### Localizar este trecho exato:
```tsx
{researchLines.map((line) => (
  <div
    key={line.slug}
    style={{
      borderLeft: "3px solid var(--color-primary)",
```

### Substituir por:
```tsx
{researchLines.map((line, index) => (
  <InView
    key={line.slug}
    variants={{
      hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    }}
    viewOptions={{ margin: "0px 0px -60px 0px" }}
    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
  >
    <div
      style={{
        borderLeft: "3px solid var(--color-primary)",
```

### Localizar o fechamento do map (o `</div>` que fecha o card e o `)}`):
```tsx
          </div>
        ))}
```

### Substituir por:
```tsx
          </div>
        </InView>
      ))}
```

---

## Modificação 2 — `components/sections/PageCards.tsx`

### Adicionar imports no topo do arquivo (após os imports existentes):
```tsx
import { InView } from "@/components/motion-primitives/in-view";
import { motion } from "framer-motion";
```

### Localizar este trecho exato:
```tsx
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {cards.map((card) => (
            <Link
```

### Substituir por:
```tsx
        <InView
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.href}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
            <Link
```

### Localizar o fechamento do map e do grid:
```tsx
          ))}
        </div>
```

### Substituir por:
```tsx
            </motion.div>
          ))}
        </div>
        </InView>
```

### Remover o `key={card.href}` do Link (pois agora está no motion.div):
Localizar:
```tsx
              key={card.href}
              href={card.href}
```
Substituir por:
```tsx
              href={card.href}
```

---

## Modificação 3 — `components/sections/CoordinatorSection.tsx`

### Adicionar imports no topo do arquivo (após os imports existentes):
```tsx
import { InView } from "@/components/motion-primitives/in-view";
```

### Localizar este trecho exato:
```tsx
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 200px",
            gap: "3rem",
            alignItems: "start",
          }}
        >
```

### Substituir por:
```tsx
        <InView
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0 },
          }}
          viewOptions={{ margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 200px",
            gap: "3rem",
            alignItems: "start",
          }}
        >
```

### Localizar o fechamento do div do grid (antes do fechamento da section):
```tsx
        </div>
      </section>
```

### Substituir por:
```tsx
        </div>
        </InView>
      </section>
```

---

## Verificação final
Após as modificações, execute:
```
npm run build
```
O build deve passar sem erros de tipo. Warnings de `<img>` podem ser ignorados.