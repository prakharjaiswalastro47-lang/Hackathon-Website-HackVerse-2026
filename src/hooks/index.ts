import { useState, useEffect, useRef } from 'react';

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export function useIntersectionObserver() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback if IntersectionObserver is not supported
      document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right')
        .forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            entry.target.querySelectorAll('.animate-on-scroll-left').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
            entry.target.querySelectorAll('.animate-on-scroll-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);
    
    // Also trigger elements inside body immediately
    document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right')
      .forEach((el) => el.classList.add('visible'));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : true;
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // Safe fallback if localStorage is blocked
    }
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((prev) => !prev) };
}

