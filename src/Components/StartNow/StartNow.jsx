import React from 'react';
import styles from './StartNow.module.css'

function StartNow() {

  const defaultCategories = [
    { id: 1, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-2.png', text: 'Hosen' },
    { id: 2, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-2.png', text: 'Jacken/\nMäntel' },
    { id: 3, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-3.png', text: 'Jackett / Sakko / Blazer' },
    { id: 4, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-4.png', text: 'Rock' },
    { id: 5, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-5.png', text: 'Jacken/\nMäntel' },
    { id: 6, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-6.png', text: 'Jacken/\nMäntel' },
    { id: 7, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-7.png', text: 'Jacken/\nMäntel' },
    { id: 8, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-8.png', text: 'Jacken/\nMäntel' },
    { id: 9, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-9.png', text: 'Jacken/\nMäntel' },
  ];
  const categories = defaultCategories

  const defaultCategories1 = [
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
  const categories1 = defaultCategories1

  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Trete mit BeTailor in Kontakt!</h1>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryItem}>
              <div className={styles.imageContainer}>
                <img src={category.image} alt={category.text} />
                <div className={styles.textOverlay}>
                  <p>{category.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className={styles.categoryGrid}>
      {categories1.map((category, index) => (
        <div 
          key={index} 
          className={styles.categoryItem}
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
    </div> */}
      </div>
    </>

  )
}

export default StartNow