import { PersonalDetails } from './PersonalDetails'
import { Photo } from './Photo'
import { ProjectMain, ProjectAppType} from './ProjectMain'

import styles from './ContainerHome.module.css'
import { Logos } from './Logos'

const projectsApp: ProjectAppType[] = [
    {
      id: 0,
      title: 'Dashboard Científico',
      urlproject: 'https://app.powerbi.com/view?r=eyJrIjoiMWYxMTVkZjUtMTI2OS00NzBmLWI1MGMtOWQ0Nzc2YzMzNzVkIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
      urlgithub: 'https://github.com/nadiduno/DataCientists',
      urlbddownload: 'https://raw.githubusercontent.com/nadiduno/DataCientists/main/projetosv1.csv'

    },
    {
        id: 1,
        title: 'Dashboard Científico',
        urlproject: 'https://app.powerbi.com/view?r=eyJrIjoiMWYxMTVkZjUtMTI2OS00NzBmLWI1MGMtOWQ0Nzc2YzMzNzVkIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
        urlgithub: 'https://github.com/nadiduno/DataCientists',
        urlbddownload: 'https://raw.githubusercontent.com/nadiduno/DataCientists/main/projetosv1.csv'
  
      },
      {
        id: 2,
        title: 'Dashboard Científico',
        urlproject: 'https://app.powerbi.com/view?r=eyJrIjoiMWYxMTVkZjUtMTI2OS00NzBmLWI1MGMtOWQ0Nzc2YzMzNzVkIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9',
        urlgithub: 'https://github.com/nadiduno/DataCientists',
        urlbddownload: 'https://raw.githubusercontent.com/nadiduno/DataCientists/main/projetosv1.csv'
  
      }
  ]
    

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
                <ProjectMain key={projectsApp[0].id} projectApp={projectsApp[0]} />
                <h2 className={styles.caption}>Tecnologias implementadas</h2>
                <hr className={styles.verticalline} />
                <Logos />
                <h2 className={styles.caption}>Outros projetos</h2>
                <hr className={styles.verticalline} />
            </div>
        </header>
    )
}