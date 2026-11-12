import { NextRequest, NextResponse } from 'next/server';
import { fullQuoteSchema } from '@/lib/validations/quote.schema';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validación estricta en servidor con Zod
    const validationResult = fullQuoteSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Datos de cotización inválidos',
          issues: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const validData = validationResult.data;

    // Generar identificador único de expediente FBO
    const referenceId = `JE-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    // TODO: conectar con CRM de aviación privada (ej. FL3XX, Schedaero, Salesforce o email transaccional)
    // console.log('[DISPATCH_OPERATIONS_QUOTE_RECEIVED]', { referenceId, validData });

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: 'Solicitud de cotización recibida y en proceso de verificación de slots.',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno al procesar la cotización' },
      { status: 500 }
    );
  }
}
