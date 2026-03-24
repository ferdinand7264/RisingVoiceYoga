// Locales index - export all translations
import { en } from './en';
import { de } from './de';

export const translations = {
  en,
  de,
};

export const getTranslation = (lang) => {
  return translations[lang] || translations.en;
};

export { en, de };
