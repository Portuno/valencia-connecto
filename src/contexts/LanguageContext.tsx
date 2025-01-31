import React, { createContext, useContext, useState } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.events": "Events",
    "nav.feedback": "Feedback",
    "nav.signup": "Sign Up",
    "hero.title": "Meet new people in Valencia",
    "hero.subtitle": "Join our community and discover events, activities, and friends near you",
    "hero.cta": "Sign up for free and start meeting people today!",
    "events.title": "Events",
    "events.comingSoon": "Exciting events coming soon! Stay tuned for updates.",
    "feedback.title": "Share Your Feedback",
    "feedback.subtitle": "Help us improve Terreta Hub with your suggestions",
    "feedback.submit": "Submit Feedback",
    "feedback.placeholder": "Tell us what you think about Terreta Hub...",
    "feedback.success": "Thank you for your feedback!",
    "verticals.title": "Verticals",
    "verticals.technology": "Technology",
    "verticals.finance": "Finance",
    "verticals.law": "Law",
    "verticals.health": "Health",
    "verticals.art": "Art & Entertainment",
    "verticals.community": "Community",
  },
  es: {
    "nav.home": "Inicio",
    "nav.events": "Eventos",
    "nav.feedback": "Opiniones",
    "nav.signup": "Registrarse",
    "hero.title": "Conoce gente nueva en Valencia",
    "hero.subtitle": "Únete a nuestra comunidad y descubre eventos, actividades y amigos cerca de ti",
    "hero.cta": "¡Regístrate gratis y empieza a conocer gente hoy!",
    "events.title": "Eventos",
    "events.comingSoon": "¡Próximamente eventos emocionantes! Mantente atento a las actualizaciones.",
    "feedback.title": "Comparte tu Opinión",
    "feedback.subtitle": "Ayúdanos a mejorar Terreta Hub con tus sugerencias",
    "feedback.submit": "Enviar Opinión",
    "feedback.placeholder": "Cuéntanos qué piensas sobre Terreta Hub...",
    "feedback.success": "¡Gracias por tu opinión!",
    "verticals.title": "Verticales",
    "verticals.technology": "Tecnología",
    "verticals.finance": "Finanzas",
    "verticals.law": "Derecho",
    "verticals.health": "Salud",
    "verticals.art": "Arte y Entretenimiento",
    "verticals.community": "Comunidad",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}