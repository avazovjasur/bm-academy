import { useRouter } from 'next/router';

import en from '@/locales/en';
import uz from '@/locales/uz';
import ru from '@/locales/ru';

import styles from './Direction.module.scss';

const Direction = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'uz' ? uz : locale === 'en' ? en : ru;
    
    return (
        <section className={styles.direction} id='direction'>
            <p className={styles.label}>{t['direction']}</p>
            <h2 className={styles.title}><span>{t['types_of_automation']}</span></h2>
            <div className={styles.cards}>
                <div className={styles.leftCard}>
                    <img src="dots.png" alt="" draggable='false' />
                </div>
                <div className={styles.activeBlocks}>
                    <div className={`${styles.card} ${styles.active}`}>
                        <p className={styles.index}>1</p>
                        <p className={styles.heading}>{t['construction']}</p>
                        <p className={styles.text}>{t['construction_text1']}</p>
                        <button type="button" className={styles.btn}>
                            <span className={styles.btnText}>{t['look']}</span>
                            <span className={styles.btnSvg}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.index}>2</p>
                        <p className={styles.heading}>{t['it']}</p>
                        <p className={styles.text}>{t['it_text1']}</p>
                        <button type="button" className={styles.btn}>
                            <span className={styles.btnText}>{t['look']}</span>
                            <span className={styles.btnSvg}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.index}>3</p>
                        <p className={styles.heading}>{t['sales']}</p>
                        <p className={styles.text}>{t['sales_text1']}</p>
                        <button type="button" className={styles.btn}>
                            <span className={styles.btnText}>{t['look']}</span>
                            <span className={styles.btnSvg}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className={styles.card}>
                        <p className={styles.index}>4</p>
                        <p className={styles.heading}>{t['processing']}</p>
                        <p className={styles.text}>{t['processing_text1']}</p>
                        <button type="button" className={styles.btn}>
                            <span className={styles.btnText}>{t['look']}</span>
                            <span className={styles.btnSvg}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.66585 10.9985H18.3325" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3325 4.99854L18.3325 10.9985L12.3325 16.9985" stroke="#1143f8" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Direction;
