import React, { useState } from "react";
import type { Language } from "./LanguageContext";
import { LanguageContext } from "./LanguageContext";

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const changeLanguage = (lang: Language) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
