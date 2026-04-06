import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { CONTACT_LINKS, HERO } from '../../data/index'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading tag="Get In Touch" title="CONTACT" />

        <motion.p
          className={styles.intro}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Open to full-time roles, freelance projects, and collaborations. Whether
          you're building something ambitious or just want to talk tech — reach out.
        </motion.p>

        <div className={styles.links}>
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className={styles.linkRow}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ x: 8, borderColor: 'var(--accent)' }}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span className={styles.linkValue}>{link.value} ↗</span>
            </motion.a>
          ))}
        </div>

        {/* Location note */}
        <motion.p
          className={styles.location}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          📍 {HERO.location}
        </motion.p>
      </div>
    </section>
  )
}
