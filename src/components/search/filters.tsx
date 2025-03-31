// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import dayjs from "dayjs";
// import { useSearch } from "@/hooks/useSearch";
// import { CheckOutlined } from "@ant-design/icons";
// import { Button } from "antd";
// import Icon from "../../../public/icons/Icon";
// import { useLanguage } from "@/hooks/useLanguage";
// import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
// import PersonPicker from "@/components/PersonPicker/personpicker";
// import DestinationDropdown from "@/components/dropdown/DestinationDropdown";
// import NightPicker from "@/components/NightPicker/NightPicker";

// // Hotel concept listesi
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

// // Flight concept listesi - mockData.ts'den alınan verilerle
// // filters.tsx içinde sadeleştirilmiş flightConcepts listesi

// const flightConcepts = [
//   // Uçuş Sınıfları
//   "Economy Class",
//   "Business Class",
//   "First Class",
//   "Premium Economy",

//   // Uçuş Türleri
//   "Direct Flight",
//   "One Stop",
//   "Multiple Stops",
//   "Domestic",
// ];

// const Filters: React.FC = () => {
//   const { filters, updateFilters, searchParams } = useSearch();
//   const { t } = useLanguage();

//   // TravelType değerini alıyoruz
//   const travelType = searchParams.travelType || "package";

//   // State'ler
//   const [from, setFrom] = useState<string>(
//     filters.from || searchParams.from || ""
//   );
//   const [destination, setDestination] = useState<string>(
//     filters.destination || searchParams.destination || ""
//   );

//   // Kişi sayıları
//   const [adults, setAdults] = useState<number>(
//     filters.participants?.adults || searchParams.participants?.adults || 2
//   );
//   const [children, setChildren] = useState<number>(
//     filters.participants?.children || searchParams.participants?.children || 0
//   );
//   const [people, setPeople] = useState<number>(adults + children);

//   // Nights değişkeni
//   const [nights, setNights] = useState<number>(
//     filters.nights || searchParams.nights || 5
//   );

//   // Date state'leri
//   const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(() => {
//     if (filters.date) return dayjs(filters.date);
//     if (searchParams.date) return dayjs(searchParams.date);
//     return null;
//   });

//   // endDate başlangıç + seçili gece sayısı kadar
//   const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(() => {
//     if (startDate) return startDate.add(nights, "day");
//     return null;
//   });

//   const [stars, setStars] = useState<number[]>(filters.stars || []);
//   const [concepts, setConcepts] = useState<string[]>(
//     filters.hotelConcepts || []
//   );
//   const [flightConceptsSelected, setFlightConceptsSelected] = useState<
//     string[]
//   >(filters.flightConcepts || []);

//   // DateRangePicker için visible state ve ref
//   const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
//   const dateFieldRef = useRef<HTMLDivElement>(null);

//   // PersonPicker için visible state ve ref
//   const [showPersonPicker, setShowPersonPicker] = useState<boolean>(false);
//   const peopleFieldRef = useRef<HTMLDivElement>(null);

//   // NightPicker için visible state ve ref
//   const [showNightPicker, setShowNightPicker] = useState<boolean>(false);
//   const nightsFieldRef = useRef<HTMLDivElement>(null);

//   const [showMore, setShowMore] = useState<boolean>(false);
//   const [showMoreFlight, setShowMoreFlight] = useState<boolean>(false);

//   // searchParams değiştiğinde state'leri güncelle
//   useEffect(() => {
//     setFrom(searchParams.from || "");
//     setDestination(searchParams.destination || "");

//     // Kişi sayılarını güncelle
//     const newAdults = searchParams.participants?.adults || 2;
//     const newChildren = searchParams.participants?.children || 0;
//     setAdults(newAdults);
//     setChildren(newChildren);
//     setPeople(newAdults + newChildren);

//     // Önce nights güncellenir
//     const newNights = searchParams.nights || 5;
//     setNights(newNights);

//     // Sonra startDate ve buna bağlı olarak endDate
//     const newStartDate = searchParams.date ? dayjs(searchParams.date) : null;
//     setStartDate(newStartDate);

//     if (newStartDate) {
//       setEndDate(newStartDate.add(newNights, "day"));
//     } else {
//       setEndDate(null);
//     }

//     // filters değişiklikleri de filters state'ine yansıtılsın
//     updateFilters({
//       from: searchParams.from || filters.from || "",
//       destination: searchParams.destination || filters.destination || "",
//       participants: {
//         adults: newAdults,
//         children: newChildren,
//       },
//       date: searchParams.date || filters.date || "",
//       nights: newNights,
//     });
//   }, [searchParams, updateFilters]);

//   // filters değiştiğinde de state'leri güncelle
//   useEffect(() => {
//     setFrom(filters.from || "");
//     setDestination(filters.destination || "");

//     // Kişi sayılarını güncelle
//     const newAdults = filters.participants?.adults || 2;
//     const newChildren = filters.participants?.children || 0;
//     setAdults(newAdults);
//     setChildren(newChildren);
//     setPeople(newAdults + newChildren);

//     // Önce nights güncellenir
//     const newNights = filters.nights || 5;
//     setNights(newNights);

//     // Sonra startDate ve buna bağlı olarak endDate
//     const newStartDate = filters.date ? dayjs(filters.date) : null;
//     setStartDate(newStartDate);

//     if (newStartDate) {
//       setEndDate(newStartDate.add(newNights, "day"));
//     } else {
//       setEndDate(null);
//     }

//     setStars(filters.stars || []);
//     setConcepts(filters.hotelConcepts || []);
//     setFlightConceptsSelected(filters.flightConcepts || []);
//   }, [filters]);

//   // Filtreleri sıfırla
//   const resetFilters = () => {
//     setFrom("");
//     setDestination("");
//     setAdults(2);
//     setChildren(0);
//     setPeople(2);
//     setStartDate(null);
//     setEndDate(null);
//     setNights(5);
//     setStars([]);
//     setConcepts([]);
//     setFlightConceptsSelected([]);
//     setShowMore(false);
//     setShowMoreFlight(false);

//     updateFilters({
//       from: "",
//       destination: "",
//       participants: { adults: 2, children: 0 },
//       date: "",
//       nights: 5,
//       hotelConcepts: [],
//       flightConcepts: [],
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

//   // PersonPicker için onChange ve onClose fonksiyonları
//   const handlePersonChange = (newAdults: number, newChildren: number) => {
//     setAdults(newAdults);
//     setChildren(newChildren);
//     setPeople(newAdults + newChildren);

//     updateFilters({
//       participants: { adults: newAdults, children: newChildren },
//     });
//   };

//   const handlePersonPickerClose = () => {
//     setShowPersonPicker(false);
//   };

//   // DateRangePicker için onChange ve onClose fonksiyonları
//   const handleDateChange = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
//     setStartDate(start);
//     setEndDate(end);

//     // Gece sayısını hesapla
//     const nightCount = end.diff(start, "day");
//     setNights(nightCount);

//     // Filters'ı güncelle
//     updateFilters({
//       date: start.format("YYYY-MM-DD"),
//       nights: nightCount,
//     });
//   };

//   const handleDatePickerClose = () => {
//     setShowDatePicker(false);
//   };

//   // NightPicker için onChange ve onClose fonksiyonları
//   const handleNightChange = (val: number) => {
//     setNights(val);
//     // endDate'i de güncelle
//     if (startDate) {
//       setEndDate(startDate.add(val, "day"));
//     }
//     updateFilters({ nights: val });
//   };

//   const handleNightPickerClose = () => {
//     setShowNightPicker(false);
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

//   // Flight Concept seçimi
//   const handleFlightConceptChange = (concept: string) => {
//     let newConcepts: string[];
//     if (flightConceptsSelected.includes(concept)) {
//       newConcepts = flightConceptsSelected.filter((c) => c !== concept);
//     } else {
//       newConcepts = [...flightConceptsSelected, concept];
//     }
//     setFlightConceptsSelected(newConcepts);
//     updateFilters({ flightConcepts: newConcepts });
//   };

//   // Gösterilecek concept listesi
//   const visibleConcepts = showMore ? baseConcepts : baseConcepts.slice(0, 4);
//   const visibleFlightConcepts = showMoreFlight
//     ? flightConcepts
//     : flightConcepts.slice(0, 4);

//   // Otel konseptini çevirme yardımcı fonksiyonu
//   const translateConcept = (concept: string): string => {
//     // Boşlukları kaldırıp, camelCase'e dönüştürme
//     const key = concept
//       .replace(/\s+/g, "")
//       .replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
//     return t("HotelConcepts", key);
//   };

//   // Uçuş konseptini çevirme yardımcı fonksiyonu
//   const translateFlightConcept = (concept: string): string => {
//     // Boşlukları kaldırıp, camelCase'e dönüştürme
//     const key = concept
//       .replace(/\s+/g, "")
//       .replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
//     return t("FlightConcepts", key);
//   };

//   // Figma stil tanımlamaları
//   const headerStyle = {
//     fontFamily: "Inter",
//     fontWeight: 400,
//     fontSize: "12px",
//     lineHeight: "100%",
//     letterSpacing: "0%",
//     color: "#142347",
//   };

//   const fieldTextStyle = {
//     fontFamily: "Inter",
//     fontWeight: 500,
//     fontSize: "14px",
//     lineHeight: "100%",
//     letterSpacing: "0%",
//     color: "#142347",
//   };

//   const iconStyle = {
//     width: "16px",
//     height: "16px",
//   };

//   return (
//     <div
//       className="bg-white rounded-lg sticky top-4 w-full lg:w-[268px]"
//       style={{
//         fontFamily: "Inter",
//         borderRadius: "8px",
//         border: "1px solid #F0F4F8",
//         padding: "24px",
//       }}
//     >
//       {/* Filter Başlık */}
//       <h3 className="text-sm font-normal text-[#142347] mb-6">
//         {t("Filters", "title")}
//       </h3>

//       {/* From - Sadece package ve flight için göster - DestinationDropdown ile değiştirildi */}
//       {(travelType === "package" || travelType === "flight") && (
//         <div className="mb-4">
//           <div className="filter-input flex items-center rounded-md overflow-hidden w-full">
//             <div className="flex items-center h-full pl-3 pr-2">
//               <Icon name="location" size={16} color="#142347" />
//             </div>
//             <DestinationDropdown
//               value={from}
//               onChange={handleFromChange}
//               onSelect={handleFromChange}
//               placeholder={t("Filters", "from")}
//               mode="city"
//               className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
//               style={fieldTextStyle}
//             />
//           </div>
//         </div>
//       )}

//       {/* Destination - Tüm tiplerde göster - DestinationDropdown ile değiştirildi */}
//       <div className="mb-4">
//         <div className="filter-input flex items-center rounded-md overflow-hidden w-full">
//           <div className="flex items-center h-full pl-3 pr-2">
//             <Icon name="location" size={16} color="#142347" />
//           </div>
//           <DestinationDropdown
//             value={destination}
//             onChange={handleDestinationChange}
//             onSelect={handleDestinationChange}
//             placeholder={t("Filters", "destination")}
//             mode={travelType === "hotel" ? "hotel" : "city"}
//             className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
//             style={fieldTextStyle}
//           />
//         </div>
//       </div>

//       {/* Participants - Tüm tiplerde göster - PersonPicker ile değiştirildi */}
//       <div className="mb-4">
//         <label className="block mb-1 text-[#142347]" style={headerStyle}>
//           {t("Filters", "participants")}
//         </label>
//         <div
//           ref={peopleFieldRef}
//           className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
//           onClick={() => setShowPersonPicker(true)}
//         >
//           <div className="flex items-center h-full pl-3 pr-2">
//             <Icon name="users" size={16} color="#142347" />
//           </div>
//           <div className="text-[#142347] flex-1" style={fieldTextStyle}>
//             {t("Filters", "people", { count: people })}
//           </div>
//         </div>

//         {/* PersonPicker Bileşeni */}
//         {typeof window !== "undefined" && showPersonPicker && (
//           <PersonPicker
//             adults={adults}
//             children={children}
//             onChange={handlePersonChange}
//             onClose={handlePersonPickerClose}
//             visible={showPersonPicker}
//             triggerRef={peopleFieldRef}
//           />
//         )}
//       </div>

//       {/* Date - Tüm tiplerde göster - DateRangePicker ile değiştirildi */}
//       <div className="mb-4">
//         <label className="block mb-1 text-[#142347]" style={headerStyle}>
//           {t("Filters", "date")}
//         </label>
//         <div
//           ref={dateFieldRef}
//           className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
//           onClick={() => setShowDatePicker(true)}
//         >
//           <div className="flex items-center h-full pl-3 pr-2">
//             <Icon name="calendar" size={16} color="#142347" />
//           </div>
//           <div className="text-[#142347] flex-1" style={fieldTextStyle}>
//             {startDate ? (
//               <span>
//                 {startDate.format("DD MMM YYYY")}
//                 {endDate && ` - ${endDate.format("DD MMM")}`}
//               </span>
//             ) : (
//               <span className="text-gray-400">{t("Filters", "date")}</span>
//             )}
//           </div>
//         </div>

//         {/* DateRangePicker Bileşeni */}
//         {typeof window !== "undefined" && showDatePicker && (
//           <DateRangePicker
//             startDate={startDate || undefined}
//             endDate={endDate || undefined}
//             onChange={handleDateChange}
//             onClose={handleDatePickerClose}
//             visible={showDatePicker}
//             triggerRef={dateFieldRef}
//           />
//         )}
//       </div>

//       {/* Nights - Sadece package ve hotel için göster - NightPicker ile değiştirildi */}
//       {(travelType === "package" || travelType === "hotel") && (
//         <div className="mb-4">
//           <label className="block mb-1 text-[#142347]" style={headerStyle}>
//             {t("Filters", "nights")}
//           </label>
//           <div
//             ref={nightsFieldRef}
//             className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
//             onClick={() => setShowNightPicker(true)}
//           >
//             <div className="flex items-center h-full pl-3 pr-2">
//               <Icon name="nights" size={16} color="#142347" />
//             </div>
//             <div className="text-[#142347] flex-1" style={fieldTextStyle}>
//               {t("HotelCard", "nights", { count: nights })}
//             </div>
//           </div>

//           {/* NightPicker Bileşeni */}
//           {typeof window !== "undefined" && showNightPicker && (
//             <NightPicker
//               nights={nights}
//               onChange={handleNightChange}
//               onClose={handleNightPickerClose}
//               visible={showNightPicker}
//               triggerRef={nightsFieldRef}
//             />
//           )}
//         </div>
//       )}

//       {/* Hotel Concept */}
//       {(travelType === "package" || travelType === "hotel") && (
//         <div className="mb-4">
//           <div className="flex justify-between items-center mb-1">
//             <label className="text-sm" style={headerStyle}>
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
//                   <div
//                     style={{
//                       width: "220px",
//                       height: "17px",
//                       gap: "8px",
//                       borderRadius: "8px",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <span
//                       className={`
//                         relative flex items-center justify-center mr-2
//                         ${isChecked ? "" : ""}
//                       `}
//                       style={{
//                         width: "16px",
//                         height: "16px",
//                         borderRadius: "2px",
//                         border: isChecked
//                           ? "2px solid #ED8936"
//                           : "2px solid #E2E2E2",
//                       }}
//                     >
//                       {isChecked && (
//                         <CheckOutlined
//                           style={{ fontSize: 12, color: "#ED8936" }}
//                         />
//                       )}
//                     </span>
//                     <input
//                       type="checkbox"
//                       checked={isChecked}
//                       onChange={() => handleConceptChange(concept)}
//                       className="hidden"
//                     />
//                     <span
//                       className="text-sm text-[#142347]"
//                       style={fieldTextStyle}
//                     >
//                       {translateConcept(concept)}
//                     </span>
//                   </div>
//                 </label>
//               );
//             })}
//             {baseConcepts.length > 4 && (
//               <div
//                 className="flex items-center cursor-pointer"
//                 style={{
//                   width: "220px",
//                   height: "16px",
//                   gap: "8px",
//                   borderRadius: "8px",
//                 }}
//                 onClick={() => setShowMore(!showMore)}
//               >
//                 <Icon
//                   name="arrow-down"
//                   size={16}
//                   color="#93A2B7"
//                   className={showMore ? "transform rotate-180" : ""}
//                 />
//                 <span
//                   style={{
//                     fontFamily: "Inter",
//                     fontWeight: 500,
//                     fontSize: "12px",
//                     lineHeight: "100%",
//                     color: "#93A2B7",
//                   }}
//                 >
//                   {showMore ? t("Filters", "less") : t("Filters", "more")}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Flight Concept - Sadece flight için göster */}
//       {travelType === "flight" && (
//         <div className="mb-4">
//           <div className="flex justify-between items-center mb-1">
//             <label className="text-sm" style={headerStyle}>
//               {t("Filters", "flightConcept")}
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
//             {visibleFlightConcepts.map((concept) => {
//               const isChecked = flightConceptsSelected.includes(concept);
//               return (
//                 <label
//                   key={concept}
//                   className="flex items-center cursor-pointer select-none"
//                 >
//                   <div
//                     style={{
//                       width: "220px",
//                       height: "17px",
//                       gap: "8px",
//                       borderRadius: "8px",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <span
//                       className={`
//                         relative flex items-center justify-center mr-2
//                         ${isChecked ? "" : ""}
//                       `}
//                       style={{
//                         width: "16px",
//                         height: "16px",
//                         borderRadius: "2px",
//                         border: isChecked
//                           ? "2px solid #ED8936"
//                           : "2px solid #E2E2E2",
//                       }}
//                     >
//                       {isChecked && (
//                         <CheckOutlined
//                           style={{ fontSize: 12, color: "#ED8936" }}
//                         />
//                       )}
//                     </span>
//                     <input
//                       type="checkbox"
//                       checked={isChecked}
//                       onChange={() => handleFlightConceptChange(concept)}
//                       className="hidden"
//                     />
//                     <span
//                       className="text-sm text-[#142347]"
//                       style={fieldTextStyle}
//                     >
//                       {translateFlightConcept(concept)}
//                     </span>
//                   </div>
//                 </label>
//               );
//             })}
//             {flightConcepts.length > 4 && (
//               <div
//                 className="flex items-center cursor-pointer"
//                 style={{
//                   width: "220px",
//                   height: "16px",
//                   gap: "8px",
//                   borderRadius: "8px",
//                 }}
//                 onClick={() => setShowMoreFlight(!showMoreFlight)}
//               >
//                 <Icon
//                   name="arrow-down"
//                   size={16}
//                   color="#93A2B7"
//                   className={showMoreFlight ? "transform rotate-180" : ""}
//                 />
//                 <span
//                   style={{
//                     fontFamily: "Inter",
//                     fontWeight: 500,
//                     fontSize: "12px",
//                     lineHeight: "100%",
//                     color: "#93A2B7",
//                   }}
//                 >
//                   {showMoreFlight ? t("Filters", "less") : t("Filters", "more")}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Star kısmı - hem hotel/package hem de flight için göster */}
//       {(travelType === "package" ||
//         travelType === "hotel" ||
//         travelType === "flight") && (
//         <div className="mb-4">
//           <label className="block mb-1" style={headerStyle}>
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
//                   <Icon name="Star" size={16} color="#ED8936" />
//                   <span
//                     className="text-sm"
//                     style={{ ...fieldTextStyle, color: "#142347" }}
//                   >
//                     {starValue}+
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Reset butonu - Flight için reset Button kaldırıldı çünkü Flight Concept kısmında var */}
//     </div>
//   );
// };

// export default Filters;



"use client";

import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { useSearch } from "@/hooks/useSearch";
import { Button } from "antd";
import Icon from "../../../public/icons/Icon";
import { useLanguage } from "@/hooks/useLanguage";
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import PersonPicker from "@/components/PersonPicker/personpicker";
import DestinationDropdown from "@/components/dropdown/DestinationDropdown";
import NightPicker from "@/components/NightPicker/NightPicker";

// Hotel concept listesi
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

// Flight concept listesi - mockData.ts'den alınan verilerle
// filters.tsx içinde sadeleştirilmiş flightConcepts listesi

const flightConcepts = [
  // Uçuş Sınıfları
  "Economy Class",
  "Business Class",
  "First Class", 
  "Premium Economy",
  
  // Uçuş Türleri
  "Direct Flight",
  "One Stop",
  "Multiple Stops",
  "Domestic"
];

const Filters: React.FC = () => {
  const { filters, updateFilters, searchParams } = useSearch();
  const { t } = useLanguage();

  // TravelType değerini alıyoruz
  const travelType = searchParams.travelType || "package";

  // State'ler
  const [from, setFrom] = useState<string>(
    filters.from || searchParams.from || ""
  );
  const [destination, setDestination] = useState<string>(
    filters.destination || searchParams.destination || ""
  );

  // Kişi sayıları
  const [adults, setAdults] = useState<number>(
    filters.participants?.adults || searchParams.participants?.adults || 2
  );
  const [children, setChildren] = useState<number>(
    filters.participants?.children || searchParams.participants?.children || 0
  );
  const [people, setPeople] = useState<number>(adults + children);

  // Nights değişkeni
  const [nights, setNights] = useState<number>(
    filters.nights || searchParams.nights || 5
  );

  // Date state'leri
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(() => {
    if (filters.date) return dayjs(filters.date);
    if (searchParams.date) return dayjs(searchParams.date);
    return null;
  });

  // endDate başlangıç + seçili gece sayısı kadar
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(() => {
    if (startDate) return startDate.add(nights, "day");
    return null;
  });

  const [stars, setStars] = useState<number[]>(filters.stars || []);
  const [concepts, setConcepts] = useState<string[]>(
    filters.hotelConcepts || []
  );
  const [flightConceptsSelected, setFlightConceptsSelected] = useState<string[]>(
    filters.flightConcepts || []
  );

  // DateRangePicker için visible state ve ref
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const dateFieldRef = useRef<HTMLDivElement>(null);

  // PersonPicker için visible state ve ref
  const [showPersonPicker, setShowPersonPicker] = useState<boolean>(false);
  const peopleFieldRef = useRef<HTMLDivElement>(null);

  // NightPicker için visible state ve ref
  const [showNightPicker, setShowNightPicker] = useState<boolean>(false);
  const nightsFieldRef = useRef<HTMLDivElement>(null);

  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMoreFlight, setShowMoreFlight] = useState<boolean>(false);

  // searchParams değiştiğinde state'leri güncelle
  useEffect(() => {
    setFrom(searchParams.from || "");
    setDestination(searchParams.destination || "");

    // Kişi sayılarını güncelle
    const newAdults = searchParams.participants?.adults || 2;
    const newChildren = searchParams.participants?.children || 0;
    setAdults(newAdults);
    setChildren(newChildren);
    setPeople(newAdults + newChildren);

    // Önce nights güncellenir
    const newNights = searchParams.nights || 5;
    setNights(newNights);

    // Sonra startDate ve buna bağlı olarak endDate
    const newStartDate = searchParams.date ? dayjs(searchParams.date) : null;
    setStartDate(newStartDate);

    if (newStartDate) {
      setEndDate(newStartDate.add(newNights, "day"));
    } else {
      setEndDate(null);
    }

    // filters değişiklikleri de filters state'ine yansıtılsın
    updateFilters({
      from: searchParams.from || filters.from || "",
      destination: searchParams.destination || filters.destination || "",
      participants: {
        adults: newAdults,
        children: newChildren,
      },
      date: searchParams.date || filters.date || "",
      nights: newNights,
    });
  }, [searchParams, updateFilters]);

  // filters değiştiğinde de state'leri güncelle
  useEffect(() => {
    setFrom(filters.from || "");
    setDestination(filters.destination || "");

    // Kişi sayılarını güncelle
    const newAdults = filters.participants?.adults || 2;
    const newChildren = filters.participants?.children || 0;
    setAdults(newAdults);
    setChildren(newChildren);
    setPeople(newAdults + newChildren);

    // Önce nights güncellenir
    const newNights = filters.nights || 5;
    setNights(newNights);

    // Sonra startDate ve buna bağlı olarak endDate
    const newStartDate = filters.date ? dayjs(filters.date) : null;
    setStartDate(newStartDate);

    if (newStartDate) {
      setEndDate(newStartDate.add(newNights, "day"));
    } else {
      setEndDate(null);
    }

    setStars(filters.stars || []);
    setConcepts(filters.hotelConcepts || []);
    setFlightConceptsSelected(filters.flightConcepts || []);
  }, [filters]);

  // Filtreleri sıfırla
  const resetFilters = () => {
    setFrom("");
    setDestination("");
    setAdults(2);
    setChildren(0);
    setPeople(2);
    setStartDate(null);
    setEndDate(null);
    setNights(5);
    setStars([]);
    setConcepts([]);
    setFlightConceptsSelected([]);
    setShowMore(false);
    setShowMoreFlight(false);

    updateFilters({
      from: "",
      destination: "",
      participants: { adults: 2, children: 0 },
      date: "",
      nights: 5,
      hotelConcepts: [],
      flightConcepts: [],
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

  // PersonPicker için onChange ve onClose fonksiyonları
  const handlePersonChange = (newAdults: number, newChildren: number) => {
    setAdults(newAdults);
    setChildren(newChildren);
    setPeople(newAdults + newChildren);

    updateFilters({
      participants: { adults: newAdults, children: newChildren },
    });
  };

  const handlePersonPickerClose = () => {
    setShowPersonPicker(false);
  };

  // DateRangePicker için onChange ve onClose fonksiyonları
  const handleDateChange = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
    setStartDate(start);
    setEndDate(end);

    // Gece sayısını hesapla
    const nightCount = end.diff(start, "day");
    setNights(nightCount);

    // Filters'ı güncelle
    updateFilters({
      date: start.format("YYYY-MM-DD"),
      nights: nightCount,
    });
  };

  const handleDatePickerClose = () => {
    setShowDatePicker(false);
  };

  // NightPicker için onChange ve onClose fonksiyonları
  const handleNightChange = (val: number) => {
    setNights(val);
    // endDate'i de güncelle
    if (startDate) {
      setEndDate(startDate.add(val, "day"));
    }
    updateFilters({ nights: val });
  };

  const handleNightPickerClose = () => {
    setShowNightPicker(false);
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

  // Flight Concept seçimi
  const handleFlightConceptChange = (concept: string) => {
    let newConcepts: string[];
    if (flightConceptsSelected.includes(concept)) {
      newConcepts = flightConceptsSelected.filter((c) => c !== concept);
    } else {
      newConcepts = [...flightConceptsSelected, concept];
    }
    setFlightConceptsSelected(newConcepts);
    updateFilters({ flightConcepts: newConcepts });
  };

  // Gösterilecek concept listesi
  const visibleConcepts = showMore ? baseConcepts : baseConcepts.slice(0, 4);
  const visibleFlightConcepts = showMoreFlight ? flightConcepts : flightConcepts.slice(0, 4);

  // Otel konseptini çevirme yardımcı fonksiyonu
  const translateConcept = (concept: string): string => {
    // Boşlukları kaldırıp, camelCase'e dönüştürme
    const key = concept
      .replace(/\s+/g, "")
      .replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
    return t("HotelConcepts", key);
  };

  // Uçuş konseptini çevirme yardımcı fonksiyonu
  const translateFlightConcept = (concept: string): string => {
    // Boşlukları kaldırıp, camelCase'e dönüştürme
    const key = concept
      .replace(/\s+/g, "")
      .replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
    return t("FlightConcepts", key);
  };

  // Figma stil tanımlamaları
  const headerStyle = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#142347",
  };

  const fieldTextStyle = {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: "#142347",
  };

  const iconStyle = {
    width: "16px",
    height: "16px",
  };

  return (
    <div
      className="bg-white rounded-lg sticky top-4 w-full lg:w-[268px]"
      style={{
        fontFamily: "Inter",
        borderRadius: "8px",
        border: "1px solid #F0F4F8",
        padding: "24px",
      }}
    >
      {/* Filter Başlık */}
      <h3 className="text-sm font-normal text-[#142347] mb-6">
        {t("Filters", "title")}
      </h3>

      {/* From - Sadece package ve flight için göster - DestinationDropdown ile değiştirildi */}
      {(travelType === "package" || travelType === "flight") && (
        <div className="mb-4">
          <div className="filter-input flex items-center rounded-md overflow-hidden w-full">
            <div className="flex items-center h-full pl-3 pr-2">
              <Icon name="location" size={16} color="#142347" />
            </div>
            <DestinationDropdown
              value={from}
              onChange={handleFromChange}
              onSelect={handleFromChange}
              placeholder={t("Filters", "from")}
              mode="city"
              className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
              style={fieldTextStyle}
            />
          </div>
        </div>
      )}

      {/* Destination - Tüm tiplerde göster - DestinationDropdown ile değiştirildi */}
      <div className="mb-4">
        <div className="filter-input flex items-center rounded-md overflow-hidden w-full">
          <div className="flex items-center h-full pl-3 pr-2">
            <Icon name="location" size={16} color="#142347" />
          </div>
          <DestinationDropdown
            value={destination}
            onChange={handleDestinationChange}
            onSelect={handleDestinationChange}
            placeholder={t("Filters", "destination")}
            mode={travelType === "hotel" ? "hotel" : "city"}
            className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
            style={fieldTextStyle}
          />
        </div>
      </div>

      {/* Participants - Tüm tiplerde göster - PersonPicker ile değiştirildi */}
      <div className="mb-4">
        <label className="block mb-1 text-[#142347]" style={headerStyle}>
          {t("Filters", "participants")}
        </label>
        <div
          ref={peopleFieldRef}
          className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
          onClick={() => setShowPersonPicker(true)}
        >
          <div className="flex items-center h-full pl-3 pr-2">
            <Icon name="users" size={16} color="#142347" />
          </div>
          <div className="text-[#142347] flex-1" style={fieldTextStyle}>
            {t("Filters", "people", { count: people })}
          </div>
        </div>

        {/* PersonPicker Bileşeni */}
        {typeof window !== "undefined" && showPersonPicker && (
          <PersonPicker
            adults={adults}
            children={children}
            onChange={handlePersonChange}
            onClose={handlePersonPickerClose}
            visible={showPersonPicker}
            triggerRef={peopleFieldRef}
          />
        )}
      </div>

      {/* Date - Tüm tiplerde göster - DateRangePicker ile değiştirildi */}
      <div className="mb-4">
        <label className="block mb-1 text-[#142347]" style={headerStyle}>
          {t("Filters", "date")}
        </label>
        <div
          ref={dateFieldRef}
          className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
          onClick={() => setShowDatePicker(true)}
        >
          <div className="flex items-center h-full pl-3 pr-2">
            <Icon name="calendar" size={16} color="#142347" />
          </div>
          <div className="text-[#142347] flex-1" style={fieldTextStyle}>
            {startDate ? (
              <span>
                {startDate.format("DD MMM YYYY")}
                {endDate && ` - ${endDate.format("DD MMM")}`}
              </span>
            ) : (
              <span className="text-gray-400">{t("Filters", "date")}</span>
            )}
          </div>
        </div>

        {/* DateRangePicker Bileşeni */}
        {typeof window !== "undefined" && showDatePicker && (
          <DateRangePicker
            startDate={startDate || undefined}
            endDate={endDate || undefined}
            onChange={handleDateChange}
            onClose={handleDatePickerClose}
            visible={showDatePicker}
            triggerRef={dateFieldRef}
          />
        )}
      </div>

      {/* Nights - Sadece package ve hotel için göster - NightPicker ile değiştirildi */}
      {(travelType === "package" || travelType === "hotel") && (
        <div className="mb-4">
          <label className="block mb-1 text-[#142347]" style={headerStyle}>
            {t("Filters", "nights")}
          </label>
          <div
            ref={nightsFieldRef}
            className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
            onClick={() => setShowNightPicker(true)}
          >
            <div className="flex items-center h-full pl-3 pr-2">
              <Icon name="nights" size={16} color="#142347" />
            </div>
            <div className="text-[#142347] flex-1" style={fieldTextStyle}>
              {t("HotelCard", "nights", { count: nights })}
            </div>
          </div>

          {/* NightPicker Bileşeni */}
          {typeof window !== "undefined" && showNightPicker && (
            <NightPicker
              nights={nights}
              onChange={handleNightChange}
              onClose={handleNightPickerClose}
              visible={showNightPicker}
              triggerRef={nightsFieldRef}
            />
          )}
        </div>
      )}

      {/* Hotel Concept */}
      {(travelType === "package" || travelType === "hotel") && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm" style={headerStyle}>
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
                  <div
                    style={{
                      width: "220px",
                      height: "17px",
                      gap: "8px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="relative flex items-center justify-center mr-2"
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        background: "#FFFFFF",
                        border: isChecked ? "1px solid #ED8936" : "1px solid #CAD4E0",
                        position: "relative",
                      }}
                    >
                      {isChecked && (
                        <Icon
                          name="thick"
                          style={{
                            position: "absolute",
                            width: "8px",
                            height: "5.573103904724121px",
                            top: "5px",
                            left: "4px",
                          }}
                        />
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleConceptChange(concept)}
                      className="hidden"
                    />
                    <span
                      className="text-sm text-[#142347]"
                      style={fieldTextStyle}
                    >
                      {translateConcept(concept)}
                    </span>
                  </div>
                </label>
              );
            })}
            {baseConcepts.length > 4 && (
              <div
                className="flex items-center cursor-pointer"
                style={{
                  width: "220px",
                  height: "16px",
                  gap: "8px",
                  borderRadius: "8px",
                }}
                onClick={() => setShowMore(!showMore)}
              >
                <Icon
                  name="arrow-down"
                  size={16}
                  color="#93A2B7"
                  className={showMore ? "transform rotate-180" : ""}
                />
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "100%",
                    color: "#93A2B7",
                  }}
                >
                  {showMore ? t("Filters", "less") : t("Filters", "more")}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Flight Concept - Sadece flight için göster */}
      {travelType === "flight" && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm" style={headerStyle}>
              {t("Filters", "flightConcept")}
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
            {visibleFlightConcepts.map((concept) => {
              const isChecked = flightConceptsSelected.includes(concept);
              return (
                <label
                  key={concept}
                  className="flex items-center cursor-pointer select-none"
                >
                  <div
                    style={{
                      width: "220px",
                      height: "17px",
                      gap: "8px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="relative flex items-center justify-center mr-2"
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "4px",
                        background: "#FFFFFF",
                        border: isChecked ? "1px solid #ED8936" : "1px solid #CAD4E0",
                        position: "relative",
                      }}
                    >
                      {isChecked && (
                        <Icon
                          name="thick"
                          style={{
                            position: "absolute",
                            width: "8px",
                            height: "5.573103904724121px",
                            top: "5px",
                            left: "4px",
                          }}
                        />
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleFlightConceptChange(concept)}
                      className="hidden"
                    />
                    <span
                      className="text-sm text-[#142347]"
                      style={fieldTextStyle}
                    >
                      {translateFlightConcept(concept)}
                    </span>
                  </div>
                </label>
              );
            })}
            {flightConcepts.length > 4 && (
              <div
                className="flex items-center cursor-pointer"
                style={{
                  width: "220px",
                  height: "16px",
                  gap: "8px",
                  borderRadius: "8px",
                }}
                onClick={() => setShowMoreFlight(!showMoreFlight)}
              >
                <Icon
                  name="arrow-down"
                  size={16}
                  color="#93A2B7"
                  className={showMoreFlight ? "transform rotate-180" : ""}
                />
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "100%",
                    color: "#93A2B7",
                  }}
                >
                  {showMoreFlight ? t("Filters", "less") : t("Filters", "more")}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Star kısmı - hem hotel/package hem de flight için göster */}
      {(travelType === "package" || travelType === "hotel" || travelType === "flight") && (
        <div className="mb-4">
          <label className="block mb-1" style={headerStyle}>
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
                  <Icon name="Star" size={16} color="#ED8936" />
                  <span
                    className="text-sm"
                    style={{ ...fieldTextStyle, color: "#142347" }}
                  >
                    {starValue}+
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reset butonu - Flight için reset Button kaldırıldı çünkü Flight Concept kısmında var */}
    </div>
  );
};

export default Filters;
