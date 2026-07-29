import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const navBg = isHome
    ? scrolled
      ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/10'
      : 'bg-transparent'
    : 'bg-navy-900 shadow-md';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo — left */}
        <Link
          to="/"
          className="font-extrabold text-lg tracking-widest uppercase text-white hover:opacity-80 transition-opacity"
        >
          BBM <span className="font-light opacity-60">Trading</span>
        </Link>

        {/* Desktop nav — right aligned, all links simple and identical */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium relative pb-1 transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent-400 after:transition-all after:duration-300
                  ${isActive
                    ? 'text-white after:w-full font-semibold'
                    : 'text-white/75 hover:text-white after:w-0 hover:after:w-full'
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy-900/98 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium py-1 transition-colors ${isActive ? 'text-white font-semibold' : 'text-white/70 hover:text-white'}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
