import { PersonalDetails } from './PersonalDetails'
import { Photo } from './Photo'
import { ProjectMain } from './ProjectMain'
import { ProjectSecond } from './ProjectSecond'

import styles from './ContainerHome.module.css'

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
                <ProjectSecond />
            </div>
        </header>
    )
}