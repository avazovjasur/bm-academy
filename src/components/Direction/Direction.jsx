import styles from './Direction.module.scss'

const Direction = () => {
    return <section className={styles.direction}>
        <p className={styles.label}>Направления</p>
        <h2 className={styles.title}>Типы направлений</h2>
        <div className={styles.cards}>
            <div className={styles.leftCard}>
                <img src="dots.png" alt="" draggable='false'/>
            </div>
            <div className={styles.activeBlocks}>
                <div className={`${styles.card} ${styles.active}`}>
                    <p className={styles.index}>1</p>
                    <p className={styles.heading}>Education</p>
                    <p className={styles.text}>Архитектура – это искусство и наука проектирования и строительства зданий и сооружений, создающих функциональную и эстетически привлекательную среду для жизни и деятельности человека.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Записаться на курс</span>
                        <span className={styles.btnSvg}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className={styles.card}>
                    <p className={styles.index}>2</p>
                    <p className={styles.heading}>Eating</p>
                    <p className={styles.text}>Архитектура – это искусство и наука проектирования и строительства зданий и сооружений, создающих функциональную и эстетически привлекательную среду для жизни и деятельности человека.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Записаться на курс</span>
                        <span className={styles.btnSvg}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className={styles.card}>
                    <p className={styles.index}>3</p>
                    <p className={styles.heading}>Developed</p>
                    <p className={styles.text}>Архитектура – это искусство и наука проектирования и строительства зданий и сооружений, создающих функциональную и эстетически привлекательную среду для жизни и деятельности человека.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Записаться на курс</span>
                        <span className={styles.btnSvg}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className={styles.card}>
                    <p className={styles.index}>4</p>
                    <p className={styles.heading}>Game</p>
                    <p className={styles.text}>Архитектура – это искусство и наука проектирования и строительства зданий и сооружений, создающих функциональную и эстетически привлекательную среду для жизни и деятельности человека.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Записаться на курс</span>
                        <span className={styles.btnSvg}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
}

export default Direction