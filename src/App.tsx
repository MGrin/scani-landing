import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Code2,
  CreditCard,
  Globe,
  Key,
  Menu,
  Monitor,
  Network,
  ScanSearch,
  Users,
  Wallet,
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
  { label: 'Web App', href: '#webapp' },
  { label: 'For Agents', href: '#for-agents' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
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
            <button
              type="button"
              onClick={() => window.open('https://app.scani.xyz', '_blank')}
              className="text-sm bg-gray-900 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              Open app
            </button>
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
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                window.open('https://app.scani.xyz', '_blank');
              }}
              className="w-full mt-2 text-sm bg-gray-900 text-white px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              Open app
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* subtle radial glow */}
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
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Beta — free to use
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05] mb-6"
          >
            Your finances,
            <br />
            <span className="text-indigo-600">queryable by AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-10"
          >
            Scani aggregates crypto exchanges, blockchain wallets, and traditional investments into
            one place. Use it as a full-featured web app — or let AI agents query and manage your
            portfolio through MCP. Seamless data handoff between humans and AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              type="button"
              onClick={() => window.open('https://app.scani.xyz', '_blank')}
              className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-gray-700 transition-colors shadow-sm"
            >
              Get started — it's free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="#for-agents"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-7 py-3.5 rounded-xl text-base font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              MCP for agents
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-5 text-sm text-gray-500"
          >
            {['No credit card required', 'Web app + MCP server', 'Human ↔ Agent data handoff'].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ── WEB APP ── */}
      <section id="webapp" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-4 h-4 text-gray-500" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                Web App
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl leading-tight">
              Your finances, one dashboard
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-14">
              Open{' '}
              <a
                href="https://app.scani.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                app.scani.xyz
              </a>{' '}
              — your entire portfolio in one place. Crypto exchanges, blockchain wallets, and
              AI-parsed brokerage screenshots, all in a single dashboard you own and control.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: BarChart3,
                title: 'Asset allocation',
                body: 'Break down your portfolio by token, asset type, account, institution, or geography. Interactive charts.',
              },
              {
                icon: Globe,
                title: 'Multi-currency',
                body: 'Track everything in your chosen base currency. Automatic exchange rates. Switch at any time.',
              },
              {
                icon: Network,
                title: 'Universal price tracking',
                body: 'Stocks, ETFs, and crypto — priced globally. CEX feeds, DEX pricing, and traditional market data in one place.',
              },
              {
                icon: ScanSearch,
                title: 'AI screenshot import',
                body: "No native integration for your broker? Upload a screenshot — AI parses it and creates all holdings automatically.",
              },
              {
                icon: Users,
                title: 'Human ↔ Agent handoff',
                body: 'Agents populate your portfolio, you review and refine it through the UI. Seamless data ownership between humans and AI.',
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

          <FadeIn delay={0.1} className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => window.open('https://app.scani.xyz', '_blank')}
              className="group inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              Open web app — it's free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ── FOR AGENTS ── */}
      <section
        id="for-agents"
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
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
                Agentic-ready
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 max-w-2xl leading-tight">
              Built for the age of AI agents
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-14">
              Scani ships with a full MCP (Model Context Protocol) server. Any AI agent — Claude,
              GPT, your own LLM — can authenticate, query your portfolio, and manage your financial
              data programmatically. Agentic access is gated behind an{' '}
              <span className="text-indigo-300 font-semibold">x402 paywall</span> — agents pay
              micro-fees per tool call, no subscription required.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn>
              <div className="rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden h-full">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">
                    claude_desktop_config.json
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <pre className="p-5 text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
                    {`{
  "mcpServers": {
    "scani": {
      "url": "https://api.scani.xyz/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}`}
                  </pre>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="space-y-5">
                {[
                  {
                    icon: Key,
                    title: 'Self-registration',
                    body: 'Agents call agent_register to self-issue an API key. Link the agent to your Scani account once to grant it access. Revoke any key at any time.',
                  },
                  {
                    icon: Code2,
                    title: 'Comprehensive MCP API',
                    body: 'Full CRUD for accounts, holdings, institutions, blockchain wallets, and tokens. Dashboard summary and asset allocation — all via MCP.',
                  },
                  {
                    icon: Users,
                    title: 'Human-in-the-loop',
                    body: 'Agents create and manage your portfolio data. You review, edit, and take full ownership through the web UI.',
                  },
                  {
                    icon: Zap,
                    title: 'Batch operations',
                    body: 'Create holdings with all dependencies in one call. Efficient for AI agents that need to populate your portfolio quickly.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/40 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-indigo-300 mb-1">MCP endpoint</p>
                <code className="text-white font-mono text-sm">https://api.scani.xyz/mcp</code>
                <p className="text-gray-500 text-sm mt-1">
                  Compatible with Claude Desktop, Cursor, and any MCP-capable client.
                </p>
              </div>
              <a
                href="https://app.scani.xyz/settings"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Get API key
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section id="integrations" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                Connect your accounts
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
                Scani pulls in data from where you actually keep your money.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                icon: Wallet,
                label: 'Live',
                title: 'Crypto exchanges',
                desc: 'Direct API connection — balances sync automatically.',
                items: ['Binance', 'Kraken'],
              },
              {
                icon: Network,
                label: 'Live',
                title: 'Blockchain wallets',
                desc: 'Paste a public address, Scani imports all holdings.',
                items: ['Bitcoin', 'Ethereum + all EVM chains', 'Solana', 'TON', 'TRON'],
              },
              {
                icon: ScanSearch,
                label: 'Live',
                title: 'Any institution via screenshots',
                desc: 'Upload a portfolio screenshot from any broker, bank, or app — AI reads it and creates all holdings.',
                items: [
                  'Any broker worldwide',
                  'Any bank or brokerage statement',
                  'Any portfolio page or app',
                  'Powered by AI vision',
                ],
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {card.label}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-7 flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Universal coverage, zero integrations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                  Scani doesn't need a native integration with every institution. Take a screenshot
                  of any portfolio page — from any broker, bank, or app worldwide — and AI creates
                  all holdings automatically. Works everywhere, instantly.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                What you actually get
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                A straightforward list of what works today.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: BarChart3,
                title: 'Asset allocation',
                body: 'Break down your portfolio by token, asset type, account, institution, or geography. Interactive charts.',
              },
              {
                icon: Globe,
                title: 'Multi-currency',
                body: 'Track everything in your chosen base currency. Automatic exchange rates. Switch at any time.',
              },
              {
                icon: Network,
                title: 'Universal price tracking',
                body: 'Stocks, ETFs, and crypto — priced globally. CEX feeds, DEX pricing providers, and traditional market data in one place.',
              },
              {
                icon: ScanSearch,
                title: 'AI screenshot import',
                body: 'Upload a portfolio screenshot from any broker, bank, or app worldwide — AI reads it and creates all holdings automatically.',
              },
              {
                icon: Users,
                title: 'Human ↔ Agent handoff',
                body: 'Agents populate data via MCP, you review and refine through the UI. Seamless data ownership between humans and AI.',
              },
              {
                icon: Code2,
                title: 'Full MCP server',
                body: 'Comprehensive API for accounts, holdings, institutions, blockchain wallets, and tokens — accessible to any MCP-capable agent.',
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

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Currently in beta
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto">
              Free for humans. Pay-per-use for agents.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="rounded-2xl border-2 border-gray-200 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Monitor className="w-4 h-4 text-gray-600" />
                      <h3 className="text-xl font-bold text-gray-900">Web App</h3>
                    </div>
                    <p className="text-gray-500 text-sm">For humans, in the browser.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-4xl font-extrabold text-gray-900">$0</span>
                    <span className="text-gray-400 text-sm ml-1">/mo</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    'Full dashboard access',
                    'Crypto exchange integrations',
                    'Blockchain wallet import',
                    'AI screenshot import',
                    'Multi-currency dashboard',
                    'Stocks, ETFs & crypto price tracking',
                    'Human ↔ Agent data handoff',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => window.open('https://app.scani.xyz', '_blank')}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  Create free account
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50/40 p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Code2 className="w-4 h-4 text-indigo-600" />
                      <h3 className="text-xl font-bold text-gray-900">Agentic / MCP</h3>
                    </div>
                    <p className="text-gray-500 text-sm">For AI agents, via x402 paywall.</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-2xl font-bold text-gray-900">Pay-per-use</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {[
                    'Full MCP server over HTTPS',
                    'Agent self-registration',
                    'Micro-payments via x402',
                    'No subscription required',
                    'Pay only for what agents use',
                    'Compatible with Claude, GPT, any LLM',
                    'Human ↔ Agent data handoff via UI',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-indigo-950/8 border border-indigo-200 p-4 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCard className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                      x402 Protocol
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Agents attach a payment to each MCP request. No API billing setup, no monthly
                    invoices — just micro-payments on Base (Ethereum L2).
                  </p>
                </div>

                <a
                  href="https://app.scani.xyz/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Get API key
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </div>
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
                Personal finance management with an AI-first MCP interface. Aggregate your entire
                financial life, then let AI agents work with it.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-3">Product</p>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a href="#webapp" className="hover:text-gray-900 transition-colors">
                      Web App
                    </a>
                  </li>
                  <li>
                    <a href="#for-agents" className="hover:text-gray-900 transition-colors">
                      For Agents
                    </a>
                  </li>
                  <li>
                    <a href="#integrations" className="hover:text-gray-900 transition-colors">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="hover:text-gray-900 transition-colors">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-3">Developers</p>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a
                      href="https://api.scani.xyz/mcp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                    >
                      MCP Server
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.scani.xyz/settings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                    >
                      API Keys
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-3">App</p>
                <ul className="space-y-2 text-gray-500">
                  <li>
                    <a
                      href="https://app.scani.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Open app
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.scani.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Sign up free
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Scani. All rights reserved.</p>
            <p>
              Built for the era of AI agents.{' '}
              <a
                href="https://app.scani.xyz"
                className="underline hover:text-gray-600 transition-colors"
              >
                Get started free →
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
