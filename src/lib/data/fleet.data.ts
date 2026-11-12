import { Aircraft } from '../types';

// TODO: reemplazar con la relación exacta de matrículas y modelos propios/gestionados por Jet Elite
export const FLEET_CATEGORIES: Aircraft[] = [
  {
    id: 'light-phenom-300e',
    slug: 'phenom-300e',
    name: 'Embraer Phenom 300E',
    manufacturer: 'Embraer Executive Jets',
    category: 'light',
    categoryName: 'Light Jet (Continental & Regional)',
    capacityMax: 7,
    rangeNm: 2010,
    speedMach: 0.80,
    cabinHeightM: 1.50,
    baggageCapacityCuFt: 84,
    interiorImageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop',
    exteriorImageUrl: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f1?q=80&w=1200&auto=format&fit=crop',
    // TODO: reemplazar con tarifas exactas de Jet Elite o acuerdo fraccional
    estimatedHourlyRateUsd: {
      min: 3600,
      max: 4400,
    },
    features: ['Acceso a pistas cortas', 'Baño cerrado privado', 'Presurización de cabina líder en su clase', 'Conexión satelital'],
  },
  {
    id: 'midsize-citation-latitude',
    slug: 'cessna-citation-latitude',
    name: 'Cessna Citation Latitude',
    manufacturer: 'Textron Aviation',
    category: 'midsize',
    categoryName: 'Super Midsize Jet',
    capacityMax: 9,
    rangeNm: 2700,
    speedMach: 0.80,
    cabinHeightM: 1.83,
    baggageCapacityCuFt: 127,
    interiorImageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop',
    exteriorImageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop',
    // TODO: reemplazar con dato real de Jet Elite
    estimatedHourlyRateUsd: {
      min: 5200,
      max: 6400,
    },
    features: ['Suelo de cabina completamente plano', 'Stand-up cabin (1.83m)', 'Cocina ejecutiva completa', 'Wifi de alta velocidad Ka-Band'],
  },
  {
    id: 'heavy-challenger-650',
    slug: 'bombardier-challenger-650',
    name: 'Bombardier Challenger 650',
    manufacturer: 'Bombardier Aviation',
    category: 'heavy',
    categoryName: 'Heavy Jet (Vuelos Continentales Amplios)',
    capacityMax: 12,
    rangeNm: 4000,
    speedMach: 0.85,
    cabinHeightM: 1.83,
    baggageCapacityCuFt: 115,
    interiorImageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop',
    exteriorImageUrl: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f1?q=80&w=1200&auto=format&fit=crop',
    // TODO: reemplazar con dato real de Jet Elite
    estimatedHourlyRateUsd: {
      min: 7800,
      max: 9500,
    },
    features: ['Espacio para dormir con camas completas', 'Tripulación de cabina VIP (Flight Attendant)', 'Catering gourmet personalizado', 'Autonomía transcontinental'],
  },
  {
    id: 'ultra-gulfstream-g650er',
    slug: 'gulfstream-g650er',
    name: 'Gulfstream G650ER',
    manufacturer: 'Gulfstream Aerospace',
    category: 'ultra_long',
    categoryName: 'Ultra Long Range (Intercontinental)',
    capacityMax: 14,
    rangeNm: 7500,
    speedMach: 0.90,
    cabinHeightM: 1.95,
    baggageCapacityCuFt: 195,
    interiorImageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop',
    exteriorImageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop',
    // TODO: reemplazar con dato real de Jet Elite
    estimatedHourlyRateUsd: {
      min: 11500,
      max: 14800,
    },
    features: ['Alcance sin escalas Madrid-Buenos Aires / Bogotá-Londres', 'Cuatro zonas de cabina independientes', 'Altitud de cabina ultrabaja (3,000 ft)', 'Suite privada'],
  },
];
