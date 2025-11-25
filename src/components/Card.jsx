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
    ? 'bg-gray-800/10 backdrop-blur-lg border border-gray-700/20'
    : gradient
    ? 'bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-lg border border-gray-700/20'
    : 'bg-gray-800/10 backdrop-blur-lg border border-gray-700/30';
  
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
