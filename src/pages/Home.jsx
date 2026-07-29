import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import heroBanner from '../assets/hero-banner.png';
import aboutOps from '../assets/about-operations.png';
import mineralsImg from '../assets/minerals-category.png';
import metalsImg from '../assets/metals-category.png';
import packagingImg from '../assets/packaging-category.png';

// Animated counter hook
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const categories = [
  {
    id: 'minerals',
    title: 'Minerals',
    desc: 'Garnet, Zircon, and Ilmenite — high-grade industrial minerals for abrasive, filtration, and manufacturing applications.',
    img: mineralsImg,
    alt: 'Industrial minerals — garnet, zircon, ilmenite',
  },
  {
    id: 'metals',
    title: 'Metals & Abrasives',
    desc: 'Steel Shot, Steel Grit, and Zinc — durable metallic abrasives and coatings for surface preparation and protection.',
    img: metalsImg,
    alt: 'Steel shot, steel grit, and zinc abrasive media',
  },
  {
    id: 'packaging',
    title: 'Packaging',
    desc: 'Jumbo Bags (FIBC) — heavy-duty bulk packaging for safe transport and storage of industrial materials.',
    img: packagingImg,
    alt: 'FIBC jumbo bags for bulk mineral transport',
  },
];

const valueProps = [
  {
    title: 'Global Sourcing Network',
    desc: 'Access to verified suppliers across major mineral-producing regions, ensuring competitive pricing and consistent quality.',
    icon: (
      <svg className="w-7 h-7 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: 'Industry-Grade Quality',
    desc: 'Every product meets rigorous specifications demanded by oil & gas, shipbuilding, and heavy fabrication industries.',
    icon: (
      <svg className="w-7 h-7 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Reliable Supply Chain',
    desc: 'Dependable logistics and inventory management to ensure your materials arrive when and where needed.',
    icon: (
      <svg className="w-7 h-7 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
      </svg>
    )
  },
  {
    title: 'Qatar-Based Expertise',
    desc: 'Locally positioned in Qatar with deep knowledge of GCC market requirements, regulations, and procurement standards.',
    icon: (
      <svg className="w-7 h-7 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsVisible(true); obs.unobserve(el); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-950">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img src={heroBanner} alt="Industrial mineral processing facility" className="w-full h-full object-cover opacity-30" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy-950/95 via-navy-900/75 to-navy-800/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent-400 border border-accent-500/30 bg-accent-500/10 rounded-full px-4 py-1.5 mb-8"
            style={{ animation: 'fadeSlideIn 0.7s ease forwards' }}
          >
            Qatar-Based · Global Supply
          </div>

          <h1
            className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 max-w-2xl"
            style={{ animation: 'fadeSlideIn 0.7s ease 0.15s both' }}
          >
            Your Trusted Partner in{' '}
            <em className="not-italic text-accent-400">Industrial Minerals</em>{' '}
            &amp; Abrasives
          </h1>

          <p
            className="text-lg text-white/65 max-w-xl leading-relaxed mb-10"
            style={{ animation: 'fadeSlideIn 0.7s ease 0.3s both' }}
          >
            Supplying high-grade garnet, steel abrasives, zinc, zircon, ilmenite, and industrial packaging to oil &amp; gas, shipbuilding, and manufacturing industries across the GCC and beyond.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeSlideIn 0.7s ease 0.45s both' }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-500/25"
            >
              Explore Products <span>→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm uppercase tracking-wider px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/40 text-xs uppercase tracking-widest animate-bounce">
          <span>Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={aboutOps} alt="Industrial port operations" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-500 mb-3">Who We Are</p>
              <h2 className="text-4xl font-bold text-navy-900 leading-tight mb-6">A Reliable Source for Industrial Minerals &amp; Abrasives</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                BBM Trading is a Qatar-based trading company that specializes in sourcing and supplying high-quality industrial minerals, steel abrasives, metals, and packaging solutions. We serve oil &amp; gas, shipbuilding, construction, fabrication, and manufacturing industries across the GCC and beyond.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                With a global sourcing network and deep expertise in the regional market, we connect buyers with the right products at competitive prices, backed by dependable logistics and consistent supply.
              </p>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                {[
                  { label: 'Product Lines', value: 7, suffix: '+' },
                  { label: 'Regional Reach', value: null, text: 'GCC' },
                  { label: 'Sourcing Network', value: null, text: 'Global' },
                ].map(({ label, value, suffix, text }) => {
                  const count = useCounter(value ?? 0, 1800, statsVisible);
                  return (
                    <div key={label}>
                      <div className="text-3xl font-extrabold text-navy-800">
                        {value !== null ? `${count}${suffix}` : text}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">{label}</div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-500 mb-3">Our Products</p>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What We Supply</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              From raw industrial minerals to precision abrasives and bulk packaging — we provide the materials that power your operations.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {categories.map(({ id, title, desc, img, alt }, i) => (
              <FadeIn key={id} delay={i * 0.1}>
                <Link
                  to={`/products?category=${id}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-500 group-hover:gap-2.5 transition-all duration-200">
                      View {title} <span>→</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BBM ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-500 mb-3">Why BBM Trading</p>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Built for Industrial Reliability</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              We combine global reach with regional expertise to deliver the materials your projects demand — on spec, on time.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {valueProps.map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="group p-8 rounded-xl border border-slate-100 hover:border-accent-200 hover:shadow-lg hover:shadow-accent-500/5 transition-all duration-300 text-center">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-accent-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-3">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Need a Quote or Product Specification Sheet?</h2>
            <p className="text-white/60 text-lg mb-10">
              Whether you're sourcing garnet for blasting, steel abrasives for surface preparation, or bulk packaging for export — our team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-slate-100 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get in Touch <span>→</span>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
              >
                Browse Products
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
