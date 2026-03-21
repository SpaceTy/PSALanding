import pepiniereLogo from '../assets/Pépinière Stiftung.png';
import bcsLogo from '../assets/Berlin Cosmopolitan School.png';

export function Partners() {
  return (
    <section class="partners">
      <div class="container">
        <h2 class="section-title">
          <span class="section-badge">🟥</span> PARTNER & UNTERSTÜTZER
        </h2>
        <div class="partners-grid">
          <div class="partner-card">
            <img src={pepiniereLogo} alt="Pépinière Stiftung Logo" class="partner-logo" />
            <h3 class="partner-name">Pépinière Stiftung</h3>
            <p class="partner-description">
              Die Pépinière Stiftung engagiert sich bundesweit gezielt für Projekte im Bereich der Ersten Hilfe und hat bereits in Brandenburg vergleichbare Initiativen umgesetzt. Mit ihrer Erfahrung und Infrastruktur unterstützt sie Programme, die Reanimationskompetenz nachhaltig stärken und lebensrettende Fähigkeiten fördern.
            </p>
          </div>
          <div class="partner-card">
            <h3 class="partner-name">Weitere Partner</h3>
            <p class="partner-description">
              Weitere Partner und Unterstützer werden aktuell eingebunden, um das Projekt berlinweit tragfähig aufzubauen und langfristig zu skalieren.
            </p>
          </div>
          <div class="partner-card">
            <img src={bcsLogo} alt="Berlin Cosmopolitan School Logo" class="partner-logo" />
            <h3 class="partner-name">Berlin Cosmopolitan School</h3>
            <p class="partner-description">
              Die Berlin Cosmopolitan School ist eine internationale Schule im Herzen Berlins, die für innovative Bildungsprojekte steht und gesellschaftliches Engagement aktiv fördert. Als Initiatorin des Projekts verankert sie Reanimationsunterricht strukturell im Schulalltag und setzt damit ein starkes Zeichen für Verantwortung und Lebensrettung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
