import styles from './About.module.scss'

const About = () => {
    return <section className={styles.about} id='about'>
        <img src="cube.png" alt="" className={styles.cube} />
        <p className={styles.label}>О центре</p>
        <div className={styles.innerText}>
            <h3 className={styles.title}>Кто мы?</h3>
            <p className={styles.text}>Мы - ваш надежный партнер в подготовке высококвалифицированных специалистов для строительной отрасли. Наша цель - обеспечить вас знаниями и навыками, необходимыми для успешной карьеры в этой динамичной и востребованной сфере.</p>
        </div>
    </section>
}

export default About