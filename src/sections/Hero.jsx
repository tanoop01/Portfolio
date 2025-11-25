import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import { fadeIn, slideUp } from '../utils/animations';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-light/20 to-purple-500/20 dark:from-primary-dark/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-6 sm:space-y-8"
        >
          {/* Greeting */}
          <motion.p
            variants={slideUp}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={slideUp}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white"
          >
            <span className="bg-gradient-to-r from-primary-light to-purple-600 dark:from-primary-dark dark:to-purple-400 bg-clip-text text-transparent">
              Anoop Tripathi
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={slideUp}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-semibold"
          >
            Aspiring Developer | AI Enthusiast | Tech Explorer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={slideUp}
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Exploring the world of technology through code, creativity, and a growing passion for AI and intelligent systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={Download}
              href="#"
              aria-label="Download Resume"
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToProjects}
              aria-label="View Projects"
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="text-gray-600 dark:text-gray-400"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
