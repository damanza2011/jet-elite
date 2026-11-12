'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { TrustBar } from '@/components/layout/TrustBar';
import { QuoteModal } from '@/components/quote-flow/QuoteModal';
import { Footer } from '@/components/layout/Footer';
import { FLEET_CATEGORIES } from '@/lib/data/fleet.data';
import { AircraftCategory } from '@/lib/types';
import {
  Plane,
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass,
  Users,
  Luggage,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

export default function HomePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteOrigin, setQuoteOrigin] = useState<string | undefined>();
  const [quoteDestination, setQuoteDestination] = useState<string | undefined>();
  const [quoteCategory, setQuoteCategory] = useState<string | undefined>();

  const handleOpenQuoteWithRoute = (origin?: string, destination?: string) => {
    setQuoteOrigin(origin);
    setQuoteDestination(destination);
    setQuoteCategory(undefined);
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithCategory = (category: AircraftCategory) => {
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-obsidian-900 text-platinum">
      {/* 1. Header con navegación de lujo y gatillo de cotización */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 2. Hero con Doble Intención (Chárter Puntual vs Membresía Fraccional) */}
      <HeroSection onOpenQuoteWithRoute={handleOpenQuoteWithRoute} />

      {/* 3. Señales de Confianza Inmediatas (Above-The-Fold Trust Bar) */}
      <TrustBar />

      <main className="flex-1">
        {/* 4. SECCIÓN: Flota Destacada con Enfoque de Conversión Contextual */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs font-mono tracking-widest text-champagne uppercase mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flota Certificada</span>
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-platinum">
                Aeronaves para cada misión
              </h2>
            </div>
            <p className="text-sm text-silver max-w-md">
              Desde escapadas continentales en pistas cortas hasta vuelos transatlánticos sin escalas con suites privadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_CATEGORIES.map((aircraft) => (
              <div
                key={aircraft.id}
                className="group rounded-lg bg-obsidian-800/80 border border-obsidian-700/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-champagne/60 hover:shadow-2xl hover:shadow-black/60"
              >
                <div>
                  {/* Imagen Exterior con Next Image optimizada */}
                  <div className="relative h-48 w-full overflow-hidden bg-obsidian-900">
                    <Image
                      src={aircraft.exteriorImageUrl}
                      alt={aircraft.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 bg-obsidian-900/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-champagne border border-champagne/30">
                      {aircraft.categoryName.split('(')[0]}
                    </div>
                  </div>

                  {/* Cuerpo de la tarjeta */}
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-platinum group-hover:text-champagne transition-colors">
                        {aircraft.name}
                      </h3>
                      <p className="text-[11px] font-mono text-silver">{aircraft.manufacturer}</p>
                    </div>

                    {/* Especificaciones Clave */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-obsidian-700/60 text-center font-mono text-xs">
                      <div>
                        <span className="text-[10px] text-silver block">Capacidad</span>
                        <strong className="text-platinum">{aircraft.capacityMax} pax</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-silver block">Alcance</span>
                        <strong className="text-platinum">{aircraft.rangeNm} nm</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-silver block">Velocidad</span>
                        <strong className="text-platinum">Mach {aircraft.speedMach}</strong>
                      </div>
                    </div>

                    {/* Rango de Tarifa Estimada Transparente */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-silver">Tarifa orientativa:</span>
                      <span className="font-mono text-champagne font-bold">
                        ${aircraft.estimatedHourlyRateUsd.min.toLocaleString()} - ${aircraft.estimatedHourlyRateUsd.max.toLocaleString()} /h
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Contextual de Conversión: abre el modal preseleccionando este avión */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleOpenQuoteWithCategory(aircraft.category)}
                    className="w-full py-2.5 px-4 rounded bg-obsidian-700/60 hover:bg-champagne hover:text-obsidian-900 text-platinum text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <span>Cotizar este modelo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SECCIÓN: Rutas Estratégicas Frecuentes con Tiempos y Estimaciones */}
        <section className="py-20 bg-obsidian-950/60 border-t border-obsidian-700/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-champagne">
                Operaciones Frecuentes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-platinum">
                Rutas directas sin escalas comerciales
              </h2>
              <p className="text-sm text-silver">
                Acceso prioritario a terminales FBO ejecutivas con embarque en 15 minutos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  route: 'Madrid (LEMD) ↔ Ibiza (LEIB)',
                  time: '55 minutos',
                  category: 'Light Jet (Phenom 300E)',
                  advantage: 'Embarque VIP en terminal ejecutiva sin colas ni control de equipaje masivo.',
                  origin: 'Madrid (LEMD / MAD)',
                  dest: 'Ibiza (LEIB / IBZ)',
                },
                {
                  route: 'Miami (KOPF) ↔ Medellín (SKRG)',
                  time: '3h 40min',
                  category: 'Super Midsize (Citation Latitude)',
                  advantage: 'Vuelo directo internacional con despacho aduanero preferencial en hangar.',
                  origin: 'Miami (KOPF / OPF)',
                  dest: 'Medellín (SKRG / MDE)',
                },
                {
                  route: 'Londres (EGGW) ↔ Ginebra (LSGG)',
                  time: '1h 25min',
                  category: 'Midsize Jet',
                  advantage: 'Flexibilidad horaria total para reuniones en centros financieros suizos.',
                  origin: 'Londres (EGGW / LTN)',
                  dest: 'Ginebra (LSGG / GVA)',
                },
              ].map((r, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg bg-obsidian-800/60 border border-obsidian-700/80 flex flex-col justify-between space-y-4 hover:border-champagne/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-champagne">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {r.time}
                      </span>
                      <span className="bg-obsidian-900 px-2 py-0.5 rounded text-[10px] text-silver border border-obsidian-700">
                        FBO Directo
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-platinum">{r.route}</h3>
                    <p className="text-xs text-silver leading-relaxed">{r.advantage}</p>
                    <p className="text-[11px] font-mono text-champagne/90">Aeronave recomendada: {r.category}</p>
                  </div>

                  <button
                    onClick={() => handleOpenQuoteWithRoute(r.origin, r.dest)}
                    className="w-full py-2.5 rounded border border-champagne/30 text-champagne hover:bg-champagne hover:text-obsidian-900 text-xs font-mono font-bold uppercase tracking-wider transition-all"
                  >
                    Cotizar este itinerario
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SECCIÓN: Membresía y Propiedad Fraccionada (El Diferencial para Recurrentes) */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-obsidian-800 via-obsidian-800/90 to-obsidian-850 border border-champagne/30 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="max-w-2xl space-y-6 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-champagne font-bold px-3 py-1 rounded bg-champagne-soft border border-champagne/30 inline-block">
                Programa de Propiedad Fraccionada
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-platinum leading-tight">
                Todas las ventajas de un jet propio,{' '}
                <span className="italic text-champagne">sin la carga operativa.</span>
              </h2>
              <p className="text-sm text-silver leading-relaxed">
                Diseñado para corporaciones y familias que vuelan más de 50 horas al año. Adquiera una fracción de aeronave y pague solo por las horas ocupadas con disponibilidad garantizada los 365 días del año.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/membresias"
                  className="bg-champagne hover:bg-champagne-hover text-obsidian-900 px-7 py-3.5 rounded font-mono text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Ver Planes de Propiedad Fraccionada</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="px-7 py-3.5 rounded border border-platinum/20 hover:border-champagne text-platinum text-xs font-mono uppercase font-bold tracking-wider transition-all"
                >
                  Solicitar Dossier Confidencial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SECCIÓN FAQ de Alta Cualificación (Transparencia CRO) */}
        <section className="py-20 bg-obsidian-950 border-t border-obsidian-700/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-champagne">
                Transparencia &amp; Seguridad
              </span>
              <h2 className="font-serif text-3xl text-platinum">Preguntas Frecuentes</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: '¿Con cuánta antelación debo solicitar mi vuelo chárter?',
                  a: 'Podemos coordinar despegues urgentes en tan solo 2 a 4 horas para rutas continentales con aeronaves situadas en base. Para rutas internacionales con requisitos aduaneros específicos, recomendamos entre 24 y 48 horas.',
                },
                {
                  q: '¿Cómo garantizan la seguridad de las aeronaves y tripulaciones?',
                  a: 'Todas las aeronaves operan bajo Certificado de Operador Aéreo (AOC) comercial vigente, auditadas bajo estándares Wyvern y ARGUS. Los comandantes cuentan con un promedio superior a 3,500 horas de vuelo.',
                },
                {
                  q: '¿Cuál es la política para viajar con mascotas en cabina?',
                  a: 'Aceptamos mascotas en cabina sin restricciones de peso ni necesidad de jaula en la mayoría de nuestra flota, siempre que cuenten con su pasaporte veterinario al día.',
                },
                {
                  q: '¿Cómo se garantiza la confidencialidad de los pasajeros UHNW?',
                  a: 'Aplicamos protocolos estrictos de no divulgación (NDA). Los manifiestos de vuelo solo se comparten con las autoridades aeroportuarias obligatorias, y el acceso al avión se realiza desde terminales FBO privadas lejos de la vista pública.',
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-obsidian-800/60 border border-obsidian-700/80 rounded-lg p-5 cursor-pointer"
                >
                  <summary className="font-serif text-base font-bold text-platinum flex items-center justify-between list-none">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-4 h-4 text-champagne transition-transform group-open:rotate-180 shrink-0 ml-4" />
                  </summary>
                  <p className="text-xs text-silver mt-3 leading-relaxed pt-2 border-t border-obsidian-700/40">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Modal de Cotización Multi-Paso Accesible */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialOrigin={quoteOrigin}
        initialDestination={quoteDestination}
        initialCategory={quoteCategory}
      />
    </div>
  );
}
