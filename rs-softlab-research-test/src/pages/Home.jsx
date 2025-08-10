// src/components/Home/Home.jsx
import { motion } from 'framer-motion';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <section className={styles.root}>
      {/* Декоративные фоны (по желанию) */}
      <div className={`${styles.bgDecoration} ${styles.bgDec1}`}></div>
      <div className={`${styles.bgDecoration} ${styles.bgDec2}`}></div>

      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          RS SoftLab Research
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.subtitle}
        >
          Мы создаём программное обеспечение будущего — интеллектуальное, безопасное и масштабируемое. :D
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.primaryButton}
        >
          Начать
        </motion.button>

        <div className={styles.scrollHint}>
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}