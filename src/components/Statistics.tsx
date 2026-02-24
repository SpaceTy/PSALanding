import { useCountUp } from '../hooks/useCountUp';

function AnimatedNumber({ end, suffix = '', decimals = 0, duration = 500 }: { end: number; suffix?: string; decimals?: number; duration?: number }) {
  const { value, ref } = useCountUp({ end, suffix, decimals, duration });
  return <span ref={ref}>{value}{suffix}</span>;
}

function ComparisonBarChart() {
  const { value: germanyValue, rawValue: germanyRaw, ref: ref1 } = useCountUp({ end: 51, duration: 500 });
  const { value: norwayValue, rawValue: norwayRaw, ref: ref2 } = useCountUp({ end: 85, duration: 500 });
  
  return (
    <div class="stat-card comparison-card" ref={ref1}>
      <div class="comparison-title">Laienreanimationsquote</div>
      <div class="comparison-bars">
        <div class="comparison-row">
          <div class="comparison-label">Deutschland</div>
          <div class="comparison-bar-wrapper">
            <div class="comparison-bar" style={`width: ${germanyRaw}%`}>
              <span class="comparison-value">{germanyValue} %</span>
            </div>
          </div>
        </div>
        <div class="comparison-row" ref={ref2}>
          <div class="comparison-label">Norwegen²</div>
          <div class="comparison-bar-wrapper">
            <div class="comparison-bar highlight" style={`width: ${norwayRaw}%`}>
              <span class="comparison-value">{norwayValue} %</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Statistics() {
  return (
    <section class="statistics">
      <div class="container">
        <h2 class="section-title">
          <span class="section-badge">🟥</span> WARUM DAS WICHTIG IST
        </h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">
              <AnimatedNumber end={10000} duration={1000} />
            </div>
            <div class="stat-label">
              vermeidbare Todesfälle pro Jahr durch fehlende Laienreanimation<sup>1</sup>
            </div>
          </div>
          <ComparisonBarChart />
        </div>
        <p class="stats-conclusion">
          <strong>Der Unterschied: systematischer Unterricht in Schulen.</strong>
        </p>
      </div>
    </section>
  );
}
