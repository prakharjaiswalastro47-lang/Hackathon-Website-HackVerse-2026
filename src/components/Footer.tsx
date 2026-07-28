import { Heart, Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-gray-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">H</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Hack<span className="gradient-text">Verse</span>
              </span>
            </div>
            <p className="text-sm max-w-md mb-6">
              The world's most innovative hackathon. Where ideas become reality in 48 hours.
              Join us and be part of the future.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Mail, label: 'Email', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Schedule', 'Prizes', 'Sponsors', 'Register'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400" />
                <span>hello@hackverse.io</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Date
                </span>
                September 15-17, 2026
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">
                  Location
                </span>
                Virtual & In-Person
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-1.5">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> for HackVerse 2026
          </p>
          <p className="text-xs text-gray-500">
            © 2026 HackVerse. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-xl shadow-primary-500/40 flex items-center justify-center hover:scale-110 transition-transform animate-fade-in z-40"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
