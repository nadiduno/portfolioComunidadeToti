/* eslint-disable react/react-in-jsx-scope */
import { CardProjectSeconds } from '../components/CardProjectSeconds'
import { ContainerHome } from '../components/ContainerHome'
import { ContainerLink } from '../components/ContainerLink'
import { FooterLink } from '../components/FooterLink'
// import { GraphicMath } from '../components/GraphicMath'
import { Menu } from '../components/Menu'
import { RedesSociais } from '../components/SocialMedia'
import styles from './HomePage.module.css'

export function HomePage () {
  return (
        <>
            <div className={styles.container}>
                <div className={styles.imagebackground}>
                    {/* <GraphicMath /> */}
                    <img
                        className={styles.cover}
                        src="https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/bgstar.svg?raw=true"
                    />
                </div>  
                <Menu />            
                <ContainerHome />
            </div>
            <div>
                <RedesSociais />
            </div>
            <div className={styles.container2}>
                <CardProjectSeconds  />
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
