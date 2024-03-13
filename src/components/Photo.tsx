import styles from './Photo.module.css'

export function Photo () {
    return(
        <div className={styles.containerphoto}>
            <img
                className={styles.cover}
                src="https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/photoman.png?raw=true"
                alt="Foto de Nadi Duno, Nadi é uma mulher, parda de cabelo curto, a foto esta em branco e preto, com um circulo verde neon com codigos de programação"
            />
        </div>
    )
}