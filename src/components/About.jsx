import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiBriefcase, FiMail, FiCalendar } from 'react-icons/fi';

const infoItems = [
  { icon: <FiMapPin />, label: 'Location', value: 'Chennai, India' },
  { icon: <FiBriefcase />, label: 'Experience', value: 'Fresher / Entry Level' },
  { icon: <FiMail />, label: 'Email', value: 'dhanapriyagiddaluru@gmail.com' },
  { icon: <FiCalendar />, label: 'Availability', value: 'Open to work' },
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
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section about" id="about" ref={ref}>
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-label">About Me</div>
        <h2>Passionate about crafting digital experiences</h2>
        <p>Get to know the person behind the code</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-image">
            <div className="about-image-inner">👨‍💻</div>
          </div>
          <div className="about-image-border" />
        </motion.div>

        <motion.div
          className="about-text"
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={fadeUp}>
            Building the backend infrastructure for the future
          </motion.h3>
          <motion.p variants={fadeUp}>
            I am a motivated and detail-oriented Electronics and Communication 
            Engineering graduate with a strong foundation in Java, Spring Boot, SQL, 
            REST APIs, and MySQL. I am passionate about developing scalable backend 
            applications and designing robust APIs.
          </motion.p>
          <motion.p variants={fadeUp}>
            Currently, I am expanding my expertise in Artificial Intelligence and 
            Machine Learning, working with tools like NumPy, Pandas, and Scikit-learn. 
            I am eager to contribute to innovative projects as a Java Spring Boot 
            Developer while leveraging emerging AI/ML technologies.
          </motion.p>

          <motion.div className="about-info-grid" variants={stagger}>
            {infoItems.map((item) => (
              <motion.div
                key={item.label}
                className="about-info-item"
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="info-label">{item.label}</div>
                <div className="info-value">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
