# Yoga & Coaching Studio Website

React 19 SPA with multi-theme support, i18n (EN/DE), and Framer Motion animations.

## Build & Run

```bash
npm install    # Install dependencies
npm run dev    # Start dev server at http://localhost:5173
npm run build  # Production build
npm run lint   # ESLint check
```

## Architecture

**Provider Stack** (order matters):
```
ThemeProvider → LanguageProvider → Router → Layout
```

**Pages**: Home, AboutTutor, Statistics, Practices, FAQ, Contact (all in `src/pages/`)

**Key files**:
- [src/App.jsx](src/App.jsx) — root component with providers and routing
- [src/config/themes.js](src/config/themes.js) — theme definitions (vibrant/earthy/soft)
- [src/config/themeImages.js](src/config/themeImages.js) — theme-specific images
- [src/locales/](src/locales/) — translation files (en.js, de.js)

## Conventions

### Theme System
- Use `useTheme()` hook → `{ currentTheme, theme, themes, switchTheme }`
- Colors via CSS variables: `var(--color-primary-500)`, etc.
- Tailwind classes: `bg-primary-100`, `text-accent-600`
- Theme persists in localStorage (`'yoga-theme'`)

### i18n
- Use `useTranslation()` hook → `{ t, lang }`
- Translations: nested keys like `t('home.hero.titleLine1')`
- Add new strings to both `src/locales/en.js` and `src/locales/de.js`
- Language persists in localStorage (`'yoga-language'`)

### Components
- Icons: Use `lucide-react` — stored as string names in data, rendered by component lookup
- Animations: Use `SectionWrapper` components (`Section`, `SectionHeader`) for consistent page sections
- Mobile: Use `hidden md:flex` patterns; containers max-w-7xl

### Data Files (`src/data/`)
All data objects follow this pattern:
```javascript
{ id, icon: 'LucideIconName', color: 'tailwind-prefix', ...fields }
```

## Do Not

- Don't use both `useTheme` and manual `document.body.classList` for theming
- Don't hardcode colors — use theme CSS variables
- Don't forget to add translations to both locale files
- Don't nest providers incorrectly (Theme wraps Language wraps Router)
