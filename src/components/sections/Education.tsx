import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import { useInView } from '../../hooks/useAnimations';
import { education } from '../../constants/data';

const Education = () => {
  const [ref, isInView] = useInView(0.3);

  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-bg" ref={ref as any}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </motion.div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            whileHover={{ scale: 1.02, y: -5 }}
            className="card p-8"
          >
            {/* Institution Logo Placeholder */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mocha-400 to-mocha-600 rounded-lg mb-6 mx-auto">
              <span className="text-3xl text-white font-bold">
                {education.institution.split(' ').map((word) => word[0]).join('').slice(0, 3)}
              </span>
            </div>

            {/* Institution Name */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
              {education.institution}
            </h3>

            {/* Degree */}
            <p className="text-lg md:text-xl text-mocha-600 dark:text-mocha-400 font-semibold text-center mb-6">
              {education.degree} in {education.field}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Duration */}
              <div className="flex items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-dark-card rounded-lg">
                <FiCalendar className="text-mocha-600 dark:text-mocha-400" size={20} />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Duration</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {education.duration}
                  </div>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-dark-card rounded-lg">
                <FiAward className="text-mocha-600 dark:text-mocha-400" size={20} />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">CGPA</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {education.cgpa} / 10.0
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 p-4 bg-gray-50 dark:bg-dark-card rounded-lg">
                <FiMapPin className="text-mocha-600 dark:text-mocha-400" size={20} />
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">
                    {education.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Badge */}
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-mocha-100 dark:bg-mocha-900 text-mocha-700 dark:text-mocha-300 font-semibold rounded-full">
                Outstanding Academic Performance
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
