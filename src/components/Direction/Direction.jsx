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
                        <div className={styles.brand}>
                            <svg width="93" height="30" viewBox="0 0 93 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3009_1039)">
                                <mask id="mask0_3009_1039" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="93" height="30">
                                <path d="M92.3894 0H0V30H92.3894V0Z" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_3009_1039)">
                                <path d="M18.3133 4.4084L10.3965 13.1615L18.3133 23.8938H13.0168L7.41371 16.423L4.45885 19.7124V23.8938H0.22168V4.38053H4.45885V13.3566L12.6265 4.4084H18.3133ZM32.8423 17.0642H20.3537C20.6603 19.1549 21.9147 20.1863 24.6466 20.1863C27.1834 20.1863 28.4379 19.4894 28.8281 18.458H32.9259C32.5078 21.831 29.7759 23.8938 24.6466 23.8938C19.2944 23.8938 16.2559 21.2177 16.2559 16.0049C16.2559 10.9035 19.378 8.11593 24.6466 8.11593C26.8489 8.11593 28.633 8.67345 29.9432 9.59336V9.56548C32.9538 11.6283 33.2326 14.9177 33.0096 17.0642H32.8423ZM24.6466 11.8234C22.305 11.8234 21.0227 12.6876 20.5209 14.2765H28.7724C28.4379 13.1057 27.6573 11.8234 24.6466 11.8234ZM45.5923 8.28318H50.0803L41.8011 29.8593H37.3131L39.5989 23.9217H38.0936L32.0724 8.28318H36.5326L41.0764 20.0469L45.5923 8.28318ZM61.3309 8.28318C67.9375 8.28318 68.6344 13.8305 68.6344 16.1164C68.6344 18.2071 67.9096 23.9496 61.3309 23.9496C58.4039 23.9496 56.6198 23.1133 55.5605 21.7473H55.3654V29.8593H51.1282V8.28318H55.3654V10.569H55.5884C56.6477 9.2031 58.4318 8.28318 61.3309 8.28318ZM60.1043 20.2978C64.1464 20.2978 64.5924 17.2314 64.5924 16.1164C64.5924 14.8898 64.1464 11.935 60.1043 11.935C56.4247 11.935 55.672 13.9978 55.672 16.1164C55.672 18.4858 56.4247 20.2978 60.1043 20.2978ZM74.0939 23.8938H69.8846V8.36681H74.0939V23.8938ZM74.0939 7.25177H69.8846V3.46062H74.0939V7.25177ZM92.2306 8.25531L86.0979 16.0885L92.2306 23.8938H87.2129L83.589 19.2664L79.9651 23.8938H74.9753L81.0802 16.0885L74.9753 8.25531H79.9651L83.589 12.9106L87.2129 8.25531H92.2306Z" fill="white"/>
                                <path d="M48.0529 0C48.0529 0 45.5274 2.83691 40.8006 2.83691C36.0739 2.83691 33.4512 0 33.4512 0V3.79298C33.4512 3.79298 36.5675 5.84419 40.7502 5.84419C44.9329 5.84419 48.0492 3.79298 48.0492 3.79298V0H48.0529Z" fill="white"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_3009_1039">
                                <rect width="92.3894" height="30" fill="white"/>
                                </clipPath>
                                </defs> 
                            </svg>
                        </div>
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
