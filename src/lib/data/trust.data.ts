import { TrustSignal } from '../types';

// TODO: reemplazar con los números de registro oficial AOC y auditorías vigentes de Jet Elite
export const TRUST_SIGNALS: TrustSignal[] = [
  {
    id: 'aoc',
    badgeName: 'Certificado de Operador Aéreo (AOC)',
    authority: 'Autoridad Aeronáutica Civil',
    description: 'Operación bajo estándares estrictos de aviación comercial de pasajeros.',
    verificationId: 'AOC #PENDIENTE // TODO: reemplazar con dato real de Jet Elite',
  },
  {
    id: 'argus',
    badgeName: 'Auditoría ARGUS Gold / Platinum Equivalent',
    authority: 'ARGUS International',
    description: 'Verificación independiente de horas de tripulación y mantenimiento de aeronave.',
    verificationId: 'Rating verificado en cada vuelo',
  },
  {
    id: 'wyvern',
    badgeName: 'Estándar Wyvern Wingman Approved',
    authority: 'Wyvern Global Safety',
    description: 'Protocolos de gestión de riesgo operacional y trazabilidad mecánica.',
    verificationId: 'Registro de conformidad de flota',
  },
  {
    id: 'response-sla',
    badgeName: 'Garantía de Respuesta VIP < 120 min',
    authority: 'Operaciones 24/7/365',
    description: 'Asignación inmediata de un Flight Concierge dedicado a su itinerario.',
  },
];
