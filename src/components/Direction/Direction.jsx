import styles from './Direction.module.scss'

const Direction = () => {
    return <section className={styles.direction}>
        <p className={styles.label}>Направления</p>
        <h2 className={styles.title}>Типы направлений</h2>
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="dots.png" alt="" draggable='false'/>
            </div>
            <div className={styles.activeBlock}></div>
            <div className={`${styles.card} ${styles.active}`}>
                <p className={styles.index}>1</p>
                <p className={styles.heading}>Архитектура</p>
                <p className={styles.text}>Архитектура – это искусство и наука проектирования и строительства зданий и сооружений, создающих функциональную и эстетически привлекательную среду для жизни и деятельности человека.</p>
                <button type="button" className={styles.btn}>Записаться на курс</button>
            </div>
            <div className={styles.card}>
                
            </div>
            <div className={styles.card}>
                
            </div>
            <div className={styles.card}>
                
            </div>
        </div>
    </section>
}

export default Direction