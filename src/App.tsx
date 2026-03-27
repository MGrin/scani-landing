import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Code2,
  Globe,
  Mail,
  Menu,
  PenLine,
  Sparkles,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Contact', href: '#contact' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-shadow duration-200 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#e5e7eb]' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-7 h-7 rounded-md overflow-hidden">
              <img src="/icons/icon-192x192.png" alt="Scani" className="w-full h-full object-contain" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight">Scani</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm bg-gray-900 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              Hire us
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-1.5 text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full mt-2 text-sm bg-gray-900 text-white px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors font-semibold text-center"
            >
              Hire us
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              <Sparkles className="w-3 h-3" />
              Expert dev agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-6"
          >
            We build.
            <br />
            <span className="text-indigo-600">You grow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10"
          >
            Scani is a boutique agency that delivers dev work, copywriting, design, and more —
            with quality and speed you won't find at a traditional firm. Hire us on Upwork, Fiverr,
            or directly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-gray-700 transition-colors shadow-sm"
            >
              Get a quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-7 py-3.5 rounded-xl text-base font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              See what we do
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-5 text-sm text-gray-500"
          >
            {['Expert delivery', 'Fast turnaround', 'Quality guaranteed'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-gray-500" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl leading-tight">
              What we deliver
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-14">
              From full-stack development to polished copy — we handle the work so you can focus on
              growing your business.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Code2,
                title: 'Development',
                body: 'Web apps, APIs, automation scripts, browser extensions. Full-stack or backend-only — we ship clean, production-ready code.',
              },
              {
                icon: PenLine,
                title: 'Copywriting',
                body: 'Landing pages, email sequences, product descriptions, blog content. Persuasive copy that converts.',
              },
              {
                icon: Sparkles,
                title: 'Integrations',
                body: 'Connect your product with third-party services and build custom integrations — chatbots, data extraction, external APIs. We handle it end-to-end.',
              },
              {
                icon: Globe,
                title: 'Web scraping & data',
                body: 'Custom scrapers, data pipelines, and structured datasets. Get the data you need from any public source.',
              },
              {
                icon: Zap,
                title: 'Automation',
                body: 'Eliminate repetitive tasks. We build workflows that connect your tools and run without you.',
              },
              {
                icon: Users,
                title: 'Other work',
                body: 'Have something else in mind? We take on diverse projects. Reach out and tell us what you need.',
              },
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.04}>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all h-full">
                  <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-[18px] h-[18px] text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl leading-tight">
              Simple from brief to shipped
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-14">
              Three steps. No drawn-out onboarding, no endless calls. Just fast, quality delivery.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'You brief us',
                body: 'Tell us what you need — project scope, goals, deadline. A short message is enough to get started.',
              },
              {
                step: '02',
                title: 'We deliver',
                body: 'Our team gets to work. We keep you updated and ask clarifying questions when needed. Fast turnaround.',
              },
              {
                step: '03',
                title: 'You ship',
                body: 'Review the output, request revisions if needed, then ship. We hand over everything — code, copy, files — ready to use.',
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.07}>
                <div className="rounded-2xl bg-gray-900 border border-gray-800 p-7 h-full">
                  <span className="text-4xl font-extrabold text-indigo-500/40 leading-none block mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section id="platforms" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Work with us anywhere
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                Hire us through the platform you already use — or reach out directly.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: Globe,
                title: 'Upwork',
                desc: 'Find us on Upwork for managed contracts with escrow protection. Great for longer projects.',
                badge: 'Available',
              },
              {
                icon: Zap,
                title: 'Fiverr',
                desc: 'Order fixed-scope deliverables fast. Ideal for well-defined, one-off tasks.',
                badge: 'Available',
              },
              {
                icon: Mail,
                title: 'Direct contract',
                desc: 'Prefer to work outside a platform? Reach out directly for a custom agreement and faster communication.',
                badge: 'Preferred',
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Why Scani
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                We're not a traditional agency. Speed and quality are at the core of how we work.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Zap,
                title: 'Fast delivery',
                body: 'Our streamlined workflows mean we move faster than a traditional team. Days, not weeks.',
              },
              {
                icon: CheckCircle,
                title: 'Quality output',
                body: 'We review everything before delivery. Code is tested, copy is polished, files are ready to use.',
              },
              {
                icon: Sparkles,
                title: 'Efficient',
                body: 'We use the best tools available to get the job done right — giving you more for less.',
              },
              {
                icon: Code2,
                title: 'Technical depth',
                body: "Our team is engineering-first. We can take on complex technical problems that most agencies can't handle.",
              },
              {
                icon: Globe,
                title: 'Remote & async',
                body: "Work with us from anywhere. We communicate clearly, document everything, and don't need micromanagement.",
              },
              {
                icon: Users,
                title: 'Flexible scope',
                body: 'Small one-off task or a multi-month engagement — we adapt to what you need without long-term lock-in.',
              },
            ].map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.04}>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all h-full">
                  <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-[18px] h-[18px] text-gray-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Ready to get started?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours. No commitment
              required.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-gray-200 p-10 flex flex-col items-center gap-6 text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Drop us a line at</p>
                <a
                  href="mailto:hello@scani.xyz"
                  className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  hello@scani.xyz
                </a>
              </div>
              <p className="text-sm text-gray-400 max-w-sm">
                Describe your project, timeline, and budget. We'll respond with a plan and a quote.
              </p>
              <a
                href="mailto:hello@scani.xyz"
                className="group inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-gray-700 transition-colors shadow-sm"
              >
                Send us a message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-200 py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-xs">
              <a href="/" className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-md overflow-hidden">
                  <img
                    src="/icons/icon-192x192.png"
                    alt="Scani"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[15px] font-semibold tracking-tight">Scani</span>
              </a>
              <p className="text-sm text-gray-500 leading-relaxed">
                A boutique agency that builds, writes, and ships — faster and sharper than a
                traditional team.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-3">Services</p>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#services" className="hover:text-gray-900 transition-colors">
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-gray-900 transition-colors">
                      Copywriting
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-gray-900 transition-colors">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-gray-900 transition-colors">
                      Automation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-3">Work with us</p>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#platforms" className="hover:text-gray-900 transition-colors">
                      Upwork
                    </a>
                  </li>
                  <li>
                    <a href="#platforms" className="hover:text-gray-900 transition-colors">
                      Fiverr
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-gray-900 transition-colors">
                      Direct contract
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-3">Company</p>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#how-it-works" className="hover:text-gray-900 transition-colors">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@scani.xyz" className="hover:text-gray-900 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Scani. All rights reserved.</p>
            <p>Boutique agency. Built to deliver.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
