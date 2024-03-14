import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

import styles from './ProjectMain.module.css'


export function ProjectMain() {
    return(
        <>
            <div className={styles.container}>
                <iframe title="Vendas" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMDEwZjJkYzQtYTBmMC00ZWE3LWI5MjktZDJhZTUzODI2NjVhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9" frameborder="0" allowFullScreen="true"></iframe>                
            </div>
        </>
    )
}

