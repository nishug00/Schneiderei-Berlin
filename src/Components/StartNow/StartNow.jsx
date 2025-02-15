import React from 'react';
import './StartNow.module.css';

const HeaderSection = ({ title = "Trete mit BeTailor in Kontakt!" }) => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
      </div>
    </div>
  );
};

const MainContent = () => {
  const clothingItems = [
    { id: 1, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen.png', text: 'Jacken/\nMäntel' },
    { id: 2, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen-2.png', text: ' ' },
    { id: 3, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen-3.png', text: 'Jackett / Sakko / Blazer' },
    { id: 4, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen-4.png', text: 'Rock' },
    { id: 5, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen-5.png', text: 'Kleid' },
    { id: 6, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen-6.png', text: 'Weste' },
    { id: 7, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen-7.png', text: 'Jumpsuit/ Overall' },
    { id: 8, image: 'https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/componen-8.png', text: 'Weitere\nOberteile' },
  ];

  return (
    <div className="main-content">
      <div className="clothing-grid">
        <div className="clothing-row">
          {clothingItems.slice(0, 3).map((item) => (
            <div key={item.id} className="clothing-item">
              <div className="image-container">
                <img src={item.image} alt={item.text} />
                <div className="text-overlay">{item.text}</div>
              </div>
              {item.id === 1 && (
                <div className="ellipse-overlay">
                  <img src="https://dashboard.codeparrot.ai/api/image/Z69-b-epongUSRkB/ellipse.png" alt="ellipse" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="clothing-row">
          {clothingItems.slice(3, 8).map((item) => (
            <div key={item.id} className="clothing-item">
              <div className="image-container">
                <img src={item.image} alt={item.text} />
                <div className="text-overlay">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="separator">oder</div>
    </div>
  );
};

const AdditionalOptions = () => {
  const options = [
    { id: 1, text: 'Patches/ Stickereien' },
    { id: 2, text: 'Personalisierungen' },
    { id: 3, text: 'Maßanfertigungen' },
  ];

  return (
    <div className="additional-options">
      {options.map((option) => (
        <div key={option.id} className="option-item">
          {option.text}
        </div>
      ))}
    </div>
  );
};

function StartNow() {
  return (
    <div>
      <HeaderSection />
      <MainContent />
      <AdditionalOptions />
    </div>
  );
}

export default StartNow;
