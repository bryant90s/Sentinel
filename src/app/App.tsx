import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AttackMap } from './components/AttackMap';
import { Features } from './components/Features';
import { Security } from './components/Security';
import { CaseStudy } from './components/CaseStudy';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { API } from './components/API';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AttackMap />
        <Features />
        <Security />
        <CaseStudy />
        <Pricing />
        <FAQ />
        <API />
      </main>
      <Footer />
    </div>
  );
}
