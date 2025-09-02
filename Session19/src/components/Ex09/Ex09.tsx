import { useContext } from "react";
import LanguageProvider from "./LanguageProvider";
import { LanguageContext } from "./LanguageContext";

function LanguageSwitcher() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return null;
  return (
    <div style={{ color: "#fff", marginBottom: 16 }}>
      <span>Ngôn ngữ hiện tại: </span>
      <select
        value={ctx.language}
        onChange={e => ctx.changeLanguage(e.target.value as "en" | "vi")}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  );
}

function WelcomeMessage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return null;
  return (
    <h1 style={{ color: "#fff" }}>
      {ctx.language === "en" ? "Welcome!" : "Xin chào!"}
    </h1>
  );
}

export default function Ex09() {
  return (
    <div style={{ background: "#222", padding: 32, minHeight: 200 }}>
      <LanguageProvider>
        <LanguageSwitcher />
        <WelcomeMessage />
      </LanguageProvider>
    </div>
  );
}

