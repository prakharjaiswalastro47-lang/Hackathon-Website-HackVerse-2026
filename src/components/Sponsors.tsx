import { Heart, Zap, Code2, Database } from 'lucide-react';

const sponsors = [
  { name: 'TechCorp', tier: 'Platinum', icon: Zap, color: 'from-blue-500 to-cyan-500' },
  { name: 'CodeFlow', tier: 'Platinum', icon: Code2, color: 'from-accent-500 to-pink-500' },
  { name: 'DataHub', tier: 'Gold', icon: Database, color: 'from-amber-500 to-orange-500' },
  { name: 'InnovateLab', tier: 'Gold', icon: Heart, color: 'from-emerald-500 to-teal-500' },
  { name: 'CloudNet', tier: 'Silver', icon: Zap, color: 'from-slate-400 to-slate-500' },
  { name: 'DevStudio', tier: 'Silver', icon: Code2, color: 'from-indigo-400 to-blue-500' },
  { name: 'NextGen', tier: 'Silver', icon: Database, color: 'from-purple-400 to-accent-500' },
  { name: 'BetaWorks', tier: 'Bronze', icon: Heart, color: 'from-orange-400 to-red-500' },
];

const tierStyles: Record<string, string> = {
  Platinum: 'ring-2 ring-blue-500/50 shadow-lg shadow-blue-500/20',
  Gold: 'ring-2 ring-amber-500/50 shadow-lg shadow-amber-500/20',
  Silver: 'ring-2 ring-gray-400/50',
  Bronze: 'ring-1 ring-orange-500/30',
};

const tierBadge: Record<string, string> = {
  Platinum: 'bg-blue-500',
  Gold: 'bg-amber-500',
  Silver: 'bg-gray-400',
  Bronze: 'bg-orange-500',
};

export function Sponsors() {
  return (
    <section id="sponsors" className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            Partners
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mt-3 mb-4">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're proud to be backed by industry-leading companies who support innovation.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor, i) => (
            <div
              key={sponsor.name}
              className={`animate-on-scroll group p-6 rounded-2xl bg-white dark:bg-gray-800 ${tierStyles[sponsor.tier]} hover:scale-105 transition-all duration-500 cursor-pointer`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sponsor.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <sponsor.icon className="text-white" size={26} />
                </div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2">
                  {sponsor.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium text-white ${tierBadge[sponsor.tier]}`}
                >
                  {sponsor.tier}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-xl shadow-primary-500/30">
            <h3 className="font-display font-bold text-2xl mb-2">Want to Sponsor?</h3>
            <p className="text-white/90 mb-4 max-w-md">
              Join our family of sponsors and connect with 500+ talented developers.
            </p>
            <button
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold hover:scale-105 transition-transform"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
