import { motion } from 'framer-motion';
import { FileText, Download, Briefcase, FileSignature, BookOpen, UtensilsCrossed } from 'lucide-react';

const downloads = [
  {
    title: "Estudo Financeiro v2",
    description: "Projeções completas do projeto Híbrido: KPIs, Ticket Médio, DRE detalhada e análise de CMV por cenário.",
    formats: [
      { type: "PDF", path: "/assets/docs/AURA_Estudo_Financeiro_v2.pdf", size: "1.2 MB" },
      { type: "DOCX", path: "/assets/docs/AURA_Estudo_Financeiro_v2.docx", size: "840 KB" },
    ],
    icon: FileText,
    tag: "Financeiro",
  },
  {
    title: "Plano Mestre Operacional v2",
    description: "Visão geral e fluxos de serviço (Modo A/B), dimensionamento de equipe, premissas BKS e POPs de cocção.",
    formats: [
      { type: "PDF", path: "/assets/docs/AURA_Plano_Mestre_Operacional_PT_v2.pdf", size: "900 KB" },
      { type: "DOCX", path: "/assets/docs/AURA_Plano_Mestre_Operacional_PT_v2.docx", size: "650 KB" },
    ],
    icon: Briefcase,
    tag: "Operacional",
  },
  {
    title: "Contrato de Consultoria #00825",
    description: "Escopo completo do projeto, honorários, cronograma e responsabilidades assumidas pelas partes.",
    formats: [
      { type: "DOCX", path: "/assets/docs/CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CONSULTORIA TÉCNICA #00825.docx", size: "40 KB" },
    ],
    icon: FileSignature,
    tag: "Jurídico",
  },
  {
    title: "Manual de Serviço do Garçom — Moods",
    description: "Ritualística completa de serviço de salão: postura, sequência de atendimento, mise en place, linguagem e padrão VIP. Disponível em Português e Inglês.",
    formats: [
      { type: "PDF", path: "/assets/docs/Manual_Garcon_Canopy_Grill.pdf", size: "—" },
      { type: "DOCX", path: "/assets/docs/Manual_Garcon_Canopy_Grill.docx", size: "—" },
      { type: "PDF (EN)", path: "/assets/docs/Service_Manual_Canopy_Grill_EN.pdf", size: "—" },
      { type: "DOCX (EN)", path: "/assets/docs/Service_Manual_Canopy_Grill_EN.docx", size: "—" },
    ],
    icon: UtensilsCrossed,
    tag: "Operacional",
  },
  {
    title: "Logomarca Moods",
    description: "Identidade visual da marca. Wordmark SVG, PNG colorido, selo circular e apresentação oficial com paleta de cores.",
    formats: [
      { type: "SVG (Colorido)", path: "/assets/logos/moods_color.svg", size: "—" },
      { type: "SVG (Alt)", path: "/assets/logos/moods_color2.svg", size: "—" },
      { type: "PNG Wordmark", path: "/assets/logos/moods_color.png", size: "—" },
      { type: "PNG Selo", path: "/assets/logos/moods_pb.png", size: "—" },
      { type: "Apresentação PDF", path: "/assets/logos/apresentacao_logomarca_moods.pdf", size: "—" },
      { type: "Paleta COLOR", path: "/assets/logos/moods_COLOR.pdf", size: "—" },
    ],
    icon: BookOpen,
    tag: "Branding",
  },
];

const tagColors: Record<string, string> = {
  Financeiro: "text-amber-700 bg-amber-50",
  Operacional: "text-stone-600 bg-stone-100",
  Jurídico: "text-slate-700 bg-slate-100",
  Branding: "text-violet-700 bg-violet-50",
};

export function DownloadsSection() {
  return (
    <section id="documentos" className="bg-aura-surface border-t border-aura-outline/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-5 mb-5">
            <span className="section-label">Documentos</span>
            <div className="section-divider" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-light text-aura-on-background leading-tight">
            Base Documental<br /><em className="italic">Oficial</em>
          </h2>
          <p className="font-sans text-aura-on-surface-variant text-base mt-5 max-w-xl leading-relaxed">
            Versões oficiais de todo o escopo de viabilidade, operação e projeto. Disponíveis para download em Desktop e Mobile, Sr. Sérgio.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {downloads.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-aura-surface border border-aura-outline/10 p-8 flex flex-col hover:border-aura-outline/25 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon className="text-aura-primary-container" size={26} strokeWidth={1.5} />
                  <span className={`text-[10px] uppercase tracking-wider font-sans font-semibold px-2 py-0.5 ${tagColors[doc.tag] ?? 'text-aura-primary bg-aura-primary/10'}`}>
                    {doc.tag}
                  </span>
                </div>

                <h3 className="font-display text-xl font-light text-aura-on-background mb-3 leading-snug">{doc.title}</h3>
                <p className="text-sm font-sans text-aura-on-surface-variant mb-8 leading-relaxed flex-1">
                  {doc.description}
                </p>

                <div className="space-y-2 pt-5 border-t border-aura-outline/10">
                  {doc.formats.map((format, i) => (
                    <a
                      key={i}
                      href={format.path}
                      download
                      className="group flex items-center justify-between p-3.5 bg-aura-surface-container-low hover:bg-aura-primary-container/10 border border-transparent hover:border-aura-primary-container/30 transition-all duration-250"
                    >
                      <div className="flex items-center space-x-3">
                        <Download size={13} className="text-aura-outline group-hover:text-aura-primary-container transition-colors" strokeWidth={1.5} />
                        <span className="text-xs font-sans font-semibold tracking-[0.15em] uppercase text-aura-on-background group-hover:text-aura-primary transition-colors">
                          {format.type}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-aura-outline/60 group-hover:text-aura-on-surface-variant transition-colors">
                        {format.size}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-sans text-xs text-aura-outline/50 mt-10 leading-relaxed"
        >
          Todos os documentos são de uso exclusivo e confidencial. Sr. Sérgio Matos · Projeto AURA Hotel Rooftop Steakhouse · Georgetown, Guyana · 2026.
        </motion.p>

      </div>
    </section>
  );
}
