import React, { useState } from "react";
import { useRouter } from "next/router";

import en from "@/locales/en";
import uz from "@/locales/uz";
import ru from "@/locales/ru";

import styles from "./Popup.module.scss";

const Popup = ({ popup, setPopup }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "uz" ? uz : locale === "en" ? en : ru;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("Выберите направление");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // document.body.classList.add('oh')
    // document.getElementById('thanks').classList.add(thanksStyles.active)

    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        text,
      }),
    });

    setName("");
    setPhone("");
    setText("");

    const { message: resMessage } = await response.json();

    setPopup(false);
  };

  return (
    <div className={`${styles.popup} ${popup && styles.active}`}>
      <div
        className={`${styles.overlay}`}
        onClick={() => setPopup(false)}
      ></div>
      <form onSubmit={handleSubmit} className={styles.content}>
        <p className={styles.title}>{t["order_call1"]}</p>
        <input
          required
          className={styles.input}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder={t["name"]}
        />
        <input
          required
          className={styles.input}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          type="text"
          placeholder={t["phone_number"]}
        />
        <div className={styles.input}>
          <select
            required
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          >
            <option value="Выберите направлению">
              {t["choose_direction"]}
            </option>
            <option value="Таълим">Таълим</option>
            <option value="Туризм">Туризм</option>
            <option value="Спорт">Спорт</option>
            <option value="Кулинария">Кулинария</option>
            <option value="Дизайн">Дизайн</option>
            <option value="Мухандислик">Мухандислик</option>
            <option value="Архитектура">Архитектура</option>
            <option value="Курилиш сохаси">Курилиш сохаси</option>
            <option value="Согламлаштириш">Согламлаштириш</option>
          </select>
        </div>
        <button type="submit" className={styles.btn}>
          {t["leave_request"]}
        </button>
      </form>
    </div>
  );
};

export default Popup;
