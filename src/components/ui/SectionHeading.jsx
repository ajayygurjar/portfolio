import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './SectionHeading.module.css'

export default function SectionHeading({ tag, title }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={styles.wrapper}>
      <motion.div
        className={styles.tag}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.line} />
        {tag}
      </motion.div>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
