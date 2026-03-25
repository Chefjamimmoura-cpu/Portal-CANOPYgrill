import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Utensils, Flame, Coffee, Grid, HeartHandshake, FileText } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

type Mode = 'A' | 'B';

const flows = {
  A: {
    title: "MODO A · À La Carte Tradicional",
    description: "Serviço altamente focado na personalização e apresentação empratada. Ideal para tíquetes médios maiores com harmonização guiada por sommelier.",
    steps: [
      { id: "01", title: "Acolhimento VIP", desc: "Recepção pela Hostess e encaminhamento à mesa reservada ou ao Bar AURA para drinks autorais.", icon: HeartHandshake },
      { id: "02", title: "Consultoria de Cardápio", desc: "Sommelier e maître orientam sobre a fusão parrilha e pratos contemporâneos.", icon: FileText },
      { id: "03", title: "Serviço à La Carte", desc: "Pratos finalizados na cozinha e entregues com precisão de tempo (Sequence of Service).", icon: Utensils },
      { id: "04", title: "Ritual de Sobremesa", desc: "Apresentação em carrinho ou carrinho de flambados no salão.", icon: Flame },
    ],
  },
  B: {
    title: "MODO B · Experiência Rodízio Híbrido",
    description: "Modelo de alto volume com identidade única: cortes contínuos pela parrilha, estação de especiais junto à brasa e guarnições em cumbucas de barro diretamente à mesa.",
    steps: [
      { id: "01", title: "Acolhimento VIP", desc: "Recepção pela hostess e apresentação do sistema de Rodízio Premium Moods.", icon: HeartHandshake },
      { id: "02", title: "Estação de Especiais", desc: "Próxima à parrilha: frios, charcutaria, queijos selecionados, caldos e sobremesas — itens nobres em área integrada à brasa.", icon: Grid },
      { id: "03", title: "Brasa Contínua", desc: "Passadores VIP sequenciam cortes premium direto ao prato do cliente, no ritmo da grelha.", icon: Flame },
      { id: "04", title: "Guarnições à Mesa", desc: "Acompanhamentos no estilo brasileiro servidos em cumbucas de barro diretamente à mesa — hospitalidade autêntica com acabamento gourmet.", icon: Coffee },
    ],
  },
};

export function AboutConcept() {
  const [activeMode, setActiveMode] = useState<Mode>('A');

  return (
    <section id="projeto" className="bg-aura-surface">

      {/* ── Visão Geral ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Composição de imagens assimétrica */}
          <div className="relative w-full aspect-square hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 w-[72%] h-[72%] overflow-hidden"
            >
              <img
                src="/assets/images/Gemini_Generated_Image_40thro40thro40th.jpg"
                alt="Mesa com vista noturna"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="absolute bottom-0 right-0 w-[60%] h-[60%] overflow-hidden shadow-2xl z-10"
            >
              <img
                src="/assets/images/Gemini_Generated_Image_wdb9q3wdb9q3wdb9.jpg"
                alt="Pratos requintados AURA"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute bottom-4 left-0 w-[30%] h-[30%] bg-aura-primary-container/20 -z-10" />
          </div>

          {/* Texto do conceito */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col justify-center"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center space-x-5 mb-6">
              <span className="section-label">O Projeto</span>
              <div className="section-divider" />
            </motion.div>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-5xl font-display font-light text-aura-on-background mb-8 leading-tight"
            >
              Moods —<br />
              <em className="italic">Steakhouse 5 estrelas</em>
            </motion.h2>

            <motion.div custom={2} variants={fadeUp} className="space-y-5 text-aura-on-surface-variant font-sans text-base leading-relaxed">
              <p>
                O Moods é uma steakhouse de alto padrão no rooftop do AURA Hotel, em Georgetown, Guiana. Serviços VIP com uma proposta gastronômica única: a cultura da parrilha argentina encontra o churrasco brasileiro, conectados por uma fusão clássica de pratos contemporâneos.
              </p>

              <div className="pl-5 border-l border-aura-primary-container/40 space-y-4 mt-2">
                <div>
                  <h3 className="text-aura-on-background font-sans font-semibold text-xs uppercase tracking-wider mb-1">Parrilha · Churrasco · Fusão</h3>
                  <p className="text-sm">A cultura da parrilha argentina e o churrasco brasileiro se encontram e se conectam por uma fusão clássica de pratos contemporâneos — identidade gastronômica exclusiva do Moods.</p>
                </div>
                <div>
                  <h3 className="text-aura-on-background font-sans font-semibold text-xs uppercase tracking-wider mb-1">Fusão & Atendimento VIP</h3>
                  <p className="text-sm">Gastronomia que agrega culturas em área inteiramente dedicada. Profissionais com treinamento impecável na condução do salão.</p>
                </div>
              </div>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="mt-10 flex items-center space-x-6">
              <div className="text-center">
                <p className="font-display text-3xl font-light text-aura-primary-container">5º</p>
                <p className="text-[10px] uppercase tracking-widest text-aura-on-surface-variant font-sans mt-1">Andar</p>
              </div>
              <div className="w-px h-10 bg-aura-outline/20" />
              <div className="text-center">
                <p className="font-display text-3xl font-light text-aura-primary-container">5★</p>
                <p className="text-[10px] uppercase tracking-widest text-aura-on-surface-variant font-sans mt-1">Categoria</p>
              </div>
              <div className="w-px h-10 bg-aura-outline/20" />
              <div className="text-center">
                <p className="font-display text-3xl font-light text-aura-primary-container">GY</p>
                <p className="text-[10px] uppercase tracking-widest text-aura-on-surface-variant font-sans mt-1">Guiana</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Modelo Híbrido ── */}
      <div className="border-t border-aura-outline/10 bg-aura-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.div custom={0} variants={fadeUp} className="flex items-center justify-center space-x-5 mb-6">
              <div className="section-divider max-w-[60px]" />
              <span className="section-label">Modelo Operacional Híbrido</span>
              <div className="section-divider max-w-[60px]" />
            </motion.div>
            <motion.h2 custom={1} variants={fadeUp} className="text-3xl md:text-5xl font-display font-light text-aura-on-background max-w-2xl mx-auto leading-tight">
              Adaptação Dinâmica<br /><em className="italic">do Formato de Serviço</em>
            </motion.h2>
          </motion.div>

          {/* Toggle */}
          <div className="flex justify-center mb-14">
            <div className="bg-aura-surface-container-high p-1 flex">
              {(['A', 'B'] as Mode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`px-8 py-3.5 font-sans text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300 relative ${
                    activeMode === mode
                      ? 'bg-aura-primary-container text-aura-on-primary-container'
                      : 'text-aura-on-surface-variant hover:text-aura-on-surface'
                  }`}
                >
                  {mode === 'A' ? 'Modo A · À La Carte' : 'Modo B · Rodízio'}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="bg-aura-surface border border-aura-outline/10 p-8 md:p-12"
            >
              <div className="max-w-2xl mx-auto text-center mb-14">
                <h3 className="text-xl md:text-2xl font-display font-light mb-3 text-aura-primary-container">
                  {flows[activeMode].title}
                </h3>
                <p className="font-sans text-aura-on-surface-variant text-base leading-relaxed">
                  {flows[activeMode].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {flows[activeMode].steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative">
                      <div className="flex items-center mb-5">
                        <span className="text-5xl font-display text-aura-outline/15 font-light mr-3 leading-none">{step.id}</span>
                        <div className="w-9 h-9 bg-aura-surface-container flex items-center justify-center text-aura-primary-container">
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                      </div>
                      <h4 className="font-display text-lg font-light text-aura-on-background mb-2">{step.title}</h4>
                      <p className="text-sm font-sans text-aura-on-surface-variant leading-relaxed">{step.desc}</p>

                      {idx < 3 && (
                        <div className="hidden lg:block absolute top-7 -right-4 text-aura-outline/25 translate-x-1/2">
                          <ArrowRight size={20} strokeWidth={1} />
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
