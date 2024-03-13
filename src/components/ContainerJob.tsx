import { ProjectMain } from './ProjectMain'
import { ProjectSecond } from './ProjectSecond'

import styles from './ContainerJob.module.css'

export function ContainerJob () {
    return(
        <header className={styles.container}>
            <ProjectMain />
            <ProjectSecond />
        </header>
    )
}