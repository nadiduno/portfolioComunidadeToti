import { ProjectMain, ProjectAppType } from './ProjectMain'

import styles from './ContainerJob.module.css'


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

export function ContainerJob () {
    return(
        <header className={styles.container}>
          <h2 className={styles.title}>Meus trabalhos</h2>
          {projectsApp.map((projectApp) => {
               return ( 
                <div className={styles.subsetion}> 
                  <h2 className={styles.caption}>{projectApp.title}</h2>
                  <ProjectMain key={projectApp.id} projectApp={projectApp} />
                  </div>
               )
          })}
        </header>
    )
}