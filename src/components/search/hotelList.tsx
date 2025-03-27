"use client";

import { useState, useEffect } from "react";
import { Empty, Spin } from "antd";
import { useSearch } from "../../../context/searchContext";
import { hotels } from "../../../data/mockData";
import HotelCard from "./hotelCard";

const HotelList = () => {
  const { filters } = useSearch();
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filtered = [...hotels];

      // Filtreler
      if (filters.destination) {
        filtered = filtered.filter((hotel) =>
          hotel.location
            .toLowerCase()
            .includes(filters.destination.toLowerCase())
        );
      }
      if (filters.hotelConcepts && filters.hotelConcepts.length > 0) {
        filtered = filtered.filter((hotel) =>
          filters.hotelConcepts.some((concept) =>
            hotel.categories.includes(concept)
          )
        );
      }
      if (filters.stars && filters.stars.length > 0) {
        filtered = filtered.filter((hotel) =>
          filters.stars.includes(hotel.stars)
        );
      }

      setFilteredHotels(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters]);

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
        <Spin size="large" />
      </div>
    );
  }

  if (filteredHotels.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
        <Empty description="No hotels match your search criteria" />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-8">
      {filteredHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
