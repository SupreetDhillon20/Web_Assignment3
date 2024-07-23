import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.companyInfo}>
        <h3>Internet Movies Rental Company</h3>
        <p>Providing the best movie rental service since 1999.</p>
      </div>
      <ul className={styles.footerNavLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/movies">Movies</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.contactInfo}>
        <h3>Contact Us</h3>
        <p>Email: info@imr.com</p>
        <p>Phone: +1 800 123 4567</p>
      </div>
    </footer>
  );
};

export default Footer;
