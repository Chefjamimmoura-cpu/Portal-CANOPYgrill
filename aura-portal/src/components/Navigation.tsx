import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Conceito', href: '#conceito' },
  { label: 'O Projeto', href: '#projeto' },
  { label: 'A Cozinha', href: '#cozinha' },
  { label: 'Entregáveis', href: '#entregaveis' },
  { label: 'Financeiro', href: '#financeiro' },
  { label: 'Documentos', href: '#documentos' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-aura-background/95 backdrop-blur-md border-b border-aura-outline/10 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleLink('#hero'); }}
            className="flex items-center"
          >
            {/* Logo Moods (escuro) — visível após scroll */}
            <img
              src="/assets/logos/moods_color.svg"
              alt="Moods Steakhouse"
              className={`h-9 object-contain transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
            {/* Logo Moods (branco) — visível sobre o hero */}
            <img
              src="/assets/logos/moods_color.svg"
              alt="Moods Steakhouse"
              className={`h-9 object-contain absolute transition-all duration-500 brightness-0 invert ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-90'}`}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className={`text-xs font-sans font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                  scrolled
                    ? 'text-aura-on-surface-variant hover:text-aura-primary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? 'text-aura-on-background' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-aura-background/98 backdrop-blur-md border-b border-aura-outline/10 shadow-lg md:hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="text-left text-sm font-sans font-medium tracking-[0.18em] uppercase text-aura-on-surface-variant hover:text-aura-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
