import type { Metadata } from "next";
import { Geist } from "next/font/google";
import './globals.css';
import ClientSchemaMarkup from '@/components/ClientSchemaMarkup';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'Alumend - Carpintería de Aluminio en Madrid | Ventanas, Puertas y Cerramientos',
  description: 'Expertos en carpintería de aluminio: ventanas, puertas, mamparas y cerramientos. Soluciones profesionales y eficientes para tu hogar o negocio. Presupuesto sin compromiso.',
  keywords: 'carpintería aluminio, ventanas aluminio, puertas aluminio, cerramientos, mamparas, barandillas, fachadas, Madrid',
  authors: [{ name: 'Alumend' }],
  creator: 'Alumend',
  publisher: 'Alumend',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://tudominio.com',
    title: 'Alumend - Carpintería de Aluminio en Madrid',
    description: 'Expertos en carpintería de aluminio: ventanas, puertas, mamparas y cerramientos. Soluciones profesionales.',
    siteName: 'Alumend',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alumend - Carpintería de Aluminio en Madrid',
    description: 'Expertos en carpintería de aluminio: ventanas, puertas, mamparas y cerramientos.',
    creator: '@alumend',
  },
  alternates: {
    canonical: 'https://tudominio.com',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientSchemaMarkup 
          businessName="Alumend"
          description="Carpintería de aluminio en Barcelona especializada en ventanas, puertas, mamparas y cerramientos. Soluciones profesionales y eficientes."
          address="Carrer del Dos de Maig, 234, 08013 Barcelona"
          telephone="+34 931 52 52 10"
          email="info@alumend.com"
        />
        {children}
      </body>
    </html>
  );
}
