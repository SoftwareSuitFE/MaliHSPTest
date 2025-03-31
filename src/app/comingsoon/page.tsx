"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

const ComingSoon = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  // Basit animasyon için yüklenme durumunu takip ediyoruz
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full flex flex-col items-center justify-center text-center">
        {/* Basit animasyonlu ikon */}
        <div
          className={`relative mb-6 transition-all duration-700 transform ${
            isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <svg
            className="w-32 h-32 text-orange-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Örneğin basit bir çarpı (+) işareti */}
            <path
              d="M12 2L12 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t("ComingSoon", "title")}
        </h1>

        {/* Açıklama */}
        <p className="text-gray-600 mb-8">{t("ComingSoon", "message")}</p>

        {/* Ana Sayfaya Dön Butonu */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300"
        >
          {t("ComingSoon", "button")}
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;