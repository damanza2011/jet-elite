'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ShieldCheck, ChevronRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: (initialCategory?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-900/95 backdrop-blur-md border-b border-obsidian-700/60 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-gradient-to-b from-obsidian-900/90 via-obsidian-900/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-obsidian-800 border border-champagne/40 flex items-center justify-center transition-all group-hover:border-champagne">
            <span className="font-serif text-champagne font-bold text-lg tracking-widest">JE</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] text-platinum font-bold text-base sm:text-lg uppercase">
              Jet Elite
            </span>
            <span className="text-[10px] tracking-[0.2em] text-silver uppercase font-mono">
              Private Aviation · UHNW
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-platinum/80">
          <Link
            href="/flota"
            className="hover:text-champagne transition-colors"
          >
            Flota
          </Link>
          <Link
            href="/rutas"
            className="hover:text-champagne transition-colors"
          >
            Rutas Frecuentes
          </Link>
          <Link
            href="/membresias"
            className="hover:text-champagne transition-colors flex items-center gap-1.5"
          >
            <span>Propiedad Fraccionada</span>
            <span className="text-[9px] font-mono uppercase bg-champagne-soft text-champagne px-1.5 py-0.5 rounded border border-champagne/30">
              VIP
            </span>
          </Link>
        </nav>

        {/* Quick Actions & Dual CTA */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Direct Line to Dispatch / Ops */}
          <a
            href="tel:+18005550199" // TODO: reemplazar con línea telefónica 24/7 real de Jet Elite
            className="flex items-center gap-2 text-xs font-mono text-silver hover:text-platinum transition-colors"
            title="Atención directa de operaciones 24/7"
          >
            <Phone className="w-3.5 h-3.5 text-champagne" />
            <span>+1 (800) JET-ELITE</span>
          </a>

          <div className="h-4 w-px bg-obsidian-700" />

          {/* CTA Secundario: Membresía / Fraccional */}
          <Link
            href="/membresias"
            className="text-xs uppercase tracking-wider font-mono text-platinum/90 hover:text-champagne px-3 py-2 transition-colors"
          >
            Membresías
          </Link>

          {/* CTA Primario: Abre el flujo guiado de cotización sin recargar */}
          <button
            onClick={() => onOpenQuote()}
            className="relative group overflow-hidden rounded bg-champagne text-obsidian-900 px-5 py-2.5 text-xs uppercase font-mono font-bold tracking-wider transition-all duration-300 hover:bg-champagne-hover hover:shadow-[0_0_20px_rgba(201,168,106,0.35)]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Cotizar Vuelo</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenQuote()}
            className="bg-champagne text-obsidian-900 px-3 py-1.5 text-[11px] uppercase font-mono font-bold rounded"
          >
            Cotizar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-platinum p-2"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-900 border-b border-obsidian-700 px-6 py-6 space-y-4">
          <Link
            href="/flota"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-platinum font-medium"
          >
            Flota
          </Link>
          <Link
            href="/rutas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-platinum font-medium"
          >
            Rutas Frecuentes
          </Link>
          <Link
            href="/membresias"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-champagne font-medium"
          >
            Propiedad Fraccionada & Membresías
          </Link>
          <div className="pt-4 border-t border-obsidian-700 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full text-center bg-champagne text-obsidian-900 py-3 font-mono text-xs uppercase font-bold tracking-wider rounded"
            >
              Solicitar Cotización Multi-Paso
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
