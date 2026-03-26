import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";

// Custom WhatsApp icon (official logo)
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Icon mapping
const iconMap = {
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Phone,
  MapPin,
  WhatsApp: WhatsAppIcon,
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
