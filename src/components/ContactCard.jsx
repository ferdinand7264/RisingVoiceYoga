import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";

// Icon mapping
const iconMap = {
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  MapPin,
};

const ContactCard = ({ contact }) => {
  const Icon = iconMap[contact.icon] || Mail;

  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group block h-full"
    >
      <div className="relative p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-sage-100 shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col items-center text-center">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-transparent to-lavender-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative flex flex-col items-center">
          {/* Icon */}
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 mb-4 ${
              contact.name === "WhatsApp"
                ? "bg-green-100 text-green-600"
                : contact.name === "Instagram"
                  ? "bg-gradient-to-br from-purple-100 to-pink-100 text-pink-600"
                  : contact.name === "Facebook"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-sage-100 text-sage-600"
            }`}
          >
            <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-serif text-lg sm:text-xl text-stone-800 mb-2 group-hover:text-sage-700 transition-colors">
              {contact.name}
            </h3>
            <p className="text-sm sm:text-base text-stone-500">
              {contact.handle}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ContactCard;
