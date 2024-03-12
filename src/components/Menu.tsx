import styles from './Menu.module.css'

export function Menu () {
    return(
        <main className={styles.menu}>
            <span>Home</span>   
            <span>Meus trabalhos</span>
            <span>Contato</span>
            <span>Link</span>
        </main>
    )
}
