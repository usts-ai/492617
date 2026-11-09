import React, { useState, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import {
  evenements,
  categories,
  stats,
  heroImage,
  Role,
} from '../data/mockData';

const HomePage: React.FC = () => {
  const [role, setRole] = useState<Role>('benevole');
  const [filtre, setFiltre] = useState('Tous');
  const [activeNav, setActiveNav] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const filtered =
    filtre === 'Tous'
      ? evenements
      : evenements.filter((e) => e.categorie === filtre);

  const navItems = ['Accueil', 'Missions', 'Messages', 'Profil'];

  return (
    <div className="min-h-screen bg-[#F4FBF6] pb-20 text-[#0f1f14] sm:pb-0">
      <Header role={role} onRoleChange={setRole} />

      <section
        id="hero"
        ref={heroRef}
        className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-24 sm:items-center sm:pb-24 sm:pt-28"
      >
        <motion.div
          style={{ y: yImg, scale: scaleHero }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Communauté de bénévoles unis"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f14]/75 via-[#0f1f14]/45 to-[#F4FBF6]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(135,206,235,0.25),transparent_55%)]" />
        </motion.div>

        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#87CEEB] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#228B22]" />
            Application mobile solidaire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Syne'] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Solidari
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-xl"
          >
            {role === 'benevole'
              ? 'Trouvez la mission qui vous ressemble et agissez près de chez vous en un geste.'
              : 'Publiez vos événements et recrutez des bénévoles motivés en temps réel.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#missions"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-2xl bg-[#E2725B] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#E2725B]/35"
            >
              {role === 'benevole' ? 'Voir les missions' : 'Créer un événement'}
            </motion.a>
            <motion.a
              href="#parcours"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md"
            >
              Découvrir Solidari
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5"
          >
            <span className="h-2 w-1 rounded-full bg-white/80" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 -mt-4 px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/60 bg-white/90 p-5 shadow-lg shadow-[#0f1f14]/5 backdrop-blur-xl"
            >
              <CountUp valeur={s.valeur} />
              <p className="mt-1 text-sm text-[#333]/65">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="missions" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#228B22]"
            >
              {role === 'benevole' ? 'Pour vous' : 'Vos publications'}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Syne'] text-3xl font-bold sm:text-4xl"
            >
              {role === 'benevole'
                ? 'Missions près de vous'
                : 'Gérez vos événements'}
            </motion.h2>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={role}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="max-w-xs text-sm text-[#333]/65"
            >
              {role === 'benevole'
                ? 'Inscrivez-vous en un tap et suivez les places en temps réel.'
                : 'Suivez les inscriptions et ajustez vos besoins instantanément.'}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((c) => (
            <motion.button
              key={c.id}
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setFiltre(c.nom)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                filtre === c.nom
                  ? 'bg-[#0f1f14] text-white shadow-md'
                  : 'bg-white text-[#333]/70 hover:bg-[#E8F5E9]'
              }`}
            >
              {c.nom}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                index={i}
                role={role}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section
        id="parcours"
        className="relative overflow-hidden bg-[#0f1f14] py-16 text-white sm:py-24"
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#228B22]/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#87CEEB]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 font-['Syne'] text-3xl font-bold sm:text-4xl"
          >
            Comment ça marche
          </motion.h2>
          <p className="mb-12 max-w-lg text-sm text-white/60 sm:text-base">
            Trois étapes simples pour connecter l’élan solidaire à l’action
            concrète.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                etape: '01',
                titre: 'Choisissez votre rôle',
                texte:
                  'Inscrivez-vous en tant que bénévole ou association avec un double accès sécurisé.',
              },
              {
                etape: '02',
                titre:
                  role === 'association'
                    ? 'Créez vos événements'
                    : 'Parcourez les missions',
                texte:
                  role === 'association'
                    ? 'Ajoutez photo, lieu, date et le nombre de participants recherchés.'
                    : 'Filtrez par thème, date et proximité pour trouver votre mission idéale.',
              },
              {
                etape: '03',
                titre:
                  role === 'association'
                    ? 'Suivez les inscriptions'
                    : 'Inscrivez-vous en un tap',
                texte:
                  role === 'association'
                    ? 'Visualisez en direct les places prises et gérez vos équipes.'
                    : 'Un bouton suffit : les places se mettent à jour instantanément.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.etape + role}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="font-['Syne'] text-5xl font-extrabold text-white/10">
                  {item.etape}
                </span>
                <h3 className="mt-3 font-['Syne'] text-xl font-bold">{item.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.texte}
                </p>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#228B22] to-[#87CEEB]"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="communaute" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#228B22]/30 via-[#87CEEB]/20 to-[#D2B48C]/30 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=900&q=80"
                alt="Bénévoles en action"
                className="h-72 w-full object-cover sm:h-96"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md"
              >
                <p className="font-['Syne'] text-lg font-bold text-[#0f1f14]">
                  +2 400 missions cette semaine
                </p>
                <p className="text-sm text-[#333]/65">
                  Une communauté vivante, partout en France
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E2725B]">
              Communauté
            </p>
            <h2 className="font-['Syne'] text-3xl font-bold sm:text-4xl">
              Deux interfaces, une même mission
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#333]/75 sm:text-base">
              Solidari offre une expérience dédiée aux bénévoles et aux
              associations : profils clairs, événements riches en détails, et
              inscriptions en temps réel pour ne jamais manquer une opportunité
              d’agir.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  titre: 'Double connexion',
                  desc: 'Accès séparé et sécurisé pour chaque profil.',
                },
                {
                  titre: 'Gestion d’événements',
                  desc: 'Photo, titre, lieu, date et places en un flux fluide.',
                },
                {
                  titre: 'Inscription instantanée',
                  desc: 'Un bouton, et le compteur de places se met à jour.',
                },
              ].map((f, i) => (
                <motion.div
                  key={f.titre}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#228B22] to-[#87CEEB] text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0f1f14]">{f.titre}</h3>
                    <p className="text-sm text-[#333]/65">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 z-40 w-[min(100%-1.5rem,28rem)] -translate-x-1/2 sm:hidden">
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 24 }}
          className="flex items-center justify-around rounded-2xl border border-white/40 bg-[#0f1f14]/95 px-2 py-2.5 shadow-2xl backdrop-blur-xl"
        >
          {navItems.map((item, i) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveNav(i)}
              className="relative flex flex-col items-center px-3 py-1"
            >
              {activeNav === i && (
                <motion.span
                  layoutId="bottomNav"
                  className="absolute -top-1 h-1 w-6 rounded-full bg-[#87CEEB]"
                />
              )}
              <span
                className={`mt-1 text-[10px] font-semibold ${
                  activeNav === i ? 'text-[#87CEEB]' : 'text-white/50'
                }`}
              >
                {item}
              </span>
            </button>
          ))}
        </motion.nav>
      </div>

      <Footer />
    </div>
  );
};

const CountUp: React.FC<{ valeur: number }> = ({ valeur }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.floor(eased * valeur));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [valeur]);

  return (
    <p ref={ref} className="font-['Syne'] text-3xl font-extrabold text-[#228B22]">
      {display.toLocaleString('fr-FR')}
      <span className="text-[#E2725B]">+</span>
    </p>
  );
};

export default HomePage;
