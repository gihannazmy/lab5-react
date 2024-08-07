import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import LanguageContext from '../context/LanguageContext'; // Adjust the path as necessary

const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button 
      onClick={toggleLanguage} 
      className="btn btn-link" 
      style={{ color: 'inherit', textDecoration: 'none' }}
      title={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <FontAwesomeIcon icon={faGlobe} />
    </button>
  );
};

export default LanguageToggleButton;
