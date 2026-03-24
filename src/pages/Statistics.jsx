import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";
import {
  Section,
  SectionHeader,
  GradientBlob,
} from "../components/SectionWrapper";
import { useTranslation } from "../context/LanguageContext";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-sage-50 to-white relative overflow-hidden">
        <GradientBlob className="-top-24 -left-24" color="sage" size="xl" />
        <GradientBlob
          className="top-1/2 -right-24"
          color="lavender"
          size="lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            {t.statistics.hero.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6 leading-tight">
            {t.statistics.hero.titleLine1}
            <br />
            <span className="text-sage-600">
              {t.statistics.hero.titleLine2}
            </span>
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            {t.statistics.hero.description}
          </p>
        </motion.div>
      </Section>

      {/* Main Stats Grid */}
      <Section className="bg-white relative overflow-hidden">
        <GradientBlob
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          color="sage"
          size="xl"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {t.statsData.map((stat, index) => (
            <StatsCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section className="bg-gradient-to-b from-stone-50 to-white">
        <SectionHeader
          badge={t.statistics.achievements.badge}
          title={t.statistics.achievements.title}
          subtitle={t.statistics.achievements.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.statistics.achievements.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl border border-sage-100 shadow-soft"
            >
              <h3 className="font-serif text-xl text-stone-800 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Growth Timeline */}
      <Section className="bg-white">
        <SectionHeader
          badge={t.statistics.growth.badge}
          title={t.statistics.growth.title}
          subtitle={t.statistics.growth.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {t.statistics.growth.milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    milestone.highlight
                      ? "bg-sage-600 text-white"
                      : "bg-sage-100 text-sage-700"
                  }`}
                >
                  <span className="font-serif text-lg">{milestone.year}</span>
                </div>
                <p className="text-stone-600 font-medium">{milestone.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Statistics;
