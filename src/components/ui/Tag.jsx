import styles from './Tag.module.css'

export default function Tag({ children, color }) {
  const style = color
    ? {
        color,
        background: `${color}15`,
        borderColor: `${color}35`,
      }
    : {}

  return (
    <span className={styles.tag} style={style}>
      {children}
    </span>
  )
}
