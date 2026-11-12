import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Calendar, Clock, Users, Briefcase, Dog, ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';
import { QuoteFormData } from '@/lib/types';

interface Step2DetailsProps {
  form: UseFormReturn<QuoteFormData>;
  onNext: () => void;
  onBack: () => void;
}

export const Step2Details: React.FC<Step2DetailsProps> = ({ form, onNext, onBack }) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const tripType = watch('tripType');
  const passengers = watch('passengers') || 1;
  const luggageCount = watch('luggageCount') || 2;
  const petsOnBoard = watch('petsOnBoard');

  return (
    <div className="space-y-6">
      {/* Fechas y Horarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fecha y Hora de Salida */}
        <div className="space-y-2 bg-obsidian-800/60 p-4 rounded border border-obsidian-700">
          <label className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-champagne" />
            <span>Salida Estimada</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="date"
                {...register('departureDate')}
                className={`w-full bg-obsidian-900 border ${
                  errors.departureDate ? 'border-red-500' : 'border-obsidian-700 focus:border-champagne'
                } rounded px-3 py-2 text-xs text-platinum focus:outline-none`}
              />
              {errors.departureDate && (
                <p className="text-[10px] text-red-400 font-mono mt-1">{errors.departureDate.message}</p>
              )}
            </div>
            <div>
              <select
                {...register('departureTime')}
                className="w-full bg-obsidian-900 border border-obsidian-700 focus:border-champagne rounded px-3 py-2 text-xs text-platinum focus:outline-none cursor-pointer"
              >
                <option value="08:00">08:00 (Mañana)</option>
                <option value="12:00">12:00 (Mediodía)</option>
                <option value="16:00">16:00 (Tarde)</option>
                <option value="20:00">20:00 (Noche)</option>
                <option value="custom">Horario Flexible / Por Definir</option>
              </select>
            </div>
          </div>
        </div>

        {/* Fecha y Hora de Regreso (si aplica) */}
        {tripType === 'round_trip' ? (
          <div className="space-y-2 bg-obsidian-800/60 p-4 rounded border border-obsidian-700">
            <label className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-champagne" />
              <span>Regreso Estimado</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="date"
                  {...register('returnDate')}
                  className={`w-full bg-obsidian-900 border ${
                    errors.returnDate ? 'border-red-500' : 'border-obsidian-700 focus:border-champagne'
                  } rounded px-3 py-2 text-xs text-platinum focus:outline-none`}
                />
                {errors.returnDate && (
                  <p className="text-[10px] text-red-400 font-mono mt-1">{errors.returnDate.message}</p>
                )}
              </div>
              <div>
                <select
                  {...register('returnTime')}
                  className="w-full bg-obsidian-900 border border-obsidian-700 focus:border-champagne rounded px-3 py-2 text-xs text-platinum focus:outline-none cursor-pointer"
                >
                  <option value="10:00">10:00</option>
                  <option value="14:00">14:00</option>
                  <option value="18:00">18:00</option>
                  <option value="22:00">22:00</option>
                  <option value="custom">Flexible</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center p-4 rounded border border-dashed border-obsidian-700/80 bg-obsidian-800/30 text-silver text-xs font-mono">
            <span>Vuelo configurado como Solo Ida. Si necesita regreso, cambie la modalidad en el Paso 1.</span>
          </div>
        )}
      </div>

      {/* Pasajeros, Equipaje y Mascotas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pasajeros Stepper */}
        <div className="space-y-2 bg-obsidian-800/80 p-3.5 rounded border border-obsidian-700">
          <label className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-champagne" />
            <span>Pasajeros</span>
          </label>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setValue('passengers', Math.max(1, passengers - 1))}
              className="w-8 h-8 rounded bg-obsidian-900 border border-obsidian-700 flex items-center justify-center text-platinum hover:border-champagne transition-colors"
              aria-label="Restar pasajero"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-lg font-bold text-platinum">{passengers}</span>
            <button
              type="button"
              onClick={() => setValue('passengers', Math.min(19, passengers + 1))}
              className="w-8 h-8 rounded bg-obsidian-900 border border-obsidian-700 flex items-center justify-center text-platinum hover:border-champagne transition-colors"
              aria-label="Sumar pasajero"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Piezas de Equipaje */}
        <div className="space-y-2 bg-obsidian-800/80 p-3.5 rounded border border-obsidian-700">
          <label className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-champagne" />
            <span>Maletas Estimadas</span>
          </label>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setValue('luggageCount', Math.max(0, luggageCount - 1))}
              className="w-8 h-8 rounded bg-obsidian-900 border border-obsidian-700 flex items-center justify-center text-platinum hover:border-champagne transition-colors"
              aria-label="Restar maleta"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-lg font-bold text-platinum">{luggageCount}</span>
            <button
              type="button"
              onClick={() => setValue('luggageCount', luggageCount + 1)}
              className="w-8 h-8 rounded bg-obsidian-900 border border-obsidian-700 flex items-center justify-center text-platinum hover:border-champagne transition-colors"
              aria-label="Sumar maleta"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mascotas en Cabina */}
        <div className="space-y-2 bg-obsidian-800/80 p-3.5 rounded border border-obsidian-700 flex flex-col justify-between">
          <label className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <Dog className="w-3.5 h-3.5 text-champagne" />
            <span>Mascotas en Cabina</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer py-1">
            <input
              type="checkbox"
              {...register('petsOnBoard')}
              className="w-4 h-4 rounded bg-obsidian-900 border-obsidian-700 text-champagne focus:ring-champagne"
            />
            <span className="text-xs text-platinum">Viajaré con mascota</span>
          </label>
        </div>
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
          <span>Paso 3: Categoría de Aeronave</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
