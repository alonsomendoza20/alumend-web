'use client';

import { useEffect } from 'react';

interface SchemaMarkupProps {
  businessName?: string;
  description?: string;
  address?: string;
  telephone?: string;
  email?: string;
}

export default function SchemaMarkup({
  businessName = "Alumend",
  description = "Carpintería de aluminio especializada en ventanas, puertas, mamparas y cerramientos",
  address = "Tu dirección aquí",
  telephone = "Tu teléfono aquí",
  email = "tu@email.com"
}: SchemaMarkupProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://tudominio.com/#business",
      "name": businessName,
      "description": description,
      "url": "https://tudominio.com",
      "telephone": telephone,
      "email": email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address,
        "addressLocality": "Tu ciudad",
        "addressRegion": "Tu región",
        "postalCode": "Código postal",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "XX.XXXXX",
        "longitude": "XX.XXXXX"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/tubusiness",
        "https://www.instagram.com/tubusiness"
      ],
      "image": [
        "https://tudominio.com/logo.jpg"
      ],
      "priceRange": "€€",
      "servesCuisine": "Carpintería de aluminio"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [businessName, description, address, telephone, email]);

  return null;
}
