import { ProjectMain } from './ProjectMain'

import styles from './ContainerJob.module.css'

export function ContainerJob () {
    return(
        <header className={styles.container}>
            <ProjectMain />
        </header>
    )
}