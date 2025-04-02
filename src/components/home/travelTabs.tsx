'use client';

import { useState, useEffect } from 'react';
import { useSearch } from '@/hooks/useSearch';
import Icon from '../../assets/icons/Icon';
import { useLanguage } from '@/hooks/useLanguage';

const TravelTabs = () => {
  const { searchParams, updateSearchParams } = useSearch();
  const { locale, t } = useLanguage();

  // isClient kontrolü ekleyin
  const [isClient, setIsClient] = useState(false);

  // Komponentin yüklendiğini işaretleyin
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Varsayılan tip belirleyin
  const defaultTravelType = 'package';

  // State'in başlangıç değerini güvenli bir şekilde ayarlayın
  const [activeTab, setActiveTab] = useState<'package' | 'hotel' | 'flight'>(defaultTravelType);

  // isClient true olduğunda, searchParams'tan activeTab'i güncelleyin
  useEffect(() => {
    if (isClient) {
      const type = (searchParams as { travelType?: 'package' | 'hotel' | 'flight' }).travelType || defaultTravelType;
      setActiveTab(type);
    }
  }, [isClient, searchParams]);

  // Dil değişimini takip etmek için useEffect ekleyelim
  useEffect(() => {
    if (isClient) {
      // Bu etki, locale değiştiğinde yeniden render tetikler
      console.log(`Language changed to: ${locale}`);
    }
  }, [locale, isClient]);

  const handleTabChange = (tab: 'package' | 'hotel' | 'flight') => {
    setActiveTab(tab);
    updateSearchParams({ travelType: tab });
  };

  // Çeviri değerlerini istemci tarafında hesaplayalım
  const packageText = isClient ? t('TravelTabs', 'package') : 'Package';
  const hotelText = isClient ? t('TravelTabs', 'hotel') : 'Hotel';
  const flightText = isClient ? t('TravelTabs', 'flight') : 'Flight';

  // Tab sınıfları için merkezi bir fonksiyon oluşturun
  const getTabClass = (tab: 'package' | 'hotel' | 'flight') => {
    const baseClass = "flex items-center justify-center transition-all duration-300 ease-in-out";
    const tabSpecificClass = `${tab}-tab-btn`;
    const activeClass = activeTab === tab ? 'bg-white text-gray-800' : 'bg-transparent text-white';
    
    return `${baseClass} ${tabSpecificClass} ${activeClass}`;
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex bg-white/30 backdrop-blur-sm overflow-hidden travel-tabs-wrapper">
        <button
          onClick={() => handleTabChange('package')}
          className={getTabClass('package')}
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
          className={getTabClass('hotel')}
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
          className={getTabClass('flight')}
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