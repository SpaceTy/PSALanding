import { Hero } from './components/Hero.tsx';
import { Statistics } from './components/Statistics.tsx';
import { Situation } from './components/Situation.tsx';
import { Solution } from './components/Solution.tsx';
import { Goal } from './components/Goal.tsx';
import { Partners } from './components/Partners.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { Footer } from './components/Footer.tsx';

export function App() {
  return (
    <main class="app">
      <Hero />
      <Statistics />
      <Situation />
      <Solution />
      <Goal />
      <Partners />
      <CallToAction />
      <Footer />
    </main>
  );
}
