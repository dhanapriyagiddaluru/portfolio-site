import { FiGithub, FiLinkedin } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub />, href: '#', label: 'GitHub' },
  { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">

        </a>
        <p className="footer-text">
          © {new Date().getFullYear()} G. Dhanapriya. Crafted with ❤️ and lots of ☕
        </p>
        <div className="footer-socials">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="footer-social-link"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
