"use client";

import { useLanguage } from "../LanguageContext";

export default function TestPage() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 16 }}>
        {t("TestPage", "title")}
      </h1>
      
      <p style={{ fontSize: 16, marginBottom: 24 }}>
        {t("TestPage", "welcome")}
      </p>
      
      <div style={{ 
        background: "#f0f0f0", 
        padding: 16, 
        borderRadius: 8, 
        marginBottom: 24 
      }}>
        <p>
          <strong>Mevcut Dil:</strong> {locale === "en" ? "İngilizce" : "Türkçe"}
        </p>
      </div>
      
      <div style={{ display: "flex", gap: 12 }}>
        <button
          onClick={() => setLocale("tr")}
          style={{
            padding: "10px 20px",
            backgroundColor: locale === "tr" ? "#4a90e2" : "#f0f0f0",
            color: locale === "tr" ? "white" : "black",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: locale === "tr" ? "bold" : "normal",
            transition: "all 0.2s ease",
          }}
        >
          Türkçe
        </button>
        
        <button
          onClick={() => setLocale("en")}
          style={{
            padding: "10px 20px",
            backgroundColor: locale === "en" ? "#4a90e2" : "#f0f0f0",
            color: locale === "en" ? "white" : "black",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: locale === "en" ? "bold" : "normal",
            transition: "all 0.2s ease",
          }}
        >
          English
        </button>
      </div>
      
      <div style={{ marginTop: 32, fontSize: 14, color: "#666", lineHeight: 1.5 }}>
        <p>
          Bu dil değiştirme işlevi, Middleware yerine Context API kullanılarak 
          uygulanmıştır. Seçilen dil tarayıcının localStorage'ında saklanır ve 
          sayfa yenilense bile korunur.
        </p>
      </div>
    </div>
  );
}