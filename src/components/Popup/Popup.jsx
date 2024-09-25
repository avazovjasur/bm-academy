import React, { useState } from 'react'

import styles from './Popup.module.scss'

const Popup = ({popup, setPopup}) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [text, setText] = useState("Выберите направление")

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // document.body.classList.add('oh')
        // document.getElementById('thanks').classList.add(thanksStyles.active)
        
        const response = await fetch('/api/sendmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            text
          }),
        });
        
        setName('')
        setPhone('')
        setText('')
    
        const { message: resMessage } = await response.json();
    
        setPopup(false)
        

    };

    return (
        <div className={`${styles.popup} ${popup && styles.active}`}>
            <div className={`${styles.overlay}`} onClick={()=>setPopup(false)}></div>
            <form onSubmit={handleSubmit} className={styles.content}>
                <p className={styles.title}>Оставить заявку</p>
                <input required className={styles.input} value={name} onChange={(e) => {setName(e.target.value)}} type="text" placeholder='Имя'/>
                <input required className={styles.input} value={phone} onChange={(e) => {setPhone(e.target.value)}} type="text" placeholder='Номер телефона'/>
                <div className={styles.input}>
                    <select required value={text} onChange={(e) => {setText(e.target.value)}}>
                        <option value="Выберите направлению">Выберите направлению</option>
                        <option value="строительство">Строительство</option>
                        <option value="обучение">Обучение</option>
                        <option value="информационные технологии">Информационные технологии</option>
                        <option value="производство">Производство</option>
                        <option value="продажи">Продажи</option>
                    </select>
                </div>
                <button type="submit" className={styles.btn}>Оставить заявку</button>
            </form>
        </div>
    )
}

export default Popup