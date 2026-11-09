import React from 'react';
import { motion } from 'framer-motion';
import { footerImage } from '../data/mockData';

const Footer: React.FC = () => {
  const reseaux = [
    { nom: 'Instagram', href: '#' },
    { nom: 'LinkedIn', href: '#' },
    { nom: 'X', href: '#' },
    { nom: 'YouTube', href: '#' },
  ];

  const colonnes = [
    {
      titre: 'Explorer',
      liens: ['Missions', 'Associations', 'Bénévoles', 'Événements'],
    },
    {
      titre: 'Ressources',
      liens: ['Centre d’aide', 'Guide association', 'Blog', 'FAQ'],
    },
    {
      titre: 'Légal',
      liens: ['Mentions légales', 'Confidentialité', 'CGU', 'Cookies'],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0f1f14] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <img
          src={footerImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f14] via-[#0f1f14]/90 to-[#0f1f14]/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-lg">
            <p className="font-['Syne'] text-3xl font-bold leading-tight sm:text-4xl">
              Prêt à faire bouger
              <span className="block bg-gradient-to-r from-[#87CEEB] to-[#D2B48C] bg-clip-text text-transparent">
                le monde autour de vous ?
              </span>
            </p>
            <p className="mt-3 text-sm text-white/60 sm:text-base">
              Téléchargez Solidari et rejoignez la communauté engagée près de chez
              vous.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <motion.button
              type="button"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#0f1f14]"
            >
              App Store
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-2xl bg-[#228B22] px-5 py-3 text-sm font-bold text-white"
            >
              Google Play
            </motion.button>
          </div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#228B22] to-[#87CEEB] text-xs font-bold">
                S
              </span>
              <span className="font-['Syne'] text-lg font-bold">Solidari</span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white/55">
              L’application qui relie bénévoles et associations pour des actions
              concrètes, partout en France.
            </p>
            <div className="flex flex-wrap gap-2">
              {reseaux.map((r) => (
                <motion.a
                  key={r.nom}
                  href={r.href}
                  whileHover={{ y: -4, backgroundColor: 'rgba(135,206,235,0.25)' }}
                  className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors"
                >
                  {r.nom}
                </motion.a>
              ))}
            </div>
          </div>

          {colonnes.map((col) => (
            <div key={col.titre}>
              <h4 className="mb-4 font-['Syne'] text-sm font-bold uppercase tracking-wider text-[#87CEEB]">
                {col.titre}
              </h4>
              <ul className="space-y-2.5">
                {col.liens.map((lien) => (
                  <li key={lien}>
                    <a
                      href="#hero"
                      className="group inline-flex items-center text-sm text-white/60 transition-colors hover:text-white"
                    >
                      <span className="mr-0 w-0 overflow-hidden opacity-0 transition-all group-hover:mr-2 group-hover:w-2 group-hover:opacity-100">
                        <span className="inline-block h-1 w-1 rounded-full bg-[#E2725B]" />
                      </span>
                      {lien}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© 2026 Solidari — Tous droits réservés</p>
          <p>Fait avec engagement pour le lien social</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
