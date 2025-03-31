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
        {/* Animasyonlu Coming Soon ikonu */}
        <div
          className={`relative mb-8 transition-all duration-700 transform ${
            isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div className="relative w-40 h-40">
            {/* Dış halka - sürekli dönen animasyon */}
            <div className="absolute inset-0 animate-spin-slow">
              <svg 
                className="w-full h-full text-orange-500" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeDasharray="10 5" 
                />
              </svg>
            </div>
            
            {/* İç kısım - saat */}
            <div className="absolute inset-4">
              <svg 
                className="w-full h-full text-orange-600"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Saat çerçevesi */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="#FFF1E5" 
                />
                
                {/* Saat merkezindeki nokta */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="3" 
                  fill="currentColor" 
                />
                
                {/* Saat akrebini temsil eden ok */}
                <line 
                  className="origin-center animate-clock-hand-slow" 
                  x1="50" 
                  y1="50" 
                  x2="50" 
                  y2="25" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
                
                {/* Dakika akrebi */}
                <line 
                  className="origin-center animate-clock-hand-fast" 
                  x1="50" 
                  y1="50" 
                  x2="70" 
                  y2="50" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
                
                {/* Saat işaretleri */}
                {[...Array(12)].map((_, i) => (
                  <line 
                    key={i}
                    x1="50"
                    y1="15"
                    x2="50"
                    y2="20"
                    stroke="currentColor" 
                    strokeWidth={i % 3 === 0 ? "2" : "1"} 
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}
              </svg>
            </div>
            
            {/* Üst üçgen - pulsing */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 animate-pulse">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-orange-500"
              >
                <polygon points="12,0 24,24 0,24" />
              </svg>
            </div>
          </div>
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