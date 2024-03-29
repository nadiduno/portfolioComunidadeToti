import { CardAnimation } from '../components/CardAnimation'
import { CardProject } from '../components/CardProject'
import { ContainerHome } from '../components/ContainerHome'
import { FooterLink } from '../components/FooterLink'
import { GraphicMath } from '../components/GraphicMath'
import { Menu } from '../components/Menu'
import { RedesSociais } from '../components/RedesSociais'
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
                <CardAnimation />
                <CardProject />
            </div>
            <footer className={styles.footersocial}>
                <FooterLink />
            </footer>
        </>
  )
}
