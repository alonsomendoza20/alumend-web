import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Alumend Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link href="/#servicios" className="text-gray-600 hover:text-gray-900">
              Servicios
            </Link>
            <Link href="/#proyectos" className="text-gray-600 hover:text-gray-900">
              Proyectos
            </Link>
            <Link href="/#contacto" className="text-gray-600 hover:text-gray-900">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
