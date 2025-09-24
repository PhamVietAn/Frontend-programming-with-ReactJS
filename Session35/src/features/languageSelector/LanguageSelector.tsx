import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./LanguageSlice";
import type { AppDispatch, RootState } from "../../stores";


export default function LanguageSelector() {
  const dispatch: AppDispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.current);

  return (
    <div className="p-10">
      <select
        value={currentLang}
        onChange={(e) => dispatch(setLanguage(e.target.value as "en" | "vi"))}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
      <p>{currentLang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}</p>
    </div>
  );
}
