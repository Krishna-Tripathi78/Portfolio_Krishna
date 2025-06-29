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
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I'm a Cyber Security undergraduate passionate about building secure, scalable, and innovative tech. 
            With experience in Python development, NLP tools, object detection, and cloud services like AWS & GCP, 
            I actively contribute to open-source and community-led tech initiatives.
          </motion.p>
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

        <Section id="projects" title="Projects">
          <div className="space-y-6">
            <Card 
              icon="fas fa-music" 
              title="MoodMelody – Emotion-Based Music Player"
              progress={100}
              delay={0.1}
            >
              <p>Created a Python app that detects user emotion via facial recognition and plays suitable music using sentiment analysis.</p>
            </Card>
            
            <Card 
              icon="fas fa-eye" 
              title="YOLOv8 Real-Time Object Detection"
              progress={100}
              delay={0.2}
            >
              <p>Built an optimized object detection system using YOLOv8 and OpenCV, designed for edge devices.</p>
            </Card>
            
            <Card 
              icon="fas fa-robot" 
              title="Talking Skeleton Model (In Progress)"
              progress={75}
              delay={0.3}
            >
              <p>Developing a 3D AI character using Blender, Unity, Whisper, ChatGPT, and ElevenLabs for interactive experiences.</p>
            </Card>
          </div>
        </Section>

        <Section id="skills" title="Skills & Tools">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <SkillTag key={skill} skill={skill} delay={index * 0.05} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Programming Languages</h3>
            <div className="flex flex-wrap">
              {languages.map((lang, index) => (
                <SkillTag key={lang} skill={lang} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { href: 'mailto:krishnatripathi07042005@gmail.com', icon: 'fas fa-envelope', text: 'Email' },
              { href: 'tel:+916307813602', icon: 'fas fa-phone', text: 'Call' },
              { href: 'https://github.com/Krishna-Tripathi78', icon: 'fab fa-github', text: 'GitHub' },
              { href: 'https://linkedin.com/in/krishna-tripathi-9aa494303/', icon: 'fab fa-linkedin', text: 'LinkedIn' }
            ].map((contact, index) => (
              <motion.a
                key={contact.text}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={contact.icon}></i>
                {contact.text}
              </motion.a>
            ))}
          </motion.div>
        </Section>

        <motion.footer 
          className="bg-gray-900 dark:bg-gray-800 text-white text-center py-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; 2025 Krishna Tripathi. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;