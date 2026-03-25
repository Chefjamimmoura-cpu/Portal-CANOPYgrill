import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export function BrandSection() {
  return (
    <section id="conceito" className="bg-aura-surface">

      {/* ── Conceito principal: Moods ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-28 md:py-36">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>

          <motion.div custom={0} variants={fadeUp} className="flex items-center space-x-5 mb-10">
            <span className="section-label">Conceito da Marca</span>
            <div className="section-divider" />
          </motion.div>

          {/* Hero text + logo lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">

            {/* Texto */}
            <div>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-aura-on-background leading-[1.05] mb-8"
              >
                Atmosfera &<br />
                <em className="italic">Estado de Espírito</em>
              </motion.h2>

              <motion.div custom={2} variants={fadeUp} className="space-y-5 text-aura-on-surface-variant font-sans text-base leading-relaxed">
                <p>
                  O nome <em className="italic text-aura-on-background">Moods Steakhouse</em> sugere uma experiência gastronômica focada na atmosfera e no estado de espírito do cliente, indo além da simples refeição.
                </p>
                <p>
                  Para representar essa steakhouse, a identidade visual e sensorial mistura o elemento estético da <em className="italic text-aura-on-background">chama</em> com a sofisticação da fonte que escreve "moods" — moderna, minimalista e inconfundível.
                </p>
                <p>
                  Uma marca <em className="italic text-aura-on-background">moderna, acolhedora e masculina</em>, focada no luxo e na qualidade dos materiais — onde cada detalhe comunica excelência antes mesmo do primeiro prato ser servido.
                </p>
              </motion.div>

              <motion.div custom={3} variants={fadeUp} className="mt-10 flex items-center space-x-8">
                <div>
                  <p className="font-display text-3xl font-light text-aura-primary-container">5º</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-aura-on-surface-variant mt-1">Andar · Rooftop</p>
                </div>
                <div className="w-px h-10 bg-aura-outline/20" />
                <div>
                  <p className="font-display text-3xl font-light text-aura-primary-container">5★</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-aura-on-surface-variant mt-1">Steakhouse VIP</p>
                </div>
                <div className="w-px h-10 bg-aura-outline/20" />
                <div>
                  <p className="font-display text-3xl font-light text-aura-primary-container">GY</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-aura-on-surface-variant mt-1">Georgetown</p>
                </div>
              </motion.div>
            </div>

            {/* Logo showcase */}
            <motion.div custom={2} variants={fadeUp} className="flex flex-col space-y-4">
              {/* Imagem principal */}
              <div className="relative overflow-hidden">
                <img
                  src="/assets/images/canopy_grill_entrada.jpg"
                  alt="Moods — identidade aplicada na entrada do restaurante"
                  className="w-full h-80 lg:h-[420px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-white/50">Aplicação em Ambiente Real</p>
                  <p className="font-display text-sm font-light text-white/90 mt-0.5">Identidade · Entrada do Restaurante</p>
                </div>
              </div>
              {/* Versões da logomarca */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#231F20] flex items-center justify-center py-10 px-8">
                  <img src="/assets/logos/moods_color.svg" alt="Moods — versão escura" className="w-36 object-contain brightness-0 invert opacity-90" />
                </div>
                <div className="bg-white flex items-center justify-center py-10 px-8 border border-aura-outline/10">
                  <img src="/assets/logos/moods_color.svg" alt="Moods — versão clara" className="w-36 object-contain" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contexto AURA */}
          <motion.div
            custom={4}
            variants={fadeUp}
            className="border-t border-aura-outline/10 pt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            <div className="md:col-span-1 flex flex-col items-start space-y-4">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-aura-outline/60">Localização</p>
              <img
                src="/assets/logos/Logomarca%20aura%20preto.svg"
                alt="AURA Hotel"
                className="w-20 opacity-40"
              />
              <p className="font-sans text-aura-on-surface-variant text-sm leading-relaxed">
                O Moods está sediado no 5º andar do <em className="italic">AURA Hotel Boutique</em>, em Georgetown, Guiana. O hotel já foi conceituado e está em operação; este dossiê trata exclusivamente do desenvolvimento da steakhouse.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-3 gap-4">
              {[
                { label: "Chama & Brasa", desc: "O ícone 'M' estilizado remete à silhueta de uma chama — essência da identidade visual Moods." },
                { label: "Serviço VIP", desc: "Atendimento conduzido por maître, sommelier e hostess com ritualística própria." },
                { label: "Vista 360°", desc: "Rooftop com panorama exclusivo da capital de Georgetown, Guiana." },
              ].map((item, i) => (
                <div key={i} className="bg-aura-surface-container-low p-6 border border-aura-outline/10">
                  <div className="gold-line mb-4" />
                  <h4 className="font-display text-base font-light text-aura-on-background mb-2">{item.label}</h4>
                  <p className="font-sans text-xs text-aura-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── Aplicações da Marca ── */}
      <div className="border-t border-aura-outline/10 bg-aura-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>

            <motion.div custom={0} variants={fadeUp} className="flex items-center space-x-5 mb-12">
              <span className="section-label">Aplicações da Marca</span>
              <div className="section-divider" />
            </motion.div>

            {/* Moods — identidade visual */}
            <motion.div custom={1} variants={fadeUp} className="mb-10">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-aura-outline/60 mb-6">Moods — Identidade Visual</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Wordmark — fundo escuro */}
                <div className="bg-[#231F20] flex items-center justify-center py-12 px-6 aspect-video">
                  <img src="/assets/logos/moods_color.svg" alt="Moods — fundo escuro" className="w-full max-w-[140px] object-contain brightness-0 invert opacity-90" />
                </div>
                {/* Wordmark — fundo rosé */}
                <div className="bg-[#DEBBA8] flex items-center justify-center py-12 px-6 aspect-video">
                  <img src="/assets/logos/moods_color.svg" alt="Moods — fundo rosé" className="w-full max-w-[140px] object-contain" style={{ filter: 'brightness(0)' }} />
                </div>
                {/* Wordmark — fundo branco */}
                <div className="bg-white flex items-center justify-center py-12 px-6 aspect-video border border-aura-outline/10">
                  <img src="/assets/logos/moods_color.svg" alt="Moods — fundo branco" className="w-full max-w-[140px] object-contain" />
                </div>
                {/* Selo circular P&B */}
                <div className="bg-[#FAF5F2] flex items-center justify-center py-12 px-6 aspect-video border border-aura-outline/10">
                  <img src="/assets/logos/moods_pb.png" alt="Moods — selo circular" className="w-full max-w-[120px] object-contain" />
                </div>
              </div>
            </motion.div>

            {/* AURA — contexto */}
            <motion.div custom={2} variants={fadeUp}>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-aura-outline/50 mb-6">AURA Hotel — Logomarca (contexto)</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-aura-dark-surface flex items-center justify-center py-10 px-6 aspect-video">
                  <img src="/assets/logos/Logomarca%20aura%20cream.svg" alt="AURA cream" className="w-full max-w-[110px] object-contain opacity-70" />
                </div>
                <div className="bg-aura-surface-container flex items-center justify-center py-10 px-6 aspect-video border border-aura-outline/10">
                  <img src="/assets/logos/Logomarca%20aura%20preto.svg" alt="AURA preto" className="w-full max-w-[110px] object-contain opacity-70" />
                </div>
                <div className="bg-aura-dark flex items-center justify-center py-10 px-6 aspect-video">
                  <img src="/assets/logos/Aura%20logomarca%20cream.png" alt="AURA PNG" className="w-full max-w-[110px] object-contain opacity-70" />
                </div>
                <div className="bg-white flex items-center justify-center py-10 px-6 aspect-video border border-aura-outline/10">
                  <img src="/assets/logos/Aura%20logomarca%20preto.png" alt="AURA preto PNG" className="w-full max-w-[110px] object-contain opacity-70" />
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
