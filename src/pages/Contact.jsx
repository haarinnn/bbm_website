import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office Address',
    value: '[Company Address]\nDoha, Qatar',
    placeholder: true,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '[+974 XXXX XXXX]',
    placeholder: true,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: '[info@bbmtrading.com]',
    placeholder: true,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Sunday – Thursday\n8:00 AM – 5:00 PM (GST)',
    placeholder: false,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    return e;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
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
            <span className="text-white/70">Contact</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-3">Get in Touch</h1>
          <p className="text-white/60 text-lg max-w-lg">Whether you need a quote, product specifications, or have a general inquiry — our team is ready to assist.</p>
        </div>
      </header>

      {/* ── CONTACT SECTION ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── FORM ── */}
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Message Received!</h3>
                    <p className="text-slate-500 mb-6">Thank you for reaching out. Our team will review your inquiry and respond within one business day.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-accent-500 hover:text-accent-600 font-semibold text-sm underline transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-200
                            ${errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-accent-400'}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all duration-200
                            ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-accent-400'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+974 XXXX XXXX"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Message / Inquiry <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your requirements — products of interest, quantities, specifications, or any questions you have."
                        className={`w-full px-4 py-3 rounded-lg border bg-slate-50 text-navy-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400 resize-y transition-all duration-200
                          ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200 focus:border-accent-400'}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-400 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-500/25 active:translate-y-0"
                    >
                      Submit Inquiry →
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* ── CONTACT INFO ── */}
            <FadeIn direction="right" delay={0.1}>
              <div className="space-y-4">
                {contactInfo.map(({ icon, label, value, placeholder }) => (
                  <div key={label} className="flex gap-4 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-navy-800 flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{label}</div>
                      <div className={`text-sm font-medium leading-relaxed whitespace-pre-line ${placeholder ? 'text-slate-400 italic' : 'text-navy-900'}`}>
                        {value}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115580.29834955498!2d51.42431175!3d25.28544935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf4b4a1d07!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BBM Trading office location — Doha, Qatar"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-4">Explore Our Full Product Range</h2>
            <p className="text-white/60 text-lg mb-10">From garnet and steel abrasives to zinc and zircon — discover the materials that power your operations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-slate-100 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5">
                View Products <span>→</span>
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded transition-all duration-200 hover:bg-white/5">
                About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
