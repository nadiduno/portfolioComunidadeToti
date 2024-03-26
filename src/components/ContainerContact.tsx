import styles from './ContainerContact.module.css'
import {FiMail} from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa";


export function ContainerContact () {
    return(
        <div className={styles.container}>
        <header className={styles.subcontainer}>
            <div className={styles.description}>
                <h2>contate-me</h2>
                <div className={styles.name}>
                    <h1>roberto carlos</h1>
                    <h3>analista de dados</h3>
                </div>
            <div className={styles.comunication}>
                <a href="mailto:" target='blank' title='Enviar email' rel='noopener' className={styles.svgContainer}>
                    <FiMail/> 
                </a>
                <a href="" target='black' title='Enviar WhatsApp' rel='noopener' className={styles.svgContainer}>
                    <FaWhatsapp/>
                </a>
            </div>
            </div>
        </header>
        </div>
    )
}