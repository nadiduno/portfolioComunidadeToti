import styles from './PersonalDetails.module.css'

export function PersonalDetails () {
    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.titlecor}>
                    Analista de
                </h1>
                <h1>Dados</h1>
                <p>
                    Sou Roberto, Venezuelano,  analista de dados.
                </p>
                <p>
                    Gosto de depurar, limpar e tratar dados para criar insights que ajudam na tomada de decisões.
                </p>
            </div>
        </>
    )
}