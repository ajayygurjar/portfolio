import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { CERTIFICATIONS, EDUCATION, ACHIEVEMENT } from '../../data/index'
import styles from './Credentials.module.css'

function CertCard({ cert, index, inView }) {
  return (
    <motion.div
      className={styles.certCard}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1 }}
      whileHover={{ borderColor: 'rgba(168,255,62,0.3)' }}
    >
      <div className={styles.certInfo}>
        <p className={styles.certTitle}>{cert.title}</p>
        <p className={styles.certOrg}>{cert.org}</p>
        <p className={styles.certDetail}>{cert.detail}</p>
      </div>
      <span
        className={styles.badge}
        style={
          cert.status === 'Completed'
            ? {
                color: 'var(--accent)',
                background: 'rgba(168,255,62,0.1)',
                borderColor: 'rgba(168,255,62,0.25)',
              }
            : {
                color: 'var(--accent2)',
                background: 'rgba(62,245,255,0.1)',
                borderColor: 'rgba(62,245,255,0.25)',
              }
        }
      >
        {cert.status}
      </span>
    </motion.div>
  )
}

function EduCard({ edu, index, inView }) {
  return (
    <motion.div
      className={styles.eduCard}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1 }}
    >
      <p className={styles.eduDegree}>
        {edu.degree}{edu.field ? ` — ${edu.field}` : ''}
      </p>
      <p className={styles.eduInst}>{edu.institution}</p>
      <div className={styles.eduMeta}>
        <span className={styles.eduPeriod}>{edu.period}</span>
        {edu.grade && <span className={styles.eduGrade}>{edu.grade}</span>}
      </div>
    </motion.div>
  )
}

export default function Credentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="credentials" className={styles.section}>
      <div className={styles.topBorder} aria-hidden="true" />
      <SectionHeading tag="Background" title="CREDENTIALS" />

      <div ref={ref} className={styles.grid}>
        {/* Left — Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.colTag}>
              <span className={styles.colTagLine} />
              Certifications
            </p>
            <h3 className={styles.colHeading}>LEARNING</h3>
          </motion.div>

          <div className={styles.cards}>
            {CERTIFICATIONS.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Right — Education + Achievement */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className={`${styles.colTag} ${styles.colTagCyan}`}>
              <span className={`${styles.colTagLine} ${styles.colTagLineCyan}`} />
              Education
            </p>
            <h3 className={styles.colHeading}>ACADEMICS</h3>
          </motion.div>

          <div className={styles.cards}>
            {EDUCATION.map((edu, i) => (
              <EduCard key={edu.degree} edu={edu} index={i} inView={inView} />
            ))}

            {/* Achievement callout */}
            <motion.div
              className={styles.achievement}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
            >
              <p className={styles.achievementLabel}>
                {ACHIEVEMENT.icon} {ACHIEVEMENT.title}
              </p>
              <p className={styles.achievementBody}>{ACHIEVEMENT.body}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
