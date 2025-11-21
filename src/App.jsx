import { ThemeProvider } from './context/ThemeContext';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Dock from './components/Dock';
import { Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  const dockItems = [
    { 
      icon: <Github size={20} />, 
      label: 'GitHub', 
      onClick: () => window.open('https://github.com/tanoop01', '_blank')
    },
    { 
      icon: <Linkedin size={20} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://linkedin.com/in/anooptripathi428', '_blank')
    },
    { 
      icon: <Twitter size={20} />, 
      label: 'Twitter', 
      onClick: () => window.open('https://twitter.com/@tanoop428', '_blank')
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Dock 
          items={dockItems}
          panelHeight={56}
          baseItemSize={40}
          magnification={56}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
