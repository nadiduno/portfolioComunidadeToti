import { Container } from '../components/Container'
import { FooterLink } from '../components/FooterLink'
import { Menu } from '../components/Menu'
import styles from './HomePage.module.css'

export function HomePage () {
  return (
        <>
            <main className={styles.menu}>
                <Menu />            
            </main>
            <div className={styles.container}>
                <Container />
            </div>
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
  )
}
