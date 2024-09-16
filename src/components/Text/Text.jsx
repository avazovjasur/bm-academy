import React from 'react'

import styles from './Text.module.scss'

const Text = () => {
    return (
        <div className={styles.text}>
            <div className={styles.container}>
                <img src="/text.png" alt="" />
                <p className={styles.title}>После обучения вы сможете работать востребованным специалистом в строительных компаниях.</p>
                <a href="#!" className={styles.btn}>
                    Записаться на курс
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.7625 20.2375L21 16L16.7625 11.7625" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 16H21" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default Text