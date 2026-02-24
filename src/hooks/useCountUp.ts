import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

interface UseCountUpReturn {
  value: string;
  rawValue: number;
  ref: React.RefObject<HTMLDivElement>;
  suffix: string;
}

export function useCountUp({
  start = 0,
  end,
  duration = 500,
  decimals = 0,
  suffix = '',
}: UseCountUpOptions): UseCountUpReturn {
  const [value, setValue] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const difference = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = start + difference * easeOutQuart;
      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  const formattedValue = decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString('de-DE');

  return { value: formattedValue, rawValue: value, ref, suffix };
}
