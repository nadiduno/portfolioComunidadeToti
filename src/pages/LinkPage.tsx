import { ContainerLink } from '../components/ContainerLink'
import { FooterLink } from '../components/FooterLink'
import { Menu } from '../components/Menu'
import styles from './HomePage.module.css'

export function LinkPage () {
  return (
        <>
            <main className={styles.menu}>
                <Menu />            
            </main>
            <div className={styles.container}>
                <ContainerLink />
            </div>
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
  )
}