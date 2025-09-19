import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const services = [
  {
    title: 'Ventanas',
    description: 'Ventanas de aluminio con los más altos estándares de calidad y eficiencia energética',
    icon: '/window-icon.svg'
  },
  {
    title: 'Puertas',
    description: 'Puertas de entrada, correderas y plegables adaptadas a tus necesidades',
    icon: '/door-icon.svg'
  },
  {
    title: 'Cerramientos',
    description: 'Cerramientos de terrazas y espacios exteriores para aprovechar al máximo tu espacio',
    icon: '/enclosure-icon.svg'
  },
  {
    title: 'Mamparas',
    description: 'Mamparas de baño y separadores de espacios con diseños modernos y funcionales',
    icon: '/partition-icon.svg'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="slideUp">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas en carpintería de aluminio, desde el diseño hasta la instalación
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              animation="slideUp"
              delay={index * 0.2}
            >
              <div className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">

              <div className="w-12 h-12 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
