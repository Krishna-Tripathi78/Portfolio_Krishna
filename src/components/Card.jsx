import { motion } from 'framer-motion';

const Card = ({ icon, title, children, progress, delay = 0 }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600 mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center mb-4">
        {icon && <i className={`${icon} text-blue-600 text-xl mr-3`}></i>}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <div className="text-gray-700 dark:text-gray-300 mb-4">
        {children}
      </div>
      
      {progress && (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 1.2, ease: "easeOut" }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Card;