'use client';

import React, { JSX } from 'react';
import Header from '@/components/layout/header';
import Filters from '@/components/search/filters';
import HotelList from '@/components/search/hotelList';
// import { useLanguage } from '@/hooks/useLanguage';
import '@/styles/layouts/search.css';

export default function SearchPage(): JSX.Element {
  // const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Header ile tam olarak aynı genişlik (1120px) */}
      <section className="search-container">
        <div className="search-content">
          <div className="search-grid">
            <div className="p-0">
              <Filters />
            </div>
            <div className="p-0">
              <HotelList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}