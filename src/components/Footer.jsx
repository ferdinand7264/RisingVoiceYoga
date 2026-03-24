import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Instagram, Facebook, Mail, MapPin } from "lucide-react";
import { useTranslation } from "../context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const footerLinks = {
    explore: [
      { name: t.nav.home, path: "/" },
      { name: t.nav.about, path: "/about" },
      { name: t.nav.practices, path: "/practices" },
      { name: t.nav.statistics, path: "/statistics" },
    ],
    support: [
      { name: t.nav.faq, path: "/faq" },
      { name: t.nav.contact, path: "/contact" },
      { name: t.nav.bookClass, path: "/contact" },
      { name: t.footer.giftCards, path: "/contact" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-stone-50 to-stone-100 border-t border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 opacity-80 blur-[2px] group-hover:opacity-100 group-hover:blur-[3px] transition-all duration-300" />
                {/* Main circle with green background */}
                <div className="absolute inset-[2px] rounded-full bg-sage-600 shadow-lg flex items-center justify-center overflow-hidden ring-2 ring-sage-500/30">
                  <img
                    src="/logo.png"
                    alt="Rising Voice Yoga"
                    className="w-16 h-16 object-contain scale-[2]"
                  />
                </div>
              </div>
              <span className="font-serif text-xl font-semibold text-stone-800 group-hover:text-sage-600 transition-colors">
                Rising Voice Yoga
              </span>
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:hello@risingvoiceyoga.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 hover:bg-sage-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-lg text-stone-800 mb-6">
              {t.footer.explore}
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-stone-500 hover:text-sage-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-lg text-stone-800 mb-6">
              {t.footer.support}
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-stone-500 hover:text-sage-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg text-stone-800 mb-6">
              {t.footer.visitUs}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sage-500 mt-0.5 flex-shrink-0" />
                <p className="text-stone-500 text-sm">
                  123 Peaceful Lane
                  <br />
                  Harmony District
                  <br />
                  San Francisco, CA 94102
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sage-500 flex-shrink-0" />
                <a
                  href="mailto:hello@risingvoiceyoga.com"
                  className="text-stone-500 hover:text-sage-600 transition-colors text-sm"
                >
                  hello@risingvoiceyoga.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-sage-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-stone-400 text-sm">
              © {currentYear} Rising Voice Yoga. {t.footer.rights}
            </p>
            <p className="text-stone-400 text-sm flex items-center gap-1">
              {t.footer.madeWith}{" "}
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />{" "}
              {t.footer.forPeace}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
