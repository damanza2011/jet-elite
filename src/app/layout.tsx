import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jet Elite · Alquiler de Jets Privados, Chárter y Propiedad Fraccionada UHNW',
  description:
    'Vuelos privados a su medida sin intermediarios. Flota ejecutiva certificada para chárter puntual y programas de horas garantizadas. Confidencialidad y respuesta en menos de 2 horas.',
  keywords: [
    'jet privado',
    'charter ejecutivo',
    'alquiler jet privado',
    'propiedad fraccionada',
    'vuelos vip',
    'empty legs',
    'aviacion ejecutiva',
  ],
  metadataBase: new URL('https://jet-elite.com'),
  openGraph: {
    title: 'Jet Elite · Aviación Privada y Chárter Ejecutivo UHNW',
    description:
      'Chárter de jets privados y propiedad fraccionada con estándares internacionales de seguridad.',
    url: 'https://jet-elite.com/es/',
    siteName: 'Jet Elite',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=85&w=1200',
        width: 1200,
        height: 630,
        alt: 'Jet Elite Private Aviation',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data Schema Organization & Airline Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Airline',
              name: 'Jet Elite',
              alternateName: 'Jet Elite Private Aviation',
              url: 'https://jet-elite.com',
              logo: 'https://jet-elite.com/logo.png',
              description:
                'Servicios de chárter de jets privados, propiedad fraccionada y gestión aeronáutica ejecutiva.',
              areaServed: ['España', 'Colombia', 'México', 'Estados Unidos', 'Internacional'],
              knowsLanguage: ['es', 'en'],
              potentialAction: {
                '@type': 'ReserveAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://jet-elite.com/es/#cotizar',
                  actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
                },
                result: {
                  '@type': 'FlightReservation',
                  name: 'Cotización de Vuelo Privado',
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-obsidian-900 text-platinum antialiased selection:bg-champagne selection:text-obsidian-900">
        {children}
      </body>
    </html>
  );
}
