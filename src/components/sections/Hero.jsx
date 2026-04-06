import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HERO } from '../../data/index'
import styles from './Hero.module.css'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Subtle parallax — only moves content down slightly, never hides it
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  // Fade starts at 60% scroll through the section, not before
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0])

  return (
    <section ref={ref} id="about" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Glow blobs */}
      <div className={`${styles.blob} ${styles.blobGreen}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blobCyan}`} aria-hidden="true" />

      <motion.div className={styles.content} style={{ y, opacity }}>
        {/* Role tag */}
        <motion.div
          className={styles.roleTag}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.roleTagLine} />
          {HERO.role}
        </motion.div>

        {/* Name */}
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {HERO.name.split('\n').map((line, i) =>
            i === 0 ? (
              <span key={i} className={styles.nameSolid}>{line}<br /></span>
            ) : (
              <span key={i} className={styles.nameOutline}>{line}</span>
            )
          )}
        </motion.h1>

        {/* Divider bar */}
        <motion.div
          className={styles.bar}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        />

        {/* Bio */}
        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {HERO.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <motion.a
            href={`mailto:${HERO.email}`}
            className={styles.btnPrimary}
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(168,255,62,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            Hire Me ↗
          </motion.a>
          <motion.a
            href={HERO.github}
            target="_blank"
            rel="noreferrer"
            className={styles.btnOutline}
            whileHover={{ scale: 1.04, borderColor: 'var(--accent2)', color: 'var(--accent2)' }}
            whileTap={{ scale: 0.97 }}
          >
            GitHub ↗
          </motion.a>
          <motion.a
            href={HERO.linkedin}
            target="_blank"
            rel="noreferrer"
            className={styles.btnOutline}
            whileHover={{ scale: 1.04, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.97 }}
          >
            LinkedIn ↗
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {HERO.stats.map(({ value, label }) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  )
}