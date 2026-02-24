export function Statistics() {
  return (
    <section class="statistics">
      <div class="container">
        <h2 class="section-title">
          <span class="section-badge">🟥</span> WARUM DAS WICHTIG IST
        </h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">10.000</div>
            <div class="stat-label">
              vermeidbare Todesfälle pro Jahr durch fehlende Laienreanimation<sup>1</sup>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-number">51 %</div>
            <div class="stat-label">
              Laienreanimationsquote in Deutschland
            </div>
          </div>
          <div class="stat-card highlight">
            <div class="stat-number">85 %</div>
            <div class="stat-label">
              Laienreanimationsquote in Norwegen<sup>2</sup>
            </div>
          </div>
        </div>
        <p class="stats-conclusion">
          <strong>Der Unterschied: systematischer Unterricht in Schulen.</strong>
        </p>
      </div>
    </section>
  );
}
