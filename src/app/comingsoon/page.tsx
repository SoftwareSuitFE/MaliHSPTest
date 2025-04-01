'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import '@/styles/layouts/comingSoon.css';

const ComingSoon = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  // Basit animasyon için yüklenme durumunu takip ediyoruz
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        {/* Animasyonlu Coming Soon ikonu */}
        <div className={`icon-container ${isLoaded ? 'loaded' : 'loading'}`}>
          <div className="clock-container">
            {/* Dış halka - sürekli dönen animasyon */}
            <div className="outer-ring">
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
            <div className="inner-clock">
              <svg
                className="clock-face"
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
                <circle cx="50" cy="50" r="3" fill="currentColor" />

                {/* Saat akrebini temsil eden ok */}
                <line
                  className="clock-hand-hour"
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
                  className="clock-hand-minute"
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
                    strokeWidth={i % 3 === 0 ? '2' : '1'}
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}
              </svg>
            </div>

            {/* Üst üçgen - pulsing */}
            <div className="triangle-top">
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
        <h1 className="coming-soon-title">{t('ComingSoon', 'title')}</h1>

        {/* Açıklama */}
        <p className="coming-soon-description">{t('ComingSoon', 'message')}</p>

        {/* Ana Sayfaya Dön Butonu */}
        <Link href="/" className="home-button">
          {t('ComingSoon', 'button')}
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
