// Theme-specific images for different moods and styles
// Using clean, minimal background yoga images for practice cards

// Clean yoga practice images - minimal backgrounds representing each practice
// Includes both English and German practice names for i18n support
const cleanPracticeImages = {
  // Traditional Hatha - Warrior 2 pose (EN + DE)
  "Traditional Hatha Yoga":
    "https://theyogatique.com/wp-content/uploads/2023/05/Warrior-2-pose-yoga-1024x731.jpg",
  "Traditionelles Hatha Yoga":
    "https://theyogatique.com/wp-content/uploads/2023/05/Warrior-2-pose-yoga-1024x731.jpg",
  // Stress Release - Peaceful meditation/relaxation (same in both languages)
  "Stress Release":
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&crop=top",
  // Unshakable - Strong warrior/power pose (same in both languages)
  Unshakable:
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=500&fit=crop&crop=center",
  // Fit Back Yoga - Back stretching/spine focus (same in both languages)
  "Fit Back Yoga":
    "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&h=500&fit=crop&crop=center",
  // Pranayama - Breathing/meditation focus (same in both languages)
  Pranayama:
    "https://d1migpe0gurg12.cloudfront.net/Blogs/listingImage/Blog_BannerImage_1496x664-6.webp",
};

export const themeImages = {
  vibrant: {
    hero: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
    about:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1000&fit=crop",
    tutor:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&h=800&fit=crop",
    practices: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573384666979-2571d46bafe1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&h=400&fit=crop",
    ],
    practiceImages: cleanPracticeImages,
    overlay: "from-rose-900/40 via-orange-900/30 to-purple-900/50",
    accent: "from-pink-500/20 to-transparent",
  },
  earthy: {
    hero: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80",
    about:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&h=1000&fit=crop",
    tutor:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop",
    practices: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&h=400&fit=crop",
    ],
    practiceImages: cleanPracticeImages,
    overlay: "from-stone-900/40 via-stone-900/30 to-stone-900/60",
    accent: "from-sage-900/20 to-transparent",
  },
  soft: {
    hero: "/soft-hero.png",
    about:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&h=1000&fit=crop",
    tutor:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=800&fit=crop",
    practices: [
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515894203077-9cd36032142f?w=600&h=400&fit=crop",
    ],
    practiceImages: cleanPracticeImages,
    overlay: "from-stone-800/50 via-rose-900/40 to-stone-900/60",
    accent: "from-rose-900/30 to-transparent",
  },
};

// Get images for current theme
export const getThemeImages = (themeId) => {
  return themeImages[themeId] || themeImages.earthy;
};

// Get practice image for current theme
export const getPracticeImage = (themeId, practiceName) => {
  const theme = themeImages[themeId] || themeImages.earthy;
  return theme.practiceImages?.[practiceName] || theme.practices?.[0];
};
