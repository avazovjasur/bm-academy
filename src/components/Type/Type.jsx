import React from 'react'

import styles from './Type.module.scss'

const Type = () => {
    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <span className={styles.tag}>Направления</span>
                <p className={styles.title}>Типы направлений</p>
                
            </div>
        </div>
    )
}

export default Type