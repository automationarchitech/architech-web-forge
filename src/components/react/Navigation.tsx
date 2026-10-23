import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const CONTACT_LABEL = 'Contact';

const linkClass = 'px-3 py-2 text-sm font-medium transition-colors duration-200';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const renderLink = (href: string, label: string, variant: 'default' | 'button' = 'default') => {
    if (variant === 'button') {
      return (
        <a
          key={label}
          href={href}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200"
          onClick={closeMenu}
        >
          {label}
        </a>
      );
    }

    return (
      <a
        key={label}
        href={href}
        className={cn('text-gray-600 hover:text-gray-900', linkClass)}
        onClick={closeMenu}
      >
        {label}
      </a>
    );
  };

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md border-gray-100 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt={siteConfig.title}
            className="h-12 w-12"
            loading="lazy"
          />
          <p className="text-lg font-semibold text-gray-900">{siteConfig.title}</p>
        </a>

        <div className="hidden items-center space-x-6 md:flex">
          {siteConfig.navigation.map((item) =>
            renderLink(item.href, item.label, item.label === CONTACT_LABEL ? 'button' : 'default')
          )}
        </div>

        <button
          className="text-gray-600 hover:text-gray-900 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-4 py-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'block rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-colors duration-200',
                  item.label === CONTACT_LABEL && 'bg-gray-900 text-white hover:bg-gray-800'
                )}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
