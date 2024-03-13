import styles from './PersonalDetails.module.css'

export function PersonalDetails () {
    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.titlecor}>
                    Analista de
                </h1>
                <h1 className={styles.titlesecond}>Dados</h1>
                <p>
                    Sou <span className={styles.name}>Roberto Carlos</span>, Venezuelano,  analista de dados.
                </p>
                <p className={styles.linetext}>
                    Gosto de depurar, limpar e tratar dados para criar insights que ajudam na tomada de decisões.
                </p>
            </div>
        </>
    )
}