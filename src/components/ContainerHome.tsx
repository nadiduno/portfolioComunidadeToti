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
                <ProjectMain />
                <Logos />
            </div>
        </header>
    )
}