import { ActiveLink } from '../ActiveLink'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span className={styles.logo}>qs<b>_</b>final</span>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  )
}