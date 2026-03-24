import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Calendar, Sparkles, Star } from "lucide-react";

// Icon mapping
const iconMap = {
  Users,
  Award,
  Calendar,
  Sparkles,
  Star,
};

const StatsCard = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = iconMap[stat.icon] || Sparkles;

  // Animated counter effect
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();
    const endValue = stat.value;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * endValue;

      // Handle decimal values (like ratings)
      if (endValue < 10) {
        setCount(parseFloat(currentValue.toFixed(1)));
      } else {
        setCount(Math.floor(currentValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative p-5 sm:p-6 lg:p-8 bg-white rounded-3xl shadow-soft hover:shadow-lg transition-all duration-300 border border-sage-100/50 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-100 to-sage-200 flex items-center justify-center text-sage-600 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7" />
          </div>
        </div>

        {/* Value */}
        <div className="relative mb-2">
          <span className="font-serif text-5xl text-stone-800">{count}</span>
          <span className="font-serif text-3xl text-sage-500">
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <h3 className="font-medium text-stone-700 mb-2">{stat.label}</h3>

        {/* Description */}
        <p className="text-sm text-stone-500">{stat.description}</p>

        {/* Decorative circle */}
        <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-sage-100/30 group-hover:scale-150 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default StatsCard;
