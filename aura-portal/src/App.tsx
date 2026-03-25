import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BrandSection } from './components/BrandSection';
import { AboutConcept } from './components/AboutConcept';
import { KitchenSection } from './components/KitchenSection';
import { ProgressTracker } from './components/ProgressTracker';
import { FinancialKPIs } from './components/FinancialKPIs';
import { DownloadsSection } from './components/DownloadsSection';

function App() {
  return (
    <div className="min-h-screen bg-aura-background font-sans text-aura-on-background">
      <Navigation />

      <HeroSection />
      <BrandSection />
      <AboutConcept />
      <KitchenSection />
      <ProgressTracker />
      <FinancialKPIs />
      <DownloadsSection />

      {/* Footer */}
      <footer className="bg-aura-dark-surface py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Logos */}
            <div className="flex flex-col space-y-6">
              <img src="/assets/logos/moods_color.svg" alt="Moods Steakhouse" className="w-28 object-contain brightness-0 invert opacity-60" />
              <img
                src="/assets/logos/Logomarca%20aura%20cream.svg"
                alt="AURA Hotel"
                className="w-16 opacity-30"
              />
            </div>

            {/* Info */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">Projeto</p>
              <p className="font-display italic text-white/60 text-lg font-light leading-relaxed">
                Moods Steakhouse
              </p>
              <p className="font-sans text-white/35 text-sm mt-2">Rooftop · 5º Andar · AURA Hotel</p>
              <p className="font-sans text-white/25 text-sm">Georgetown, Guyana</p>
            </div>

            {/* Contato / Informações */}
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">Dossiê Executivo</p>
              <p className="font-sans text-white/40 text-sm leading-relaxed">
                Cliente: Sr. Sérgio Matos<br />
                Contrato: #00825<br />
                Ano: 2026
              </p>
              <div className="mt-5 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                <p className="font-sans text-[10px] tracking-wider uppercase text-white/30">Projeto em andamento</p>
              </div>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-start justify-between gap-4">
            <div className="space-y-1">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/20">
                © 2026 Moods Steakhouse · AURA Hotel · Georgetown, Guyana
              </p>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/15">
                Dossiê Executivo de Implementação · Uso Exclusivo e Confidencial
              </p>
            </div>
            <div className="text-right space-y-0.5">
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-white/20">
                Site &amp; Consultoria
              </p>
              <p className="font-sans text-[11px] text-white/30">Jamim Moura Santos</p>
              <p className="font-sans text-[10px] text-white/20">+55 95 98126-6367</p>
              <a
                href="mailto:jamim.moura@gmail.com"
                className="font-sans text-[10px] text-white/20 hover:text-white/40 transition-colors duration-200 block"
              >
                jamim.moura@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
