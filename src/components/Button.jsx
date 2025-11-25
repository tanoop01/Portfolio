import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 overflow-hidden';
  
  const variants = {
    primary: 'bg-black/50 backdrop-blur-xl border border-gray-700/60 text-white hover:bg-black/70 focus:ring-primary-dark shadow-lg hover:shadow-xl',
    secondary: 'bg-black/40 backdrop-blur-xl border border-gray-700/50 text-white hover:bg-black/60 focus:ring-gray-400 shadow-lg hover:shadow-xl',
    outline: 'bg-transparent backdrop-blur-xl border-2 border-gray-600/60 text-white hover:bg-black/20 focus:ring-gray-400 shadow-md hover:shadow-lg',
    ghost: 'bg-transparent backdrop-blur-xl text-white hover:bg-black/20 focus:ring-gray-400'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
    </>
  );
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
