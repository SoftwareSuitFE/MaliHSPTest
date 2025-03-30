// "use client";

// import { useState, useEffect } from "react";
// import { Empty, Spin } from "antd";
// import { useSearch } from "../../../context/searchContext";
// import { hotels } from "../../../data/mockData";
// import HotelCard from "./hotelCard";

// const HotelList = () => {
//   const { filters } = useSearch();
//   const [filteredHotels, setFilteredHotels] = useState(hotels);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => {
//       let filtered = [...hotels];

//       if (filters.destination) {
//         filtered = filtered.filter((hotel) =>
//           hotel.location
//             .toLowerCase()
//             .includes(filters.destination.toLowerCase())
//         );
//       }
//       if (filters.hotelConcepts && filters.hotelConcepts.length > 0) {
//         filtered = filtered.filter((hotel) =>
//           filters.hotelConcepts.some((concept) =>
//             hotel.categories.includes(concept)
//           )
//         );
//       }
//       if (filters.stars && filters.stars.length > 0) {
//         filtered = filtered.filter((hotel) =>
//           filters.stars.includes(hotel.stars)
//         );
//       }

//       setFilteredHotels(filtered);
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [filters]);

//   if (loading) {
//     return (
//       <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
//         <Spin size="large" />
//       </div>
//     );
//   }

//   if (filteredHotels.length === 0) {
//     return (
//       <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
//         <Empty description="No hotels match your search criteria" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col space-y-8">
//       {filteredHotels.map((hotel) => (
//         <HotelCard key={hotel.id} hotel={hotel} />
//       ))}
//     </div>
//   );
// };

// export default HotelList;



// "use client";

// import { useState, useEffect } from "react";
// import { Empty, Spin } from "antd";
// import { useSearch } from "@/hooks/useSearch";
// import { hotels } from "../../../data/mockData";
// import HotelCard from "./hotelCard";
// import { useLanguage } from "@/hooks/useLanguage";

// const HotelList = () => {
//   const { filters } = useSearch();
//   const { t } = useLanguage();

//   const [filteredHotels, setFilteredHotels] = useState(hotels);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => {
//       let filtered = [...hotels];

//       if (filters.destination) {
//         filtered = filtered.filter((hotel) =>
//           hotel.location
//             .toLowerCase()
//             .includes(filters.destination.toLowerCase())
//         );
//       }
//       if (filters.hotelConcepts && filters.hotelConcepts.length > 0) {
//         filtered = filtered.filter((hotel) =>
//           filters.hotelConcepts.some((concept) =>
//             hotel.categories.includes(concept)
//           )
//         );
//       }
//       if (filters.stars && filters.stars.length > 0) {
//         filtered = filtered.filter((hotel) =>
//           filters.stars.includes(hotel.stars)
//         );
//       }

//       setFilteredHotels(filtered);
//       setLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [filters]);

//   if (loading) {
//     return (
//       <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
//         <Spin size="large" />
//         <p className="mt-4 text-gray-500">{t("SearchPage", "loading")}</p>
//       </div>
//     );
//   }

//   if (filteredHotels.length === 0) {
//     return (
//       <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
//         <Empty description={t("SearchPage", "noResults")} />
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col space-y-8">
//       {filteredHotels.map((hotel) => (
//         <HotelCard key={hotel.id} hotel={hotel} />
//       ))}
//     </div>
//   );
// };

// export default HotelList;

// src/components/search/hotelList.tsx

// src/components/search/hotelList.tsx

"use client";

import { useState, useEffect } from "react";
import { Empty, Spin } from "antd";
import { useSearch } from "@/hooks/useSearch";
import { hotels, flights } from "../../../data/mockData";
import HotelCard from "./hotelCard";
import FlightCard from "./FlightCard"; // Yeni FlightCard bileşenini import et
import { useLanguage } from "@/hooks/useLanguage";

const HotelList = () => {
  const { filters, searchParams } = useSearch();
  const { t } = useLanguage();
  
  // travelType'ı searchParams'dan al
  const travelType = searchParams.travelType || "package";
  
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [loading, setLoading] = useState(true);

  // Hotel filtreleme
  useEffect(() => {
    if (travelType !== "flight") {
      setLoading(true);
      const timer = setTimeout(() => {
        let filtered = [...hotels];

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
    }
  }, [filters, travelType]);

  // Flight filtreleme
  useEffect(() => {
    if (travelType === "flight") {
      setLoading(true);
      const timer = setTimeout(() => {
        let filtered = [...flights];

        if (filters.destination) {
          filtered = filtered.filter((flight) =>
            flight.location
              .toLowerCase()
              .includes(filters.destination.toLowerCase())
          );
        }
        if (filters.stars && filters.stars.length > 0) {
          filtered = filtered.filter((flight) =>
            filters.stars.includes(flight.stars)
          );
        }
        // Burada uçuş kategorilerine göre de filtreleme ekleyebilirsiniz

        setFilteredFlights(filtered);
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [filters, travelType]);

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
        <Spin size="large" />
        <p className="mt-4 text-gray-500">{t("SearchPage", "loading")}</p>
      </div>
    );
  }

  // Uçuş veya otel sonuçlarını göster
  const showFlights = travelType === "flight";
  const items = showFlights ? filteredFlights : filteredHotels;

  if (items.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
        <Empty description={t("SearchPage", "noResults")} />
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-8">
      {showFlights
        ? filteredFlights.map((flight) => <FlightCard key={flight.id} flight={flight} />)
        : filteredHotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
      }
    </div>
  );
};

export default HotelList;