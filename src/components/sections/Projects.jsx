import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Tag from '../ui/Tag'
import { PROJECTS } from '../../data/index'
import styles from './Projects.module.css'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      style={{ borderColor: hovered ? `${project.accentColor}44` : 'var(--border)' }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Big background number */}
      <span
        className={styles.bgNum}
        style={{ color: project.accentColor }}
        aria-hidden="true"
      >
        {project.num}
      </span>

      {/* Animated top bar on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className={styles.topBar}
            style={{
              background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className={styles.inner}>
        {/* Meta */}
        <p className={styles.meta} style={{ color: project.accentColor }}>
          {project.num} / {project.subtitle}
        </p>

        {/* Title */}
        <h3 className={styles.title}>{project.title}</h3>

        {/* Description */}
        <p className={styles.desc}>{project.description}</p>

        {/* Highlights */}
        <ul className={styles.highlights}>
          {project.highlights.map((h) => (
            <li key={h} className={styles.highlight}>
              <span className={styles.bullet} style={{ color: project.accentColor }}>▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className={styles.stack}>
          {project.stack.map((s) => (
            <Tag key={s} color={project.accentColor}>{s}</Tag>
          ))}
        </div>

        {/* Links */}
        <div className={styles.links}>
          {project.live && (
            <Button
              href={project.live}
              target="_blank"
              variant="primary"
              style={{ '--accent-color': project.accentColor, background: project.accentColor }}
            >
              Live Demo ↗
            </Button>
          )}
          <Button href={project.github} target="_blank" variant="outline">
            GitHub ↗
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <SectionHeading tag="Work" title="PROJECTS" />
      <div className={styles.list}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
