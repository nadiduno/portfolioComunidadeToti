import styles from './ContainerContact.module.css'
import {FiMail} from 'react-icons/fi'


export function ContainerContact () {
    return(
        <header className={styles.container}>
            <div className={styles.description}>
                <h2>contate-me</h2>
                <div className={styles.nome}>
                    <h1>roberto carlos</h1>
                    <h3>analista de dados</h3>
                </div>
            <div className={styles.comunication}>
                <a href="mailto:" target='blank' title='Enviar email' rel='noopener'>
                    <FiMail className='styles.icons' size={60} color='fff'/> 
                </a>
                <a href="" target='black' title='Enviar WhatsApp' rel='noopener'>
                    <FiMail className='styles.icons' size={60} color='fff'/>
                </a>
            </div>
            </div>
            <div className={styles.imagenContacto}>
                <img
                    src="https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/photoman.png?raw=true"
                    alt="Foto de um dev, clocar desc"
                />
            </div>
        </header>
    )
}