import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { useInView } from '../../hooks/useAnimations';
import { experiences } from '../../constants/data';

const Experience = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-dark-card"
      ref={ref as any}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and internships</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-mocha-300 dark:bg-mocha-700" />

            {/* Timeline Items */}
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  experience: typeof experiences[0];
  index: number;
  isInView: boolean;
}

const TimelineItem = ({ experience, index, isInView }: TimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className={`relative mb-12 ${
        isEven ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-mocha-600 rounded-full border-4 border-white dark:border-dark-bg transform -translate-x-1/2 z-10" />

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="card p-6 ml-16 md:ml-0 md:mr-0"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {experience.title}
            </h3>
            <div className="flex items-center gap-2 text-mocha-600 dark:text-mocha-400 font-semibold">
              <FiBriefcase size={18} />
              <span>{experience.company}</span>
            </div>
          </div>
          {experience.badge && (
            <span className="px-3 py-1 bg-mocha-100 dark:bg-mocha-900 text-mocha-700 dark:text-mocha-300 text-xs font-semibold rounded-full">
              {experience.badge}
            </span>
          )}
        </div>

        {/* Period */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <FiCalendar size={16} />
          <span className="text-sm">{experience.period}</span>
        </div>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
            >
              <span className="text-mocha-600 dark:text-mocha-400 mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-mocha-50 dark:bg-dark-bg text-mocha-700 dark:text-mocha-300 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
