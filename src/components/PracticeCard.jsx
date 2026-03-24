import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  ChevronDown,
  Clock,
  Signal,
  Check,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { getPracticeImage } from "../config/themeImages";

const PracticeCard = ({ practice, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { currentTheme } = useTheme();
  // Get theme-specific image for this practice
  const practiceImage = getPracticeImage(currentTheme, practice.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full perspective-1000"
    >
      <motion.div
        animate={{
          y: isHovered ? -16 : 0,
          rotateY: isHovered ? 2 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full rounded-[2rem] overflow-hidden flex flex-col"
        style={{
          boxShadow: isHovered
            ? `0 40px 80px -20px var(--color-primary-500)40, 0 0 0 1px var(--color-primary-200)`
            : "0 8px 32px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0,0,0,0.04)",
        }}
      >
        {/* Image Section */}
        <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden flex-shrink-0">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={practiceImage}
              alt={practice.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Theme-aware gradient overlay - Enhanced for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, 
                transparent 0%, 
                transparent 40%,
                rgba(0,0,0,0.2) 60%,
                rgba(0,0,0,0.6) 85%,
                rgba(0,0,0,0.75) 100%
              )`,
            }}
          />

          {/* Animated lotus pattern overlay */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.15 : 0.08,
              rotate: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 20c-5.5 0-10 8-10 18s4.5 18 10 18 10-8 10-18-4.5-18-10-18zm-15 10c-3 5-5 12-5 18 0 8 3.5 15 8 15 3 0 5.5-3 7-8-6-3-10-12-10-22v-3zm30 0v3c0 10-4 19-10 22 1.5 5 4 8 7 8 4.5 0 8-7 8-15 0-6-2-13-5-18z' fill='%23ffffff' fill-opacity='.5'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Duration Badge */}
          <div
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-sm text-xs font-semibold flex items-center gap-1.5"
            style={{
              background: "rgba(255,255,255,0.85)",
              color: "var(--color-primary-700)",
            }}
          >
            <Clock className="w-3.5 h-3.5" />
            {practice.duration}
          </div>

          {/* Practice Name on Image - Elegant text styling */}
          <div className="absolute bottom-4 left-4 right-4">
            <motion.h3
              animate={{ y: isHovered ? -4 : 0 }}
              className="font-serif text-2xl lg:text-3xl font-semibold leading-tight"
              style={{
                color: "white",
                textShadow: `
                  0 0 20px rgba(0,0,0,0.5),
                  0 0 40px rgba(0,0,0,0.3),
                  0 2px 4px rgba(0,0,0,0.5)
                `,
              }}
            >
              {practice.name}
            </motion.h3>
          </div>
        </div>

        {/* Content Section */}
        <div
          className="relative p-6 lg:p-7 flex flex-col flex-grow"
          style={{
            background: `linear-gradient(180deg, var(--color-primary-50) 0%, white 100%)`,
          }}
        >
          {/* Decorative breathing animation */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-40 h-40 rounded-full -translate-y-1/2 translate-x-1/4"
            style={{ background: "var(--color-accent-300)" }}
          />

          {/* Level & Focus Section */}
          <div className="relative flex flex-wrap items-center gap-2 mb-4 min-h-[28px]">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
              style={{
                background: "var(--color-accent-100)",
                color: "var(--color-accent-700)",
              }}
            >
              <Signal className="w-3 h-3" />
              {practice.difficulty}
            </span>
            {practice.focus.slice(0, 2).map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "var(--color-primary-100)",
                  color: "var(--color-primary-700)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Description - Full text, grows to fill space */}
          <div className="flex-grow">
            <p
              className="text-sm lg:text-[0.95rem] leading-relaxed"
              style={{ color: "var(--color-primary-800)" }}
            >
              {practice.description}
            </p>
          </div>

          {/* Expand Button - Always at bottom */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-medium text-sm transition-all duration-300 mt-5"
            style={{
              background: isExpanded
                ? `linear-gradient(135deg, var(--color-primary-500), var(--color-accent-500))`
                : "var(--color-primary-100)",
              color: isExpanded ? "white" : "var(--color-primary-700)",
              boxShadow: isExpanded
                ? "0 8px 24px -8px var(--color-primary-500)60"
                : "none",
            }}
          >
            <Sparkles className="w-4 h-4" />
            {isExpanded ? "Hide Benefits" : "View Benefits"}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>

        {/* Benefits Accordion */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div
                className="px-6 lg:px-7 pb-6 lg:pb-7 pt-2"
                style={{ background: "var(--color-primary-50)" }}
              >
                {/* Divider */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, transparent, var(--color-primary-300), transparent)`,
                    }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                    style={{ color: "var(--color-accent-600)" }}
                  >
                    <Leaf className="w-3 h-3" />
                    Key Benefits
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(90deg, transparent, var(--color-primary-300), transparent)`,
                    }}
                  />
                </div>

                {/* Benefits List */}
                <ul className="grid gap-2.5">
                  {practice.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: i * 0.05 + 0.1,
                          type: "spring",
                          stiffness: 500,
                        }}
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: `linear-gradient(135deg, var(--color-primary-500), var(--color-accent-500))`,
                        }}
                      >
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </motion.div>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-primary-800)" }}
                      >
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default PracticeCard;
