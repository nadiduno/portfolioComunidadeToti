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
                    <GraphicMath />
                    {/* Colocaro gráfico o a imagem abaixo */}
                    {/* <img
                        className={styles.cover}
                        src="https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/bgstar.svg?raw=true"
                        alt="Foto de um dev, clocar desc"
                    /> */}
                </div>
                <Menu />            
                <ContainerHome />
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
