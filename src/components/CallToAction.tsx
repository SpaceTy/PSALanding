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
        <div class="cta-contact">
          <h3 class="contact-title">Kontakt</h3>
          <p class="contact-info">
            <strong>Projektinitiator:</strong> Henri Bauckhage<br />
            <strong>E-Mail:</strong>{' '}
            <a href="mailto:hebauckhage@gmail.com">hebauckhage@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
