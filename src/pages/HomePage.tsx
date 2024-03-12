import { Menu } from '../components/Menu'
import styles from './HomePage.module.css'

export function HomePage () {
  return (
        <>
            <main className={styles.menu}>
                <Menu />            
            </main>
            <div className={styles.container}>
                <p>Container</p>
            </div>
            <footer className={styles.footersocial}>
                <>Redes Sociais</>
            </footer>
        </>
  )
}
