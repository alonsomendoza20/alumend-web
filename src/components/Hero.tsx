import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/backgrounds/hero.jpg"
          alt="Fondo de carpintería de aluminio"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Soluciones en Aluminio</span>
          <span className="block mt-2">para tu Hogar y Negocio</span>
        </h1>
        
        <p className="mt-6 max-w-lg mx-auto text-xl sm:text-2xl md:max-w-3xl">
          Diseño, fabricación e instalación de ventanas, puertas y cerramientos en
          aluminio de alta calidad
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Solicitar Presupuesto
          </Link>
          <Link
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Ver Proyectos
          </Link>
        </div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
}
