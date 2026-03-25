import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollDown = () => {
    const next = document.querySelector('#conceito');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Imagem de capa */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/Hero_site.png')" }}
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />

      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">

        {/* Logo Moods — protagonista */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="/assets/logos/moods_color.svg"
            alt="Moods Steakhouse & Lounge"
            className="w-48 md:w-64 lg:w-72 mx-auto object-contain drop-shadow-2xl brightness-0 invert"
          />
        </motion.div>

        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col items-center space-y-3"
        >
          <div className="w-8 h-px bg-white/40" />
          <p className="font-sans text-white/55 tracking-[0.3em] text-xs uppercase">
            Rooftop Steakhouse · 5º Andar · AURA Hotel
          </p>
          <p className="font-display italic text-white/45 text-lg md:text-xl font-light">
            Georgetown, Guyana
          </p>
        </motion.div>

        {/* Badge Dossiê */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 font-sans text-white/25 text-[10px] tracking-[0.3em] uppercase"
        >
          Dossiê Executivo · 2026
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 group cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown size={20} className="text-white/35 group-hover:text-white/65 transition-colors" strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  );
}
