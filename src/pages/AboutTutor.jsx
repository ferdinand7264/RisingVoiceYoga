import { motion } from "framer-motion";
import { Award, BookOpen, Users, Heart, Calendar, Quote } from "lucide-react";
import {
  Section,
  SectionHeader,
  AnimatedSection,
  GradientBlob,
} from "../components/SectionWrapper";
import { tutorData as tutorImages } from "../data/tutorData";
import { useTranslation } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const AboutTutor = () => {
  const { t } = useTranslation();
  const { currentTheme, theme } = useTheme();

  // Get theme-specific tutor image (images stay in tutorData file)
  const tutorImage = tutorImages.images?.[currentTheme] || tutorImages.image;
  // Use translated tutor data for text
  const tutorData = t.tutorData;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-sage-50 to-white relative overflow-hidden">
        <GradientBlob className="-top-24 -right-24" color="sage" size="xl" />
        <GradientBlob
          className="bottom-0 -left-24"
          color="lavender"
          size="lg"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                className="absolute -inset-4 rounded-[3rem] opacity-50 blur-2xl transition-colors duration-700"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary[200]}, ${theme.colors.accent[200]})`,
                }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative">
                <motion.div
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-60 transition-colors duration-700"
                  style={{ backgroundColor: theme.colors.primary[200] }}
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-60 transition-colors duration-700"
                  style={{ backgroundColor: theme.colors.accent[200] }}
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={tutorImage}
                  alt={tutorData.name}
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4] transition-all duration-700"
                  whileHover={{ scale: 1.02 }}
                  style={{
                    boxShadow: `0 25px 50px -12px ${theme.colors.primary[500]}40`,
                  }}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
              {t.about.hero.badge}
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl text-stone-800 mb-4 leading-tight">
              {tutorData.name}
            </h1>
            <p className="text-lg text-sage-600 font-medium mb-6">
              {tutorData.title}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              {[
                {
                  icon: Calendar,
                  label: t.about.stats.yearsTeaching,
                  value: tutorImages.experience.years,
                },
                {
                  icon: Users,
                  label: t.about.stats.studentsGuided,
                  value: `${tutorImages.experience.studentsCount}+`,
                },
                {
                  icon: BookOpen,
                  label: t.about.stats.workshops,
                  value: tutorImages.experience.workshops,
                },
                {
                  icon: Heart,
                  label: t.about.stats.retreats,
                  value: tutorImages.experience.retreats,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-2xl border border-sage-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors duration-500 flex-shrink-0"
                    style={{ backgroundColor: theme.colors.primary[100] }}
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-sage-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif text-lg sm:text-xl text-stone-800">
                      {stat.value}
                    </p>
                    <p className="text-xs text-stone-500 truncate">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Biography Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge={t.about.story.badge}
            title={t.about.story.title}
            align="left"
          />

          <AnimatedSection>
            <div className="prose prose-lg prose-stone max-w-none">
              {tutorData.biography.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-stone-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
        <GradientBlob
          className="top-0 left-1/2 -translate-x-1/2"
          color="lavender"
          size="xl"
        />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
              <Quote className="w-8 h-8 text-sage-600" />
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-stone-800 mb-6">
              {t.about.philosophy.title}
            </h2>
          </motion.div>

          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-sage-100">
              {tutorData.philosophy.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-stone-600 leading-relaxed ${
                    index === 0
                      ? "font-serif text-2xl text-sage-700 italic mb-6"
                      : "mb-4"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-white">
        <SectionHeader
          badge={t.about.certifications.badge}
          title={t.about.certifications.title}
          subtitle={t.about.certifications.subtitle}
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tutorData.certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-sage-50 rounded-2xl hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award className="w-6 h-6 text-sage-600" />
              </div>
              <span className="text-stone-700 font-medium">{cert}</span>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default AboutTutor;
