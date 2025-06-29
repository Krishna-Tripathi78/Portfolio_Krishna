import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`max-w-6xl mx-auto px-4 py-8 sm:py-12 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white border-b-2 border-blue-600 pb-2 inline-block"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
};

export default Section;