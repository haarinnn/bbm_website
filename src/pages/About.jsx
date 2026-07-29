import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import aboutOps from '../assets/about-operations.png';

const missionCards = [
  {
    title: 'Uncompromising Quality',
    desc: 'We source only from verified, reputable producers and conduct rigorous quality checks to ensure every shipment meets the specifications our clients demand. In industries where material quality directly impacts safety and performance, there is no room for compromise.',
    icon: (
      <svg className="w-7 h-7 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Dependable Partnerships',
    desc: 'We believe in building long-term relationships with both suppliers and buyers. Transparent communication, fair pricing, and consistent delivery are the foundations of every partnership we form — because repeat business is the best endorsement of our reliability.',
    icon: (
      <svg className="w-7 h-7 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Operational Reliability',
    desc: 'From order confirmation to final delivery, we manage the supply chain with precision. Our logistics expertise and regional positioning in Qatar enable us to serve clients efficiently, minimizing lead times and ensuring materials arrive when and where they are needed.',
    icon: (
      <svg className="w-7 h-7 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
];

const whyCards = [
  {
    title: 'Global Reach',
    desc: 'Access to a diversified network of producers and suppliers across major mineral-producing regions worldwide.',
    icon: (
      <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    title: 'Specification Compliance',
    desc: 'Every product is verified against industry specifications. We supply materials that meet the exact grades and standards your projects require.',
    icon: (
      <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Streamlined Logistics',
    desc: 'Efficient supply chain management from origin to destination, with flexible delivery options tailored to your project timelines.',
    icon: (
      <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
      </svg>
    )
  },
  {
    title: 'Dedicated Support',
    desc: 'Responsive, knowledgeable account management that understands your industry and anticipates your procurement needs.',
    icon: (
      <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];

const productLines = [
  { label: 'Garnet', note: 'Industrial abrasive & filtration mineral', id: 'minerals' },
  { label: 'Zircon', note: 'Zirconium silicate for ceramics & refractories', id: 'minerals' },
  { label: 'Ilmenite', note: 'Titanium-iron oxide mineral feedstock', id: 'minerals' },
  { label: 'Steel Shot', note: 'Spherical abrasive for peening & cleaning', id: 'metals' },
  { label: 'Steel Grit', note: 'Angular abrasive for aggressive profiling', id: 'metals' },
  { label: 'Zinc', note: 'Protective coatings & corrosion resistance', id: 'metals' },
];

export default function About() {
  return (
    <div>
      {/* ── PAGE HEADER ── */}
      <header className="pt-[calc(72px+3rem)] pb-12 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">About</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-3">About BBM Trading</h1>
          <p className="text-white/60 text-lg max-w-lg">A Qatar-based trading company built on quality, reliability, and deep industry expertise in industrial minerals and abrasives.</p>
        </div>
      </header>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src={aboutOps} alt="Industrial port and cargo operations" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-500 mb-3">Our Company</p>
              <h2 className="text-4xl font-bold text-navy-900 leading-tight mb-6">Connecting Industries with the Materials They Need</h2>
              <div className="space-y-4 text-slate-600 text-[1.0625rem] leading-relaxed">
                <p>BBM Trading is a Qatar-based trading company that specializes in the sourcing, supply, and distribution of high-quality industrial minerals, steel abrasives, metals, and packaging solutions. We serve a wide range of sectors — including oil & gas, shipbuilding, fabrication, construction, ceramics, and manufacturing — across the GCC and beyond.</p>
                <p>Founded with a commitment to bridging global supply with regional demand, we work directly with verified producers and logistics partners to ensure that our clients receive materials that meet exact specifications, delivered on schedule and at competitive prices.</p>
                <p>Our product portfolio spans seven core lines — Garnet, Steel Shot, Steel Grit, Zinc, Zircon, Ilmenite, and Jumbo Bags — each carefully sourced to meet the demanding standards of industrial and technical buyers.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── MISSION & VALUES ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-500 mb-3">Our Values</p>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What Drives Us</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">At BBM Trading, our business is built on three pillars that define every relationship, transaction, and product we deliver.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {missionCards.map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-white rounded-xl border border-slate-100 p-8 text-left hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-5">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-500 mb-3">Our Product Lines</p>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What We Offer</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">BBM Trading supplies six core industrial products and a specialized packaging solution, serving the full spectrum of surface preparation, manufacturing, and construction needs.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {productLines.map(({ label, note, id }) => (
                <Link
                  key={label}
                  to={`/products?category=${id}`}
                  className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg hover:border-accent-300 hover:bg-accent-50/50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 flex-shrink-0 rounded-md bg-navy-50 flex items-center justify-center text-accent-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900 text-sm group-hover:text-accent-600 transition-colors">{label}</div>
                    <div className="text-xs text-slate-400">{note}</div>
                  </div>
                  <span className="ml-auto text-slate-300 group-hover:text-accent-400 transition-colors text-sm">→</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Full Product Range <span>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent-500 mb-3">Why Work With Us</p>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Your Advantage with BBM Trading</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyCards.map(({ icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent-50 flex items-center justify-center">
                    {icon}
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2 text-sm">{title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-white/60 text-lg mb-10">Let's discuss how BBM Trading can support your next project with reliable, quality-assured industrial materials.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-slate-100 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5">
                Contact Us <span>→</span>
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:bg-white/5">
                View Products
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
