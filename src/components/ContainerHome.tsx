import styles from './ContainerHome.module.css'
import { PersonalDetails } from './PersonalDetails'
import { Photo } from './Photo'

export function ContainerHome () {
    return(
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <PersonalDetails />
                <Photo />
            </div>
            <hr className={styles.verticalline} />
            <div>
                Projeto principal
            </div>
            <div>
                Projetos outros
            </div>
        </header>
    )
}