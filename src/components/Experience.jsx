import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    date: '2021 — 2025',
    role: 'B.Tech in Electronics and Communication Engineering',
    company: 'Audisankara College of Engineering and Technology, Gudur',
    description: 'CGPA: 8.5. Graduating with a strong foundation in core engineering principles and software development.',
  }
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
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section" id="experience" ref={ref}>
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-label">Academic Journey</div>
        <h2>Education</h2>
        <p>A timeline of my academic background and milestones</p>
      </motion.div>

      <motion.div
        className="experience-timeline"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.date}
            className="timeline-item"
            variants={fadeUp}
          >
            <div className="timeline-dot" />
            <div className="timeline-date">{exp.date}</div>
            <h3>{exp.role}</h3>
            <div className="timeline-company">{exp.company}</div>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
