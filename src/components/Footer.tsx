export function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <h2 class="footer-title">
          <span class="section-badge">🟥</span> WISSENSCHAFTLICHE GRUNDLAGE
        </h2>
        <h3 class="sources-title">Quellen</h3>
        <ol class="sources-list">
          <li class="source-item">
            <strong>ADAC Stiftung:</strong> Schätzung vermeidbarer Todesfälle durch unterlassene Reanimation<br />
            <a href="https://stiftung.adac.de" target="_blank" rel="noopener noreferrer">
              https://stiftung.adac.de
            </a>
          </li>
          <li class="source-item">
            <strong>Humbs et al. / deutsche OHCA-Daten im internationalen Vergleich</strong><br />
            Überlebensrate Deutschland 10,4 % vs. Norwegen 14 %<br />
            Laienreanimation 51 % vs. 85 %
          </li>
          <li class="source-item">
            <strong>Humbs et al. (2025):</strong> Stand der Implementierung des Reanimationsunterrichts in Deutschland 10 Jahre nach Empfehlung der KMK<br />
            Springer Link<br />
            <a href="https://link.springer.com/article/10.1007/s10049-025-01671-9" target="_blank" rel="noopener noreferrer">
              https://link.springer.com/article/10.1007/s10049-025-01671-9
            </a>
          </li>
          <li class="source-item">
            <strong>Humbs et al. (2024):</strong> Difficulties and challenges in the implementation of resuscitation training in Germany based on surveys from the Heart Saver Project in Brandenburg<br />
            <a href="https://www.researchgate.net/publication/392434759" target="_blank" rel="noopener noreferrer">
              https://www.researchgate.net/publication/392434759
            </a>
          </li>
        </ol>
        <div class="footer-links">
          <a href="/wissenschaftliche-grundlage" class="btn btn-outline">
            📚 Alle wissenschaftlichen Quellen
          </a>
        </div>
        <div class="footer-bottom">
          <p>© {new Date().getFullYear()} Projekt Staying Alive. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
