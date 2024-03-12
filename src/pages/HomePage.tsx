import styles from './HomePage.module.css'

export function HomePage () {
  return (
        <>
            <main className={styles.menu}>
                <p>Menu</p>            </main>
            <div className={styles.container}>
                <p>Container</p>
            </div>
        </>
  )
}
