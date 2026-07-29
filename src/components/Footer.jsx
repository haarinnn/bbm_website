import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

const productLinks = [
  { label: 'Garnet', to: '/products#garnet' },
  { label: 'Zircon', to: '/products#zircon' },
  { label: 'Ilmenite', to: '/products#ilmenite' },
  { label: 'Steel Shot & Grit', to: '/products#steel-shot' },
  { label: 'Zinc', to: '/products#zinc' },
  { label: 'Jumbo Bags', to: '/products#jumbo-bags' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-extrabold text-lg tracking-widest uppercase text-white mb-3">
              BBM <span className="font-light opacity-60">Trading</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A Qatar-based trading company specializing in industrial minerals, steel abrasives, metals, and packaging solutions for global industries.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map(({ label, to }) => (
                <Link key={to} to={to} className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Products</h4>
            <nav className="flex flex-col gap-2">
              {productLinks.map(({ label, to }) => (
                <Link key={to} to={to} className="text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">Contact</h4>
            <div className="flex flex-col gap-3.5 text-sm">
              <div className="flex gap-3 items-start">
                <svg className="w-4 h-4 text-accent-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>[Company Address]<br />Doha, Qatar</span>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>[Phone Number]</span>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>[Email Address]</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <span>© 2025 BBM Trading. All rights reserved.</span>
          <span>Doha, Qatar</span>
        </div>
      </div>
    </footer>
  );
}
