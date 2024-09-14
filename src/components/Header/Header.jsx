import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src="logo.png" alt="" draggable="false" className={styles.logo} />
        <nav className={styles.nav}>
            <div className={styles.dropDown}>
                <button type="button" className={styles.dropDownLabel}>
                    Курсы 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.46485 8.02915C5.16534 7.77242 4.71441 7.80711 4.45768 8.10663C4.20095 8.40614 4.23563 8.85707 4.53515 9.1138L9.53515 13.3995C9.80265 13.6288 10.1974 13.6288 10.4649 13.3995L15.4649 9.1138C15.7644 8.85707 15.7991 8.40614 15.5423 8.10663C15.2856 7.80711 14.8347 7.77242 14.5352 8.02915L10 11.9164L5.46485 8.02915Z" fill="#152040"/>
                    </svg>
                </button>
                <div className={styles.dropDownInner}>
                    <button type="button" className={styles.dropDownBtn}>1</button>
                    <button type="button" className={styles.dropDownBtn}>2</button>
                    <button type="button" className={styles.dropDownBtn}>3</button>
                </div>
            </div>
          <a className={styles.btn} href="#">
            О нас
          </a>
          <a className={styles.btn} href="#">
            Отзывы
          </a>
          <a className={styles.btn} href="#">
            Контакты
          </a>
        </nav>
      </div>
      <div className={styles.right}>
        <div className={styles.dropDown}>
            <button type="button" className={`${styles.dropDownLabel} ${styles.dropDownLang}`}>
                RU 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46485 8.02915C5.16534 7.77242 4.71441 7.80711 4.45768 8.10663C4.20095 8.40614 4.23563 8.85707 4.53515 9.1138L9.53515 13.3995C9.80265 13.6288 10.1974 13.6288 10.4649 13.3995L15.4649 9.1138C15.7644 8.85707 15.7991 8.40614 15.5423 8.10663C15.2856 7.80711 14.8347 7.77242 14.5352 8.02915L10 11.9164L5.46485 8.02915Z" fill="#152040"/>
                </svg>
            </button>
            <div className={styles.dropDownInner}>
                <button type="button" className={styles.dropDownBtn}>1</button>
                <button type="button" className={styles.dropDownBtn}>2</button>
                <button type="button" className={styles.dropDownBtn}>3</button>
            </div>
        </div>
        <button type="button" className={styles.order}>
            Заказать звонок
        </button>
      </div>
    </header>
  );
};

export default Header;