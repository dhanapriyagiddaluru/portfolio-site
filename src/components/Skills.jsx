import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiDatabase, FiCpu, FiTool, FiBook } from 'react-icons/fi';

const skills = [
  {
    icon: <FiCode />,
    title: 'Programming Languages',
    description: 'Strong foundation in object-oriented and data-driven programming languages.',
    tags: ['Java', 'SQL', 'Python'],
    gradient: 'linear-gradient(135deg, #7c5cfc, #38bdf8)',
  },
  {
    icon: <FiServer />,
    title: 'Frameworks',
    description: 'Building robust backend systems and RESTful APIs.',
    tags: ['Spring Boot', 'Spring Data JPA', 'Hibernate'],
    gradient: 'linear-gradient(135deg, #f472b6, #fb923c)',
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    description: 'Designing and managing relational databases for application data.',
    tags: ['MySQL'],
    gradient: 'linear-gradient(135deg, #34d399, #38bdf8)',
  },
  {
    icon: <FiCpu />,
    title: 'AI & Machine Learning',
    description: 'Exploring data science and building intelligent models.',
    tags: ['NumPy', 'Pandas', 'Scikit-learn'],
    gradient: 'linear-gradient(135deg, #c084fc, #f472b6)',
  },
  {
    icon: <FiTool />,
    title: 'Tools & Development',
    description: 'Utilizing modern tools for version control, testing, and building.',
    tags: ['Git', 'GitHub', 'Postman', 'Maven', 'VS Code'],
    gradient: 'linear-gradient(135deg, #fbbf24, #f97316)',
  },
  {
    icon: <FiBook />,
    title: 'Core Concepts',
    description: 'Understanding fundamental software engineering principles.',
    tags: ['REST APIs', 'OOP', 'MVC Architecture', 'Data Structures & Algorithms'],
    gradient: 'linear-gradient(135deg, #38bdf8, #818cf8)',
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
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="skills" ref={ref}>
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-label">Skills & Expertise</div>
        <h2>What I bring to the table</h2>
        <p>A comprehensive technical skill set for backend development and AI/ML</p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            className="skill-card"
            variants={fadeUp}
            whileHover={{ y: -6 }}
          >
            <div className="skill-icon" style={{ background: skill.gradient.replace('linear-gradient', 'linear-gradient').replace(')', ', transparent)').replace('135deg,', '135deg,').slice(0, -1) }}>
              {skill.icon}
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
