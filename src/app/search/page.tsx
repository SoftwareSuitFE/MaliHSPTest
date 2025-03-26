"use client";

import Header from "@/components/layout/header";
import Filters from "@/components/search/filters";
import HotelList from "@/components/search/hotelList";

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Üst kısım */}
      <Header />

      {/* İçerik Alanı */}
      <section className="container mx-auto mt-8 flex flex-col md:flex-row gap-4">
        {/* Soldaki Filtreler */}
        <div className="w-full md:w-1/4">
          <Filters />
        </div>

        {/* Sağdaki Otel Listesi */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-4">Arama Sonuçları</h1>
          <HotelList />
        </div>
      </section>
    </main>
  );
}
