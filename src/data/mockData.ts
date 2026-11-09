export type Role = 'benevole' | 'association';

export interface Evenement {
  id: string;
  titre: string;
  association: string;
  description: string;
  date: string;
  lieu: string;
  places: number;
  placesPrises: number;
  image: string;
  categorie: string;
  urgence?: boolean;
}

export interface Categorie {
  id: string;
  nom: string;
  couleur: string;
}

export const evenements: Evenement[] = [
  {
    id: '1',
    titre: 'Collecte alimentaire solidaire',
    association: 'Restos du Cœur Paris',
    description: 'Aidez-nous à collecter et redistribuer des denrées aux familles en difficulté.',
    date: '12 nov. · 09h00',
    lieu: 'Paris 11e',
    places: 20,
    placesPrises: 14,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    categorie: 'Solidarité',
    urgence: true,
  },
  {
    id: '2',
    titre: 'Nettoyage des berges',
    association: 'Green Wave',
    description: 'Action écologique pour préserver la biodiversité le long de la Seine.',
    date: '15 nov. · 10h00',
    lieu: 'Boulogne',
    places: 30,
    placesPrises: 8,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    categorie: 'Environnement',
  },
  {
    id: '3',
    titre: 'Atelier lecture enfants',
    association: 'Lire Ensemble',
    description: 'Partagez le plaisir de la lecture avec des enfants en zone prioritaire.',
    date: '18 nov. · 14h30',
    lieu: 'Saint-Denis',
    places: 12,
    placesPrises: 10,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&q=80',
    categorie: 'Éducation',
    urgence: true,
  },
  {
    id: '4',
    titre: 'Maraude nocturne',
    association: 'Solidarité Rue',
    description: 'Distribution de repas chauds et de couvertures aux personnes sans abri.',
    date: '20 nov. · 20h00',
    lieu: 'Paris centre',
    places: 15,
    placesPrises: 6,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
    categorie: 'Solidarité',
  },
  {
    id: '5',
    titre: 'Journée portes ouvertes',
    association: 'Maison des Associations',
    description: 'Accueillez le public et présentez les missions de votre association.',
    date: '22 nov. · 11h00',
    lieu: 'Lyon 3e',
    places: 25,
    placesPrises: 12,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
    categorie: 'Événementiel',
  },
  {
    id: '6',
    titre: 'Soutien scolaire digital',
    association: 'Code pour Tous',
    description: 'Accompagnez des collégiens dans leurs premiers pas en informatique.',
    date: '25 nov. · 16h00',
    lieu: 'En ligne',
    places: 18,
    placesPrises: 5,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    categorie: 'Éducation',
  },
];

export const categories: Categorie[] = [
  { id: 'all', nom: 'Tous', couleur: '#228B22' },
  { id: 'sol', nom: 'Solidarité', couleur: '#E2725B' },
  { id: 'env', nom: 'Environnement', couleur: '#228B22' },
  { id: 'edu', nom: 'Éducation', couleur: '#4A90A4' },
  { id: 'evt', nom: 'Événementiel', couleur: '#C4A35A' },
];

export const stats = [
  { label: 'Bénévoles actifs', valeur: 12840 },
  { label: 'Associations', valeur: 920 },
  { label: 'Missions ce mois', valeur: 3450 },
];

export const heroImage =
  'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=80';

export const footerImage =
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80';
