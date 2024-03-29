import { PersonalDetails } from './PersonalDetails'
import { Photo } from './Photo'
import { ProjectMain } from './ProjectMain'

import styles from './ContainerHome.module.css'
import { Logos } from './Logos'

export function ContainerHome () {
    return(
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <PersonalDetails />
                <Photo />
            </div>
            <hr className={styles.verticalline} />
            <div className={styles.projects}>
                <h2 className={styles.caption}>Meus trabalhos</h2>
                <ProjectMain />
                <h2 className={styles.caption}>Tecnologias implementadas</h2>
                <hr className={styles.verticalline} />
                <Logos />
                <h2 className={styles.caption}>Outros projetos</h2>
                <hr className={styles.verticalline} />
            </div>
        </header>
    )
}