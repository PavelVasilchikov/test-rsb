// src/components/Support/Support.jsx
import styles from '../styles/support.module.css';

export default function Support() {
  const contacts = [
    { method: "Телефон", info: "+7 (495) 123-45-67", desc: "Пн–Пт, 9:00–18:00" },
    { method: "Email", info: "support@rssoftlab.ru", desc: "Ответ в течение 24 ч" },
    { method: "Чат", info: "Онлайн", desc: "Доступен на сайте" }
  ];

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.title}>Поддержка</h1>
          <p className={styles.subtitle}>
            Готовы помочь в любых вопросах. Обратитесь удобным способом.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {contacts.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.method}</h3>
              <p className={styles.info}>{item.info}</p>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}