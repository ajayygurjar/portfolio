/**
 * Returns a function that smoothly scrolls to a section by id.
 * id is derived by lowercasing the label string.
 */
export function useScrollTo() {
  return (label) => {
    const id = label.toLowerCase()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
