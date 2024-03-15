import { ContainerContact } from '../components/ContainerContact'
import { FooterLink } from '../components/FooterLink'
import { Menu } from '../components/Menu'
import { RedesSociais } from '../components/RedesSociais'
import styles from './HomePage.module.css'

export function ContactPage () {
  return (
        <>
            <main className={styles.menu}>
                <Menu />            
            </main>
            <div className={styles.container}>
                <ContainerContact />
            </div>
            <div>
                <RedesSociais />
            </div>
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
  )
}