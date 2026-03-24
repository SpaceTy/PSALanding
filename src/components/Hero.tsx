export function Hero() {
  return (
    <section class="hero" id="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <img src="/favicon.jpg" alt="Projekt Staying Alive" class="hero-logo" role="img" />
        </h1>
        <h2 class="hero-subtitle">Neue Helden für Berlin</h2>
        <p class="hero-launch-date">Launch März 2026</p>
        <p class="hero-description">
          Unser Ziel: Wir bringen Reanimationsunterricht systematisch an Berliner Schulen.
        </p>
        <p class="hero-detail">
          Lehrkräfte werden befähigt, eigenständig Wiederbelebung zu unterrichten – nachhaltig, skalierbar, berlinweit.
        </p>
        <div class="hero-buttons">
          <a
            href="https://app.heldenberlin.de"
            class="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔴 Unterrichtsmaterialien hier bestellen
          </a>
          <a href="/spende" class="btn btn-secondary">
            🔴 Projekt unterstützen
          </a>
        </div>
      </div>
    </section>
  );
}
