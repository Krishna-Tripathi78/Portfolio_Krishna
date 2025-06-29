import { motion } from 'framer-motion';

const SkillTag = ({ skill, delay = 0 }) => {
  return (
    <motion.span
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium m-1 cursor-pointer transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {skill}
    </motion.span>
  );
};

export default SkillTag;