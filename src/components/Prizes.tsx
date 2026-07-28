import { Trophy, DollarSign, Award, Gift, Star, TrendingUp } from 'lucide-react';

const prizes = [
  {
    rank: '1st Place',
    title: 'Grand Winner',
    amount: '$20,000',
    icon: Trophy,
    color: 'from-yellow-400 to-amber-500',
    glow: 'shadow-amber-500/50',
    perks: ['Cash prize', 'GitHub Pro for 1 year', 'Meeting with top VCs', 'Featured on TechCrunch'],
  },
  {
    rank: '2nd Place',
    title: 'Runner Up',
    amount: '$12,000',
    icon: Award,
    color: 'from-gray-300 to-gray-400',
    glow: 'shadow-gray-400/50',
    perks: ['Cash prize', 'GitHub Pro for 1 year', 'Mentorship sessions', 'Cloud credits ($2K)'],
  },
  {
    rank: '3rd Place',
    title: 'Second Runner Up',
    amount: '$8,000',
    icon: Star,
    color: 'from-orange-400 to-orange-600',
    glow: 'shadow-orange-500/50',
    perks: ['Cash prize', 'GitHub Pro for 6 months', 'Mentorship sessions', 'Cloud credits ($1K)'],
  },
];

const categoryPrizes = [
  { title: 'Best AI/ML Project', amount: '$3,000', icon: TrendingUp, color: 'bg-blue-500' },
  { title: 'Best Design', amount: '$3,000', icon: Star, color: 'bg-accent-500' },
  { title: 'Best Hardware Hack', amount: '$3,000', icon: Gift, color: 'bg-emerald-500' },
  { title: "Women in Tech", amount: '$3,000', icon: Award, color: 'bg-pink-500' },
];

export function Prizes() {
  return (
    <section id="prizes" className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            Rewards
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mt-3 mb-4">
            Prizes & <span className="gradient-text">Rewards</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Over $50,000 in prizes waiting for the best innovators. Compete, build, and win big.
          </p>
        </div>

        {/* Top 3 prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, i) => (
            <div
              key={prize.rank}
              className={`animate-on-scroll relative group ${i === 0 ? 'md:-translate-y-6' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`relative p-8 rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:shadow-2xl ${prize.glow} hover:scale-105 transition-all duration-500 overflow-hidden`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${prize.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prize.color} flex items-center justify-center mb-6 shadow-lg ${prize.glow} group-hover:scale-110 transition-transform`}
                >
                  <prize.icon className="text-white" size={32} />
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{prize.rank}</div>
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
                  {prize.title}
                </h3>
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="text-primary-500" size={20} />
                  <span className="font-display font-bold text-3xl gradient-text">{prize.amount}</span>
                </div>

                <ul className="space-y-2">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
    ))}
        </div>

        {/* Category prizes */}
        <div className="animate-on-scroll">
          <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white text-center mb-6">
            Category Prizes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryPrizes.map((cat, i) => (
              <div
                key={cat.title}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center mb-3`}
                >
                  <cat.icon className="text-white" size={20} />
                </div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {cat.title}
                </div>
                <div className="font-display font-bold text-lg gradient-text">{cat.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
