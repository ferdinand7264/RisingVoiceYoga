import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";
import { FAQAccordion } from "../components/FAQItem";
import {
  Section,
  SectionHeader,
  GradientBlob,
} from "../components/SectionWrapper";
import { useTranslation } from "../context/LanguageContext";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
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
          <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-sage-600" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6 leading-tight">
            {t.faq.hero.titleLine1}
            <br />
            <span className="text-sage-600">{t.faq.hero.titleLine2}</span>
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            {t.faq.hero.description}
          </p>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white relative overflow-hidden">
        <GradientBlob className="top-1/4 -left-24" color="sage" size="lg" />

        <div className="max-w-3xl mx-auto relative">
          <FAQAccordion faqs={t.faqData} />
        </div>
      </Section>

      {/* Still Have Questions Section */}
      <Section className="bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-stone-800 mb-4">
              {t.faq.stillQuestions.title}
            </h2>
            <p className="text-stone-500 mb-8 leading-relaxed">
              {t.faq.stillQuestions.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-600 text-white rounded-full font-medium hover:bg-sage-700 transition-colors"
              >
                {t.nav.contact}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:hello@risingvoiceyoga.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-100 text-sage-700 rounded-full font-medium hover:bg-sage-200 transition-colors"
              >
                hello@risingvoiceyoga.com
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Quick Tips Section */}
      <Section className="bg-white">
        <SectionHeader
          badge={t.faq.tips.badge}
          title={t.faq.tips.title}
          subtitle={t.faq.tips.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {t.faq.tips.items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-sage-50 rounded-2xl"
            >
              <span className="font-serif text-3xl text-sage-300">
                {item.number}
              </span>
              <h3 className="font-medium text-stone-800 mt-2 mb-2">
                {item.tip}
              </h3>
              <p className="text-sm text-stone-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default FAQ;
