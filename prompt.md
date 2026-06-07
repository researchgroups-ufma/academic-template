# Tarefa: Corrigir animação da logo no Hero na primeira carga

## Problema
No arquivo `components/layout/Hero.tsx`, na primeira visita ao site a logo SVG aparece sem animação porque o Framer Motion ainda não hidratou o componente. Nas visitas seguintes funciona corretamente pois o JavaScript já está em cache.

## Correção

### 1. Verificar imports
Certifique-se que `useState` e `useEffect` estão no import do React no topo do arquivo. Se não estiverem, adicione-os.

### 2. Adicionar hook useMounted
Logo após as declarações de estado existentes (após `const [opacity, setOpacity]`), adicione:

```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);
```

### 3. Atualizar o motion.img da logo
Localize o `motion.img` da logo SVG que tem este atributo:

```tsx
initial={{ opacity: 0, y: 20 }}
```

Substitua por:

```tsx
initial={mounted ? { opacity: 0, y: 20 } : false}
```

## Regras
- Não altere mais nada no arquivo
- Não mude estilos, lógica do carrossel ou qualquer outro comportamento
- Após a modificação, rode `npm run build` e confirme que passa sem erros