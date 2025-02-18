import React from 'react';
import styles from './StartNow.module.css';
import Footer from '../Footer/Footer';

function StartNow() {

  const clothingCategories = [
    { id: 1, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-2.png', text: 'Hosen' },
    { id: 2, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-2.png', text: 'Jacken/\nMäntel' },
    { id: 3, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-3.png', text: 'Jackett / Sakko / Blazer' },
    { id: 4, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-4.png', text: 'Rock' },
    { id: 5, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-5.png', text: 'Kleid' },
    { id: 6, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-6.png' },
    { id: 7, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-7.png', text: 'Jumpsuit/\nOverall' },
    { id: 8, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-8.png', text: 'Weitere Oberteile' },
  ];
  const ClothingCategories = clothingCategories

  const serviceCategories = [
    {
      title: "Patches/ Aufnäher annähen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen.png"
    },
    {
      title: "Vorhänge/ Gardinen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-2.png"
    },
    {
      title: "Bettwäsche",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-3.png"
    },
    {
      title: "Taschen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-4.png"
    },
    {
      title: "Kissen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-5.png"
    }
  ];
  const ServiceCategories = serviceCategories

  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Trete mit BeTailor in Kontakt!</h1>
        </div>

        {/* Clothing Categories Grid */}
        <div className={styles.clothingCategoriesGrid}>
          {ClothingCategories.map((category) => (
            <div key={category.id} className={styles.clothingCategoryItem}>
              <div className={styles.imageContainer}>
                <img src={category.image} alt={category.text} />
                <div className={styles.textOverlay}>
                  <p>{category.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Categories Grid */}
        <div className={styles.serviceCategoriesGrid}>
          {ServiceCategories.map((category, index) => (
            <div
              key={index}
              className={styles.serviceCategoryItem}
              onClick={() => console.log(`Clicked ${category.title}`)}
            >
              <div className={styles.categoryImageOverlay}>
                <img
                  src={category.image}
                  alt={category.title}
                  className={styles.categoryImage}
                />
              </div>
              <div className={styles.categoryTitle}>
                {category.title}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.textileNotFound}>
          <span className={styles.textileText}>Die Textilie ist hier nicht vorhanden?</span>
        </div>

        <div className={styles.layout}>
        <div className={styles.header}>
        Änderungsschneiderei Online – Per Post in alle deutschsprachigen Länder
      </div>
      <div className={styles.contentWrapper}>
     
        <div className={styles.textContent}>
      
          <p>Einfach oben Deine Textilie oder Dein Kleidungsstück auswählen, um die gewünschten Änderungsmöglichkeiten angezeigt zu bekommen. Dort wird dir beim Auswählen der Änderung auch automatisch der Preis angezeigt. Kurze Anleitungsvideos zeigen Dir, wie Du abmessen musst. Nach Deiner Bestellung bekommst Du eine E-Mail mit weiteren Details und unserer Adresse, wo du deine Textilien hinschicken musst.</p>

          <p>Als Online Änderungsschneiderei sind wir für Dich 24/7 verfügbar. Zudem kannst Du unser Live-Chat nutzen oder um ein Rückruf bitten, um mit unseren Kundenberatern in Kontakt zu treten. Wir setzen auf 100% Qualität und deutsches Handwerk, bei uns bekommst du das beste Ergebnis für die Änderung Deiner Textilien.</p>

          <h3>Hose ändern lassen</h3>
          <p>Kein Problem! Sei es Hose kürzen, Hose enger nähen lassen oder repariere lassen. Bei uns wird es professionell geändert, auch mit originalem Saum, so dass es aussieht, als wurde es nie gekürzt oder enger gemacht. Hierbei benutzen unsere Schneider professionelle Techniken, so dass der Garn und Saum wie vorher aussehen. Eine Anleitung zeigt Dir anhand eines Videos, wie Du abmessen musst und die Kosten unterscheiden sich nicht vom Änderungsschneider in der Nähe.</p>

          <p>Hose ändern lassen: Jeans kürzen, Hose kürzen, Jeanshose kürzen mit original Saum, Jeans enger nähen, Hose enger machen lassen, Hosen enger nähen, Hose Reißverschluss erneuern oder reparieren, Jeans nähen Reißverschluss, Hosen nähen, Jeans nähen, Hose kürzen Preis, Hose enger nähen Preis, Reißverschluss einnähen, Hose flicken, Knopf annähen, Jeans oder Hose umsäumen, Hosen umnähen.</p>

          <h3>Jacke Reißverschluss erneuern lassen oder reparieren lassen</h3>
          <p>Der Reißverschluss Deiner Jacke ist kaputt gegangen? Leider keine Seltenheit! Viele Hersteller versuchen an jeder Ecke zu sparen. Der wechsel des Reißverschlusses oder des Schiebers ist mit uns kein Problem! Oben Deine Textilie auswählen und dann uns zuschicken. Die Reparatur des Jacken Reißverschlusses erfolgt so, dass Du es mit dem bloßen Auge nicht sehen kannst. Dabei achten unsere Änderungsschneider besonders darauf, die gleiche Farbe des Reißverschlusses und des Garns zu benutzen. Wir benutzen natürlich ausschließlich hochwertige Reißverschlüsse und Zipper/Schieber. Du kannst Dich also auf eine professionelle Reparatur deines Jacken Reißverschlusses freuen und der Preis ist auch der Qualität entsprechend günstig.</p>
        </div>
      </div>
 
    </div>
          
        <Footer />
      </div>
    </>
  )
}

export default StartNow