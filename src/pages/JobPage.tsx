import { ContainerJob } from '../components/ContainerJob'
import { FooterLink } from '../components/FooterLink'
import { Menu } from '../components/Menu'

import styles from './HomePage.module.css'

export function JobPage () {
  return (
        <>
            <main className={styles.menu}>
                <Menu />            
            </main>
            <div className={styles.container}>
                <ContainerJob />
            </div>
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
  )
}