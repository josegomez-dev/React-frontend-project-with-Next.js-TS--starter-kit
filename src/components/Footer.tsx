import styles from '@/app/assets/styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['social-icons']}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div>
        <p className={styles['footer-rights-text']}>&copy; 2024 Web Application | Frontend | version 1.0. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
