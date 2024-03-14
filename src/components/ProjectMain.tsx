import styles from './ProjectMain.module.css'

const PowerBiDashboard: React.FC = () => {
    return (
      <iframe
        title="Vendas"
        width="750"
        height="498"
        src="https://app.powerbi.com/view?r=eyJrIjoiMDEwZjJkYzQtYTBmMC00ZWE3LWI5MjktZDJhZTUzODI2NjVhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9"
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
                </div>
            </div>
        </>
    )
}

