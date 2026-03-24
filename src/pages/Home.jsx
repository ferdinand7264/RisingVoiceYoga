import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  ArrowRight,
  Star,
  Leaf,
  Sun,
  Wind,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import StatsCard from "../components/StatsCard";
import {
  Section,
  SectionHeader,
  AnimatedSection,
  GradientBlob,
} from "../components/SectionWrapper";
import { useTranslation } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { getThemeImages } from "../config/themeImages";

const Home = () => {
  const { t } = useTranslation();
  const { currentTheme, theme } = useTheme();
  const themeImages = getThemeImages(currentTheme);

  const benefitKeys = ["balance", "stress", "breath", "peace"];
  const benefitIcons = [Heart, Sun, Wind, Leaf];
  const benefitsPreview = benefitKeys.map((key, index) => ({
    ...t.home.benefits.items[key],
    icon: benefitIcons[index],
  }));

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview Section */}
      <Section className="bg-white relative overflow-hidden">
        <GradientBlob className="-top-24 -left-24" color="sage" size="xl" />
        <GradientBlob className="bottom-0 right-0" color="lavender" size="lg" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={themeImages.about}
                  alt="Yoga practice in peaceful setting"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
                {/* Theme-colored overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: theme.colors.primary[500] }}
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 hidden sm:block bg-white rounded-2xl p-4 sm:p-6 shadow-xl max-w-[200px] border-2 transition-colors duration-500"
                style={{ borderColor: theme.colors.primary[100] }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-serif text-2xl text-stone-800">
                    4.9
                  </span>
                </div>
                <p className="text-sm text-stone-500">{t.home.about.rating}</p>
              </motion.div>
              {/* Decorative floating element */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 rounded-2xl opacity-80 hidden sm:block"
                style={{ backgroundColor: theme.colors.accent[100] }}
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" className="lg:pl-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
              {t.home.about.badge}
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-stone-800 mb-6 leading-tight">
              {t.home.about.titleLine1}
              <br />
              <span className="text-sage-600">
                {t.home.about.titleHighlight}
              </span>{" "}
              {t.home.about.titleLine2}
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              {t.home.about.description1}
            </p>
            <p className="text-stone-500 leading-relaxed mb-8">
              {t.home.about.description2}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-full font-medium hover:bg-sage-700 transition-colors shadow-lg"
                  style={{
                    boxShadow: `0 8px 30px ${theme.effects?.glow || "rgba(122, 143, 97, 0.3)"}`,
                  }}
                >
                  {t.home.about.meetGuide}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <Link
                to="/practices"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-100 text-sage-700 rounded-full font-medium hover:bg-sage-200 transition-colors"
              >
                {t.home.about.explorePractices}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border opacity-[0.03]"
          style={{ borderColor: theme.colors.primary[500] }}
        />

        <SectionHeader
          badge={t.home.benefits.badge}
          title={t.home.benefits.title}
          subtitle={t.home.benefits.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsPreview.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 bg-white rounded-3xl border border-sage-100 shadow-soft hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: theme.effects?.gradient }}
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors"
                >
                  <benefit.icon className="w-7 h-7 text-sage-600" />
                </motion.div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Statistics Preview */}
      <Section className="bg-white relative overflow-hidden">
        <GradientBlob
          className="top-0 left-1/2 -translate-x-1/2"
          color="sage"
          size="xl"
        />

        <SectionHeader
          badge={t.home.stats.badge}
          title={t.home.stats.title}
          subtitle={t.home.stats.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {t.statsData.slice(0, 3).map((stat, index) => (
            <StatsCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/statistics"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium transition-colors group"
          >
            {t.home.stats.viewAll}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-white/10"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5"
          />
          {/* Floating particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span>{t.home.cta.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl lg:text-5xl text-white mb-6"
          >
            {t.home.cta.titleLine1}
            <br />
            {t.home.cta.titleLine2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
          >
            {t.home.cta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-sage-700 rounded-full font-medium shadow-xl transition-all inline-block"
              >
                {t.home.cta.bookFirst}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/faq"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-white/20 transition-all border border-white/30 inline-block"
              >
                {t.home.cta.questions}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
};

export default Home;
