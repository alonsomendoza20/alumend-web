'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Ventanas de aluminio modernas',
    description: 'Instalación de ventanas de aluminio con rotura de puente térmico',
    image: 'https://picsum.photos/800/600?random=1',
    category: 'ventanas'
  },
  {
    title: 'Cerramiento de terraza',
    description: 'Cerramiento completo de terraza con perfiles de aluminio y cristal',
    image: 'https://picsum.photos/800/600?random=2',
    category: 'cerramientos'
  },
  {
    title: 'Puertas correderas',
    description: 'Sistema de puertas correderas para acceso a jardín',
    image: 'https://picsum.photos/800/600?random=3',
    category: 'puertas'
  },
  {
    title: 'Mamparas de baño',
    description: 'Instalación de mamparas de baño personalizadas',
    image: 'https://picsum.photos/800/600?random=4',
    category: 'mamparas'
  },
  {
    title: 'Fachada comercial',
    description: 'Renovación completa de fachada comercial en aluminio',
    image: 'https://picsum.photos/800/600?random=5',
    category: 'fachadas'
  },
  {
    title: 'Barandillas',
    description: 'Barandillas de aluminio para escaleras y balcones',
    image: 'https://picsum.photos/800/600?random=6',
    category: 'barandillas'
  }
];

export default function Projects() {
  // Schema Markup para la galería de proyectos
  useEffect(() => {
    const projectsSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': projects.map((project, index) => ({
        '@type': 'ImageObject',
        'position': index + 1,
        'name': project.title,
        'description': project.description,
        'contentUrl': project.image,
        'category': project.category
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(projectsSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const categories = ['todos', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="slideUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre algunos de nuestros trabajos más destacados en carpintería de aluminio
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeIn" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <AnimateOnScroll
                key={project.title}
                animation="scale"
                delay={index * 0.1}
                className="group relative overflow-hidden rounded-lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                >
                  <a href={project.image} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative h-64 group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0vMjIyNzY3ODk6OjUxPUREREVJSUlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0v/2wBDARUXFx4aHjgeHjhFOzE7RUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                        <span className="px-4 py-2 bg-white/90 text-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0">
                          Ver más
                        </span>
                      </div>
                    </div>
                  </a>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
