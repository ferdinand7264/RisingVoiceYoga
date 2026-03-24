// Language configuration
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
  },
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪',
  },
};

export const DEFAULT_LANGUAGE = 'en';

export const getLanguageOptions = () => Object.values(languages);
