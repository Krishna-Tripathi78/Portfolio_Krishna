import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import SkillTag from './components/SkillTag';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const skills = ['Python', 'C/C++', 'Go', 'HTML', 'CSS', 'JavaScript', 'Flask', 'GCP', 'AWS', 'Linux', 'OpenCV', 'TensorFlow', 'Blender', 'Unity', 'Git', 'GitHub', 'SMM'];
  const languages = ['Python (Native)', 'C (Proficient)', 'C++ (Advanced)', 'Go (Intermediate)', 'JavaScript (Proficient)'];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />
        
        <Header />

        <Section id="about" title="About Me">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div>
                <motion.p 
                  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  I'm a Cyber Security undergraduate passionate about building secure, scalable, and innovative tech. 
                  With experience in Python development, NLP tools, object detection, and cloud services like AWS & GCP, 
                  I actively contribute to open-source and community-led tech initiatives.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                    <span className="text-blue-800 dark:text-blue-300 font-medium">🎓 B.Tech Student</span>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                    <span className="text-green-800 dark:text-green-300 font-medium">🔒 Cyber Security</span>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                    <span className="text-purple-800 dark:text-purple-300 font-medium">🐍 Python Developer</span>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                    <img 
                      src="/Krishna_Port.jpg" 
                      alt="Krishna Tripathi" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                    <i className="fas fa-star text-white"></i>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-6">
            <Card 
              icon="fas fa-briefcase" 
              title="Python Developer Intern @ Cognifyz Technologies (Jun–Jul 2024)"
              progress={95}
              delay={0.1}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Built an NLP Text Summarizer using NLTK and regex</li>
                <li>Improved processing speed by 30%</li>
              </ul>
            </Card>
            
            <Card 
              icon="fas fa-code" 
              title="Python Developer Intern @ Code Clause (Aug–Sep 2024)"
              progress={90}
              delay={0.2}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Automated scripts reducing manual effort by 25%</li>
                <li>Maintained Python automation tools</li>
              </ul>
            </Card>
            
            <Card 
              icon="fas fa-share-alt" 
              title="Social Media Intern @ Magniit Technologies (Jun–Jul 2024)"
              progress={85}
              delay={0.3}
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Executed digital campaigns, boosted engagement by 20%</li>
                <li>Used A/B testing to refine strategies</li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <i className="fas fa-music text-6xl text-white/80"></i>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">MoodMelody</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Emotion-based music player using facial recognition and sentiment analysis</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">ML</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center relative overflow-hidden">
                <i className="fas fa-eye text-6xl text-white/80"></i>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">YOLOv8 Detection</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Real-time object detection system optimized for edge devices</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">YOLOv8</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">OpenCV</span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm">Edge AI</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 1.2 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <i className="fas fa-robot text-6xl text-white/80"></i>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">In Progress</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Talking Skeleton AI</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">3D AI character with voice interaction using latest AI technologies</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Blender</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">Unity</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">AI</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-teal-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section id="skills" title="Skills & Technologies">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-code text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Programming</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
                    { name: 'C++', level: 85, color: 'from-blue-400 to-blue-600' },
                    { name: 'JavaScript', level: 80, color: 'from-yellow-300 to-yellow-500' },
                    { name: 'Go', level: 70, color: 'from-cyan-400 to-cyan-600' }
                  ].map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Technologies */}
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-cogs text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technologies</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Flask', level: 85, color: 'from-green-400 to-green-600' },
                    { name: 'OpenCV', level: 80, color: 'from-red-400 to-red-600' },
                    { name: 'TensorFlow', level: 75, color: 'from-orange-400 to-orange-600' },
                    { name: 'Unity', level: 70, color: 'from-purple-400 to-purple-600' }
                  ].map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Cloud & Tools */}
              <motion.div 
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-cloud text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cloud & Tools</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'AWS', level: 80, color: 'from-orange-400 to-orange-600' },
                    { name: 'GCP', level: 75, color: 'from-blue-400 to-blue-600' },
                    { name: 'Git', level: 90, color: 'from-red-400 to-red-600' },
                    { name: 'Linux', level: 85, color: 'from-yellow-400 to-yellow-600' }
                  ].map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Additional Skills Tags */}
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Additional Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Blender', 'Docker', 'MongoDB', 'MySQL', 'Figma', 'Photoshop', 'Social Media Marketing'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        <Section id="contact" title="Let's Connect">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Ready to collaborate on exciting projects? Let's build something amazing together!
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">krishnatripathi07042005@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <i className="fas fa-phone text-green-600 dark:text-green-400"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-600 dark:text-gray-300">+91 6307813602</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-400"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">India</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl text-white"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { href: 'https://github.com/Krishna-Tripathi78', icon: 'fab fa-github', text: 'GitHub', color: 'bg-gray-800 hover:bg-gray-700' },
                    { href: 'https://linkedin.com/in/krishna-tripathi-9aa494303/', icon: 'fab fa-linkedin', text: 'LinkedIn', color: 'bg-blue-700 hover:bg-blue-600' },
                    { href: 'mailto:krishnatripathi07042005@gmail.com', icon: 'fas fa-envelope', text: 'Email', color: 'bg-red-600 hover:bg-red-500' },
                    { href: 'tel:+916307813602', icon: 'fas fa-phone', text: 'Call', color: 'bg-green-600 hover:bg-green-500' }
                  ].map((contact, index) => (
                    <motion.a
                      key={contact.text}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${contact.color} p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`${contact.icon} text-2xl mb-2 block`}></i>
                      <span className="text-sm font-medium">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <p className="text-center text-sm opacity-90">
                    🚀 Open to internships, collaborations, and exciting opportunities!
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>

        <motion.footer 
          className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Krishna Tripathi</h3>
                <p className="text-gray-300 mb-4">Cyber Security Student & Python Developer</p>
                <div className="flex justify-center md:justify-start gap-4">
                  <a href="https://github.com/Krishna-Tripathi78" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <i className="fab fa-github text-xl"></i>
                  </a>
                  <a href="https://linkedin.com/in/krishna-tripathi-9aa494303/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="mailto:krishnatripathi07042005@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    <i className="fas fa-envelope text-xl"></i>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
                  <a href="#experience" className="block text-gray-300 hover:text-white transition-colors">Experience</a>
                  <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
                  <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">Skills</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center md:text-right"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                <p className="text-gray-300 mb-2">krishnatripathi07042005@gmail.com</p>
                <p className="text-gray-300 mb-4">+91 6307813602</p>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for opportunities</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="border-t border-gray-700 pt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-gray-300">
                &copy; 2025 Krishna Tripathi. Made with ❤️ and React. All rights reserved.
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;