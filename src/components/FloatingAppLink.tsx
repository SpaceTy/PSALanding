import { useEffect, useState } from 'preact/hooks';

export function FloatingAppLink() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://app.heldenberlin.de"
      class={`floating-app-link${visible ? ' visible' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Unterrichtsmaterialien
    </a>
  );
}
