"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Desteklenen diller
const LANGUAGES = ["en", "tr"];

// Çeviriler
const translations = {
  en: {
    TestPage: {
      title: "Test Page",
      welcome: "Welcome to the test page!"
    }
  },
  tr: {
    TestPage: {
      title: "Test Sayfası",
      welcome: "Test sayfasına hoş geldiniz!"
    }
  }
};

type LanguageContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  t: (namespace: string, key: string) => string;
};

// Context oluşturma
const LanguageContext = createContext<LanguageContextType | null>(null);

// Provider bileşeni
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Varsayılan dil olarak 'en' kullan veya localStorage'dan oku
  const [locale, setLocale] = useState("en");

  // Bileşen yüklendiğinde localStorage'dan dil ayarını oku
  useEffect(() => {
    const savedLocale = localStorage.getItem("language") || "en";
    if (LANGUAGES.includes(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  // Dil değiştirme işlevi
  const changeLocale = (newLocale: string) => {
    if (LANGUAGES.includes(newLocale)) {
      setLocale(newLocale);
      localStorage.setItem("language", newLocale);
      // URL'yi güncelle (opsiyonel)
      const url = new URL(window.location.href);
      url.searchParams.set("locale", newLocale);
      window.history.pushState({}, "", url);
    }
  };

  // Çeviri işlevi
  const translate = (namespace: string, key: string) => {
    try {
      // @ts-ignore
      return translations[locale][namespace][key] || key;
    } catch (error) {
      console.warn(`Translation missing: ${namespace}.${key} for locale: ${locale}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale: changeLocale,
        t: translate
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}