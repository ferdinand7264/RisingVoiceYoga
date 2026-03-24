import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

// Reusable section wrapper with consistent styling
export const Section = ({
  children,
  className = "",
  containerClass = "",
  id = "",
}) => {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}
      >
        {children}
      </div>
    </section>
  );
};

// Section header with title and subtitle
export const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "left"
        ? "text-left"
        : "text-right";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-50px" }}
      className={`max-w-3xl mb-12 lg:mb-16 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-800 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-stone-500 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
};

// Animation wrapper for scroll-triggered animations
export const AnimatedSection = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction], filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
      }}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Card wrapper with consistent styling
export const Card = ({
  children,
  className = "",
  hover = true,
  padding = "p-6",
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`bg-white rounded-3xl border border-sage-100 shadow-soft ${
        hover ? "hover:shadow-lg" : ""
      } transition-all duration-300 ${padding} ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Gradient background decorations - theme aware
export const GradientBlob = ({
  className = "",
  color = "sage",
  size = "md",
  animate = true,
}) => {
  const { theme } = useTheme();

  const sizes = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  };

  // Get theme-aware colors
  const getColor = () => {
    switch (color) {
      case "sage":
        return theme.colors.primary[200];
      case "lavender":
        return theme.colors.accent[200];
      case "sand":
        return theme.colors.tertiary[200];
      default:
        return theme.colors.primary[200];
    }
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${sizes[size]} ${className} transition-colors duration-700`}
      style={{
        backgroundColor: getColor(),
        opacity: 0.4,
      }}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    />
  );
};

// Page transition wrapper
export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
