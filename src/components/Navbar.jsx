import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import ThemeLangSwitcher from "./ThemeLangSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { theme } = useTheme();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.practices, path: "/practices" },
    { name: t.nav.faq, path: "/faq" },
    { name: t.nav.contact, path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Only use light text on home page with dark hero
  const isHomePage = location.pathname === "/";
  const useLightText = isHomePage && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-14 h-14"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 opacity-80 blur-[2px] group-hover:opacity-100 group-hover:blur-[3px] transition-all duration-300" />
              {/* Main circle with green background */}
              <div className="absolute inset-[2px] rounded-full bg-sage-600 shadow-lg flex items-center justify-center overflow-hidden ring-2 ring-sage-500/30">
                <img
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Rising Voice Yoga"
                  className="w-20 h-20 object-contain scale-[2]"
                />
              </div>
            </motion.div>
            <span
              className={`font-serif text-2xl font-semibold transition-colors ${useLightText ? "text-white group-hover:text-sage-200 drop-shadow-lg" : "text-stone-800 group-hover:text-sage-600"}`}
            >
              Rising Voice Yoga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-base font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === link.path
                    ? useLightText
                      ? "text-white"
                      : "text-sage-600"
                    : useLightText
                      ? "text-white/90 hover:text-white"
                      : "text-stone-600 hover:text-sage-600"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sage-400 to-sage-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}

            {/* Theme and Language Switcher */}
            <ThemeLangSwitcher />

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="px-7 py-3 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-full text-base font-medium shadow-md hover:shadow-xl hover:shadow-sage-500/30 transition-all duration-300"
              >
                {t.nav.bookClass}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${useLightText ? "text-white hover:bg-white/10" : "text-stone-600 hover:bg-sage-50"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-sage-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-sage-50 text-sage-600"
                        : "text-stone-600 hover:bg-sage-50 hover:text-sage-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Theme/Language Switcher */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="px-4 py-3"
              >
                <ThemeLangSwitcher />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
              >
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-sage-500 to-sage-600 text-white rounded-xl font-medium"
                >
                  {t.nav.bookClass}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
