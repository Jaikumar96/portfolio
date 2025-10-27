import { motion } from 'framer-motion';
import { useInView, useCounter } from '../../hooks/useAnimations';
import { aboutData } from '../../constants/data';

const About = () => {
  const [ref, isInView] = useInView(0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-bg" ref={ref as any}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know more about my skills and experience</p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              {aboutData.description}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {aboutData.highlights.map((highlight, index) => (
              <HighlightCard
                key={index}
                label={highlight.label}
                value={highlight.value}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface HighlightCardProps {
  label: string;
  value: number;
  isInView: boolean;
}

const HighlightCard = ({ label, value, isInView }: HighlightCardProps) => {
  const count = useCounter(value, 2000, isInView);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="card p-6 text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}
        {label.includes('CGPA') ? '' : '+'}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default About;
