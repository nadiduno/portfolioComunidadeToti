import { Buttons, type ButtonAppType } from './Buttons';
import styles from './ProjectMain.module.css'

export interface ProjectAppType
{
      id: number
      title: string
      urlproject: string
      urlgithub: string 
      urlbddownload: string
}

interface AppProps {
  projectApp: ProjectAppType
}  

// const iframeWidth = `calc((100vw - 50px) / 2)`; 
// const iframeHeight = `calc((100vw - 50px) * 498 / 750 / 2)`; 

export function ProjectMain({ projectApp }: AppProps) {
  const PowerBiDashboard: React.FC = () => {
    return (
      <div className={styles.iframeContainer}>
      <iframe
        title={projectApp.title}
        // width={iframeWidth}
        // height={iframeHeight}
        src={projectApp.urlproject}
        allowFullScreen={true as boolean}
      />
      </div>
    )
  }
  
  const buttonsApp: ButtonAppType[] = [
    {
      id: 0,
      title: 'Ver o Dashboard',
      urlbutton: projectApp.urlproject    },
    {
      id: 1,
      title: 'Ver o Projeto',
      urlbutton: projectApp.urlgithub 
    },
    {
      id: 2,
      title: 'Descargar BD',
      urlbutton: projectApp.urlbddownload 
    }
  ]
  
  return(
        <>
            <div className={styles.container}>
                <div className={styles.iframeborder}>   
                    {/* <iframe title="Vendas" width="750" height="498" src="https://app.powerbi.com/view?r=eyJrIjoiMDEwZjJkYzQtYTBmMC00ZWE3LWI5MjktZDJhZTUzODI2NjVhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9" frameborder="1" allowFullScreen="true" /> */}
                    {/*Da erro com o typescript*/}
                    <PowerBiDashboard />
                    <div className={styles.wrapperbuttons}>
                      {buttonsApp.map((buttonApp) => {
                        return <Buttons key={buttonApp.id} buttonApp={buttonApp} />
                      })}
                    </div>
                </div>
            </div>
        </>
    )
}

