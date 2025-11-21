'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Função para scroll suave ou navegação
  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();

    // Se não estiver na página home, navega primeiro para home
    if (pathname !== '/') {
      router.push(`/#${targetId}`);
    } else {
      // Se já estiver na home, faz scroll suave
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Fecha o menu mobile após clique
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              <img src="/logo_lelume.png" alt="Logo lelume" className='img-header-logo' />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Sobre nós
            </Link>
            <button
              onClick={(e) => handleSmoothScroll(e, 'parceiros')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Parceiros
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, 'feiras')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Feiras
            </button>
            <button
              onClick={(e) => handleSmoothScroll(e, 'contato')}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contato
            </button>
            {/* <Link
              href="/feiras"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Feiras
            </Link>
            <Link
              href="/contato"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contato
            </Link> */}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } md:hidden`}>
          <div
            className="fixed inset-0 bg-header-menu bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        </div>

        {/* Mobile Menu Sidebar */}
        <div className={`fixed right-0 top-0 h-full w-80 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden bg-white shadow-xl`}>
            {/* Header do menu */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <img src="/logo_lelume.png" alt="Logo lelume" className="h-8" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/sobre"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 px-3 py-3 text-lg font-medium transition-colors border-b border-gray-100"
              >
                Sobre nós
              </Link>
              <button
                onClick={(e) => handleSmoothScroll(e, 'parceiros')}
                className="text-left text-gray-700 hover:text-gray-900 px-3 py-3 text-lg font-medium transition-colors border-b border-gray-100"
              >
                Parceiros
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, 'feiras')}
                className="text-left text-gray-700 hover:text-gray-900 px-3 py-3 text-lg font-medium transition-colors border-b border-gray-100"
              >
                Feiras
              </button>
              <button
                onClick={(e) => handleSmoothScroll(e, 'contato')}
                className="text-left text-gray-700 hover:text-gray-900 px-3 py-3 text-lg font-medium transition-colors border-b border-gray-100"
              >
                Contato
              </button>
            </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
