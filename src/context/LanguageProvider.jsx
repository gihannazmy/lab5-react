import React, { useState, useEffect } from 'react';
import LanguageContext from './LanguageContext';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default language
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    setDirection(language === 'ar' ? 'rtl' : 'ltr');
    document.body.dir = direction;
  }, [language, direction]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
