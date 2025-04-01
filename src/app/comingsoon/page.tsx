'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import Icon from '@/assets/icons/Icon';

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
              <Icon name="cirleclock" />
            </div>

            {/* İç kısım - saat */}
            <div className="inner-clock">
              <Icon name="comingsoon" />
            </div>

            {/* Üst üçgen - pulsing */}
            <div className="triangle-top">
              <Icon name="triangletop" />
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
