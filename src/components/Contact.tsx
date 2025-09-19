"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimateOnScroll from './AnimateOnScroll';

// Inicializar EmailJS
emailjs.init('saGCKzclLB82UUaDz');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    sending: false,
    error: null as string | null,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ sending: true, error: null, success: false });

    try {
      await emailjs.send(
        'service_dalgh4p',
        'template_h5eeepl',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'grismalmendoza@hotmail.com'
        },
        'saGCKzclLB82UUaDz'
      );

      setStatus({ sending: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        sending: false, 
        error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.', 
        success: false 
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Contacto
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Estamos aquí para ayudarte con tus proyectos
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Dirección */}
          <div className="lg:col-span-2">
            <AnimateOnScroll animation="slideUp" delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-lg text-center mb-8">
                <div className="w-12 h-12 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visítanos</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Carrer de la Creu dels Molers, 49<br />
                  08004 Barcelona
                </p>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.087662321964!2d2.1657213!3d41.3739831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2699a4641ed%3A0x42f2c3684a8ce0de!2sCarrer%20de%20la%20Creu%20dels%20Molers%2C%2049%2C%2008004%20Barcelona!5e0!3m2!1ses!2ses!4v1684662416183!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Teléfono */}
          <AnimateOnScroll animation="slideUp" delay={0.4}>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-12 h-12 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Llámanos</h3>
              <a 
                href="tel:+34660145936" 
                className="text-xl text-blue-600 hover:text-blue-800 font-medium"
              >
                +34 660 145 936
              </a>
            </div>
          </AnimateOnScroll>

          {/* Formulario de contacto */}
          <AnimateOnScroll animation="slideUp" delay={0.6}>
            <div className="bg-gray-50 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status.sending}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status.sending ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                {status.error && (
                  <p className="text-red-600 text-sm mt-2">{status.error}</p>
                )}
                {status.success && (
                  <p className="text-green-600 text-sm mt-2">¡Mensaje enviado con éxito!</p>
                )}
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
