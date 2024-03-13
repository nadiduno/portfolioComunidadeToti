import styles from './Photo.module.css'

export function Photo () {
    return(
        <div className={styles.containerphoto}>
            <img
                className={styles.cover}
                src="https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/photoman.png?raw=true"
                alt="Foto de um dev, clocar desc"
            />
        </div>
    )
}