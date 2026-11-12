import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Plane, ArrowLeft, ArrowRight, Check, Sparkles, MessageSquare } from 'lucide-react';
import { QuoteFormData, AircraftCategory } from '@/lib/types';
import { FLEET_CATEGORIES } from '@/lib/data/fleet.data';

interface Step3AircraftProps {
  form: UseFormReturn<QuoteFormData>;
  onNext: () => void;
  onBack: () => void;
}

export const Step3Aircraft: React.FC<Step3AircraftProps> = ({ form, onNext, onBack }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const selectedCategory = watch('aircraftCategory') || 'any';

  const categoryOptions: {
    key: AircraftCategory | 'any';
    title: string;
    sub: string;
    capacity: string;
    range: string;
    sample: string;
  }[] = [
    {
      key: 'any',
      title: 'Recomendación Inteligente Jet Elite',
      sub: 'Nuestro Concierge selecciona la aeronave de mejor relación coste/alcance',
      capacity: 'Cualquier grupo',
      range: 'Optimizado',
      sample: 'Asignación dinámica',
    },
    {
      key: 'light',
      title: 'Light Jet',
      sub: 'Ideal para vuelos continentales y pistas cortas (1.5 - 3h de vuelo)',
      capacity: 'Hasta 7 pax',
      range: '2,000 nm',
      sample: 'Phenom 300E / Citation CJ3+',
    },
    {
      key: 'midsize',
      title: 'Super Midsize Jet',
      sub: 'Cabina espaciosa stand-up, excelente para viajes corporativos',
      capacity: 'Hasta 9 pax',
      range: '2,700 nm',
      sample: 'Citation Latitude / Challenger 350',
    },
    {
      key: 'heavy',
      title: 'Heavy Jet',
      sub: 'Autonomía continental completa con asistente de vuelo y camas',
      capacity: 'Hasta 12 pax',
      range: '4,000 nm',
      sample: 'Challenger 650 / Falcon 2000',
    },
    {
      key: 'ultra_long',
      title: 'Ultra Long Range',
      sub: 'Vuelos intercontinentales transatlánticos sin escalas',
      capacity: 'Hasta 14 pax',
      range: '7,500 nm',
      sample: 'Gulfstream G650ER / Global 7500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-mono uppercase tracking-wider text-silver block mb-1">
          Categoría de Aeronave Sugerida
        </label>
        <p className="text-xs text-silver/80">
          Seleccione la categoría deseada o permita que nuestro equipo optimice la cotización según su ruta y pasaje.
        </p>
      </div>

      {/* Grid de Selección de Categoría */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {categoryOptions.map((opt) => {
          const isSelected = selectedCategory === opt.key;
          return (
            <div
              key={opt.key}
              onClick={() => setValue('aircraftCategory', opt.key, { shouldValidate: true })}
              className={`p-3.5 rounded border text-left cursor-pointer transition-all ${
                isSelected
                  ? 'bg-obsidian-800 border-champagne shadow-md shadow-champagne/15'
                  : 'bg-obsidian-900 border-obsidian-700/80 hover:border-obsidian-600'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-platinum flex items-center gap-2">
                  <Plane className={`w-3.5 h-3.5 ${isSelected ? 'text-champagne' : 'text-silver'}`} />
                  {opt.title}
                </span>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-champagne bg-champagne text-obsidian-900' : 'border-obsidian-600'
                  }`}
                >
                  {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
              </div>
              <p className="text-xs text-silver line-clamp-2 mb-2 leading-relaxed">{opt.sub}</p>
              <div className="flex items-center gap-3 text-[10px] font-mono text-champagne/90 pt-1 border-t border-obsidian-700/50">
                <span>Capacidad: {opt.capacity}</span>
                <span>•</span>
                <span>Ej: {opt.sample}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Requerimientos Especiales (Catering, Escolta, FBO privado) */}
      <div className="space-y-1.5">
        <label
          htmlFor="specialRequests"
          className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-champagne" />
          <span>Requerimientos Especiales / Catering VIP (Opcional)</span>
        </label>
        <textarea
          id="specialRequests"
          rows={2}
          placeholder="Ej: Menú kosher/halal, transporte privado en pista FBO, confirmación de NDA antes de emitir manifiesto..."
          {...register('specialRequests')}
          className="w-full bg-obsidian-800 border border-obsidian-700 focus:border-champagne rounded p-3 text-xs text-platinum placeholder:text-silver/50 focus:outline-none transition-colors"
        />
      </div>

      {/* Navegación del paso */}
      <div className="pt-4 border-t border-obsidian-700 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-silver hover:text-platinum text-xs font-mono uppercase font-bold flex items-center gap-2 transition-colors px-3 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Atrás</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="bg-champagne hover:bg-champagne-hover text-obsidian-900 px-6 py-3 rounded font-mono text-xs uppercase font-bold tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-champagne/20"
        >
          <span>Paso 4: Datos de Contacto</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
