import React from 'react';
import * as styles from './Footer.module.css';
import githubIcon from '../icons/github.svg';
import goodreadsIcon from '../icons/goodreads.svg';
import linkedinIcon from '../icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        Built with Gatsby, icons by Icons8, deployed on Github Pages.
      </div>

      <div className={styles.footerCenter}>
        Subscribe Here
        <div>© 2025 Johnson Yang</div>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.externalLinks}>External Links</div>
        <div className={styles.buttonsRow}>
          <a
            href="https://github.com/j-yang24"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton} ${styles.githubButton}`}
          >
            <img src={githubIcon} alt="GitHub" className={styles.icon} />
          </a>

          <a
            href="https://www.goodreads.com/user/show/171833829-johnson-yang"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton} ${styles.goodreadsButton}`}
          >
            <img src={goodreadsIcon} alt="Goodreads" className={styles.icon} />
          </a>

          <a
            href="https://www.linkedin.com/in/johnsony326/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconButton} ${styles.linkedinButton}`}
          >
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;