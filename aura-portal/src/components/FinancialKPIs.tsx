import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const tickets = [
  { label: "Almoço", value: "$58", note: "Ticket médio / pax" },
  { label: "Jantar Dia Útil", value: "$98", note: "Ticket médio / pax" },
  { label: "Jantar Fim de Semana", value: "$120", note: "Ticket médio / pax", highlight: true },
  { label: "Ponderado Global", value: "$92", note: "Média projetada" },
];

const cmvLevels = [
  { label: "Meta Ideal", pct: 28, color: "bg-emerald-500", textColor: "text-emerald-700" },
  { label: "Moderado", pct: 33, color: "bg-amber-400", textColor: "text-amber-700" },
  { label: "Limiar", pct: 40, color: "bg-red-400", textColor: "text-red-700" },
];

const scenarios = [
  { label: "Conservador", short: "Ano 1", sublabel: "Conservador", pct: 62, rev: "$259.9k", note: "~65 covers/dia · 40–65% ocup.", color: "bg-aura-surface-dim" },
  { label: "Moderado",    short: "Ano 2", sublabel: "Moderado",    pct: 84, rev: "$354k",   note: "~90 covers/dia · 62–82% ocup.", color: "bg-aura-on-surface/40" },
  { label: "Otimista",   short: "Ano 3+", sublabel: "Otimista",   pct: 100, rev: "$420.5k", note: "~110 covers/dia · 78–92% ocup.", color: "bg-aura-primary-container" },
];

export function FinancialKPIs() {
  return (
    <section id="financeiro" className="bg-aura-surface-container-low border-t border-aura-outline/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center space-x-5 mb-5">
            <span className="section-label">Estudo Financeiro v2</span>
            <div className="section-divider" />
          </motion.div>
          <motion.h2 custom={1} variants={fadeUp} className="text-4xl md:text-6xl font-display font-light text-aura-on-background leading-tight">
            Viabilidade &<br /><em className="italic">Métricas Chave</em>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="font-sans text-aura-on-surface-variant text-base mt-5 max-w-xl leading-relaxed">
            Projeções baseadas na operação do Rooftop em Georgetown, com análise de ticket médio, CMV e cenários de receita mensal estimada.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Ticket Médio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 bg-aura-surface border border-aura-outline/10 p-8"
          >
            <p className="section-label mb-6">Ticket Médio (USD)</p>
            <div className="space-y-0">
              {tickets.map((t, i) => (
                <div
                  key={i}
                  className={`flex items-end justify-between py-5 border-b border-aura-outline/10 last:border-0 ${t.highlight ? 'relative' : ''}`}
                >
                  {t.highlight && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-aura-primary-container" />}
                  <div className={t.highlight ? 'pl-4' : ''}>
                    <p className="font-sans text-sm text-aura-on-surface-variant">{t.label}</p>
                    <p className="font-sans text-[10px] text-aura-outline/50 tracking-wider mt-0.5">{t.note}</p>
                  </div>
                  <p className={`font-display text-2xl font-light ${t.highlight ? 'text-aura-primary-container' : 'text-aura-on-background'}`}>
                    {t.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CMV + Cenários */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* CMV */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-aura-surface border border-aura-outline/10 p-8"
            >
              <p className="section-label mb-8">Controle de CMV</p>
              <div className="space-y-5">
                {cmvLevels.map((level, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-28 shrink-0">
                      <p className={`text-xs font-sans font-semibold uppercase tracking-wider ${level.textColor}`}>{level.label}</p>
                    </div>
                    <div className="flex-1 h-1.5 bg-aura-surface-container-high">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full ${level.color}`}
                      />
                    </div>
                    <p className={`text-lg font-display font-light w-12 text-right ${level.textColor}`}>{level.pct}%</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cenários de Receita */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-aura-surface border border-aura-outline/10 p-8 flex-1"
            >
              <p className="section-label mb-8">Cenários de Receita Mensal</p>
              <div className="flex items-end gap-4 h-32">
                {scenarios.map((s, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <p className={`font-sans text-xs font-semibold mb-2 ${i === 2 ? 'text-aura-primary-container' : 'text-aura-on-surface-variant'}`}>{s.rev}</p>
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-full ${s.color} min-h-[4px]`}
                    />
                    <p className={`font-sans text-[11px] uppercase tracking-wider mt-3 font-semibold ${i === 2 ? 'text-aura-primary-container' : 'text-aura-on-surface-variant'}`}>
                      {s.short}
                    </p>
                    <p className="font-sans text-[9px] text-aura-outline/50 tracking-wide mt-0.5">{s.sublabel}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-1.5">
                {scenarios.map((s, i) => (
                  <p key={i} className="font-sans text-[10px] text-aura-outline/45 leading-relaxed">
                    <span className={`font-semibold ${i === 2 ? 'text-aura-primary-container/70' : 'text-aura-on-surface-variant'}`}>{s.short} · {s.sublabel}</span>
                    {' '}— {s.note}
                  </p>
                ))}
              </div>
              <p className="font-sans text-[10px] text-aura-outline/40 tracking-wider mt-4 uppercase">Receita estimada / mês · moeda USD · 120 lugares</p>
            </motion.div>

          </div>
        </div>

        {/* Nota de rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-sans text-xs text-aura-outline/50 mt-10 leading-relaxed max-w-2xl"
        >
          * Projeções baseadas no Estudo Financeiro v2 — benchmark de mercado Georgetown 2026. Operação de 120 lugares em dois turnos (almoço 11h30–15h · jantar 17h30–23h), 6 dias/semana. Cenário Conservador refere-se ao Ano 1 de implantação. Consulte o documento completo para premissas detalhadas.
        </motion.p>

      </div>
    </section>
  );
}
