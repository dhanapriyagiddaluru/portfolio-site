import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const contactLinks = [
  { icon: <FiMail />, label: 'Email', value: 'dhanapriyagiddaluru@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '6305487929' },
  { icon: <FiMapPin />, label: 'Location', value: 'Chennai, India' },
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <motion.div
        className="section-header"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="section-label">Get In Touch</div>
        <h2>Let's work together</h2>
        <p>Have a project in mind? I'd love to hear about it.</p>
      </motion.div>

      <div className="contact-wrapper">
        <motion.div
          className="contact-info"
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={fadeUp}>
            Let's create something amazing
          </motion.h3>
          <motion.p variants={fadeUp}>
            I'm always excited to take on new challenges and collaborate with
            passionate teams. Whether you have a detailed brief or just a rough
            idea, let's chat and bring it to life.
          </motion.p>

          <motion.div className="contact-links" variants={stagger}>
            {contactLinks.map((link) => (
              <motion.div
                key={link.label}
                className="contact-link-item"
                variants={fadeUp}
                whileHover={{ x: 4 }}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div className="contact-link-text">
                  <div className="link-label">{link.label}</div>
                  <div className="link-value">{link.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="form-row">
            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </motion.div>
            <motion.div className="form-group" variants={fadeUp}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </motion.div>
          </div>
          <motion.div className="form-group" variants={fadeUp}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Project Inquiry" required />
          </motion.div>
          <motion.div className="form-group" variants={fadeUp}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell me about your project..." required />
          </motion.div>
          <motion.button
            type="submit"
            className="btn-submit"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {submitted ? '✓ Message Sent!' : <><FiSend /> Send Message</>}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
