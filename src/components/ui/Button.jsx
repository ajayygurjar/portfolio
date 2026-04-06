import { motion } from 'framer-motion'
import styles from './Button.module.css'

/**
 * variant: 'primary' | 'outline'
 */
export default function Button({ href, children, variant = 'primary', target, style = {} }) {
  const accentColor = style['--accent-color'] || 'var(--accent)'

  const motionProps =
    variant === 'primary'
      ? {
          whileHover: { scale: 1.04, boxShadow: `0 0 30px color-mix(in srgb, ${accentColor} 40%, transparent)` },
          whileTap: { scale: 0.97 },
        }
      : {
          whileHover: { scale: 1.04, borderColor: 'var(--accent2)', color: 'var(--accent2)' },
          whileTap: { scale: 0.97 },
        }

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      className={`${styles.btn} ${styles[variant]}`}
      style={style}
      {...motionProps}
    >
      {children}
    </motion.a>
  )
}
