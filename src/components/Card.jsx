import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  glass = false,
  ...props 
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';
  
  const styles = glass
    ? 'bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20'
    : gradient
    ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700'
    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700';
  
  const hoverStyles = hover
    ? 'hover:shadow-xl hover:shadow-primary-light/10 dark:hover:shadow-primary-dark/10 hover:-translate-y-1'
    : '';
  
  const classes = `${baseStyles} ${styles} ${hoverStyles} ${className}`;
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
