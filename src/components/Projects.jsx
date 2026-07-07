import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Task Management System',
    description: 'A web-based Task Management System with user authentication, authorization, and RESTful APIs for task creation, assignment, updating, and tracking.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate'],
    gradient: 'linear-gradient(135deg, #7c5cfc 0%, #38bdf8 100%)',
    emoji: '📋',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section projects" id="projects" ref={ref}>
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-label">Featured Work</div>
        <h2>Projects I'm proud of</h2>
        <p>A selection of recent projects that showcase my skills and passion</p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="project-card"
            variants={fadeUp}
            whileHover={{ y: -8 }}
          >
            <div className="project-image">
              <div
                className="project-image-placeholder"
                style={{ background: project.gradient }}
              >
                {project.emoji}
              </div>
              <div className="project-overlay">
                <button className="project-overlay-btn" aria-label={`View ${project.title}`}>
                  <FiExternalLink />
                </button>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
