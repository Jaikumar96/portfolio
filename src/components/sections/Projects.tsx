import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { useInView } from '../../hooks/useAnimations';
import { projects } from '../../constants/data';

const Projects = () => {
  const [ref, isInView] = useInView(0.2);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <section id="projects" className="section-padding bg-white dark:bg-dark-bg" ref={ref as any}>
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Explore my recent work and contributions</p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-mocha-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-mocha-100 dark:hover:bg-dark-border'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isInView={isInView}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
  onClick: () => void;
}

const ProjectCard = ({ project, index, isInView, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="card p-6 cursor-pointer group"
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-mocha-200 to-mocha-400 dark:from-mocha-800 dark:to-mocha-600 rounded-lg mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/20 font-mono">
          {'</>'}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Category Badge */}
      <div className="mb-3">
        <span className="px-3 py-1 bg-mocha-100 dark:bg-mocha-900 text-mocha-700 dark:text-mocha-300 text-xs font-semibold rounded-full">
          {project.category}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-mocha-600 dark:group-hover:text-mocha-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-1 text-mocha-600 dark:text-mocha-400 text-xs font-medium">
            +{project.techStack.length - 3} more
          </span>
        )}
      </div>

      {/* View Details */}
      <div className="text-mocha-600 dark:text-mocha-400 font-medium text-sm group-hover:underline">
        View Details →
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: typeof projects[0] | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-dark-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-full transition-colors"
          >
            <FiX size={24} />
          </button>

          {/* Project Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <span className="px-3 py-1 bg-mocha-100 dark:bg-mocha-900 text-mocha-700 dark:text-mocha-300 text-sm font-semibold rounded-full">
                {project.category}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{project.timeline}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-mocha-50 dark:bg-dark-bg text-mocha-700 dark:text-mocha-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements</h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-mocha-600 dark:text-mocha-400 mt-1">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FiGithub size={20} />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FiExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
