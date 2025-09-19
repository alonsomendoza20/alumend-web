"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from './AnimateOnScroll';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Cuál es el tiempo estimado de instalación?",
    answer: "El tiempo de instalación varía según el proyecto. Para ventanas estándar, normalmente completamos la instalación en 1-2 días. Para proyectos más grandes o personalizados, podemos tardar entre 3-5 días. Siempre proporcionamos un calendario detallado antes de comenzar."
  },
  {
    question: "¿Qué garantía ofrecen en sus productos?",
    answer: "Todos nuestros productos tienen una garantía de 10 años que cubre defectos de fabricación y materiales. La garantía incluye el perfil de aluminio, los herrajes y el vidrio. Además, ofrecemos 2 años de garantía en la instalación."
  },
  {
    question: "¿Qué tipos de vidrio ofrecen?",
    answer: "Ofrecemos varios tipos de vidrio según sus necesidades: doble acristalamiento con cámara de aire, triple acristalamiento para máximo aislamiento, vidrio de seguridad, vidrio de control solar, y vidrio acústico para reducción de ruido."
  },
  {
    question: "¿Realizan mantenimiento post-instalación?",
    answer: "Sí, ofrecemos servicio de mantenimiento post-instalación. Recomendamos una revisión anual para asegurar el óptimo funcionamiento de ventanas y puertas. El mantenimiento incluye ajuste de herrajes, limpieza de carriles y verificación de sellos."
  },
  {
    question: "¿Cómo puedo obtener un presupuesto?",
    answer: "Puede solicitar un presupuesto gratuito a través de nuestro formulario de contacto, llamándonos al +34 660 145 936, o enviándonos un email. Realizamos visitas técnicas sin compromiso para tomar medidas exactas y entender mejor sus necesidades."
  },
  {
    question: "¿Qué ventajas tiene el aluminio frente a otros materiales?",
    answer: "El aluminio ofrece múltiples ventajas: durabilidad excepcional, bajo mantenimiento, excelente aislamiento térmico y acústico (con rotura de puente térmico), resistencia a la corrosión, variedad de acabados y colores, y es 100% reciclable."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(current =>
      current.includes(index)
        ? current.filter(i => i !== index)
        : [...current, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Resolvemos tus dudas sobre nuestros servicios y productos
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <AnimateOnScroll key={index} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
