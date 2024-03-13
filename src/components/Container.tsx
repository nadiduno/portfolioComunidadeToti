import styles from './Container.module.css'
import { PersonalDetails } from './PersonalDetails'
import { Photo } from './Photo'

export function Container () {
    return(
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <PersonalDetails />
                <Photo />
            </div>
            <div>
                Projeto principal
            </div>
            <div>
                Projetos outros
            </div>
        </header>
    )
}