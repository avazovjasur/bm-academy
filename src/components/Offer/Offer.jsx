import styles from './Offer.module.scss'

const Offer = () => {
    return <section className={styles.offer}>
        <div className={styles.container}>
            <img draggable='false' src="new-offerBg.png" alt="" className={styles.bgImg} />
            <div className={styles.cards}>
                <div className={styles.weOffer}>
                    <p className={styles.text}>Что мы предлагаем</p>
                    <div className={styles.offers}>
                        <p>Автоматизацию</p>
                        <p>Рост</p>
                        <p>Инновации</p>
                    </div>
                </div>
                <div className={styles.drawings}>
                    <div className={styles.drawingsContainer}>
                        <a className={styles.link} href="#">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.5417 9.88892C33.4095 9.88892 34.1131 10.5925 34.1131 11.4603V27.9603C34.1131 28.8282 33.4095 29.5318 32.5417 29.5318C31.6738 29.5318 30.9702 28.8282 30.9702 27.9603L30.9697 15.2522L12.1112 34.1132C11.5447 34.6797 10.6533 34.7232 10.0369 34.2439L9.88882 34.1132C9.27514 33.4995 9.27514 32.5045 9.88882 31.8908L28.7461 13.0318H16.0417C15.2358 13.0318 14.5716 12.4251 14.4808 11.6436L14.4702 11.4603C14.4702 10.5925 15.1738 9.88892 16.0417 9.88892H32.5417Z" fill="#1143f8"/>
                            </svg>
                        </a>
                        <p>Архитектура Дизайн <span>Чертежи</span></p>
                    </div>
                </div>
                <div className={styles.picture}>
                    <div className={styles.drawingsContainer}>

                    </div>
                </div>
                <div className={styles.logo}>
                    <img src="new-logo.png" alt="" draggable='false' />
                </div>
                <div className={styles.date}>
                    <p>17 октября</p>
                    <p>Старт курса</p>
                </div>
                <div className={styles.stats}>
                    <img draggable='false' src="stats.png" alt="" className={styles.statsImg} />
                </div>
                <div className={styles.duration}>
                    <div className={styles.heading}>
                        <p>3 месяца</p>
                        <p>длительность курса</p>
                    </div>
                    <p className={styles.text}> 
                        FCC- уникальная 
                        <br />
                        возможность для тех кто хочет 
                        <br />
                        получить новый опыт
                    </p>
                    <button type="button" className={styles.btn}>
                        Подробнее
                    </button>
                </div>
                <p className={styles.mainText}>
                    <span>Быстрота и технологии:</span> Мы используем передовые Методы, чтобы сделать процесс обучения сделать максимально быстрым и эффективным.
                </p>
            </div>
        </div>
    </section>
}

export default Offer
