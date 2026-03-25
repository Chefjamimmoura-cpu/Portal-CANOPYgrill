import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Utensils, Flame, Coffee, Grid } from 'lucide-react';

type Mode = 'A' | 'B';

const flows = {
  A: {
    title: "MODO A: À La Carte Tradicional",
    description: "Serviço altamente focado na personalização e apresentação empratada. Ideal para tíquetes médios maiores com harmonização guiada por sommelier.",
    steps: [
      { id: "01", title: "Acolhimento VIP", desc: "Recepção pela Hostess e encaminhamento direto à mesa reservada ou ao Bar AURA para drinks autorais.", icon: HeartHandshake },
      { id: "02", title: "Consultoria de Cardápio", desc: "Sommelier e maitre orientam sobre a fusão parrilha e pratos contemporâneos.", icon: FileText },
      { id: "03", title: "Serviço à La Carte", desc: "Pratos finalizados na cozinha (Steakhouse) entregues com precisão de tempo (Sequence of Service).", icon: Utensils },
      { id: "04", title: "Ritual de Sobremesa", desc: "Apresentação em carrinho ou carrinho de flambados no salão.", icon: Flame }
    ]
  },
  B: {
    title: "MODO B: Experiência Rodízio",
    description: "Modelo de alto volume com giro rápido. A Parrilha atua no modelo contínuo com passadores VIP levando cortes exclusivos (Espeto/Tábua) às mesas.",
    steps: [
      { id: "01", title: "Acolhimento VIP", desc: "Recepção e explicação clara do sistema de Rodízio Premium AURA.", icon: HeartHandshake },
      { id: "02", title: "Buffet / Entradas Frias", desc: "Serviço de buffet assistido de saladas, charcutaria e entradas gourmet no centro do salão.", icon: Grid },
      { id: "03", title: "Serviço de Brasa Contínuo", desc: "Passadores VIP oferecem sequenciamento de carnes premium direto ao prato do cliente.", icon: Flame },
      { id: "04", title: "Bar & Sobremesas", desc: "Venda agregada de bebidas, carta de vinhos forte e sobremesas solicitadas à parte.", icon: Coffee }
    ]
  }
};

// SVG Icons workaround since lucide-react HeartHandshake/FileText might not be imported if I just used names earlier.
// Actually I'll just import from lucide-react since I have it.
import { HeartHandshake, FileText } from 'lucide-react';

export function HybridSelector() {
  const [activeMode, setActiveMode] = useState<Mode>('A');

  return (
    <section className="bg-aura-surface py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-aura-primary text-sm font-semibold tracking-[0.15em] uppercase">Modelo Operacional Híbrido</span>
            <div className="w-12 h-px bg-aura-outline/30"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-aura-on-background max-w-2xl mx-auto leading-tight">
            Adaptação Dinâmica do Formato de Serviço
          </h2>
        </div>

        {/* Custom Toggle Switch */}
        <div className="flex justify-center mb-16 relative z-20">
          <div className="bg-aura-surface-dim/30 p-1 flex">
            <button
              onClick={() => setActiveMode('A')}
              className={`px-8 py-4 font-display tracking-widest uppercase text-sm font-semibold transition-all duration-300 relative ${
                activeMode === 'A' ? 'text-aura-on-primary-container' : 'text-aura-on-surface-variant hover:text-aura-on-surface'
              }`}
            >
              {activeMode === 'A' && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-aura-primary-container"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">MODO A (À La Carte)</span>
            </button>
            <button
              onClick={() => setActiveMode('B')}
              className={`px-8 py-4 font-display tracking-widest uppercase text-sm font-semibold transition-all duration-300 relative ${
                activeMode === 'B' ? 'text-aura-on-primary-container' : 'text-aura-on-surface-variant hover:text-aura-on-surface'
              }`}
            >
              {activeMode === 'B' && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-aura-primary-container"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">MODO B (Rodízio)</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="dossier-card border border-aura-surface-dim/30 p-8 md:p-12"
            >
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-display mb-4 text-aura-primary">{flows[activeMode].title}</h3>
                <p className="font-sans text-aura-on-surface-variant text-lg">{flows[activeMode].description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {flows[activeMode].steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative mt-8 lg:mt-0">
                      <div className="flex items-center mb-6">
                        <span className="text-4xl font-display text-aura-outline/20 font-bold mr-4">{step.id}</span>
                        <div className="w-10 h-10 rounded-none bg-aura-surface-dim/30 flex items-center justify-center text-aura-primary">
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h4 className="font-display text-lg mb-2 text-aura-on-background">{step.title}</h4>
                      <p className="text-sm font-sans text-aura-on-surface-variant leading-relaxed">
                        {step.desc}
                      </p>
                      
                      {idx < 3 && (
                        <div className="hidden lg:block absolute top-[28px] -right-4 text-aura-outline/30 translate-x-1/2">
                          <ArrowRight size={24} strokeWidth={1} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
