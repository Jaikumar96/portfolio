import { motion } from 'framer-motion';
import { FiCode, FiAward, FiStar } from 'react-icons/fi';
import { useInView } from '../../hooks/useAnimations';
import { achievements } from '../../constants/data';

const Achievements = () => {
  const [ref, isInView] = useInView(0.2);

  const iconMap: Record<string, any> = {
    code: FiCode,
    certificate: FiAward,
    workshop: FiStar,
  };

  return (
    <section
      id="achievements"
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
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones and accomplishments</p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || FiStar;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center"
              >
                {/* Icon */}
                <div className="inline-flex p-4 bg-mocha-100 dark:bg-mocha-900 rounded-full mb-4">
                  <Icon className="text-mocha-600 dark:text-mocha-400" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {achievement.description}
                </p>

                {/* Date */}
                {achievement.date && (
                  <p className="text-xs text-mocha-600 dark:text-mocha-400 font-medium">
                    {achievement.date}
                  </p>
                )}

                {/* Link */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-mocha-600 dark:text-mocha-400 hover:underline text-sm font-medium"
                  >
                    View Profile →
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
