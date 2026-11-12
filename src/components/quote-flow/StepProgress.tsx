import React from 'react';
import { Check } from 'lucide-react';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepsLabels: string[];
  onStepClick?: (step: number) => void;
}

export const StepProgress: React.FC<StepProgressProps> = ({
  currentStep,
  totalSteps,
  stepsLabels,
  onStepClick,
}) => {
  return (
    <nav aria-label="Progreso de la solicitud de cotización" className="w-full mb-6">
      <ol className="flex items-center justify-between relative">
        {/* Background connector line */}
        <div className="absolute top-4 left-6 right-6 h-0.5 bg-obsidian-700 -z-0" />
        
        {/* Active connector progress */}
        <div
          className="absolute top-4 left-6 h-0.5 bg-champagne transition-all duration-500 -z-0"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 90}%`,
          }}
        />

        {stepsLabels.map((label, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <li
              key={label}
              className="relative z-10 flex flex-col items-center"
              aria-current={isCurrent ? 'step' : undefined}
            >
              <button
                type="button"
                disabled={!isCompleted && !isCurrent}
                onClick={() => isCompleted && onStepClick?.(stepNumber)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-champagne text-obsidian-900 cursor-pointer shadow-md shadow-champagne/30'
                    : isCurrent
                    ? 'bg-obsidian-900 border-2 border-champagne text-champagne ring-4 ring-champagne/20'
                    : 'bg-obsidian-800 border border-obsidian-700 text-silver cursor-not-allowed'
                }`}
                title={isCompleted ? `Regresar al paso ${stepNumber}: ${label}` : label}
              >
                {isCompleted ? <Check className="w-4 h-4 stroke-[2.5]" /> : stepNumber}
              </button>
              <span
                className={`mt-2 text-[10px] font-mono tracking-wider uppercase transition-colors hidden sm:block ${
                  isCurrent ? 'text-champagne font-bold' : isCompleted ? 'text-platinum' : 'text-silver/60'
                }`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
