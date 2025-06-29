import { motion } from 'framer-motion';

const Header = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/final_krishna_resume.pdf';
    link.download = 'Krishna_Tripathi_Resume.pdf';
    link.click();
  };

  return (
    <motion.header 
      className="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-900 text-white py-12 px-4 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.div 
          className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl sm:text-4xl animate-pulse-slow"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
        >
          <i className="fas fa-user-shield"></i>
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Krishna Tripathi
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          B.Tech in Cyber Security | Python Developer | Open-Source Contributor
        </motion.p>
        
        <motion.nav 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
        
        <motion.button
          onClick={downloadResume}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <i className="fas fa-download mr-2"></i>
          Download Resume
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default Header;