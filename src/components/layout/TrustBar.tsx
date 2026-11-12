import React from 'react';
import { ShieldCheck, Award, Clock, FileCheck2 } from 'lucide-react';
import { TRUST_SIGNALS } from '@/lib/data/trust.data';

export const TrustBar: React.FC = () => {
  return (
    <section
      aria-label="Acreditaciones de seguridad y certificaciones aeronáuticas"
      className="relative z-20 border-y border-obsidian-700 bg-obsidian-900/90 backdrop-blur-sm py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-obsidian-700/80">
          
          {/* Signal 1: AOC */}
          <div className="flex items-center gap-3 pt-3 lg:pt-0">
            <div className="w-9 h-9 rounded bg-obsidian-800 border border-champagne/30 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-4 h-4 text-champagne" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-platinum uppercase">
                AOC Certificado
              </p>
              <p className="text-[11px] text-silver truncate">
                Operaciones bajo estricto control FAA/EASA
              </p>
            </div>
          </div>

          {/* Signal 2: ARGUS */}
          <div className="flex items-center gap-3 pt-3 lg:pt-0 lg:pl-6">
            <div className="w-9 h-9 rounded bg-obsidian-800 border border-champagne/30 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-champagne" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-platinum uppercase">
                Auditoría ARGUS Gold
              </p>
              <p className="text-[11px] text-silver truncate">
                Pilotos con &gt;3,000h de vuelo en tipo
              </p>
            </div>
          </div>

          {/* Signal 3: WYVERN */}
          <div className="flex items-center gap-3 pt-3 lg:pt-0 lg:pl-6">
            <div className="w-9 h-9 rounded bg-obsidian-800 border border-champagne/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-champagne" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-platinum uppercase">
                Wyvern Approved
              </p>
              <p className="text-[11px] text-silver truncate">
                Mantenimiento y trazabilidad de componentes
              </p>
            </div>
          </div>

          {/* Signal 4: SLA & Response */}
          <div className="flex items-center gap-3 pt-3 lg:pt-0 lg:pl-6">
            <div className="w-9 h-9 rounded bg-obsidian-800 border border-champagne/30 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-champagne" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-platinum uppercase">
                Respuesta &lt; 120 Min
              </p>
              <p className="text-[11px] text-silver truncate">
                Disponibilidad 24/7/365 con FBO prioritario
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
