import { motion } from 'framer-motion';
import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiLinux,
  SiPython,
  SiDocker,
  SiKubernetes,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { useInView } from '../../hooks/useAnimations';
import { skills } from '../../constants/data';

const Skills = () => {
  const [ref, isInView] = useInView(0.2);

  const iconMap: Record<string, any> = {
    Java: FaJava,
    'Spring Boot': SiSpringboot,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    'React.js': SiReact,
    JavaScript: SiJavascript,
    'HTML/CSS': SiHtml5,
    Git: SiGit,
    'Kali Linux': SiLinux,
    Python: SiPython,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-card" ref={ref as any}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    icon={iconMap[skill.name]}
                    delay={catIndex * 0.2 + index * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="card px-8 py-4">
              <div className="font-semibold text-gray-900 dark:text-white">Tamil</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Native</div>
            </div>
            <div className="card px-8 py-4">
              <div className="font-semibold text-gray-900 dark:text-white">English</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Fluent</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: { name: string; level: number };
  icon?: any;
  delay: number;
  isInView: boolean;
}

const SkillBar = ({ skill, icon: Icon, delay, isInView }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-mocha-600 dark:text-mocha-400" size={20} />}
          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-mocha-500 to-mocha-700 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Skills;
