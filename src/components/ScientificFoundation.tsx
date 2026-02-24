export function ScientificFoundation() {
  const studies = [
    {
      number: 1,
      title: 'Langfristige Auswirkungen eines zweitägigen Erste-Hilfe-Workshops an Grundschulen in Brandenburg – Zwei-Jahres-Nachuntersuchung',
      url: 'https://firstaidjournal.org/article/id/3097/',
      description: 'Die Studie untersucht, wie nachhaltig ein zweitägiger Erste-Hilfe-Workshop bei Grundschulkindern wirkt. Auch zwei Jahre nach der Schulung zeigen die Kinder deutlich bessere Kenntnisse in Wiederbelebung und Notfallmaßnahmen.'
    },
    {
      number: 2,
      title: 'Schwierigkeiten und Herausforderungen bei der Umsetzung von Wiederbelebungstrainings in Deutschland – Ergebnisse aus dem Heart-Saver-Projekt Brandenburg',
      url: 'https://firstaidjournal.org/article/id/2703/',
      description: 'Diese Untersuchung analysiert praktische Hindernisse bei der Einführung von Reanimationsunterricht in Schulen und zeigt, welche strukturellen und organisatorischen Herausforderungen bestehen.'
    },
    {
      number: 3,
      title: 'Evaluation eines 90-minütigen schulbasierten Reanimationskurses mit 340 Schüler*innen – Eine multizentrische Interventionsstudie',
      url: 'https://firstaidjournal.org/article/id/2310/',
      description: 'Die Studie zeigt, dass bereits kurze, strukturierte Reanimationstrainings die Handlungssicherheit und das Wissen von Jugendlichen signifikant verbessern können.'
    },
    {
      number: 4,
      title: 'Evaluation eines zweitägigen Erste-Hilfe-Kurses einschließlich Basisreanimation mit 1.268 Grundschulkindern im Alter von 6–13 Jahren – Eine multizentrische Interventionsstudie',
      url: 'https://firstaidjournal.org/article/id/2381/',
      description: 'Untersucht wird die Wirksamkeit eines umfangreicheren Erste-Hilfe-Programms für Grundschulkinder. Die Ergebnisse zeigen deutliche Verbesserungen im Bereich Erste Hilfe und Reanimationskompetenz.'
    },
    {
      number: 5,
      title: '[Wissenschaftlicher Fachartikel zur Notfall- und Rettungsmedizin] (Springer)',
      url: 'https://link.springer.com/article/10.1007/s10049-025-01671-9',
      description: 'Peer-reviewter Fachartikel aus der Notfallmedizin, der aktuelle Forschungsergebnisse zur Akutversorgung und zu strukturellen Maßnahmen im Bereich Wiederbelebung darstellt.'
    }
  ];

  return (
    <section class="scientific-foundation">
      <div class="container">
        <div class="scientific-header">
          <a href="/" class="btn btn-outline back-button">
            ← Zurück zur Startseite
          </a>
          <h1 class="scientific-title">
            <span class="section-badge">🟥</span> Wissenschaftliche Grundlage
          </h1>
          <p class="scientific-intro">
            Unser Pilotprojekt baut auf den Erkenntnissen zahlreicher bestehender Initiativen und Studien auf – 
            um bewährte Ansätze zu übernehmen, Fehler zu vermeiden und das Konzept gezielt weiterzuentwickeln.
          </p>
        </div>

        <div class="studies-list">
          {studies.map((study) => (
            <article class="study-card" key={study.number}>
              <div class="study-number">{study.number}</div>
              <div class="study-content">
                <h2 class="study-title">{study.title}</h2>
                <a 
                  href={study.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="study-link"
                >
                  {study.url}
                </a>
                <p class="study-description">{study.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
