import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  role: 'benevole' | 'association';
  onRoleChange: (role: 'benevole' | 'association') => void;
}

const Header: React.FC<HeaderProps> = ({ role, onRoleChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const liens = [
    { label: 'Découvrir', href: '#hero' },
    { label: 'Missions', href: '#missions' },
    { label: 'Comment ça marche', href: '#parcours' },
    { label: 'Communauté', href: '#communaute' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0f1f14]/95 backdrop-blur-xl shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: 12, scale: 1.08 }}
            className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#228B22] to-[#87CEEB] text-sm font-bold text-white shadow-md"
          >
            S
          </motion.span>
          <span className="font-['Syne'] text-lg font-extrabold tracking-tight text-white sm:text-xl">
            Solidari
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {liens.map((lien) => (
            <a
              key={lien.href}
              href={lien.href}
              className="relative px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <span className="relative z-10">{lien.label}</span>
              <motion.span
                className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity hover:opacity-100"
                layoutId="navHover"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden rounded-full bg-white/10 p-1 sm:flex">
            {(['benevole', 'association'] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => onRoleChange(r)}
                className={`relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  role === r ? 'text-[#0f1f14]' : 'text-white/70 hover:text-white'
                }`}
              >
                {role === r && (
                  <motion.span
                    layoutId="rolePill"
                    className="absolute inset-0 rounded-full bg-[#87CEEB]"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10">
                  {r === 'benevole' ? 'Bénévole' : 'Association'}
                </span>
              </button>
            ))}
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.94 }}
            className="hidden rounded-full bg-[#E2725B] px-4 py-2 text-xs font-bold text-white shadow-lg shadow-[#E2725B]/30 sm:inline-flex"
          >
            Se connecter
          </motion.button>

          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-white"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0f1f14]/98 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {liens.map((lien, i) => (
                <motion.a
                  key={lien.href}
                  href={lien.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                >
                  {lien.label}
                </motion.a>
              ))}
              <div className="mt-2 flex gap-2 rounded-2xl bg-white/5 p-2">
                {(['benevole', 'association'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => {
                      onRoleChange(r);
                      setMenuOpen(false);
                    }}
                    className={`flex-1 rounded-xl py-2.5 text-sm font-semibold ${
                      role === r
                        ? 'bg-[#87CEEB] text-[#0f1f14]'
                        : 'bg-transparent text-white/70'
                    }`}
                  >
                    {r === 'benevole' ? 'Bénévole' : 'Association'}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
