/* eslint-disable react/react-in-jsx-scope */
import styles from './ContainerContact.module.css'
import {FiMail} from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa";
import { Photo } from './Photo';


export function ContainerContact () {
    return(
        <div className={styles.container}>
        <header className={styles.subcontainer}>
            <div className={styles.description}>
                <div className={styles.wrapper}>
                    <div>
                        <h2>Contate-me</h2>
                        <div className={styles.name}>
                            <h1>Roberto Carlos</h1>
                            <h3>Analista de Dados</h3>
                        </div>
                        <div className={styles.comunication}>
                            <a href="mailto:seuemail@example.com" target='_blank' title='Enviar email' rel='noopener noreferrer' className={styles.svgContainer}>
                                <FiMail/> 
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=5571984338160&text=Olá%21%20Gostaria%20de%20falar%20contigo." target='_blank' title='Enviar WhatsApp' rel='noopener noreferrer' className={styles.svgContainer}>
                                <FaWhatsapp/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.detailphoto}>
                        <Photo />
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}