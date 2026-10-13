import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitchProps {
  variant?: "floating" | "inline";
  className?: string;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ variant = "inline", className = "" }) => {
  const { lang, setLang } = useLanguage();

  if (variant === "floating") {
    return (
      <div
        className={`fixed top-4 right-4 z-50 flex items-center bg-card/90 backdrop-blur-md border border-border/80 shadow-lg rounded-full p-1 transition-all ${className}`}
      >
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLang("pl")}
            aria-label="Wersja polska"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              lang === "pl"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <span>🇵🇱</span>
            <span>PL</span>
          </button>
          <button
            onClick={() => setLang("en")}
            aria-label="English version"
            className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              lang === "en"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center bg-muted/60 backdrop-blur-sm border border-border/60 rounded-full p-1 ${className}`}
    >
      <Globe size={14} className="text-muted-foreground ml-2 mr-1 hidden sm:inline" />
      <button
        onClick={() => setLang("pl")}
        aria-label="Wersja polska"
        className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1 ${
          lang === "pl"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span>PL</span>
      </button>
      <button
        onClick={() => setLang("en")}
        aria-label="English version"
        className={`px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-1 ${
          lang === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitch;
