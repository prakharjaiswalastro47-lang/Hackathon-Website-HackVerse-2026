import { useDarkMode, useIntersectionObserver } from '@/hooks';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Schedule } from '@/components/Schedule';
import { Prizes } from '@/components/Prizes';
import { Sponsors } from '@/components/Sponsors';
import { Registration } from '@/components/Registration';
import { Footer } from '@/components/Footer';

function App() {
  const { isDark, toggle } = useDarkMode();
  const rootRef = useIntersectionObserver();

  return (
    <div ref={rootRef as React.RefObject<HTMLDivElement>} className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Prizes />
        <Sponsors />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
