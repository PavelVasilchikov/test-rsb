// src/components/About/About.jsx
import { motion } from 'framer-motion';
import styles from '../styles/about.module.css';

export default function About() {
  const features = [
    {
      title: "Инновации",
      desc: "Работаем "
    },
    {
      title: "Качество",
      desc: "Каждый "
    },
    {
      title: "Команда",
      desc: "день :("
    }
  ];

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.headingWrapper}
        >
          <h1 className={styles.title}>О компании</h1>
          <p className={styles.subtitle}>
            Интересная информация о компании...
          </p>
        </motion.div>

        <div className={styles.cardsGrid}>
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}