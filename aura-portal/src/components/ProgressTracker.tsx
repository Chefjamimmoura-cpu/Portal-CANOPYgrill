import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Circle, FileText, Briefcase, ChefHat, LayoutGrid, DollarSign, Utensils, Wine, MapPin, Package } from 'lucide-react';

type Status = 'done' | 'in-progress' | 'pending';

type Download = { label: string; url: string; type: 'PDF' | 'DOC' };

type Deliverable = {
  icon: React.ElementType;
  title: string;
  description: string;
  status: Status;
  tag: string;
  bonus?: boolean;
  future?: boolean;
  downloads?: Download[];
};

const deliverables: Deliverable[] = [
  // ── Entregues ──────────────────────────────────────────────────────────────
  {
    icon: FileText,
    title: "Estudo Financeiro v2",
    description: "Projeções completas: KPIs, DRE detalhada, Ticket Médio por turno, CMV e cenários de ocupação (conservador / moderado / otimista). Benchmark de mercado Georgetown 2026 incluso.",
    status: "done",
    tag: "Financeiro",
  },
  {
    icon: Briefcase,
    title: "Plano Mestre Operacional v2",
    description: "Documento central da consultoria: conceito híbrido A/B, cardápio à la carte completo, dimensionamento de equipe, Sequence of Service, SOP/POP, cronograma de manutenção preventiva, logística vertical térreo → Rooftop e premissas BKS.",
    status: "done",
    tag: "Operacional",
  },
  {
    icon: ChefHat,
    title: "Apontamento dos Equipamentos para Monoblocos",
    description: "Especificação dos equipamentos pesados de linha — fogão industrial, fritadeiras de alto rendimento, cozedor de massas e demais itens fixos para confecção dos monoblocos BKS Netherlands.",
    status: "done",
    tag: "Técnico",
  },
  {
    icon: Wine,
    title: "Mixologia & Utensílios de Bar",
    description: "Especificação técnica de maquinário, ferramentas de barman, medidores, shakers e utensílios entregues como parte do Plano Mestre Operacional v2.",
    status: "done",
    tag: "Bar",
  },
  {
    icon: MapPin,
    title: "Logística Vertical · Abastecimento",
    description: "Protocolo de fluxo e sinalização técnica entre térreo e Rooftop entregue no Plano Mestre — abastecimento, resíduos, rouparia e separação do fluxo de hóspedes.",
    status: "done",
    tag: "Operacional",
  },
  // ── Em Andamento ───────────────────────────────────────────────────────────
  {
    icon: DollarSign,
    title: "Engenharia de Fluxo de Cocção",
    description: "POPs de produção para os processos críticos dos Modos A e B. Fluxogramas de mise en place, sequência de cocção e tempo de prato em revisão final.",
    status: "in-progress",
    tag: "Operacional",
  },
  {
    icon: ChefHat,
    title: "Planta de Máquinas · Infraestrutura BKS",
    description: "Layout técnico com indicação exata dos pontos de elétrica, hidráulica e gás para cada equipamento dos monoblocos. ⚑ Urgente: material a ser entregue ao Engenheiro Richard para andamento imediato das obras — atraso impacta diretamente o cronograma de execução.",
    status: "in-progress",
    tag: "Técnico",
  },
  {
    icon: Utensils,
    title: "Projeto de Serviço · Mise en Scène",
    description: "Ritualística de serviço para os Modos A e B já documentada no Plano Mestre. Em desenvolvimento: detalhamento específico por tipo — carrinhos de sobremesas e flambados (Modo A), ritmo de passagem da brasa e mise en scène da Estação de Especiais (Modo B).",
    status: "in-progress",
    tag: "Operacional",
  },
  // ── Pendentes ──────────────────────────────────────────────────────────────
  {
    icon: Package,
    title: "Curadoria de Utensílios de Produção",
    description: "Lista completa de panelas, facas, GNs, chinois, tabuleiros e comandários elaborada. Pendente: apontamento de fornecedores homologados e acompanhamento das compras.",
    status: "pending",
    tag: "Técnico",
  },
  {
    icon: LayoutGrid,
    title: "Tabletop & Identidade de Sala",
    description: "Enxoval de mesa: louçaria, talheres, taças, copos e sousplats em consonância com o design de interiores. ⚑ Pré-requisito: depende da entrega do projeto de interiores do salão pela BKS — sem essa referência não é possível garantir coerência estética.",
    status: "pending",
    tag: "Design",
  },
  // ── Bônus Estratégicos ─────────────────────────────────────────────────────
  {
    icon: FileText,
    title: "Proposta de Cardápio",
    description: "Proposta gastronômica completa com engenharia de cardápio (CMV por item, posicionamento de preço) entregue no Plano Mestre Operacional v2. Calibração final de preços ao mercado de Georgetown e versão bilíngue de salão a definir.",
    status: "done",
    tag: "Gastronômico",
    bonus: true,
  },
  {
    icon: FileText,
    title: "Manual de Serviço do Garçom — Moods",
    description: "Ritualística completa de serviço de salão para o Moods — postura, sequência de atendimento, mise en place, linguagem e padrão VIP. Disponível em Português e Inglês.",
    status: "done",
    tag: "Operacional",
    bonus: true,
  },
  {
    icon: FileText,
    title: "Fichas Técnicas & Treinamento de Equipe",
    description: "Projeto futuro de interesse: fichas técnicas de produção e programa estruturado de treinamento de equipe. Será objeto de proposta posterior, após abertura e consolidação da operação.",
    status: "pending",
    tag: "Operacional",
    future: true,
  },
];

const statusConfig: Record<Status, { icon: React.ElementType; label: string; color: string; bg: string; border: string }> = {
  done: {
    icon: CheckCircle2,
    label: "Entregue",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  'in-progress': {
    icon: Clock,
    label: "Em Andamento",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  pending: {
    icon: Circle,
    label: "Pendente",
    color: "text-aura-outline",
    bg: "bg-aura-surface-container",
    border: "border-aura-outline/20",
  },
};

export function ProgressTracker() {
  const done = deliverables.filter((d) => d.status === 'done').length;
  const inProgress = deliverables.filter((d) => d.status === 'in-progress').length;
  const total = deliverables.length;
  const overallPct = Math.round((done / total) * 100);

  return (
    <section id="entregaveis" className="bg-aura-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="flex items-center space-x-5 mb-5">
              <span className="section-label">Entregáveis</span>
              <div className="section-divider" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-aura-on-background leading-tight">
              Estágio<br /><em className="italic">do Projeto</em>
            </h2>
          </div>

          <div className="flex items-end space-x-8">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-display font-light text-aura-primary-container">{overallPct}%</p>
              <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-aura-on-surface-variant mt-1">Concluído</p>
            </div>
            <div className="flex flex-col space-y-2 mb-1">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-emerald-500" />
                <span className="text-xs font-sans text-aura-on-surface-variant">{done} entregues</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-amber-400" />
                <span className="text-xs font-sans text-aura-on-surface-variant">{inProgress} em andamento</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-aura-outline/30" />
                <span className="text-xs font-sans text-aura-on-surface-variant">{total - done - inProgress} pendentes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-aura-surface-container-high mb-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${overallPct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-aura-primary-container"
          />
        </div>
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-aura-outline/50 mb-16">{done} de {total} entregáveis concluídos</p>

        {/* Grid de entregáveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {deliverables.map((d, idx) => {
            const cfg = statusConfig[d.status];
            const StatusIcon = cfg.icon;
            const DeliverableIcon = d.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`group relative bg-aura-surface border p-6 flex items-start space-x-5 transition-all duration-300 ${cfg.border} hover:shadow-sm`}
              >
                {/* Ícone do tipo */}
                <div className={`shrink-0 w-10 h-10 flex items-center justify-center ${cfg.bg}`}>
                  <DeliverableIcon size={18} strokeWidth={1.5} className={cfg.color} />
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-display text-lg font-light text-aura-on-background leading-snug">{d.title}</h3>
                    <span className={`shrink-0 text-[10px] uppercase tracking-wider font-sans font-semibold px-2 py-0.5 ${cfg.bg} ${cfg.color}`}>
                      {d.tag}
                    </span>
                  </div>
                  <p className="text-sm font-sans text-aura-on-surface-variant leading-relaxed">{d.description}</p>

                  {d.downloads && d.downloads.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {d.downloads.map((dl, i) => (
                        <a
                          key={i}
                          href={dl.url}
                          download
                          className={`flex items-center gap-1.5 px-3 py-1.5 font-sans text-[10px] uppercase tracking-wider font-semibold border transition-colors duration-200 ${
                            dl.type === 'PDF'
                              ? 'border-red-200 text-red-700 bg-red-50 hover:bg-red-100'
                              : 'border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100'
                          }`}
                        >
                          ↓ {dl.label}
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-aura-outline/10">
                    <div className="flex items-center space-x-2">
                      <StatusIcon size={13} strokeWidth={1.5} className={cfg.color} />
                      <span className={`text-[10px] uppercase tracking-[0.18em] font-sans font-semibold ${cfg.color}`}>{cfg.label}</span>
                    </div>
                    {d.bonus && (
                      <span className="font-sans text-[10px] tracking-[0.12em] uppercase font-semibold px-2 py-0.5 border border-aura-primary-container/50 text-aura-primary-container/80 bg-aura-primary-container/8">
                        ✦ Bônus Estratégico
                      </span>
                    )}
                    {d.future && (
                      <span className="font-sans text-[10px] tracking-[0.12em] uppercase font-semibold px-2 py-0.5 border border-aura-outline/30 text-aura-outline/60">
                        → Projeto Futuro
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Visitas Presenciais ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-8 pt-4 border-t border-aura-outline/10">
            <span className="section-label">Visitas Presenciais</span>
            <div className="section-divider" />
            <span className="font-sans text-[10px] text-aura-outline/40 whitespace-nowrap">3 previstas · Contrato #00825</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                title: "Levantamento Técnico",
                desc: "Reconhecimento da obra, análise de fluxo vertical e levantamento técnico do espaço para elaboração do Plano Mestre e Planta de Máquinas.",
                status: "done" as Status,
              },
              {
                n: "02",
                title: "Entrega Técnica & Equipamentos",
                desc: "Acompanhamento presencial do recebimento e instalação dos equipamentos BKS — validação dos pontos de elétrica, hidráulica e gás.",
                status: "pending" as Status,
              },
              {
                n: "03",
                title: "Start-up · Supervisão Final",
                desc: "Supervisão das instalações operacionais, ajustes de fluxo, treinamento final de equipe e abertura supervisionada (soft opening).",
                status: "pending" as Status,
              },
            ].map((v, idx) => {
              const cfg = statusConfig[v.status];
              const StatusIcon = cfg.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative bg-aura-surface border p-6 ${cfg.border}`}
                >
                  <span className="font-display text-5xl font-light text-aura-outline/10 absolute top-4 right-5 leading-none select-none">{v.n}</span>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-aura-outline/40 mb-3">Visita {v.n}</p>
                  <h4 className="font-display text-lg font-light text-aura-on-background mb-2 leading-snug">{v.title}</h4>
                  <p className="font-sans text-xs text-aura-on-surface-variant leading-relaxed mb-5">{v.desc}</p>
                  <div className={`flex items-center space-x-2 pt-4 border-t border-aura-outline/10`}>
                    <StatusIcon size={13} strokeWidth={1.5} className={cfg.color} />
                    <span className={`text-[10px] uppercase tracking-[0.18em] font-sans font-semibold ${cfg.color}`}>{cfg.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
