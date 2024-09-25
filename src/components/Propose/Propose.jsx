import React from 'react'

import styles from './Propose.module.scss'

const Propose = ({setPopup}) => {
    return (
        <div className={styles.propose}>
            <div className={styles.container}>
                <span className={styles.tag}>Услуги</span>
                <p className={styles.title}>Мы предлагаем</p>
                <div className={styles.grid}>
                    <div className={`${styles.item} ${styles.big}`}>
                        <p className={styles.itemTitle}>Передовые решение</p>
                        <img src="/propose-1.png" alt="" draggable={false} />
                    </div>
                    <div className={`${styles.item} ${styles.big}`}>
                        <p className={styles.itemTitle}>Поддержка вашего бизнеса</p>
                        <img src="/propose-2.png" alt="" draggable={false} />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <p className={styles.itemTitle}>Партнерство</p>
                            <a href="#!" onClick={() => setPopup(true)} className={styles.itemBtn}>Детали</a>
                            <img src="/propose-3.png" alt="" draggable={false} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.itemTitle}>Маштаб</p>
                            <a href="#!" onClick={() => setPopup(true)} className={styles.itemBtn}>Детали</a>
                            <img src="/propose-4.png" alt="" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propose