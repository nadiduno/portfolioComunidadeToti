import styles from './ContainerContact.module.css'
import {FiPhoneCall, FiMail} from 'react-icons/fi'


export function ContainerContact () {
    return(
        <header className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h1>NOME</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas minus saepe molestiae, dolore sed vero nam quod doloremque quis rerum pariatur labore perferendis qui accusantium neque dolorem. Sapiente, quam!</p>
                </div>
                <div className={styles.support}>
                    <div className={styles.whatsapp}>
                        <a href="https://api.whatsapp.com/send?phone=5592999999999&text=%22mensagem%22" target="_blank" title="Escribir whatsapp" rel='noopener'>
                        <FiPhoneCall className= {styles.icons} size={25} color='fff'/>
                        </a>
                        <p>WHATSAPP</p>
                    </div>
                    <div className={styles.email}>
                        <a href="mailto:totidiversidade@gmail.com" target="_blank" title="Escribir correo" rel='noopener'>
                        <FiMail className= {styles.icons} size={25} color='fff'/>
                        </a>
                        <p>GMAIL</p>
                    </div>
                </div>
            </div>
        </header>
    )
}