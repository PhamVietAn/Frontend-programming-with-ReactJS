import { createContext } from "react";

export type Language = "en" | "vi";
export interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
