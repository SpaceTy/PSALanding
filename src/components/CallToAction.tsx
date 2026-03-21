export function CallToAction() {
  return (
    <section class="cta" id="mitmachen">
      <div class="container">
        <h2 class="cta-title">
          <span class="section-badge">🟥</span> Berlin kann Leben retten.
        </h2>
        <p class="cta-intro">
          Schulen können direkt über die App einsteigen und ihre Teilnahme starten.
        </p>
        <div class="cta-buttons">
          <a
            href="https://app.heldenberlin.de"
            class="btn btn-primary btn-large btn-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unterrichtsmaterialien hier bestellen
          </a>
        </div>
        <div class="about-section">
          <h3 class="contact-title">Kontaktpersonen</h3>
          <div class="about-grid">
            <div class="about-card">
              <img
                src="/henri.jpeg"
                alt="Henri Bauckhage"
                class="about-photo"
              />
              <p class="about-name">Henri Bauckhage</p>
              <p class="about-role">Projektinitiator</p>
              <p class="about-email">
                <a href="mailto:hebauckhage@gmail.com">hebauckhage@gmail.com</a>
              </p>
            </div>
            <div class="about-card">
              <img
                src="/Ivan.jpg"
                alt="Ivan Shcherban"
                class="about-photo"
              />
              <p class="about-name">Ivan Shcherban</p>
              <p class="about-role">Technische Umsetzung</p>
              <p class="about-email">
                <a href="mailto:peselis20100@gmail.com">peselis20100@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
