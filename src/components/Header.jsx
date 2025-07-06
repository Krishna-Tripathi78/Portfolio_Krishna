import { motion } from 'framer-motion';

const Header = () => {
  const stats = [
    { number: '3+', label: 'Years Learning', icon: 'fas fa-graduation-cap' },
    { number: '15+', label: 'Projects', icon: 'fas fa-code' },
    { number: '10+', label: 'Technologies', icon: 'fas fa-tools' },
    { number: '3', label: 'Internships', icon: 'fas fa-briefcase' }
  ];

  return (
    <motion.header 
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse"></div>
      </div>
      
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <motion.div 
            className="relative inline-block mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full p-1">
              <img 
                src="/Krishna_Port.jpg" 
                alt="Krishna Tripathi" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
              <i className="fas fa-check text-green-900 text-sm"></i>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Krishna Tripathi
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 border border-blue-500/30">
              🎓 B.Tech Cyber Security
            </span>
            <span className="bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-purple-200 border border-purple-500/30">
              🐍 Python Developer
            </span>
            <span className="bg-green-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-green-200 border border-green-500/30">
              🚀 Open Source
            </span>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Passionate about building secure, innovative solutions with cutting-edge technology. 
            Ready to contribute to impactful projects and grow in the tech industry.
          </motion.p>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <i className={`${stat.icon} text-2xl text-blue-400 mb-2 block`}></i>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Navigation */}
        <motion.nav 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
        
        {/* CTA Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-envelope"></i>
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;