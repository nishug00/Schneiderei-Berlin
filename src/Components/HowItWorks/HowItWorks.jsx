import React from 'react';
import styles from './HowItWorks.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

function HowItWorks() {
  const navigate = useNavigate();

  const cards = [
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun.png",
      text: "Auf 'Jetzt Starten' klicken um Änderung auszuwählen, Preis anzeigen zulassen und uns zu beauftragen.",
      buttonText: "JETZT STARTEN"
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-2.png",
      text: "Anhand von kurzen Erklärvideos einfach selber abmessen und auf unserer Seite die Maße eingeben."
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-3.png",
      text: "Änderung in den Auftragskorb legen und ggf. weitere Textilien zum Auftragskorb hinzufügen."
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-4.png",
      text: "Bezahlmethode auswählen und Deine Textilien uns per Post zuschicken oder von Zuhause abholen lassen."
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-5.png",
      text: "Wir ändern Deine Textilien in 4-7 Werktagen mit 100% Qualität und liefern zu Dir Nachhause."
    }
  ];

  return (
    <div className={styles.MainContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Deine Online Änderungsschneiderei</h1>
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionBox}>
              <p>Videos erklären wie Du abmisst. Wir ändern Deine Textilie.</p>
            </div>
            <div className={styles.descriptionBox}>
              <p>Einfach und zuverlässig per Versand</p>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.actionButton} onClick={() => navigate('/startNow')}>
              JETZT STARTEN
            </button>
            <button className={styles.actionButton} onClick={() => navigate('/myAccount')}>
              SONDERANFRAGE STELLEN
            </button>
          </div>
        </div>
      </div>

      <div className={styles.socialButtonsContainer}>
        <div className={styles.socialButtonFacebook}>
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7AjeY9nxTWt8i4I/thumb-up.png"
            alt="thumb up"
            className={styles.thumbIcon}
          />
          <span> Gefällt mir 10.989</span>
        </div>

        <div className={styles.socialButtonInstagram}>
          <span>Instagram 16 K</span>
        </div>
      </div>

      <div className={styles.layoutContainer}>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.textContainer}>
                <p className={styles.cardText}>{card.text}</p>
              </div>

              <div className={styles.imageContainer}>
                <img src={card.imageUrl} alt="Card" className={styles.cardImage} />

                {/* Show button on the image of the first card */}
                {index === 0 && card.buttonText && (
                  <button className={styles.cardButtonOnImage} onClick={() => console.log('Button clicked')}>
                    {card.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HowItWorks