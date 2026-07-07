import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { number: '8.5', label: 'CGPA in B.Tech' },
  { number: '1+', label: 'Major Projects' },
  { number: '3+', label: 'Programming Languages' },
  { number: 'AI/ML', label: 'Enthusiast' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background effects */}
      <motion.div
        className="hero-bg-orb orb-1"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-bg-orb orb-2"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-bg-orb orb-3"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hero-grid" />

      <div className="hero-content">
        <motion.div
          className="hero-badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="dot" />
          Available for Opportunities
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hi, I'm <span className="gradient-text">G. Dhanapriya</span>
          <br />
          Java Backend Developer
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Motivated Electronics and Communication Engineering graduate passionate about developing 
          scalable backend applications using Java and Spring Boot. Actively expanding my expertise in 
          Artificial Intelligence and Machine Learning.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a href="#projects" className="btn-primary">
            View My Work <FiArrowRight />
          </a>
          <a href="/Dhanapriya_CV.pdf" download="G_Dhanapriya_CV.pdf" className="btn-outline">
            <FiDownload /> Download CV
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
