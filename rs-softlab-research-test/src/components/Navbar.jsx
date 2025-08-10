// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          <Link to="/" className={styles.logo}>
            <span>RS</span>
            <span className={styles.logoText}>SoftLab Research</span>
          </Link>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>Главная</Link>
            <Link to="/about" className={styles.navLink}>О компании</Link>
            <Link to="/support" className={styles.navLink}>Поддержка</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}