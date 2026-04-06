import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { SKILL_GROUPS } from '../../data/index'
import styles from './Skills.module.css'

function SkillCard({ group, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4, borderColor: 'rgba(168,255,62,0.35)' }}
    >
      <p className={styles.groupLabel}>{group.label}</p>
      <div className={styles.tags}>
        {group.items.map((item) => (
          <span key={item} className={styles.tag}>{item}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.topBorder} aria-hidden="true" />
      <SectionHeading tag="Expertise" title="TECHNICAL SKILLS" />
      <div className={styles.grid}>
        {SKILL_GROUPS.map((group, i) => (
          <SkillCard key={group.label} group={group} index={i} />
        ))}
      </div>
    </section>
  )
}
