import { useRouter } from 'next/router';

import en from '@/locales/en';
import uz from '@/locales/uz';
import ru from '@/locales/ru';

import styles from './Intro.module.scss';

const Intro = ({ setPopup }) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'uz' ? uz : locale === 'en' ? en : ru;

    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <p className={styles.title}>{t['welcome_to']}</p>
                <p className={styles.subtitle}>
                    Territory of Education
                </p>
                <p className={styles.name}>BM ACADEMY</p>
                <button type="button" className={styles.order} onClick={() => setPopup(true)}>
                    {t['leave_request']}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round"
                        />
                        <path
                            d="M16.7625 20.2375L21 16L16.7625 11.7625"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round"
                        />
                        <path
                            d="M11 16H21"
                            stroke="white" stroke-linecap="round" stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <a href="#about" className={styles.anim}>
                    <svg className={styles.rect} width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            x="-1.24873"
                            y="23"
                            width="35"
                            height="35"
                            rx="5.5"
                            transform="rotate(-45 -1.24873 23)"
                            stroke="url(#paint0_diamond_28_35)"
                        />
                        <defs>
                            <radialGradient id="paint0_diamond_28_35" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.4584 21.9706) rotate(88.2101) scale(45.2769)">
                                <stop stop-color="#D4A9FF"/>
                                <stop offset="1" stop-color="#6E2DAE"/>
                            </radialGradient>
                        </defs>
                    </svg>
                    <svg className={styles.arrow} width="8" height="55" viewBox="0 0 8 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44127 0H3.44127V48.25H0.0441589L3.94127 55L7.83839 48.25H4.44127V0Z" fill="white"/>
                    </svg>
                </a>
                <a href="#about" className={styles.scrollText}>{t['scroll_to_see_more']}</a>
            </div>
        </section>
    );
};

export default Intro;
