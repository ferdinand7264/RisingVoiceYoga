import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutTutor from "./pages/AboutTutor";
import Statistics from "./pages/Statistics";
import Practices from "./pages/Practices";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// Smooth scroll to top on route change with easing
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

// Page transition variants for calming, elegant transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Wrapper component for page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {children}
  </motion.div>
);

// Animated routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutTutor />
            </PageWrapper>
          }
        />
        <Route
          path="/statistics"
          element={
            <PageWrapper>
              <Statistics />
            </PageWrapper>
          }
        />
        <Route
          path="/practices"
          element={
            <PageWrapper>
              <Practices />
            </PageWrapper>
          }
        />
        <Route
          path="/faq"
          element={
            <PageWrapper>
              <FAQ />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
            <Navbar />
            <AnimatedRoutes />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
