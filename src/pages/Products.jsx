import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products, categoryOrder } from '../data/products';
import FadeIn from '../components/FadeIn';

// ── Icons as simple SVG inline ──
const icons = {
  chevronDown: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  checkSquare: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  trendingUp: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

// ── Collapsible grade breakdown ──
function GradeAccordion({ grade }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
      >
        <span className="font-semibold text-navy-800 text-sm">{grade.name}</span>
        <span className={`text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          {icons.chevronDown}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '500px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
          {grade.desc}
        </p>
      </div>
    </div>
  );
}

// ── Collapsible product section ──
function ProductSection({ section }) {
  const [open, setOpen] = useState(true);
  const iconMap = { 'check-square': icons.checkSquare, 'trending-up': icons.trendingUp };
  const SectionIcon = iconMap[section.icon] || icons.checkSquare;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 bg-navy-50/50 hover:bg-navy-50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-accent-500">{SectionIcon}</span>
          <span className="font-bold text-navy-800 text-[0.9375rem]">{section.title}</span>
        </div>
        <span className={`text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          {icons.chevronDown}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '2000px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="px-6 py-5 border-t border-slate-100 space-y-4">
          {section.content && (
            <p className="text-slate-600 text-sm leading-relaxed">{section.content}</p>
          )}
          {section.grades && (
            <div className="space-y-2">
              {section.grades.map(g => <GradeAccordion key={g.name} grade={g} />)}
            </div>
          )}
          {section.bullets && (
            <ul className="space-y-2.5">
              {section.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <span className="text-accent-500 mt-0.5 flex-shrink-0">●</span>
                  <span dangerouslySetInnerHTML={{ __html: b.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Product card (Badge box removed per user request) ──
function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  return (
    <div id={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header — clean heading only */}
      <div className="p-7 pb-5">
        <h3 className="text-2xl font-bold text-navy-900 mb-3">{product.name}</h3>
        <p className={`text-slate-600 text-sm leading-relaxed ${open ? '' : 'line-clamp-3'}`}>
          {product.overview}
        </p>
        {product.overview.length > 200 && (
          <button
            onClick={() => setOpen(o => !o)}
            className="text-accent-500 hover:text-accent-600 text-xs font-semibold mt-1.5 transition-colors inline-block"
          >
            {open ? 'Show less ↑' : 'Read more ↓'}
          </button>
        )}
      </div>

      {/* Sections */}
      <div className="px-7 pb-7 space-y-3">
        {product.sections.map(section => (
          <ProductSection key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

// ── Main Products Page ──
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activeSidebarItem, setActiveSidebarItem] = useState(null);
  const contentRef = useRef(null);

  // Sync URL query param -> activeCategory
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setSearchParams(cat === 'all' ? {} : { category: cat });
    if (contentRef.current) {
      window.scrollTo({ top: contentRef.current.offsetTop - 100, behavior: 'smooth' });
    }
  };

  const visibleCategories = activeCategory === 'all'
    ? categoryOrder
    : categoryOrder.filter(k => k === activeCategory);

  // Scrollspy: highlight sidebar item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const allProducts = categoryOrder.flatMap(k => products[k].items);
      for (let i = allProducts.length - 1; i >= 0; i--) {
        const el = document.getElementById(allProducts[i].id);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSidebarItem(allProducts[i].id);
          return;
        }
      }
      setActiveSidebarItem(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProduct = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* ── PAGE HEADER ── */}
      <header className="pt-[calc(72px+3rem)] pb-12 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Products</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-3">Our Products</h1>
          <p className="text-white/60 text-lg max-w-lg">Industrial minerals, steel abrasives, metals, and packaging solutions — sourced globally, supplied reliably.</p>
        </div>
      </header>

      {/* ── CATEGORY TABS ── */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 py-3 overflow-x-auto scrollbar-hide">
            {[{ key: 'all', label: 'All Products' }, ...categoryOrder.map(k => ({ key: k, label: products[k].label }))].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleCategoryChange(key)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                  ${activeCategory === key
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-800 hover:bg-slate-100'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="max-w-6xl mx-auto px-6 py-12" ref={contentRef}>
        <div className="flex gap-8 items-start">

          {/* Sidebar — sticky */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-[140px]">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Nav</span>
              </div>
              <nav className="p-2">
                {categoryOrder
                  .filter(k => activeCategory === 'all' || activeCategory === k)
                  .map(catKey => {
                    const cat = products[catKey];
                    return (
                      <div key={catKey} className="mb-3">
                        <button
                          onClick={() => handleCategoryChange(catKey)}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-navy-700 hover:bg-navy-50 transition-colors flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                          {cat.label}
                        </button>
                        <div className="ml-4 space-y-0.5">
                          {cat.items.map(item => (
                            <button
                              key={item.id}
                              onClick={() => scrollToProduct(item.id)}
                              className={`w-full text-left px-3 py-1.5 rounded text-sm transition-all duration-150
                                ${activeSidebarItem === item.id
                                  ? 'text-accent-600 bg-accent-50 font-semibold'
                                  : 'text-slate-500 hover:text-navy-800 hover:bg-slate-50'
                                }`}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </nav>
            </div>

            {/* Quick CTA */}
            <div className="mt-4 bg-navy-800 rounded-xl p-5 text-white">
              <p className="text-sm font-bold mb-1">Need a quote?</p>
              <p className="text-xs text-white/60 mb-4">Request pricing or spec sheets for any product.</p>
              <Link
                to="/contact"
                className="block text-center bg-accent-500 hover:bg-accent-400 text-white text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-colors duration-200"
              >
                Get in Touch →
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 space-y-12">
            {visibleCategories.map((catKey) => {
              const cat = products[catKey];
              return (
                <div key={catKey}>
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-navy-800">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500 font-bold">
                      {catKey === 'minerals' ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                        </svg>
                      ) : catKey === 'metals' ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900">{cat.label}</h2>
                      <p className="text-sm text-slate-500">{cat.description}</p>
                    </div>
                  </div>

                  {/* Product cards */}
                  <div className="space-y-6">
                    {cat.items.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </main>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Need Technical Specifications or Pricing?</h2>
            <p className="text-white/60 text-lg mb-10">Our team can provide detailed product datasheets, material certifications, and competitive quotes tailored to your project requirements.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-slate-100 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5">
                Request a Quote <span>→</span>
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:bg-white/5">
                About BBM Trading
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
