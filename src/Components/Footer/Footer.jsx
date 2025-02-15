import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const links = [
    { name: 'Impressum', url: '#' },
    { name: 'AGB', url: '#' },
    { name: 'Datenschutzerklärung', url: '#' }
  ];

  const serviceLinks = ['Jetzt Starten', 'Unsere Leistungsübersicht', 'Häufige Fragen', 'BeTailor Magazin', 'Gutschein kaufen'];
  const companyLinks = ['Über Uns', 'Geschäftskunden', 'Affiliate-Partner werden', 'Presse', 'Jobs', 'Impressum'];


  return (
    <>
    {/* <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>SERVICE</h3>
          <div className={styles.linksContainer}>
            {serviceLinks.map((link, index) => (
              <a key={index} href="#">{link}</a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>UNTERNEHMEN</h3>
          <div className={styles.linksContainer}>
            {companyLinks.map((link, index) => (
              <a key={index} href="#">{link}</a>
            ))}
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>ZAHLUNGSMÖGLICHKEITEN</h3>
          <div className={styles.paymentMethods}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7CUd-epongUSRm4/rectangl.png" 
              alt="Payment Methods"
              width="197"
              height="151"
            />
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>BEWERTUNGEN</h3>
          <p>TRUSTPILOT</p>
          <div className={styles.reviews}>
            [reviews_rating icon="no" count="hide" vicinity="hide" name="hide" link="reviews"]
          </div>
        </div>
      </div>
    </footer> */}

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © Copyright 2024 | <strong>BETAILOR®</strong> | Deine Online Änderungsschneiderei | Deutschland | Österreich | Schweiz | Belgien | Luxemburg
          </p>
          <div className={styles.footerLinks}>
            {links.map((link, index) => (
              <a key={index} href={link.url}>{link.name}</a>
            ))}
          </div>
        </div>
      </footer>
      <div className={styles.frame}></div>
    </>
  );
}

export default Footer;
