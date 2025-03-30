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
    },
    Header: {
      b2bPlatform: "B2B platform",
      clientCare: "Client Care",
      contact: "Contact",
      favorite: "Favorite",
      searchPlaceholder: "Destination or Hotel",
      popularDestinations: "Popular Destinations",
      topHotels: "Top Hotels",
      lastMinute: "Last Minute",
      recommended: "Recommended",
      charterAntalya: "Charter Antalya",
      cityBreakIstanbul: "City Break Istanbul"
    }
  },
  tr: {
    TestPage: {
      title: "Test Sayfası",
      welcome: "Test sayfasına hoş geldiniz!"
    },
    Header: {
      b2bPlatform: "B2B platformu",
      clientCare: "Müşteri Hizmetleri",
      contact: "İletişim",
      favorite: "Favoriler",
      searchPlaceholder: "Destinasyon veya Otel",
      popularDestinations: "Popüler Destinasyonlar",
      topHotels: "En İyi Oteller",
      lastMinute: "Son Dakika",
      recommended: "Önerilen",
      charterAntalya: "Antalya Charter",
      cityBreakIstanbul: "İstanbul Şehir Turu"
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