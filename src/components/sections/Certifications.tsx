import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { useInView } from '../../hooks/useAnimations';
import { certifications } from '../../constants/data';

const Certifications = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <section
      id="certifications"
      className="section-padding bg-white dark:bg-dark-bg"
      ref={ref as any}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and courses completed</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card p-6"
            >
              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mocha-100 dark:bg-mocha-900 rounded-lg flex-shrink-0">
                  <FiAward className="text-mocha-600 dark:text-mocha-400" size={24} />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-mocha-600 dark:text-mocha-400 font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{cert.date}</span>
                  </div>

                  {/* Duration */}
                  {cert.duration && (
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {cert.duration}
                    </div>
                  )}

                  {/* Credential Link */}
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-mocha-600 dark:text-mocha-400 hover:underline text-sm font-medium"
                    >
                      View Credential <FiExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
