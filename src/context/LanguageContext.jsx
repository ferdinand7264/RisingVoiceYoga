/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_LANGUAGE, languages } from '../config/languages';
import { getTranslation } from '../locales';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Get saved language from localStorage or use default
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('yoga-language');
      return saved && languages[saved] ? saved : DEFAULT_LANGUAGE;
    }
    return DEFAULT_LANGUAGE;
  });

  const t = getTranslation(currentLanguage);

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('yoga-language', currentLanguage);
    // Update document lang attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const switchLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  const value = {
    currentLanguage,
    language: languages[currentLanguage],
    languages,
    switchLanguage,
    t, // translations object
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Shorthand hook for just translations
export const useTranslation = () => {
  const { t, currentLanguage } = useLanguage();
  return { t, lang: currentLanguage };
};

export default LanguageContext;
