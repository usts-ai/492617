import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Evenement } from '../data/mockData';

interface EventCardProps {
  event: Evenement;
  index: number;
  role: 'benevole' | 'association';
}

const EventCard: React.FC<EventCardProps> = ({ event, index, role }) => {
  const [inscrit, setInscrit] = useState(false);
  const restantes = Math.max(
    0,
    event.places - event.placesPrises - (inscrit ? 1 : 0)
  );
  const progress =
    ((event.placesPrises + (inscrit ? 1 : 0)) / event.places) * 100;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_-12px_rgba(15,31,20,0.18)]"
    >
      <div className="relative h-44 overflow-hidden sm:h-48">
        <motion.img
          src={event.image}
          alt={event.titre}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f14]/70 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#228B22]">
            {event.categorie}
          </span>
          {event.urgence && (
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="rounded-full bg-[#E2725B] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
            >
              Urgent
            </motion.span>
          )}
        </div>
        <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white/90">
          {event.association}
        </p>
      </div>

      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <h3 className="font-['Syne'] text-lg font-bold leading-snug text-[#0f1f14] sm:text-xl">
          {event.titre}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-[#333]/80">
          {event.description}
        </p>

        <div className="flex flex-wrap gap-3 text-xs font-medium text-[#333]/70">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#87CEEB]" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D2B48C]" />
            {event.lieu}
          </span>
        </div>

        <div className="mt-1">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="font-semibold text-[#228B22]">
              {restantes} place{restantes > 1 ? 's' : ''} restante
              {restantes > 1 ? 's' : ''}
            </span>
            <span className="text-[#333]/50">
              {event.placesPrises + (inscrit ? 1 : 0)}/{event.places}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#E8F5E9]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#228B22] to-[#87CEEB]"
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            />
          </div>
        </div>

        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => role === 'benevole' && setInscrit((v) => !v)}
          className={`mt-1 w-full rounded-2xl py-3 text-sm font-bold transition-all ${
            role === 'association'
              ? 'bg-[#0f1f14] text-white hover:bg-[#1a3320]'
              : inscrit
              ? 'bg-[#87CEEB] text-[#0f1f14]'
              : 'bg-[#E2725B] text-white shadow-lg shadow-[#E2725B]/25 hover:brightness-110'
          }`}
        >
          {role === 'association'
            ? 'Gérer cette mission'
            : inscrit
            ? 'Inscription confirmée'
            : "S'inscrire"}
        </motion.button>
      </div>
    </motion.article>
  );
};

export default EventCard;
