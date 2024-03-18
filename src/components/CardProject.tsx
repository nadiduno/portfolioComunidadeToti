import styles from './CardProject.module.css'

export function CardProject () {
    return(
        <div className={styles.containercard}>
           <img
                className={styles.cover}
                src="https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/imgs/proj1.png"
                alt="Foto de um dev, clocar desc"
            />  
        </div>
    )
}