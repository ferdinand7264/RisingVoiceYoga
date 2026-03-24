/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { themes, DEFAULT_THEME, getTheme } from '../config/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Get saved theme from localStorage or use default
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('yoga-theme');
      return saved && themes[saved] ? saved : DEFAULT_THEME;
    }
    return DEFAULT_THEME;
  });

  const theme = getTheme(currentTheme);

  // Apply CSS variables when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply all CSS variables from the theme
    Object.entries(theme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    // Save to localStorage
    localStorage.setItem('yoga-theme', currentTheme);
    
    // Add theme class to body for additional styling
    document.body.className = document.body.className
      .replace(/theme-\w+/g, '')
      .trim();
    document.body.classList.add(`theme-${currentTheme}`);
  }, [currentTheme, theme]);

  const switchTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  const value = {
    currentTheme,
    theme,
    themes,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
