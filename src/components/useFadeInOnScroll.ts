import { useEffect, useRef } from 'react';

export function useFadeInOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          node.classList.add('visible');
        } else {
          node.classList.remove('visible');
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
} 