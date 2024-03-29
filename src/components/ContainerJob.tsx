import { ProjectMain } from './ProjectMain'

import styles from './ContainerJob.module.css'

export function ContainerJob () {
    return(
        <header className={styles.container}>
           <div className={styles.subsetion}>
                <ProjectMain />
           </div>
           <div className={styles.subsetion}>
                <ProjectMain />
           </div>
           <div className={styles.subsetion}>
                <ProjectMain />
           </div>
        </header>
    )
}