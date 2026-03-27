/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const ThemeLangSwitcher = () => {
  const { theme } = useTheme();
  const { currentLanguage, languages, switchLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Language Switcher */}
      <div className="relative" ref={langRef}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setShowLangMenu(!showLangMenu);
          }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
          aria-label="Switch language"
        >
          <Globe className="w-4 h-4" style={{ color: theme.colors.primary[500] }} />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">
            {currentLanguage}
          </span>
          <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${showLangMenu ? 'rotate-180' : ''}`} />
        </motion.button>

        <AnimatePresence>
          {showLangMenu && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 mt-2 w-40 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 z-50"
            >
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t.common?.language || 'Language'}
              </div>
              {Object.entries(languages).map(([code, lang]) => (
                <motion.button
                  key={code}
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
                  onClick={() => {
                    switchLanguage(code);
                    setShowLangMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1">{lang.name}</span>
                  {currentLanguage === code && (
                    <Check className="w-4 h-4" style={{ color: theme.colors.primary[500] }} />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ThemeLangSwitcher;
