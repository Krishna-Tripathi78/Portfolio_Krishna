import { motion } from 'framer-motion';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
    </motion.button>
  );
};

export default ThemeToggle;