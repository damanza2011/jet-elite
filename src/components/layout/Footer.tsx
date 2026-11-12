import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Globe, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-950 border-t border-obsidian-700/80 text-silver text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Confidentiality */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-obsidian-800 border border-champagne/40 flex items-center justify-center">
                <span className="font-serif text-champagne font-bold text-sm tracking-widest">JE</span>
              </div>
              <span className="font-serif tracking-[0.2em] text-platinum font-bold text-sm uppercase">
                Jet Elite
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-silver/80">
              Operaciones de aviación ejecutiva, chárter privado bajo demanda y programas de propiedad fraccionada para clientes UHNW y corporaciones globales.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-champagne">
              <Lock className="w-3.5 h-3.5" />
              <span>Privacidad &amp; NDA garantizados</span>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-platinum font-bold">
              Soluciones de Vuelo
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/flota" className="hover:text-champagne transition-colors">
                  Flota de Aeronaves
                </Link>
              </li>
              <li>
                <Link href="/rutas" className="hover:text-champagne transition-colors">
                  Rutas Ejecutivas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/membresias" className="hover:text-champagne transition-colors">
                  Propiedad Fraccionada
                </Link>
              </li>
              <li>
                <Link href="/empty-legs" className="hover:text-champagne transition-colors">
                  Vuelos Empty Legs // TODO: data
                </Link>
              </li>
            </ul>
          </div>

          {/* Seguridad y Cumplimiento */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-platinum font-bold">
              Seguridad &amp; Auditoría
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Certificado AOC Comercial</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Auditoría Wyvern Wingman</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Mantenimiento Centros Autorizados</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Acceso Global a FBOs VIP</span>
              </li>
            </ul>
          </div>

          {/* Despacho 24/7 */}
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-platinum font-bold">
              Atención 24/7/365
            </p>
            <div className="space-y-2 text-xs font-mono">
              <p className="text-silver">
                Despacho de Operaciones Globales:
              </p>
              {/* TODO: reemplazar con los teléfonos de atención real */}
              <a href="tel:+18005550199" className="block text-platinum hover:text-champagne">
                USA / Intl: +1 (800) 555-0199
              </a>
              <a href="tel:+34910000000" className="block text-platinum hover:text-champagne">
                España / EU: +34 910 000 000
              </a>
              <a href="tel:+5740000000" className="block text-platinum hover:text-champagne">
                LATAM (Medellín): +57 (4) 000 0000
              </a>
              <a href="mailto:ops@jet-elite.com" className="block text-champagne hover:underline pt-1">
                ops@jet-elite.com
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Legal Aeronáutico */}
        <div className="pt-8 border-t border-obsidian-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-silver/60">
          <p>
            © {new Date().getFullYear()} Jet Elite. Todos los derechos reservados. Las aeronaves son operadas bajo estándares de seguridad vigentes conforme a normativas de aviación civil internacional.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="hover:text-platinum">
              Privacidad &amp; Confidencialidad
            </Link>
            <Link href="/terminos" className="hover:text-platinum">
              Términos del Servicio Chárter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
