import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

type Equipment = {
  id: string;
  name: string;
  category: string;
  desc: string;
  specs: string[];
  voltage: string;
  power: string;
  link: string;
}

const equipments: Equipment[] = [
  { id: "EQ01", name: "Forno Combinado Rational iCombi Pro", category: "Cocção", desc: "Forno inteligente para cocção precisa de proteínas com controle de umidade.", specs: ["6 GN 1/1", "Lavagem Autônoma", "Sonda Térmica"], voltage: "220V Trifásico", power: "10.8 kW", link: "#rational" },
  { id: "EQ02", name: "Thermomix TM7", category: "Preparo Frio/Quente", desc: "Processador térmico de altíssima precisão para bases, molhos e emulsões.", specs: ["Copo 2.2L", "Balança Integrada", "Controle de Temperatura exato"], voltage: "220V", power: "1.5 kW", link: "#thermomix" },
  { id: "EQ03", name: "Seladora a Vácuo", category: "Conservação", desc: "Máquina de câmara para vácuo com atmosfera modificada para conservação e preparos Sous-Vide.", specs: ["Barra de 40cm", "Bomba Busch 20m3/h"], voltage: "220V", power: "900W", link: "#vacuo" },
  { id: "EQ04", name: "Robô de Cortes Analógico", category: "Processamento", desc: "Cortador contínuo de vegetais para alto volume.", specs: ["Discos Intercambiáveis", "Corte Constante"], voltage: "220V", power: "550W", link: "#robocorte" },
  { id: "EQ05", name: "Cutter Mixer", category: "Processamento", desc: "Processador de bancada para farsas, massas e pastas finas.", specs: ["Cuba 3.7L", "Facas lisas/serrilhadas"], voltage: "220V", power: "750W", link: "#cutter" },
  { id: "EQ06", name: "Mixer de Imersão Profissional", category: "Preparo", desc: "Mixer de braço longo para emulsões direto na panela/cuba.", specs: ["Haste 40cm", "Velocidade Regulável"], voltage: "220V", power: "400W", link: "#mixer" },
  { id: "EQ07", name: "Liquidificador Baixa Rotação", category: "Preparo", desc: "Ideal para molhos densos, maioneses e cremes pesados.", specs: ["Copo 4 Litros", "Inox Inquebrável"], voltage: "220V", power: "800W", link: "#liqbaixa" },
  { id: "EQ08", name: "Gratinador (Salamandra)", category: "Finalização", desc: "Aquecimento superior por resistência infravermelha para gratinar.", specs: ["Ajuste de Altura", "Aço Inox"], voltage: "220V", power: "3.0 kW", link: "#gratinador" },
  { id: "EQ09", name: "Microondas Comercial 40L", category: "Apoio", desc: "Microondas sem prato giratório, para regeneração rápida.", specs: ["Duplo Magnetron", "Fundo Cerâmico"], voltage: "220V", power: "1.8 kW", link: "#microondas" },
  { id: "EQ10", name: "Batedeira Planetária Hobart 18L", category: "Panificação/Preparo", desc: "Batedeira robusta com engrenagem total, ideal para massas pesadas e confeitaria.", specs: ["Superfície Epóxi", "3 Velocidades Mecânicas"], voltage: "220V", power: "1.1 kW", link: "#hobart" },
  { id: "EQ11", name: "Laminador Automático de Frios", category: "Preparo Frio", desc: "Fatiador de embutidos e carpaccios com precisão milimétrica.", specs: ["Lâmina 300mm", "Afiador Integrado"], voltage: "220V", power: "300W", link: "#laminador" },
  { id: "EQ12", name: "Liquidificador Alta Rotação 2L", category: "Bar/Preparo Frio", desc: "Para caldas finas, sucos e drinques emulsionados.", specs: ["Copo Tritan", "30.000 RPM"], voltage: "220V", power: "1.2 kW", link: "#liqalta" },
  { id: "EQ13", name: "Moedor de Carne TC-22", category: "Açougue", desc: "Boca 22 para montagem dos blends exclusivos de hambúrguer e linguiças da steakhouse.", specs: ["Alta Produção", "Inversão de Giro"], voltage: "220V", power: "1.5 kW", link: "#moedor" },
  { id: "EQ14", name: "Fogão Portátil de Indução", category: "Apoio Quente", desc: "Cocção limpa, sem irradiação de calor no ambiente, para pequenas reduções.", specs: ["Controle 1 a 10", "Painel Touch"], voltage: "220V", power: "2.5 kW", link: "#inducao" },
  { id: "EQ15", name: "Termocirculador SOUS-VIDE", category: "Cocção", desc: "Cocção em banho-maria com controle de décimos de grau para Mignon e cortes nobres.", specs: ["Agitador de Água", "Até 40L"], voltage: "220V", power: "1.5 kW", link: "#sousvide" },
  { id: "EQ16", name: "Fritadeiras Tanque Independente (2x)", category: "Cocção", desc: "Fritadeiras de alta recuperação térmica para área BKS.", specs: ["Zona Fria", "15 Litros cada"], voltage: "380V Trifásico", power: "15.0 kW", link: "#fritadeiras" },
  { id: "EQ17", name: "Cozedor de Massas Modulável", category: "Cocção", desc: "Equipamento com cestos de porcionamento para acompanhamentos rápidos.", specs: ["Tanque Estampado", "Enchimento Automático"], voltage: "380V", power: "8.0 kW", link: "#massas" }
];

export function EquipmentGrid() {
  const [selectedEq, setSelectedEq] = useState<Equipment | null>(null);

  return (
    <section className="bg-aura-surface-container-low py-24 px-6 md:px-12 lg:px-24 border-t border-aura-surface-dim/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-aura-primary text-sm font-semibold tracking-[0.15em] uppercase">The Technical Vault</span>
            <div className="w-12 h-px bg-aura-outline/30"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display text-aura-on-background mb-6">
            Engenharia de Equipamentos
          </h2>
          <p className="font-sans text-aura-on-surface-variant max-w-2xl text-lg">
            Mapeamento dos 17 equipamentos críticos solicitados para a adequação do Rooftop. Clique em qualquer item para acessar especificações e links de supply (EUA/NL/BR).
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {equipments.map((eq, idx) => (
            <motion.div 
              key={eq.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedEq(eq)}
              className="dossier-card border border-aura-outline/20 p-6 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-display text-aura-outline/60 tracking-widest uppercase">{eq.id}</span>
              </div>
              <h3 className="font-display text-lg text-aura-on-background mb-2 group-hover:text-aura-primary-container transition-colors">
                {eq.name}
              </h3>
              <span className="inline-block text-xs uppercase tracking-widest text-aura-primary font-semibold mb-4 bg-aura-primary/10 px-2 py-1">
                {eq.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedEq && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEq(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={`card-${selectedEq.id}`}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="relative bg-aura-surface w-full max-w-2xl p-8 md:p-12 shadow-2xl z-10 border border-aura-outline/20"
              >
                <button 
                  onClick={() => setSelectedEq(null)}
                  className="absolute top-6 right-6 text-aura-outline hover:text-aura-on-background transition-colors"
                >
                  <X size={24} />
                </button>
                
                <div className="flex items-center space-x-3 mb-8">
                  <span className="text-xs font-display text-aura-outline/60 tracking-widest uppercase">{selectedEq.id}</span>
                  <div className="w-8 h-px bg-aura-outline/30"></div>
                  <span className="text-xs uppercase tracking-widest text-aura-primary font-semibold">
                    {selectedEq.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-display text-aura-on-background mb-6 pr-8">
                  {selectedEq.name}
                </h3>
                
                <p className="font-sans text-aura-on-surface-variant text-lg leading-relaxed mb-8">
                  {selectedEq.desc}
                </p>
                
                <div className="bg-aura-surface-dim/20 p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-l-2 border-aura-primary-container">
                  <div>
                    <div className="flex items-center text-aura-on-background mb-2">
                      <Zap size={16} className="text-aura-primary mr-2" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Potência/Tensão</span>
                    </div>
                    <p className="text-aura-on-surface-variant text-sm">
                      {selectedEq.power} • {selectedEq.voltage}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center text-aura-on-background mb-2">
                      <ShieldCheck size={16} className="text-aura-primary mr-2" />
                      <span className="text-sm font-semibold uppercase tracking-wider">Highlights</span>
                    </div>
                    <ul className="text-aura-on-surface-variant text-sm list-disc list-inside">
                      {selectedEq.specs.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                </div>
                
                <a 
                  href={selectedEq.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 btn-secondary"
                >
                  <span className="text-xs uppercase tracking-widest font-semibold">Acessar Fornecedor</span>
                  <ExternalLink size={16} />
                </a>
                
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
