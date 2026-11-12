import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { User, Mail, Phone, ShieldCheck, ArrowLeft, Send, Lock, Clock } from 'lucide-react';
import { QuoteFormData } from '@/lib/types';

interface Step4ContactProps {
  form: UseFormReturn<QuoteFormData>;
  onBack: () => void;
  isSubmitting: boolean;
}

export const Step4Contact: React.FC<Step4ContactProps> = ({ form, onBack, isSubmitting }) => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-6">
      {/* Aviso de Confidencialidad UHNW */}
      <div className="flex items-start gap-3 p-3.5 rounded bg-obsidian-800/80 border border-champagne/30 text-xs">
        <Lock className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
        <div className="text-silver">
          <strong className="text-platinum font-mono uppercase tracking-wide block mb-0.5">
            Protocolo de Confidencialidad Estricto
          </strong>
          Sus datos de contacto e itinerario solo serán procesados por nuestro Flight Dispatcher certificado. No compartimos información con terceros ni agregadores.
        </div>
      </div>

      {/* Datos Personales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombre Completo */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-champagne" />
            <span>Nombre Completo o Razón Social</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Ej. Carlos Mendoza o Family Office"
            {...register('fullName')}
            className={`w-full bg-obsidian-800 border ${
              errors.fullName ? 'border-red-500' : 'border-obsidian-700 focus:border-champagne'
            } rounded px-3.5 py-2.5 text-sm text-platinum placeholder:text-silver/50 focus:outline-none`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-400 font-mono mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email Corporativo o Privado */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-champagne" />
            <span>Correo Electrónico Directo</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="carlos@empresa.com"
            {...register('email')}
            className={`w-full bg-obsidian-800 border ${
              errors.email ? 'border-red-500' : 'border-obsidian-700 focus:border-champagne'
            } rounded px-3.5 py-2.5 text-sm text-platinum placeholder:text-silver/50 focus:outline-none`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400 font-mono mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Teléfono Móvil con Prefijo */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-champagne" />
            <span>Teléfono con Código de País (WhatsApp/Voz)</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+34 600 000 000 o +57 300 000 0000"
            {...register('phone')}
            className={`w-full bg-obsidian-800 border ${
              errors.phone ? 'border-red-500' : 'border-obsidian-700 focus:border-champagne'
            } rounded px-3.5 py-2.5 text-sm text-platinum placeholder:text-silver/50 focus:outline-none font-mono text-xs`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-400 font-mono mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Tipo de Cliente / Rol en la Reserva */}
        <div className="space-y-1.5">
          <label htmlFor="clientType" className="text-xs font-mono uppercase tracking-wider text-silver flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
            <span>Perfil del Solicitante</span>
          </label>
          <select
            id="clientType"
            {...register('clientType')}
            className="w-full bg-obsidian-800 border border-obsidian-700 focus:border-champagne rounded px-3.5 py-2.5 text-xs text-platinum focus:outline-none cursor-pointer"
          >
            <option value="passenger">Pasajero Principal</option>
            <option value="executive_assistant">Asistente Ejecutivo / PA</option>
            <option value="family_office">Family Office / Wealth Manager</option>
            <option value="broker">Chárter Broker / Agente Autorizado</option>
          </select>
        </div>
      </div>

      {/* NDA y Check de Privacidad */}
      <div className="space-y-3 pt-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('ndaRequired')}
            className="w-4 h-4 rounded bg-obsidian-800 border-obsidian-700 text-champagne focus:ring-champagne"
          />
          <span className="text-xs text-platinum font-mono">
            Requiero firma mutua de Acuerdo de No Divulgación (NDA) antes del itinerario definitivo.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('consentPrivacy' as any)}
            className="w-4 h-4 rounded bg-obsidian-800 border-obsidian-700 text-champagne focus:ring-champagne mt-0.5"
          />
          <span className="text-[11px] text-silver leading-relaxed">
            Autorizo el tratamiento de mis datos confidenciales para la emisión y seguimiento exclusivo de esta cotización de chárter VIP de acuerdo con las normativas GDPR y Ley de Protección de Datos.
          </span>
        </label>
        {errors['consentPrivacy' as keyof typeof errors] && (
          <p className="text-[11px] text-red-400 font-mono">Debe aceptar la política de confidencialidad</p>
        )}
      </div>

      {/* SLA y Envío */}
      <div className="pt-4 border-t border-obsidian-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="text-silver hover:text-platinum text-xs font-mono uppercase font-bold flex items-center gap-2 transition-colors px-3 py-2 w-full sm:w-auto justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Atrás</span>
        </button>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <span className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-silver">
            <Clock className="w-3 h-3 text-champagne" />
            <span>Respuesta &lt; 120 min</span>
          </span>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-champagne hover:bg-champagne-hover disabled:opacity-50 text-obsidian-900 px-8 py-3.5 rounded font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-champagne/25"
          >
            {isSubmitting ? (
              <span>Calculando y enviando...</span>
            ) : (
              <>
                <span>Emitir Solicitud de Cotización</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
