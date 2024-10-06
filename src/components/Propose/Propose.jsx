import { useRouter } from 'next/router';

import en from '@/locales/en';
import uz from '@/locales/uz';
import ru from '@/locales/ru';

import styles from './Propose.module.scss';

const Propose = ({ setPopup }) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'uz' ? uz : locale === 'en' ? en : ru;

    return (
        <div className={styles.propose}>
            <div className={styles.container}>
                <span className={styles.tag}>{t['services']}</span>
                <p className={styles.title}>{t['we_offer']}</p>
                <div className={styles.grid}>
                    <div className={`${styles.item} ${styles.big}`}>
                        <p className={styles.itemTitle}>{t['advanced_solutions']}</p>
                        <img src="/propose-1.png" alt="" draggable={false} />
                    </div>
                    <div className={`${styles.item} ${styles.big}`}>
                        <p className={styles.itemTitle}>{t['supporting_your_business']}</p>
                        <img src="/propose-2.png" alt="" draggable={false} />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <p className={styles.itemTitle}>{t['partnership']}</p>
                            <a href="#!" onClick={() => setPopup(true)} className={styles.itemBtn}>{t['details']}</a>
                            <img src="/propose-3.png" alt="" draggable={false} />
                        </div>
                        <div className={styles.item}>
                            <p className={styles.itemTitle}>{t['scale']}</p>
                            <a href="#!" onClick={() => setPopup(true)} className={styles.itemBtn}>{t['details']}</a>
                            <img src="/propose-4.png" alt="" draggable={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Propose;
