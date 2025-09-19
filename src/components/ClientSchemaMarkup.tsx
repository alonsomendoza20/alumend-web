'use client';

interface SchemaMarkupProps {
  businessName: string;
  description: string;
  address: string;
  telephone: string;
  email: string;
}

export default function ClientSchemaMarkup({
  businessName,
  description,
  address,
  telephone,
  email,
}: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: businessName,
          description: description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: address,
          },
          telephone: telephone,
          email: email,
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
            opens: '09:00',
            closes: '18:00',
          },
        }),
      }}
    />
  );
}
