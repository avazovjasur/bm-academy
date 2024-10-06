import React, { useState } from 'react';
import { useRouter } from 'next/router';

import uz from '@/locales/uz';
import ru from '@/locales/ru';
import en from '@/locales/en';

import styles from "./Header.module.scss";

const Header = ({ setPopup }) => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false);
  const { locale } = router
  const t = locale === 'uz' ? uz : locale === 'en' ? en : ru

  const changeLanguage = (e) => {
    const locale = e
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <>
      <div className={`${styles.menu} ${showMenu ? styles.active : ''}`}>
        <button type="button" className={styles.back} onClick={() => { setShowMenu(false) }}>
          <img src="back.svg" alt="" />
        </button>
        <a href="#about" onClick={() => { setShowMenu(false) }} className={styles.menuBtn}>
          {t['about_us']}
        </a>
        <a href="#direction" onClick={() => { setShowMenu(false) }} className={styles.menuBtn}>
          {t['direction']}
        </a>
        <a href="#footer" onClick={() => { setShowMenu(false) }} className={styles.menuBtn}>
          {t['contacts']}
        </a>
      </div>
      <header className={styles.header}>
        <div className={styles.left}>
          <button onClick={() => { setShowMenu(true) }} className={styles.burger}>
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="4" rx="2" fill="#1143f8" />
              <rect y="8" width="32" height="4" rx="2" fill="#1143f8" />
              <rect y="16" width="32" height="4" rx="2" fill="#1143f8" />
            </svg>
          </button>
          <img src="new-logo.png" alt="" draggable="false" className={styles.mobileLogo} />
          <img src="new-logo.png" alt="" draggable="false" className={styles.logo} />
          <nav className={styles.nav}>
            <a className={styles.btn} href="#about">
              {t['about_us']}
            </a>
            <a className={styles.btn} href="#direction">
              {t['direction']}
            </a>
            <a className={styles.btn} href="#footer">
              {t['contacts']}
            </a>
          </nav>
        </div>
        <div className={styles.right}>
          <div className={styles.dropDown}>
            <button type="button" className={`${styles.dropDownLabel} ${styles.dropDownLang}`}>
              {locale === 'ru' ? 'RU' : locale === 'en' ? 'EN' : 'UZ' }
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.46485 8.02915C5.16534 7.77242 4.71441 7.80711 4.45768 8.10663C4.20095 8.40614 4.23563 8.85707 4.53515 9.1138L9.53515 13.3995C9.80265 13.6288 10.1974 13.6288 10.4649 13.3995L15.4649 9.1138C15.7644 8.85707 15.7991 8.40614 15.5423 8.10663C15.2856 7.80711 14.8347 7.77242 14.5352 8.02915L10 11.9164L5.46485 8.02915Z" fill="#152040" />
              </svg>
            </button>
            <div className={styles.dropDownInner}>
              <button type="button" onClick={e => changeLanguage("ru")} className={`${styles.dropDownBtn} ${locale === 'ru' ? styles.active : ''}`}>RU</button>
              <button type="button" onClick={e => changeLanguage("uz")} className={`${styles.dropDownBtn} ${locale === 'uz' ? styles.active : ''}`}>UZ</button>
              <button type="button" onClick={e => changeLanguage("en")} className={`${styles.dropDownBtn} ${locale === 'en' ? styles.active : ''}`}>EN</button>
            </div>
          </div>
          <button type="button" className={styles.order} onClick={() => setPopup(true)}>
            {t['order_call']}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
