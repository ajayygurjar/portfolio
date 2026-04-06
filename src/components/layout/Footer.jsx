import { motion } from 'framer-motion'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        AG<span className={styles.dot}>.</span>
      </span>

      <span className={styles.copy}>
        © 2025 Ajay Gurjar — Full Stack Developer
      </span>

      <motion.a
        href="#about"
        className={styles.top}
        whileHover={{ color: 'var(--accent)' }}
      >
        Back to top ↑
      </motion.a>
    </footer>
  )
}
