import { Router, Route } from 'preact-router';
import { Hero } from './components/Hero.tsx';
import { Statistics } from './components/Statistics.tsx';
import { Situation } from './components/Situation.tsx';
import { Solution } from './components/Solution.tsx';
import { Goal } from './components/Goal.tsx';
import { Partners } from './components/Partners.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { Footer } from './components/Footer.tsx';
import { ScientificFoundation } from './components/ScientificFoundation.tsx';

function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Situation />
      <Solution />
      <Goal />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}

export function App() {
  return (
    <main class="app">
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/wissenschaftliche-grundlage" component={ScientificFoundation} />
      </Router>
    </main>
  );
}
