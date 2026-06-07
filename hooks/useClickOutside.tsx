/**
 * useClickOutside — Hook para detectar clique fora de um elemento
 *
 * Usado pelo MorphingDialog para fechar ao clicar fora do conteúdo.
 *
 * @param ref     — referência ao elemento a monitorar
 * @param handler — função chamada quando clique fora é detectado
 */

import { RefObject, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref || !ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, handler]);
}

export default useClickOutside;
