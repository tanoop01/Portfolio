import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Built with
          </p>
          <Heart
            size={16}
            className="text-red-500 fill-current animate-pulse"
          />
          <p className="text-gray-600 dark:text-gray-400">
            using React + Tailwind CSS
          </p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {currentYear} Portfolio. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
