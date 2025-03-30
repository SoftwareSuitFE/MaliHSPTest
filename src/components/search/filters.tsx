

// "use client";

// import React, { useState } from "react";
// import dayjs from "dayjs";
// import { useSearch } from "@/hooks/useSearch";
// import { StarFilled, CheckOutlined } from "@ant-design/icons";
// import { Input, DatePicker, Select, Button } from "antd";
// import Icon from "../../../public/icons/Icon";
// import { useLanguage } from "@/hooks/useLanguage";

// // Mevcut concept listesi (örnek)
// const baseConcepts = [
//   "Beach Hotel",
//   "Adult Hotel",
//   "Boutique Hotel",
//   "Family Hotel",
//   "Pet Friendly",
//   "Spa",
//   "Golf",
//   "Mountain Resort",
// ];

// const Filters: React.FC = () => {
//   const { filters, updateFilters, searchParams } = useSearch();
//   const { t } = useLanguage();
  
//   // TravelType değerini alıyoruz
//   const travelType = searchParams.travelType || "package";

//   // State'ler
//   const [from, setFrom] = useState<string>(filters.from || "");
//   const [destination, setDestination] = useState<string>(
//     filters.destination || ""
//   );
//   const [people, setPeople] = useState<number>(
//     (filters.participants?.adults || 2) + (filters.participants?.children || 0)
//   );
//   const [date, setDate] = useState<dayjs.Dayjs | null>(
//     filters.date ? dayjs(filters.date) : null
//   );
//   const [nights, setNights] = useState<number>(filters.nights || 5);
//   const [stars, setStars] = useState<number[]>(filters.stars || []);
//   const [concepts, setConcepts] = useState<string[]>(
//     filters.hotelConcepts || []
//   );

//   const [showMore, setShowMore] = useState<boolean>(false);

//   // Filtreleri sıfırla
//   const resetFilters = () => {
//     setFrom("");
//     setDestination("");
//     setPeople(2);
//     setDate(null);
//     setNights(5);
//     setStars([]);
//     setConcepts([]);
//     setShowMore(false);

//     updateFilters({
//       from: "",
//       destination: "",
//       participants: { adults: 2, children: 0 },
//       date: "",
//       nights: 5,
//       hotelConcepts: [],
//       stars: [],
//     });
//   };

//   // Anlık güncellemeler
//   const handleFromChange = (val: string) => {
//     setFrom(val);
//     updateFilters({ from: val });
//   };
//   const handleDestinationChange = (val: string) => {
//     setDestination(val);
//     updateFilters({ destination: val });
//   };
//   const handlePeopleChange = (val: number) => {
//     setPeople(val);
//     updateFilters({ participants: { adults: val, children: 0 } });
//   };
//   const handleDateChange = (val: dayjs.Dayjs | null) => {
//     setDate(val);
//     updateFilters({ date: val ? val.format("YYYY-MM-DD") : "" });
//   };
//   const handleNightsChange = (val: number) => {
//     setNights(val);
//     updateFilters({ nights: val });
//   };

//   // Star seçimi
//   const handleStarClick = (starValue: number) => {
//     let newStars: number[];
//     if (stars.includes(starValue)) {
//       newStars = stars.filter((s) => s !== starValue);
//     } else {
//       newStars = [...stars, starValue];
//     }
//     setStars(newStars);
//     updateFilters({ stars: newStars });
//   };

//   // Hotel Concept seçimi
//   const handleConceptChange = (concept: string) => {
//     let newConcepts: string[];
//     if (concepts.includes(concept)) {
//       newConcepts = concepts.filter((c) => c !== concept);
//     } else {
//       newConcepts = [...concepts, concept];
//     }
//     setConcepts(newConcepts);
//     updateFilters({ hotelConcepts: newConcepts });
//   };

//   // Gösterilecek concept listesi
//   const visibleConcepts = showMore ? baseConcepts : baseConcepts.slice(0, 4);

//   // Otel konseptini çevirme yardımcı fonksiyonu
//   const translateConcept = (concept: string): string => {
//     // Boşlukları kaldırıp, camelCase'e dönüştürme
//     const key = concept.replace(/\s+/g, '').replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
//     return t("HotelConcepts", key);
//   };

//   return (
//     <div
//       className="bg-white p-6 rounded-lg shadow-sm sticky top-4"
//       style={{ fontFamily: "Inter" }}
//     >
//       {/* Filter Başlık */}
//       <h3 className="text-sm font-normal text-[#142347] mb-6">{t("Filters", "title")}</h3>

//       {/* From - Sadece package ve flight için göster */}
//       {(travelType === "package" || travelType === "flight") && (
//         <div className="mb-4">
//           <Input
//             placeholder={t("Filters", "from")}
//             prefix={<Icon name="location" size={14} color="#142347" />}
//             value={from}
//             onChange={(e) => handleFromChange(e.target.value)}
//             className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-[#142347]"
//           />
//         </div>
//       )}

//       {/* Destination - Tüm tiplerde göster */}
//       <div className="mb-4">
//         <Input
//           placeholder={t("Filters", "destination")}
//           prefix={<Icon name="hotel" size={16} color="#142347" />}
//           value={destination}
//           onChange={(e) => handleDestinationChange(e.target.value)}
//           className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-[#142347]"
//         />
//       </div>

//       {/* Participants - Tüm tiplerde göster */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-[#142347] mb-1">
//           {t("Filters", "participants")}
//         </label>
//         <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
//           <Icon name="users" size={16} color="#142347" className="mr-2" />
//           <Select
//             value={people}
//             onChange={handlePeopleChange}
//             className="flex-1 text-[#142347] font-medium"
//             dropdownStyle={{ fontFamily: "Inter" }}
//           >
//             {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
//               <Select.Option key={num} value={num}>
//                 {t("Filters", "people", { count: num })}
//               </Select.Option>
//             ))}
//           </Select>
//         </div>
//       </div>

//       {/* Date - Tüm tiplerde göster */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-[#142347] mb-1">
//           {t("Filters", "date")}
//         </label>
//         <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
//           <Icon name="calendar" size={16} color="#142347" className="mr-2" />
//           <DatePicker
//             format="DD MMM YYYY"
//             placeholder={t("Filters", "date")}
//             value={date}
//             onChange={handleDateChange}
//             allowClear={false}
//             className="text-[#142347] placeholder:text-[#142347] font-medium flex-1"
//             suffixIcon={null}
//           />
//         </div>
//       </div>

//       {/* Nights - Sadece package ve hotel için göster */}
//       {(travelType === "package" || travelType === "hotel") && (
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-[#142347] mb-1">
//             {t("Filters", "nights")}
//           </label>
//           <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
//             <Icon name="nights" size={16} color="#142347" className="mr-2" />
//             <Select
//               value={nights}
//               onChange={handleNightsChange}
//               className="flex-1 text-[#142347] font-medium"
//               dropdownStyle={{ fontFamily: "Inter" }}
//             >
//               {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
//                 <Select.Option key={num} value={num}>
//                   {t("HotelCard", "nights", { count: num })}
//                 </Select.Option>
//               ))}
//             </Select>
//           </div>
//         </div>
//       )}

//       {/* Hotel Concept - Sadece package ve hotel için göster */}
//       {(travelType === "package" || travelType === "hotel") && (
//         <div className="mb-4">
//           <div className="flex justify-between items-center mb-1">
//             <label className="text-sm font-medium text-[#142347]">
//               {t("Filters", "hotelConcept")}
//             </label>
//             <Button
//               type="link"
//               size="small"
//               onClick={resetFilters}
//               className="p-0"
//               style={{ color: "#ED8936" }}
//             >
//               {t("Filters", "reset")}
//             </Button>
//           </div>
//           <div className="space-y-2">
//             {visibleConcepts.map((concept) => {
//               const isChecked = concepts.includes(concept);
//               return (
//                 <label
//                   key={concept}
//                   className="flex items-center cursor-pointer select-none"
//                 >
//                   <span
//                     className={`
//                       relative w-5 h-5 mr-2 rounded-sm border-2 flex items-center justify-center
//                       ${isChecked ? "border-[#ED8936]" : "border-[#E2E2E2]"}
//                     `}
//                   >
//                     {isChecked && (
//                       <CheckOutlined style={{ fontSize: 12, color: "#ED8936" }} />
//                     )}
//                   </span>
//                   <input
//                     type="checkbox"
//                     checked={isChecked}
//                     onChange={() => handleConceptChange(concept)}
//                     className="hidden"
//                   />
//                   <span className="text-sm text-[#142347]">{translateConcept(concept)}</span>
//                 </label>
//               );
//             })}
//             {baseConcepts.length > 4 && (
//               <Button
//                 type="link"
//                 size="small"
//                 onClick={() => setShowMore(!showMore)}
//                 className="p-0 flex items-center gap-1"
//                 style={{ color: "#93A2B7" }}
//               >
//                 {showMore ? (
//                   <>
//                     {t("Filters", "less")}{" "}
//                     <div className="transform rotate-180">
//                       <Icon name="arrow-down" size={16} color="#93A2B7" />
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     {t("Filters", "more")} <Icon name="arrow-down" size={16} color="#93A2B7" />
//                   </>
//                 )}
//               </Button>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Star - Sadece package ve hotel için göster */}
//       {(travelType === "package" || travelType === "hotel") && (
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-[#142347] mb-1">
//             {t("Filters", "star")}
//           </label>
//           <div className="flex flex-col gap-2">
//             {[1, 2, 3, 4, 5].map((starValue) => {
//               const isActive = stars.includes(starValue);
//               return (
//                 <div
//                   key={starValue}
//                   className="flex items-center gap-2 cursor-pointer select-none"
//                   onClick={() => handleStarClick(starValue)}
//                 >
//                   <div
//                     className={`
//                       relative w-5 h-5 rounded-full border-2 flex items-center justify-center
//                       ${isActive ? "border-[#ED8936]" : "border-[#E2E2E2]"}
//                     `}
//                   >
//                     {isActive && (
//                       <div className="w-2 h-2 rounded-full bg-[#ED8936]" />
//                     )}
//                   </div>
//                   <Icon name="Star" />
//                   <span
//                     className="text-sm font-medium"
//                     style={{ color: "#142347" }}
//                   >
//                     {starValue}+
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Reset butonu - Flight için resetFilters'ı görüntülemem gerektiğinden eklendi */}
//       {travelType === "flight" && (
//         <div className="mb-4 flex justify-end">
//           <Button
//             type="link"
//             size="small"
//             onClick={resetFilters}
//             className="p-0"
//             style={{ color: "#ED8936" }}
//           >
//             {t("Filters", "reset")}
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filters;



// src/components/search/filters.tsx

"use client";

import React, { useState, useEffect } from "react";  // useEffect ekledim
import dayjs from "dayjs";
import { useSearch } from "@/hooks/useSearch";
import { StarFilled, CheckOutlined } from "@ant-design/icons";
import { Input, DatePicker, Select, Button } from "antd";
import Icon from "../../../public/icons/Icon";
import { useLanguage } from "@/hooks/useLanguage";

// Mevcut concept listesi (örnek)
const baseConcepts = [
  "Beach Hotel",
  "Adult Hotel",
  "Boutique Hotel",
  "Family Hotel",
  "Pet Friendly",
  "Spa",
  "Golf",
  "Mountain Resort",
];

const Filters: React.FC = () => {
  const { filters, updateFilters, searchParams } = useSearch();
  const { t } = useLanguage();
  
  // TravelType değerini alıyoruz
  const travelType = searchParams.travelType || "package";

  // State'ler
  const [from, setFrom] = useState<string>(filters.from || searchParams.from || "");
  const [destination, setDestination] = useState<string>(
    filters.destination || searchParams.destination || ""
  );
  const [people, setPeople] = useState<number>(
    (filters.participants?.adults || searchParams.participants?.adults || 2) + 
    (filters.participants?.children || searchParams.participants?.children || 0)
  );
  const [date, setDate] = useState<dayjs.Dayjs | null>(
    filters.date ? dayjs(filters.date) : 
    searchParams.date ? dayjs(searchParams.date) : null
  );
  const [nights, setNights] = useState<number>(filters.nights || searchParams.nights || 5);
  const [stars, setStars] = useState<number[]>(filters.stars || []);
  const [concepts, setConcepts] = useState<string[]>(
    filters.hotelConcepts || []
  );

  const [showMore, setShowMore] = useState<boolean>(false);

  // searchParams değiştiğinde state'leri güncelle
  useEffect(() => {
    setFrom(searchParams.from || "");
    setDestination(searchParams.destination || "");
    setPeople(
      (searchParams.participants?.adults || 2) + 
      (searchParams.participants?.children || 0)
    );
    setDate(searchParams.date ? dayjs(searchParams.date) : null);
    setNights(searchParams.nights || 5);
    
    // filters değişiklikleri de filters state'ine yansıtılsın
    updateFilters({
      from: searchParams.from || filters.from || "",
      destination: searchParams.destination || filters.destination || "",
      participants: {
        adults: searchParams.participants?.adults || filters.participants?.adults || 2,
        children: searchParams.participants?.children || filters.participants?.children || 0
      },
      date: searchParams.date || filters.date || "",
      nights: searchParams.nights || filters.nights || 5
    });
  }, [searchParams, updateFilters]);

  // filters değiştiğinde de state'leri güncelle
  useEffect(() => {
    setFrom(filters.from || "");
    setDestination(filters.destination || "");
    setPeople(
      (filters.participants?.adults || 2) + 
      (filters.participants?.children || 0)
    );
    setDate(filters.date ? dayjs(filters.date) : null);
    setNights(filters.nights || 5);
    setStars(filters.stars || []);
    setConcepts(filters.hotelConcepts || []);
  }, [filters]);

  // Filtreleri sıfırla
  const resetFilters = () => {
    setFrom("");
    setDestination("");
    setPeople(2);
    setDate(null);
    setNights(5);
    setStars([]);
    setConcepts([]);
    setShowMore(false);

    updateFilters({
      from: "",
      destination: "",
      participants: { adults: 2, children: 0 },
      date: "",
      nights: 5,
      hotelConcepts: [],
      stars: [],
    });
  };

  // Anlık güncellemeler
  const handleFromChange = (val: string) => {
    setFrom(val);
    updateFilters({ from: val });
  };
  const handleDestinationChange = (val: string) => {
    setDestination(val);
    updateFilters({ destination: val });
  };
  const handlePeopleChange = (val: number) => {
    setPeople(val);
    updateFilters({ participants: { adults: val, children: 0 } });
  };
  const handleDateChange = (val: dayjs.Dayjs | null) => {
    setDate(val);
    updateFilters({ date: val ? val.format("YYYY-MM-DD") : "" });
  };
  const handleNightsChange = (val: number) => {
    setNights(val);
    updateFilters({ nights: val });
  };

  // Star seçimi
  const handleStarClick = (starValue: number) => {
    let newStars: number[];
    if (stars.includes(starValue)) {
      newStars = stars.filter((s) => s !== starValue);
    } else {
      newStars = [...stars, starValue];
    }
    setStars(newStars);
    updateFilters({ stars: newStars });
  };

  // Hotel Concept seçimi
  const handleConceptChange = (concept: string) => {
    let newConcepts: string[];
    if (concepts.includes(concept)) {
      newConcepts = concepts.filter((c) => c !== concept);
    } else {
      newConcepts = [...concepts, concept];
    }
    setConcepts(newConcepts);
    updateFilters({ hotelConcepts: newConcepts });
  };

  // Gösterilecek concept listesi
  const visibleConcepts = showMore ? baseConcepts : baseConcepts.slice(0, 4);

  // Otel konseptini çevirme yardımcı fonksiyonu
  const translateConcept = (concept: string): string => {
    // Boşlukları kaldırıp, camelCase'e dönüştürme
    const key = concept.replace(/\s+/g, '').replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
    return t("HotelConcepts", key);
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm sticky top-4"
      style={{ fontFamily: "Inter" }}
    >
      {/* Filter Başlık */}
      <h3 className="text-sm font-normal text-[#142347] mb-6">{t("Filters", "title")}</h3>

      {/* From - Sadece package ve flight için göster */}
      {(travelType === "package" || travelType === "flight") && (
        <div className="mb-4">
          <Input
            placeholder={t("Filters", "from")}
            prefix={<Icon name="location" size={14} color="#142347" />}
            value={from}
            onChange={(e) => handleFromChange(e.target.value)}
            className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-[#142347]"
          />
        </div>
      )}

      {/* Destination - Tüm tiplerde göster */}
      <div className="mb-4">
        <Input
          placeholder={t("Filters", "destination")}
          prefix={<Icon name="hotel" size={16} color="#142347" />}
          value={destination}
          onChange={(e) => handleDestinationChange(e.target.value)}
          className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-[#142347]"
        />
      </div>

      {/* Participants - Tüm tiplerde göster */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          {t("Filters", "participants")}
        </label>
        <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
          <Icon name="users" size={16} color="#142347" className="mr-2" />
          <Select
            value={people}
            onChange={handlePeopleChange}
            className="flex-1 text-[#142347] font-medium"
            dropdownStyle={{ fontFamily: "Inter" }}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <Select.Option key={num} value={num}>
                {t("Filters", "people", { count: num })}
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>

      {/* Date - Tüm tiplerde göster */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          {t("Filters", "date")}
        </label>
        <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
          <Icon name="calendar" size={16} color="#142347" className="mr-2" />
          <DatePicker
            format="DD MMM YYYY"
            placeholder={t("Filters", "date")}
            value={date}
            onChange={handleDateChange}
            allowClear={false}
            className="text-[#142347] placeholder:text-[#142347] font-medium flex-1"
            suffixIcon={null}
          />
        </div>
      </div>

      {/* Nights - Sadece package ve hotel için göster */}
      {(travelType === "package" || travelType === "hotel") && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#142347] mb-1">
            {t("Filters", "nights")}
          </label>
          <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
            <Icon name="nights" size={16} color="#142347" className="mr-2" />
            <Select
              value={nights}
              onChange={handleNightsChange}
              className="flex-1 text-[#142347] font-medium"
              dropdownStyle={{ fontFamily: "Inter" }}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <Select.Option key={num} value={num}>
                  {t("HotelCard", "nights", { count: num })}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      )}

      {/* Hotel Concept - Sadece package ve hotel için göster */}
      {(travelType === "package" || travelType === "hotel") && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium text-[#142347]">
              {t("Filters", "hotelConcept")}
            </label>
            <Button
              type="link"
              size="small"
              onClick={resetFilters}
              className="p-0"
              style={{ color: "#ED8936" }}
            >
              {t("Filters", "reset")}
            </Button>
          </div>
          <div className="space-y-2">
            {visibleConcepts.map((concept) => {
              const isChecked = concepts.includes(concept);
              return (
                <label
                  key={concept}
                  className="flex items-center cursor-pointer select-none"
                >
                  <span
                    className={`
                      relative w-5 h-5 mr-2 rounded-sm border-2 flex items-center justify-center
                      ${isChecked ? "border-[#ED8936]" : "border-[#E2E2E2]"}
                    `}
                  >
                    {isChecked && (
                      <CheckOutlined style={{ fontSize: 12, color: "#ED8936" }} />
                    )}
                  </span>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleConceptChange(concept)}
                    className="hidden"
                  />
                  <span className="text-sm text-[#142347]">{translateConcept(concept)}</span>
                </label>
              );
            })}
            {baseConcepts.length > 4 && (
              <Button
                type="link"
                size="small"
                onClick={() => setShowMore(!showMore)}
                className="p-0 flex items-center gap-1"
                style={{ color: "#93A2B7" }}
              >
                {showMore ? (
                  <>
                    {t("Filters", "less")}{" "}
                    <div className="transform rotate-180">
                      <Icon name="arrow-down" size={16} color="#93A2B7" />
                    </div>
                  </>
                ) : (
                  <>
                    {t("Filters", "more")} <Icon name="arrow-down" size={16} color="#93A2B7" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Star - Sadece package ve hotel için göster */}
      {(travelType === "package" || travelType === "hotel") && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#142347] mb-1">
            {t("Filters", "star")}
          </label>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5].map((starValue) => {
              const isActive = stars.includes(starValue);
              return (
                <div
                  key={starValue}
                  className="flex items-center gap-2 cursor-pointer select-none"
                  onClick={() => handleStarClick(starValue)}
                >
                  <div
                    className={`
                      relative w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${isActive ? "border-[#ED8936]" : "border-[#E2E2E2]"}
                    `}
                  >
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-[#ED8936]" />
                    )}
                  </div>
                  <Icon name="Star" />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#142347" }}
                  >
                    {starValue}+
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reset butonu - Flight için resetFilters'ı görüntülemem gerektiğinden eklendi */}
      {travelType === "flight" && (
        <div className="mb-4 flex justify-end">
          <Button
            type="link"
            size="small"
            onClick={resetFilters}
            className="p-0"
            style={{ color: "#ED8936" }}
          >
            {t("Filters", "reset")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Filters;