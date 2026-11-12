export type TripType = 'one_way' | 'round_trip' | 'multi_leg';

export type AircraftCategory = 'light' | 'midsize' | 'heavy' | 'ultra_long';

export interface Airport {
  code: string; // ICAO o IATA (ej. LEIB / IBZ)
  name: string;
  city: string;
  country: string;
  fboAvailable: boolean;
  priorityFbo?: string;
}

export interface Aircraft {
  id: string;
  slug: string;
  name: string;
  manufacturer: string;
  category: AircraftCategory;
  categoryName: string;
  capacityMax: number;
  rangeNm: number;
  speedMach: number;
  cabinHeightM: number;
  baggageCapacityCuFt: number;
  interiorImageUrl: string;
  exteriorImageUrl: string;
  estimatedHourlyRateUsd: {
    min: number;
    max: number;
  };
  features: string[];
}

export interface RouteLanding {
  slug: string;
  origin: Airport;
  destination: Airport;
  flightTimeFormatted: string;
  distanceNm: number;
  recommendedCategory: AircraftCategory;
  estimatedPriceRangeUsd: {
    from: number;
    to: number;
  };
  description: string;
  frequentlyAskedQuestions: {
    question: string;
    answer: string;
  }[];
}

export interface QuoteFormData {
  tripType: TripType;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  returnDate?: string;
  returnTime?: string;
  passengers: number;
  aircraftCategory: AircraftCategory | 'any';
  luggageCount: number;
  petsOnBoard: boolean;
  specialRequests?: string;
  // Contacto & Confidencialidad
  fullName: string;
  email: string;
  phone: string;
  clientType: 'passenger' | 'executive_assistant' | 'family_office' | 'broker';
  ndaRequired: boolean;
}

export interface TrustSignal {
  id: string;
  badgeName: string;
  authority: string;
  description: string;
  verificationId?: string;
}
