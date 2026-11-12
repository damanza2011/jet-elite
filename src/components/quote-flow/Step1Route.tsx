import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { PlaneTakeoff, PlaneLanding, Repeat, ArrowRight, MapPin } from 'lucide-react';
import { QuoteFormData } from '@/lib/types';
import { POPULAR_EXECUTIVE_AIRPORTS } from '@/lib/data/airports.data';

interface Step1RouteProps {
  form: UseFormReturn<QuoteFormData>;
  onNext: () => void;
}

export const Step1Route: React.FC<Step1RouteProps> = ({ form, onNext }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const currentTripType = watch('tripType');

  return (
    <div className="space-y-6">
      {/* Selector de Tipo de Viaje */}
      <div className="space-y-2">
        <label className="text-xs font-mono uppercase tracking-wider text-silver">
          Modalidad de Viaje
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: 'one_way', label: 'Solo Ida' },
            { value: 'round_trip', label: 'Ida y Vuelta' },
            { value: 'multi_leg', label: 'Múltiples Destinos' },
          ].map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setValue('tripType', type.value as any)}
              className={`py-2.5 px-3 rounded text-xs font-mono font-medium tracking-wide transition-all ${
                currentTripType === type.value
                  ? 'bg-champagne text-obsidian-900 font-bold shadow-md shadow-champagne/20'
                  : 'bg-obsidian-800 text-platinum/70 hover:bg-obsidian-700/60 border border-obsidian-700/80'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Origen y Destino */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        {/* Origen */}
        <div className="space-y-1.5">
          <label
            htmlFor="origin"
            className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5"
          >
            <PlaneTakeoff className="w-3.5 h-3.5 text-champagne" />
            <span>Aeropuerto de Origen (FBO)</span>
          </label>
          <div className="relative">
            <input
              id="origin"
              type="text"
              list="popular-airports"
              placeholder="Ej. Madrid (LEMD) o Teterboro (TEB)"
              {...register('origin')}
              className={`w-full bg-obsidian-800 border ${
                errors.origin ? 'border-red-500' : 'border-obsidian-700 focus:border-champagne'
              } rounded px-3.5 py-2.5 text-sm text-platinum placeholder:text-silver/50 focus:outline-none transition-colors font-sans`}
            />
          </div>
          {errors.origin && (
            <p className="text-[11px] text-red-400 font-mono mt-1">{errors.origin.message}</p>
          )}
        </div>

        {/* Destino */}
        <div className="space-y-1.5">
          <label
            htmlFor="destination"
            className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5"
          >
            <PlaneLanding className="w-3.5 h-3.5 text-champagne" />
            <span>Aeropuerto de Destino (FBO)</span>
          </label>
          <div className="relative">
            <input
              id="destination"
              type="text"
              list="popular-airports"
              placeholder="Ej. Ibiza (LEIB) o Miami (KOPF)"
              {...register('destination')}
              className={`w-full bg-obsidian-800 border ${
                errors.destination ? 'border-red-500' : 'border-obsidian-700 focus:border-champagne'
              } rounded px-3.5 py-2.5 text-sm text-platinum placeholder:text-silver/50 focus:outline-none transition-colors font-sans`}
            />
          </div>
          {errors.destination && (
            <p className="text-[11px] text-red-400 font-mono mt-1">{errors.destination.message}</p>
          )}
        </div>

        {/* Datalist accesible de aeropuertos sugeridos */}
        <datalist id="popular-airports">
          {POPULAR_EXECUTIVE_AIRPORTS.map((apt) => (
            <option key={apt.code} value={`${apt.city} (${apt.code})`}>
              {apt.name} · {apt.country}
            </option>
          ))}
        </datalist>
      </div>

      {/* Sugerencias rápidas de rutas ejecutivas comunes */}
      <div className="pt-2">
        <p className="text-[10px] font-mono uppercase tracking-widest text-silver mb-2 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-champagne" />
          <span>Rutas Frecuentes UHNW (Acceso con 1 Clic):</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { o: 'Madrid (LEMD / MAD)', d: 'Ibiza (LEIB / IBZ)' },
            { o: 'Miami (KOPF / OPF)', d: 'Medellín (SKRG / MDE)' },
            { o: 'Londres (EGGW / LTN)', d: 'Ginebra (LSGG / GVA)' },
            { o: 'Bogotá (SKBO / BOG)', d: 'Cartagena (SKCG / CTG)' },
          ].map((pair) => (
            <button
              key={`${pair.o}-${pair.d}`}
              type="button"
              onClick={() => {
                setValue('origin', pair.o, { shouldValidate: true });
                setValue('destination', pair.d, { shouldValidate: true });
              }}
              className="text-[11px] font-mono bg-obsidian-800/80 hover:bg-obsidian-700 text-silver hover:text-platinum px-2.5 py-1 rounded border border-obsidian-700/60 transition-colors"
            >
              {pair.o.split('(')[0]} → {pair.d.split('(')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Footer de navegación del paso */}
      <div className="pt-4 border-t border-obsidian-700 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="bg-champagne hover:bg-champagne-hover text-obsidian-900 px-6 py-3 rounded font-mono text-xs uppercase font-bold tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-champagne/20"
        >
          <span>Paso 2: Fechas y Pasajeros</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
