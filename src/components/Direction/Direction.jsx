import styles from './Direction.module.scss'

const Direction = () => {
    return <section className={styles.direction} id='direction'>
        <p className={styles.label}>Направления</p>
        <h2 className={styles.title}><span>Виды</span> бизнес-автоматизации</h2>
        <div className={styles.cards}>
            <div className={styles.leftCard}>
                <img src="dots.png" alt="" draggable='false'/>
            </div>
            <div className={styles.activeBlocks}>
                <div className={`${styles.card} ${styles.active}`}>
                    <p className={styles.index}>1</p>
                    <p className={styles.heading}>Строительство</p>
                    <p className={styles.text}>Мы автоматизируем процессы строительства: управление проектами, учет материалов, финансовый контроль, документооборот и управление персоналом для повышения эффективности.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Посмотреть</span>
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
                    <p className={styles.heading}>IT</p>
                    <p className={styles.text}>Мы автоматизируем IT: управление проектами, мониторинг систем, управление данными и ресурсами для повышения эффективности и безопасности.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Посмотреть</span>
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
                    <p className={styles.heading}>Продажи</p>
                    <p className={styles.text}>Мы автоматизируем продажи на маркетплейсах: управление товарами, заказами, аналитикой и ценообразованием для увеличения прибыли и упрощения процессов.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Посмотреть</span>
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
                    <p className={styles.heading}>Процессинг</p>
                    <p className={styles.text}>управление оборудованием, контроль качества, оптимизация выпуска продукции и мониторинг процессов для повышения производительности.</p>
                    <button type="button" className={styles.btn}>
                        <span className={styles.btnText}>Посмотреть</span>
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