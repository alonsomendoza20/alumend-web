'use client';

import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // Cargar el script de Google Reviews
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Opiniones verificadas de Google
          </p>
        </div>
        
        <div className="elfsight-app-63348f45-5bb6-47dc-9c92-d39d8ce268bb" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}
