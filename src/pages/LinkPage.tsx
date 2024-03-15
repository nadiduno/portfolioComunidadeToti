import { ContainerLink } from '../components/ContainerLink'
import { FooterLink } from '../components/FooterLink'
import { Menu } from '../components/Menu'
import { RedesSociais } from '../components/RedesSociais'
import styles from './HomePage.module.css'

export function LinkPage () {
  return (
        <>
            <main className={styles.menu}>
                <Menu />            
            </main>
            <div className={styles.container}>
                <ContainerLink />
                <div> 
                    <ContainerLink />
                </div>
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