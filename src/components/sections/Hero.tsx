import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiCode } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../../constants/data';
import { useTypewriter } from '../../hooks/useAnimations';
import { scrollToSection } from '../../utils/helpers';

const Hero = () => {
  const typewriterText = useTypewriter(personalInfo.title, 100);

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: SiLeetcode, href: personalInfo.leetcode, label: 'LeetCode', color: 'hover:text-orange-600' },
  ];

  const floatingShapes = [
    { delay: 0, duration: 6 },
    { delay: 1, duration: 7 },
    { delay: 2, duration: 8 },
    { delay: 3, duration: 6.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-mocha-50 via-white to-mocha-100 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute w-64 h-64 bg-mocha-300/20 dark:bg-mocha-600/10 rounded-full blur-3xl"
            style={{
              left: `${20 + index * 20}%`,
              top: `${10 + index * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['</>','{}','[]','()','</>', '{}', '//'].map((code, index) => (
          <motion.div
            key={index}
            className="absolute text-mocha-600/40 dark:text-mocha-400/40 font-mono text-6xl md:text-7xl font-bold"
            style={{
              left: `${5 + index * 13}%`,
              top: `${15 + (index % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.3,
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 min-h-[3rem]">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <FiCode size={20} />
              View Projects
            </motion.button>
            
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                aria-label={social.label}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-mocha-600 dark:border-mocha-400 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-mocha-600 dark:bg-mocha-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
