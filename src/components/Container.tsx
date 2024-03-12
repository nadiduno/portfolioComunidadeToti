import style from './Container.module.css'

export function Container () {
    return(
        <header className={style.container}>
            <div>
                Dados principais
            </div>
            <div>
                Projeto principal
            </div>
            <div>
                Projetos outros
            </div>
        </header>
    )
}