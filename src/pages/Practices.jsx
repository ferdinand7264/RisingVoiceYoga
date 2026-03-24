import { motion } from "framer-motion";
import PracticeCard from "../components/PracticeCard";
import { Section } from "../components/SectionWrapper";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { useTranslation } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Practices = () => {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();

  const guideIcons = [Users, Target, Zap];

  return (
    <main className="pt-20">
      {/* Hero Section - Clean & Minimal */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{ background: "var(--color-primary-50)" }}
      >
        {/* Subtle gradient accent */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-30"
          style={{
            background: `radial-gradient(ellipse at top right, var(--color-accent-200), transparent 70%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-20"
          style={{
            background: `radial-gradient(ellipse at bottom left, var(--color-primary-200), transparent 70%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "var(--color-primary-100)",
                color: "var(--color-primary-700)",
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                {t.practices.hero.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6"
              style={{ color: "var(--color-primary-900)" }}
            >
              {t.practices.hero.titleLine1}{" "}
              <span style={{ color: "var(--color-primary-600)" }}>
                {t.practices.hero.titleLine2}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: "var(--color-primary-700)" }}
            >
              {t.practices.hero.description}
            </motion.p>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2"
              style={{ color: "var(--color-primary-500)" }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
              <span className="text-sm">{t.practices.hero.scrollHint}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section - Elegant */}
      <section
        className="py-16 lg:py-20 border-y"
        style={{
          background: "white",
          borderColor: "var(--color-primary-100)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-xl lg:text-2xl font-serif italic leading-relaxed"
              style={{ color: "var(--color-primary-800)" }}
            >
              "{t.practices.quote}"
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* Programs Section Header */}
      <section className="pt-20 pb-8" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div className="max-w-2xl">
              <span
                className="text-sm font-semibold uppercase tracking-wider mb-3 block"
                style={{ color: "var(--color-accent-600)" }}
              >
                {t.practices.section.label}
              </span>
              <h2
                className="font-serif text-3xl lg:text-4xl"
                style={{ color: "var(--color-primary-900)" }}
              >
                {t.practices.section.title}
              </h2>
            </div>
            <p
              className="text-base lg:text-lg max-w-md"
              style={{ color: "var(--color-primary-600)" }}
            >
              {t.practices.section.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practices Grid */}
      <Section
        className="relative overflow-hidden pt-8 pb-20"
        style={{ background: "white" }}
      >
        {/* First row: 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative mb-8 lg:mb-10">
          {t.practicesData.slice(0, 3).map((practice, index) => (
            <PracticeCard key={practice.id} practice={practice} index={index} />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 relative max-w-4xl mx-auto">
          {t.practicesData.slice(3).map((practice, index) => (
            <PracticeCard
              key={practice.id}
              practice={practice}
              index={index + 3}
            />
          ))}
        </div>
      </Section>

      {/* How to Choose Section - Clean Cards */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "var(--color-primary-50)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span
              className="text-sm font-semibold uppercase tracking-wider mb-3 block"
              style={{ color: "var(--color-accent-600)" }}
            >
              {t.practices.guide.badge}
            </span>
            <h2
              className="font-serif text-3xl lg:text-4xl mb-4"
              style={{ color: "var(--color-primary-900)" }}
            >
              {t.practices.guide.title}
            </h2>
            <p
              className="max-w-xl mx-auto"
              style={{ color: "var(--color-primary-600)" }}
            >
              {t.practices.guide.subtitle}
            </p>
          </motion.div>

          {/* Guide Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {t.practices.guide.items.map((guide, index) => {
              const IconComponent = guideIcons[index];
              return (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 lg:p-8 rounded-2xl border transition-shadow hover:shadow-lg"
                  style={{
                    background: "white",
                    borderColor: "var(--color-primary-100)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "var(--color-primary-100)" }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: "var(--color-primary-600)" }}
                    />
                  </div>

                  <h3
                    className="font-serif text-xl mb-3"
                    style={{ color: "var(--color-primary-900)" }}
                  >
                    {guide.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-primary-600)" }}
                  >
                    {guide.description}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      background: "var(--color-accent-100)",
                      color: "var(--color-accent-700)",
                    }}
                  >
                    {t.practices.guide.tryLabel}: {guide.suggestion}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean */}
      <section
        className="py-20 lg:py-24"
        style={{
          background: `linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700))`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              {t.practices.cta.badge}
            </span>

            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              {t.practices.cta.title}
            </h2>

            <p className="text-lg text-white/80 mb-8">
              {t.practices.cta.description}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background: "white",
                color: "var(--color-primary-700)",
              }}
            >
              {t.nav.bookClass}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Practices;
