import { Buttons, type ButtonAppType } from './Buttons';
import styles from './ProjectMain.module.css'

const buttonsApp: ButtonAppType[] = [
  {
    id: 0,
    title: 'Ver o Dashboard',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiMDEwZjJkYzQtYTBmMC00ZWE3LWI5MjktZDJhZTUzODI2NjVhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9'
  },
  {
    id: 1,
    title: 'Ver o Projeto',
    url: 'https://github.com/'
  },
  {
    id: 2,
    title: 'Descargar BD',
    url: 'https://github.com/'
  }
]

const PowerBiDashboard: React.FC = () => {
    return (
      <iframe
        title="Vendas"
        width="750"
        height="498"
        src="https://app.powerbi.com/view?r=eyJrIjoiMWYxMTVkZjUtMTI2OS00NzBmLWI1MGMtOWQ0Nzc2YzMzNzVkIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9"
        allowFullScreen={true as boolean}
      />
    );
  };
  

export function ProjectMain() {
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

