import styles from './CardProject.module.css'


export function CardProject () {
    return(

        
        <div className={styles.CardProject}>
            
            <img
            
                className={styles.cover}
                src="https://github.com/nadiduno/portfolioComunidadeToti/blob/main/src/assets/proj1.png?raw=true"
                alt="Foto de um dev, clocar desc"
                
            />   
            <div className={styles.about}>
               <h2>Dashboard de Vendas/ Power Bi</h2>
                <p>Dashboard de venda é ....</p>
             </div>               
        </div>
    )
}