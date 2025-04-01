'use client';

import { useState, useEffect } from 'react';
import { useSearch } from '@/hooks/useSearch';
import Icon from '../../assets/icons/Icon';
import { useLanguage } from '@/hooks/useLanguage';

const TravelTabs = () => {
  const { searchParams, updateSearchParams } = useSearch();
  const { locale, t } = useLanguage(); // Locale değerini de alıyoruz

  const [activeTab, setActiveTab] = useState<'package' | 'hotel' | 'flight'>(
    (searchParams as { travelType?: 'package' | 'hotel' | 'flight' })
      .travelType || 'package',
  );

  // Dil değişimini takip etmek için useEffect ekleyelim
  useEffect(() => {
    // Bu etki, locale değiştiğinde yeniden render tetikler
    console.log(`Language changed to: ${locale}`);
  }, [locale]);

  const handleTabChange = (tab: 'package' | 'hotel' | 'flight') => {
    setActiveTab(tab);
    updateSearchParams({ travelType: tab });
  };

  // Çeviri değerlerini önceden hesaplayalım (debugging için)
  const packageText = t('TravelTabs', 'package');
  const hotelText = t('TravelTabs', 'hotel');
  const flightText = t('TravelTabs', 'flight');

  console.log('Translations:', { packageText, hotelText, flightText });

  return (
    <div className="flex justify-center mb-4">
      <div
        className="flex bg-white/30 backdrop-blur-sm overflow-hidden"
        style={{
          width: '365.41px',
          height: '40px',
          borderRadius: '8px',
          gap: '0',
        }}
      >
        <button
          onClick={() => handleTabChange('package')}
          className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
            activeTab === 'package'
              ? 'bg-white text-gray-800'
              : 'bg-transparent text-white'
          }`}
          style={{
            width: '130px',
            height: '40px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <div className="flex items-center cursor-pointer">
            <div className="mr-2">
              <Icon name="package" size={16} />
            </div>
            <span className="font-semibold text-sm text-[#142347]">
              {packageText}
            </span>
          </div>
        </button>

        <button
          onClick={() => handleTabChange('hotel')}
          className={`flex items-center justify-center transition-all duration-400 ease-in-out ${
            activeTab === 'hotel'
              ? 'bg-white text-gray-800'
              : 'bg-transparent text-white'
          }`}
          style={{
            width: '107px',
            height: '40px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <div className="flex items-center cursor-pointer">
            <div className="mr-2">
              <Icon name="hotel" size={16} />
            </div>
            <span className="font-semibold text-sm text-[#142347]">
              {hotelText}
            </span>
          </div>
        </button>

        <button
          onClick={() => handleTabChange('flight')}
          className={`flex items-center justify-center transition-all duration-300 ease-in-out ${
            activeTab === 'flight'
              ? 'bg-white text-gray-800'
              : 'bg-transparent text-white'
          }`}
          style={{
            width: '128.41px',
            height: '40px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <div className="flex items-center cursor-pointer">
            <div className="mr-2">
              <Icon name="flight" size={16} />
            </div>
            <span className="font-semibold text-sm text-[#142347]">
              {flightText}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TravelTabs;
