import React from 'react'

import styles from './Propose.module.scss'

const Propose = () => {
    return (
        <div className={styles.propose}>
            <div className={styles.container}>
                <span className={styles.tag}>Услуги</span>
                <p className={styles.title}>Мы предлагаем</p>
                <div className={styles.grid}>
                    <div className={`${styles.item} ${styles.big}`}>
                        <p className={styles.itemTitle}>Партнерство</p>
                        <img src="/propose-1.png" alt="" draggable={false} />
                    </div>
                    <div className={`${styles.item} ${styles.big}`}>
                        <p className={styles.itemTitle}>Поддержку на протяжение курса</p>
                        <img src="/propose-2.png" alt="" draggable={false} />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <p className={styles.itemTitle}>IT заказы</p>
                            <a href="#!" className={styles.itemBtn}>Детали заказа</a>
                            <img src="/propose-3.png" alt="" draggable={false} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.itemTitle}>IT Вакансии</p>
                            <a href="#!" className={styles.itemBtn}>Вакансии</a>
                            <img src="/propose-4.png" alt="" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propose