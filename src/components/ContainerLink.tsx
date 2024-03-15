import styles from './ContainerLink.module.css'
import { RedesSociais } from './RedesSociais'


export function ContainerLink () {
    return(
        <header className={styles.container}>
            <div>
                < RedesSociais />
            </div>
        </header>
    )
}