/* eslint-disable react/react-in-jsx-scope */
import { ContainerContact } from '../components/ContainerContact'
import { ContainerLink } from '../components/ContainerLink'
import { FooterLink } from '../components/FooterLink'
import { Menu } from '../components/Menu'
import { RedesSociais } from '../components/SocialMedia'
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
            <div className={styles.containerLinkHome}>
                <ContainerLink />
            </div>
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
  )
}