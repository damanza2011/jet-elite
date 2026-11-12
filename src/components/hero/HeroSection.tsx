'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plane, ArrowRight, Shield, Sparkles, MapPin, Calendar, Users } from 'lucide-react';
import { POPULAR_EXECUTIVE_AIRPORTS } from '@/lib/data/airports.data';

interface HeroSectionProps {
  onOpenQuoteWithRoute?: (origin?: string, destination?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteWithRoute }) => {
  // Estado local para el estimador rápido integrado en el Hero
  const [quickOrigin, setQuickOrigin] = useState('LEMD / MAD');
  const [quickDestination, setQuickDestination] = useState('LEIB / IBZ');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onOpenQuoteWithRoute) {
      onOpenQuoteWithRoute(quickOrigin, quickDestination);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background optimizado con imagen estática de alta fidelidad (sin video autoplay para LCP < 2.0s) */}
      <div className="absolute inset-0 z-0 bg-obsidian-900">
        <Image
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=85&w=2000&auto=format&fit=crop"
          alt="Cabina ejecutiva de ultra largo alcance Jet Elite"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 select-none pointer-events-none"
        />
        {/* Degradado cinematográfico para garantizar contraste legible WCAG 2.2 AA */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/80 to-obsidian-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        
        {/* Eyebrow de confidencialidad y estatus */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne/30 bg-obsidian-800/80 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-champagne" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-platinum/90">
            Aviación Privada · UHNW &amp; Corporativa
          </span>
        </div>

        {/* Título de propuesta de valor directa, no meramente poética */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-platinum tracking-tight max-w-4xl font-normal leading-[1.15] mb-6">
          Vuelos privados a su medida.{' '}
          <span className="italic text-champagne font-serif">Sin esperas, sin intermediarios.</span>
        </h1>

        {/* Subtítulo transparente: tiempo de respuesta, confidencialidad y flota garantizada */}
        <p className="text-base sm:text-lg text-silver max-w-2xl font-normal leading-relaxed mb-10">
          Acceda a una flota certificada bajo estándares internacionales de seguridad para chárter puntual o adquiera horas garantizadas mediante nuestro programa de membresía fraccionada.
        </p>

        {/* Hero Quick Flight Estimator (Inspiración JetBay / VistaJet) */}
        <div className="w-full max-w-3xl bg-obsidian-800/90 border border-obsidian-700/90 rounded-lg p-3 sm:p-4 shadow-2xl backdrop-blur-xl mb-8">
          <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Origen Selector */}
            <div className="flex flex-col text-left px-3 py-2 bg-obsidian-900/80 rounded border border-obsidian-700/60">
              <label className="text-[10px] font-mono text-silver uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <MapPin className="w-3 h-3 text-champagne" />
                <span>Origen</span>
              </label>
              <select
                value={quickOrigin}
                onChange={(e) => setQuickOrigin(e.target.value)}
                className="bg-transparent text-xs text-platinum font-medium focus:outline-none cursor-pointer"
              >
                {POPULAR_EXECUTIVE_AIRPORTS.map((apt) => (
                  <option key={`origin-${apt.code}`} value={apt.code} className="bg-obsidian-900 text-platinum">
                    {apt.city} ({apt.code.split('/')[1]?.trim() || apt.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Destino Selector */}
            <div className="flex flex-col text-left px-3 py-2 bg-obsidian-900/80 rounded border border-obsidian-700/60">
              <label className="text-[10px] font-mono text-silver uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <MapPin className="w-3 h-3 text-champagne" />
                <span>Destino</span>
              </label>
              <select
                value={quickDestination}
                onChange={(e) => setQuickDestination(e.target.value)}
                className="bg-transparent text-xs text-platinum font-medium focus:outline-none cursor-pointer"
              >
                {POPULAR_EXECUTIVE_AIRPORTS.map((apt) => (
                  <option key={`dest-${apt.code}`} value={apt.code} className="bg-obsidian-900 text-platinum">
                    {apt.city} ({apt.code.split('/')[1]?.trim() || apt.code})
                  </option>
                ))}
              </select>
            </div>

            {/* CTA de Lanzamiento del Estimador */}
            <button
              type="submit"
              className="group bg-champagne hover:bg-champagne-hover text-obsidian-900 rounded font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 p-3 transition-all duration-300 shadow-lg shadow-champagne/20"
            >
              <span>Estimar Vuelo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Doble Intención: Chárter Puntual vs Membresía Recurrente */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* CTA 1 (Primario): Abre el flujo guiado de cotización */}
          <button
            onClick={() => onOpenQuoteWithRoute?.()}
            className="w-full sm:w-auto px-8 py-4 rounded bg-champagne hover:bg-champagne-hover text-obsidian-900 font-mono text-xs uppercase font-bold tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(201,168,106,0.25)] flex items-center justify-center gap-2"
          >
            <span>Solicitar Cotización de Vuelo</span>
            <Plane className="w-4 h-4" />
          </button>

          {/* CTA 2 (Secundario): Separado visualmente para clientes recurrentes que buscan horas fijas */}
          <Link
            href="/membresias"
            className="w-full sm:w-auto px-8 py-4 rounded border border-platinum/20 hover:border-champagne bg-obsidian-800/40 hover:bg-obsidian-800/80 text-platinum hover:text-champagne font-mono text-xs uppercase font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Conocer Membresías &amp; Fraccional</span>
            <ArrowRight className="w-4 h-4 text-silver" />
          </Link>
        </div>

      </div>
    </section>
  );
};
