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
    "nav.groups": "Groups",
    "nav.signup": "Sign Up",
    "hero.title": "Meet new people in Valencia",
    "hero.subtitle": "Join our community and discover events, activities, and friends near you",
    "hero.cta": "Sign up for free and start meeting people today!",
    "events.title": "Events",
    "events.comingSoon": "Exciting events coming soon! Stay tuned for updates.",
    "groups.title": "Groups",
    "groups.comingSoon": "Interest groups will be available soon. Check back later!",
  },
  es: {
    "nav.home": "Inicio",
    "nav.events": "Eventos",
    "nav.groups": "Grupos",
    "nav.signup": "Registrarse",
    "hero.title": "Conoce gente nueva en Valencia",
    "hero.subtitle": "Únete a nuestra comunidad y descubre eventos, actividades y amigos cerca de ti",
    "hero.cta": "¡Regístrate gratis y empieza a conocer gente hoy!",
    "events.title": "Eventos",
    "events.comingSoon": "¡Próximamente eventos emocionantes! Mantente atento a las actualizaciones.",
    "groups.title": "Grupos",
    "groups.comingSoon": "Los grupos de interés estarán disponibles pronto. ¡Vuelve más tarde!",
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