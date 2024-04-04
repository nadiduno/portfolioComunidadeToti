import styles from './ContainerLink.module.css'
import { FiInstagram, FiLinkedin, FiYoutube, FiGithub} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa'


export function ContainerLink () {
    return(
        <div className={styles.container}>
            <a target="_blank" rel="LinkedIn" href="https://www.linkedin.com/" className={styles.link}>
                <FiLinkedin className={styles.icons}/>
                <div className={styles.tooltip}>LinkedIn</div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className={styles.link}>
                <FiInstagram className={styles.icons} />
                <div className={styles.tooltip}>Instagram</div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/"className={styles.link}>
                <FiGithub className={styles.icons} />
                <div className={styles.tooltip}>GitHub</div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/" className={styles.link}>
                <FaWhatsapp className={styles.icons} />
                <div className={styles.tooltip}>WhatsApp</div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/" className={styles.link}>
                <FiYoutube className={styles.icons} />
                <div className={styles.tooltip}>YouTube</div>
            </a>
        </div>
    )
}