import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import ContactCard from "../components/ContactCard";
import {
  Section,
  SectionHeader,
  GradientBlob,
} from "../components/SectionWrapper";
import { contactData } from "../data/contactData";
import { useTranslation } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useTranslation();

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            {t.contact.hero.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6 leading-tight">
            {t.contact.hero.titleLine1}
            <br />
            <span className="text-sage-600">{t.contact.hero.titleLine2}</span>
          </h1>
          <p className="text-lg text-stone-500 leading-relaxed">
            {t.contact.hero.description}
          </p>
        </motion.div>
      </Section>

      {/* Contact Methods */}
      <Section className="bg-white">
        <SectionHeader
          badge={t.contact.methods.badge}
          title={t.contact.methods.title}
          subtitle={t.contact.methods.subtitle}
        />

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactData.social.map((contact, index) => (
            <motion.div
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ContactCard contact={contact} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Location & Hours */}
      <Section className="bg-gradient-to-b from-stone-50 to-white">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-sage-100 aspect-[4/3]">
              <iframe
                src={contactData.map.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-3xl border border-sage-100 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">
                    {t.contact.location.visitUs}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {contactData.studio.address}
                    <br />
                    {contactData.studio.city}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-3xl border border-sage-100 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-sage-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-stone-800 mb-3">
                    {t.contact.location.studioHours}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">
                        {t.contact.location.weekdays}
                      </span>
                      <span className="text-stone-700 font-medium">
                        {contactData.hours.weekdays}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">
                        {t.contact.location.saturday}
                      </span>
                      <span className="text-stone-700 font-medium">
                        {contactData.hours.saturday}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">
                        {t.contact.location.sunday}
                      </span>
                      <span className="text-stone-700 font-medium">
                        {contactData.hours.sunday}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-3xl border border-sage-100 shadow-soft"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-800 mb-2">
                    {t.contact.location.callUs}
                  </h3>
                  <a
                    href={`tel:${contactData.studio.phone}`}
                    className="text-sage-600 hover:text-sage-700 font-medium transition-colors"
                  >
                    {contactData.studio.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-gradient-to-br from-sage-600 to-sage-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-2 border-white" />
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-4">
              {t.contact.newsletter.title}
            </h2>
            <p className="text-white/80 mb-8">
              {t.contact.newsletter.description}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.contact.newsletter.placeholder}
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-sage-700 rounded-full font-medium hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                {t.contact.newsletter.subscribe}
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
