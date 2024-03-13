import style from './Container.module.css'
import { PersonalDetails } from './PersonalDetails'

export function Container () {
    return(
        <header className={style.container}>
            <div>
                <PersonalDetails />
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