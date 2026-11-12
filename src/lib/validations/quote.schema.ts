import { z } from 'zod';

// Step 1: Ruta y Tipo de Vuelo
export const step1RouteSchema = z
  .object({
    tripType: z.enum(['one_way', 'round_trip', 'multi_leg'], {
      required_error: 'Seleccione el tipo de viaje',
    }),
    origin: z.string().min(3, 'Indique aeropuerto o ciudad de origen válida (mínimo 3 caracteres)'),
    destination: z.string().min(3, 'Indique aeropuerto o ciudad de destino válida (mínimo 3 caracteres)'),
  })
  .refine((data) => data.origin.trim().toLowerCase() !== data.destination.trim().toLowerCase(), {
    message: 'El origen y el destino no pueden ser el mismo aeropuerto',
    path: ['destination'],
  });

// Step 2: Fechas y Pasajeros
export const step2DetailsSchema = z
  .object({
    departureDate: z.string().min(1, 'La fecha de salida es obligatoria'),
    departureTime: z.string().min(1, 'Seleccione un horario aproximado de salida'),
    returnDate: z.string().optional(),
    returnTime: z.string().optional(),
    passengers: z
      .number({ invalid_type_error: 'Indique número de pasajeros' })
      .int()
      .min(1, 'Mínimo 1 pasajero')
      .max(19, 'Para grupos mayores a 19 pasajeros contacte con aviación corporativa de gran escala'),
    luggageCount: z.number().int().min(0).default(2),
    petsOnBoard: z.boolean().default(false),
  })
  .refine(
    (data) => {
      if (data.returnDate && data.departureDate) {
        return new Date(data.returnDate) >= new Date(data.departureDate);
      }
      return true;
    },
    {
      message: 'La fecha de retorno no puede ser anterior a la de salida',
      path: ['returnDate'],
    }
  );

// Step 3: Categoría de Aeronave
export const step3AircraftSchema = z.object({
  aircraftCategory: z.enum(['any', 'light', 'midsize', 'heavy', 'ultra_long'], {
    required_error: 'Seleccione una categoría de aeronave sugerida',
  }),
  specialRequests: z.string().max(500, 'Máximo 500 caracteres').optional(),
});

// Step 4: Contacto y Confidencialidad
export const step4ContactSchema = z.object({
  fullName: z.string().min(3, 'Ingrese el nombre completo o de la entidad'),
  email: z.string().email('Ingrese un correo electrónico corporativo o personal válido'),
  phone: z.string().min(7, 'Ingrese un número telefónico de contacto válido con prefijo internacional'),
  clientType: z.enum(['passenger', 'executive_assistant', 'family_office', 'broker'], {
    required_error: 'Especifique su rol en la reserva',
  }),
  ndaRequired: z.boolean().default(false),
  consentPrivacy: z.literal(true, {
    errorMap: () => ({ message: 'Debe aceptar la política de privacidad y confidencialidad' }),
  }),
});

// Esquema unificado para validación final en API
export const fullQuoteSchema = step1RouteSchema
  .and(step2DetailsSchema)
  .and(step3AircraftSchema)
  .and(step4ContactSchema);

export type Step1RouteInput = z.infer<typeof step1RouteSchema>;
export type Step2DetailsInput = z.infer<typeof step2DetailsSchema>;
export type Step3AircraftInput = z.infer<typeof step3AircraftSchema>;
export type Step4ContactInput = z.infer<typeof step4ContactSchema>;
export type FullQuoteInput = z.infer<typeof fullQuoteSchema>;
