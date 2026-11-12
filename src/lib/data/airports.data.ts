import { Airport } from '../types';

export const POPULAR_EXECUTIVE_AIRPORTS: Airport[] = [
  // España / Europa
  { code: 'LEMD / MAD', name: 'Adolfo Suárez Madrid-Barajas (FBO Executive)', city: 'Madrid', country: 'España', fboAvailable: true, priorityFbo: 'Gestair / Sky Valet' },
  { code: 'LEIB / IBZ', name: 'Aeropuerto de Ibiza (FBO VIP)', city: 'Ibiza', country: 'España', fboAvailable: true, priorityFbo: 'Ibiza General Aviation' },
  { code: 'LEBL / BCN', name: 'Josep Tarradellas Barcelona-El Prat (FBO)', city: 'Barcelona', country: 'España', fboAvailable: true },
  { code: 'LFPB / LBG', name: 'Paris Le Bourget (FBO Privado)', city: 'París', country: 'Francia', fboAvailable: true },
  { code: 'EGGW / LTN', name: 'London Luton (Signature Flight Support)', city: 'Londres', country: 'Reino Unido', fboAvailable: true },
  { code: 'LSGG / GVA', name: 'Geneva International Executive Terminal', city: 'Ginebra', country: 'Suiza', fboAvailable: true },
  // América / LATAM / USA
  { code: 'KTEB / TEB', name: 'Teterboro Executive Airport', city: 'Nueva York / NJ', country: 'EE. UU.', fboAvailable: true },
  { code: 'KOPF / OPF', name: 'Miami-Opa Locka Executive Airport', city: 'Miami, FL', country: 'EE. UU.', fboAvailable: true },
  { code: 'MMTO / TLC', name: 'Lic. Adolfo López Mateos (Toluca Executive)', city: 'Ciudad de México / Toluca', country: 'México', fboAvailable: true },
  { code: 'SKBO / BOG', name: 'El Dorado Terminal de Aviación General', city: 'Bogotá', country: 'Colombia', fboAvailable: true },
  { code: 'SKRG / MDE', name: 'José María Córdova (Hangar Ejecutivo)', city: 'Medellín / Rionegro', country: 'Colombia', fboAvailable: true },
  { code: 'SKCG / CTG', name: 'Rafael Núñez Aviación Privada', city: 'Cartagena', country: 'Colombia', fboAvailable: true },
];
