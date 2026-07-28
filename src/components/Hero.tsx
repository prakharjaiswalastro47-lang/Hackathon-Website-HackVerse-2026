import { useCountdown } from '@/hooks';

const targetDate = '2026-09-15T09:00:00';

export function Hero() {
  const timeLeft = useCountdown(targetDate);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-bg grid-bg overflow-hidden pt-20"
    >
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Registrations Open
          </span>
        </div>

        <h1
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl text-gray-900 dark:text-white mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <span className="block">Welcome to</span>
          <span className="gradient-text">HackVerse 2026</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          48 hours. Infinite possibilities. Join the world's most innovative hackathon
          where ideas become reality.
        </p>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          {[
            { value: '48h', label: 'Duration' },
            { value: '500+', label: 'Hackers' },
            { value: '$50K', label: 'Prizes' },
            { value: '50+', label: 'Mentors' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div
          className="grid grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl p-3 sm:p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="font-display font-bold text-2xl sm:text-4xl text-gray-900 dark:text-white tabular-nums">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all"
          >
            Register Your Team
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass text-gray-900 dark:text-white font-semibold hover:bg-white/20 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-500 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
        </div>
      </div>
    </section>
  );
}
