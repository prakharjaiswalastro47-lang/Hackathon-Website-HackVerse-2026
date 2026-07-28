import { Calendar, MapPin, Users, Clock, Code2, Zap, Trophy, Globe } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Clock,
      title: '48 Hours of Innovation',
      desc: 'Two days of intense coding, designing, and building from scratch.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: '500+ Hackers',
      desc: 'Collaborate with the brightest minds from around the globe.',
      color: 'from-accent-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Expert Mentorship',
      desc: 'Get guidance from 50+ industry experts and tech leaders.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Global Network',
      desc: 'Connect with sponsors, recruiters, and fellow innovators.',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            About the Event
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mt-3 mb-4">
            What is <span className="gradient-text">HackVerse</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            HackVerse is a premier hackathon that brings together creative minds to build
            solutions that shape the future. Whether you're a seasoned hacker or a first-timer,
            this is your stage to shine.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="animate-on-scroll group relative p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
              >
                <feature.icon className="text-white" size={26} />
              </div>
              <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Event details cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Calendar, label: 'Date', value: 'September 15-17, 2026' },
            { icon: MapPin, label: 'Location', value: 'Virtual & In-Person' },
            { icon: Code2, label: 'Format', value: 'Team of 2-4 Members' },
          ].map((detail, i) => (
            <div
              key={detail.label}
              className="animate-on-scroll flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border border-gray-100 dark:border-gray-800"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                <detail.icon className="text-primary-600 dark:text-primary-400" size={22} />
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {detail.label}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">{detail.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
