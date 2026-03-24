import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useRef, useMemo } from "react";
import { useTranslation } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { getThemeImages } from "../config/themeImages";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();
  const { currentTheme, theme } = useTheme();
  const themeImages = getThemeImages(currentTheme);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Floating particles for visual effect - stable random values using useMemo
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: (i * 17 + 23) % 100, // Deterministic pseudo-random distribution
        y: (i * 31 + 47) % 100,
        size: (i % 4) + 2,
        duration: 10 + (i % 10),
        delay: i * 0.5,
      })),
    [],
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url(${themeImages.hero})`,
            filter:
              currentTheme === "soft"
                ? "saturate(0.7) brightness(0.9)"
                : "none",
          }}
        />
        {/* Dynamic Gradient Overlay based on theme */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${themeImages.overlay} transition-all duration-700`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${themeImages.accent} transition-all duration-700`}
        />

        {/* Animated gradient mesh overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay animate-gradient"
          style={{
            background:
              theme.effects?.gradient ||
              "linear-gradient(135deg, rgba(122,143,97,0.3) 0%, rgba(156,130,202,0.3) 50%, rgba(209,174,127,0.3) 100%)",
            backgroundSize: "400% 400%",
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: theme.effects?.particleColor || "#7a8f61",
              opacity: 0.4,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating decorative blobs - fluid sizing */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-3xl transition-colors duration-700"
          style={{
            backgroundColor: theme.effects?.glow || "rgba(122, 143, 97, 0.2)",
            top: "25%",
            left: "5%",
            width: "clamp(5rem, 15vw, 10rem)",
            height: "clamp(5rem, 15vw, 10rem)",
          }}
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-3xl transition-colors duration-700"
          style={{
            backgroundColor:
              theme.effects?.glowSecondary || "rgba(156, 130, 202, 0.2)",
            bottom: "25%",
            right: "5%",
            width: "clamp(7rem, 20vw, 14rem)",
            height: "clamp(7rem, 20vw, 14rem)",
          }}
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-3xl transition-colors duration-700"
          style={{
            backgroundColor: theme.effects?.glow || "rgba(122, 143, 97, 0.15)",
            top: "50%",
            left: "33%",
            width: "clamp(4rem, 12vw, 8rem)",
            height: "clamp(4rem, 12vw, 8rem)",
          }}
        />
      </div>

      {/* Geometric decorative elements - hidden on mobile */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden sm:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute border border-white/10 rounded-full"
          style={{
            top: "5rem",
            right: "5%",
            width: "clamp(8rem, 20vw, 16rem)",
            height: "clamp(8rem, 20vw, 16rem)",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute border border-white/5 rounded-full"
          style={{
            bottom: "5rem",
            left: "5%",
            width: "clamp(6rem, 15vw, 12rem)",
            height: "clamp(6rem, 15vw, 12rem)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 w-full max-w-[80rem] mx-auto text-center"
      >
        <div
          className="flex flex-col items-center justify-center"
          style={{
            padding: "clamp(1rem, 5vw, 2rem)",
            paddingTop: "clamp(4rem, 10vh, 6rem)",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center rounded-full backdrop-blur-md border border-white/20 text-white/90 transition-all duration-700"
            style={{
              backgroundColor:
                theme.effects?.glassBg || "rgba(255, 255, 255, 0.1)",
              gap: "clamp(0.375rem, 1vw, 0.5rem)",
              padding:
                "clamp(0.375rem, 1vw, 0.625rem) clamp(0.75rem, 2vw, 1.25rem)",
              fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)",
              marginBottom: "clamp(1rem, 3vw, 2rem)",
            }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles
                style={{
                  width: "clamp(0.75rem, 2vw, 1rem)",
                  height: "clamp(0.75rem, 2vw, 1rem)",
                }}
              />
            </motion.div>
            <span className="font-medium">{t.home.hero.badge}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-white leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 6vw, 6rem)",
              marginBottom: "clamp(0.75rem, 2vw, 1.5rem)",
            }}
          >
            {t.home.hero.titleLine1}
            <br />
            <motion.span
              className="text-sage-300 inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(var(--color-primary-500), 0.3)",
                  "0 0 40px rgba(var(--color-primary-500), 0.5)",
                  "0 0 20px rgba(var(--color-primary-500), 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {t.home.hero.titleLine2}
            </motion.span>
          </motion.h1>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="leading-relaxed italic"
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.35rem)",
              maxWidth: "42rem",
              marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
              paddingInline: "clamp(0.5rem, 2vw, 0)",
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            "{t.home.hero.quote}"
            <span
              className="block mt-4 not-italic"
              style={{
                fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
                marginTop: "clamp(0.75rem, 2vw, 1rem)",
              }}
            >
              <span
                className="font-semibold tracking-wide"
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.25), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                — {t.home.hero.quoteAuthor}
              </span>
            </span>
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
