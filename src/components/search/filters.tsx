// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import dayjs from 'dayjs';
// import { useSearch } from '@/hooks/useSearch';
// import { Button } from 'antd';
// import Icon from '../../assets/icons/Icon';
// import { useLanguage } from '@/hooks/useLanguage';
// import DateRangePicker from '@/components/DateRangePicker/DateRangePicker';
// import PersonPicker from '@/components/PersonPicker/personpicker';
// import DestinationDropdown from '@/components/dropdown/DestinationDropdown';
// import NightPicker from '@/components/NightPicker/NightPicker';

// // Hotel concept listesi
// const baseConcepts = [
//   'Beach Hotel',
//   'Adult Hotel',
//   'Boutique Hotel',
//   'Family Hotel',
//   'Pet Friendly',
//   'Spa',
//   'Golf',
//   'Mountain Resort',
// ];

// // Flight concept listesi
// const flightConcepts = [
//   // Uçuş Sınıfları
//   'Economy Class',
//   'Business Class',
//   'First Class',
//   'Premium Economy',

//   // Uçuş Türleri
//   'Direct Flight',
//   'One Stop',
//   'Multiple Stops',
//   'Domestic',
// ];

// const Filters: React.FC = () => {
//   const { filters, updateFilters, searchParams } = useSearch();
//   const { t } = useLanguage();

//   // TravelType değerini alıyoruz
//   const travelType = searchParams.travelType || 'package';

//   // State'ler
//   const [from, setFrom] = useState<string>(
//     filters.from || searchParams.from || '',
//   );
//   const [destination, setDestination] = useState<string>(
//     filters.destination || searchParams.destination || '',
//   );

//   // Kişi sayıları
//   const [adults, setAdults] = useState<number>(
//     filters.participants?.adults || searchParams.participants?.adults || 2,
//   );
//   const [children, setChildren] = useState<number>(
//     filters.participants?.children || searchParams.participants?.children || 0,
//   );
//   const [people, setPeople] = useState<number>(adults + children);

//   // Nights değişkeni
//   const [nights, setNights] = useState<number>(
//     filters.nights || searchParams.nights || 5,
//   );

//   // Date state'leri
//   const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(() => {
//     if (filters.date) return dayjs(filters.date);
//     if (searchParams.date) return dayjs(searchParams.date);
//     return null;
//   });

//   // endDate başlangıç + seçili gece sayısı kadar
//   const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(() => {
//     if (startDate) return startDate.add(nights, 'day');
//     return null;
//   });

//   const [stars, setStars] = useState<number[]>(filters.stars || []);
//   const [concepts, setConcepts] = useState<string[]>(
//     filters.hotelConcepts || [],
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
//     setFrom(searchParams.from || '');
//     setDestination(searchParams.destination || '');

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
//       setEndDate(newStartDate.add(newNights, 'day'));
//     } else {
//       setEndDate(null);
//     }

//     // filters değişiklikleri de filters state'ine yansıtılsın
//     updateFilters({
//       from: searchParams.from || filters.from || '',
//       destination: searchParams.destination || filters.destination || '',
//       participants: {
//         adults: newAdults,
//         children: newChildren,
//       },
//       date: searchParams.date || filters.date || '',
//       nights: newNights,
//     });
//   }, [searchParams, updateFilters]);

//   // filters değiştiğinde de state'leri güncelle
//   useEffect(() => {
//     setFrom(filters.from || '');
//     setDestination(filters.destination || '');

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
//       setEndDate(newStartDate.add(newNights, 'day'));
//     } else {
//       setEndDate(null);
//     }

//     setStars(filters.stars || []);
//     setConcepts(filters.hotelConcepts || []);
//     setFlightConceptsSelected(filters.flightConcepts || []);
//   }, [filters]);

//   // Filtreleri sıfırla
//   const resetFilters = () => {
//     setFrom('');
//     setDestination('');
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
//       from: '',
//       destination: '',
//       participants: { adults: 2, children: 0 },
//       date: '',
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
//     const nightCount = end.diff(start, 'day');
//     setNights(nightCount);

//     // Filters'ı güncelle
//     updateFilters({
//       date: start.format('YYYY-MM-DD'),
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
//       setEndDate(startDate.add(val, 'day'));
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

//   // Gösterilecek concept listesi - 5 olarak güncellendi (görüntülerde 5 gösterildiği için)
//   const visibleConcepts = showMore ? baseConcepts : baseConcepts.slice(0, 5);
//   const visibleFlightConcepts = showMoreFlight
//     ? flightConcepts
//     : flightConcepts.slice(0, 5);

//   // Otel konseptini çevirme yardımcı fonksiyonu
//   const translateConcept = (concept: string): string => {
//     // Boşlukları kaldırıp, camelCase'e dönüştürme
//     const key = concept
//       .replace(/\s+/g, '')
//       .replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
//     return t('HotelConcepts', key);
//   };

//   // Uçuş konseptini çevirme yardımcı fonksiyonu
//   const translateFlightConcept = (concept: string): string => {
//     // Boşlukları kaldırıp, camelCase'e dönüştürme
//     const key = concept
//       .replace(/\s+/g, '')
//       .replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
//     return t('FlightConcepts', key);
//   };

//   // Figma stil tanımlamaları
//   const headerStyle = {
//     fontFamily: 'Inter',
//     fontWeight: 400,
//     fontSize: '12px',
//     lineHeight: '100%',
//     letterSpacing: '0%',
//     color: '#142347',
//   };

//   const fieldTextStyle = {
//     fontFamily: 'Inter',
//     fontWeight: 500,
//     fontSize: '14px',
//     lineHeight: '100%',
//     letterSpacing: '0%',
//     color: '#142347',
//   };

//   // Ekran görüntülerinden alınan kesin ölçüler
//   const inputFieldStyle = {
//     width: '220px', // İç inputların genişliği
//     height: '48px',
//     borderRadius: '8px',
//     border: '1px solid #E2E8F0',
//     background: '#FFFFFF',
//   };

//   const sectionStyle = {
//     width: '220px',
//   };

//   return (
//     <div
//       className="bg-white rounded-lg sticky top-4 w-full lg:w-[268px]"
//       style={{
//         fontFamily: 'Inter',
//         borderRadius: '8px',
//         border: '1px solid #F0F4F8',
//         padding: '24px',
//       }}
//     >
//       {/* 1. GRUP: Filter, From ve Destination */}
//       <div style={{ marginBottom: '32px' }}>
//         {/* Filter Başlık */}
//         <h3
//           className="text-sm font-normal text-[#142347]"
//           style={{ fontSize: '14px', marginBottom: '16px' }}
//         >
//           {t('Filters', 'title')}
//         </h3>

//         {/* From - Sadece package ve flight için göster */}
//         {(travelType === 'package' || travelType === 'flight') && (
//           <div style={{ marginBottom: '16px' }}>
//             <div
//               className="filter-input flex items-center rounded-md overflow-hidden w-full"
//               style={{
//                 ...inputFieldStyle,
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//             >
//               <div className="flex items-center h-full pl-3 pr-2">
//                 <Icon name="location" size={16} color="#142347" />
//               </div>
//               <DestinationDropdown
//                 value={from}
//                 onChange={handleFromChange}
//                 onSelect={handleFromChange}
//                 placeholder={t('Filters', 'from')}
//                 mode="city"
//                 className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
//                 style={fieldTextStyle}
//               />
//             </div>
//           </div>
//         )}

//         {/* Destination - Tüm tiplerde göster */}
//         <div>
//           <div
//             className="filter-input flex items-center rounded-md overflow-hidden w-full"
//             style={{
//               ...inputFieldStyle,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <div className="flex items-center h-full pl-3 pr-2">
//               <Icon name="location" size={16} color="#142347" />
//             </div>
//             <DestinationDropdown
//               value={destination}
//               onChange={handleDestinationChange}
//               onSelect={handleDestinationChange}
//               placeholder={t('Filters', 'destination')}
//               mode={travelType === 'hotel' ? 'hotel' : 'city'}
//               className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
//               style={fieldTextStyle}
//             />
//           </div>
//         </div>
//       </div>

//       {/* 2. GRUP: Participants */}
//       <div style={{ marginBottom: '32px' }}>
//         <label
//           className="block text-[#142347]"
//           style={{ ...headerStyle, marginBottom: '8px', display: 'block' }}
//         >
//           {t('Filters', 'participants')}
//         </label>
//         <div
//           ref={peopleFieldRef}
//           className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
//           style={{
//             ...inputFieldStyle,
//             display: 'flex',
//             alignItems: 'center',
//             cursor: 'pointer',
//           }}
//           onClick={() => setShowPersonPicker(true)}
//         >
//           <div className="flex items-center h-full pl-3 pr-2">
//             <Icon name="users" size={16} color="#142347" />
//           </div>
//           <div className="text-[#142347] flex-1" style={fieldTextStyle}>
//             {t('Filters', 'people', { count: people })}
//           </div>
//         </div>

//         {/* PersonPicker Bileşeni */}
//         {typeof window !== 'undefined' && showPersonPicker && (
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

//       {/* 3. GRUP: Date */}
//       <div style={{ marginBottom: '32px' }}>
//         <label
//           className="block text-[#142347]"
//           style={{ ...headerStyle, marginBottom: '8px', display: 'block' }}
//         >
//           {t('Filters', 'date')}
//         </label>
//         <div
//           ref={dateFieldRef}
//           className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
//           style={{
//             ...inputFieldStyle,
//             display: 'flex',
//             alignItems: 'center',
//             cursor: 'pointer',
//           }}
//           onClick={() => setShowDatePicker(true)}
//         >
//           <div className="flex items-center h-full pl-3 pr-2">
//             <Icon name="calendar" size={16} color="#142347" />
//           </div>
//           <div className="text-[#142347] flex-1" style={fieldTextStyle}>
//             {startDate ? (
//               <span>{startDate.format('DD MMM YYYY')}</span>
//             ) : (
//               <span className="text-gray-400">{t('Filters', 'date')}</span>
//             )}
//           </div>
//         </div>

//         {/* DateRangePicker Bileşeni */}
//         {typeof window !== 'undefined' && showDatePicker && (
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

//       {/* 4. GRUP: Nights - Sadece package ve hotel için göster */}
//       {(travelType === 'package' || travelType === 'hotel') && (
//         <div style={{ marginBottom: '32px' }}>
//           <label
//             className="block text-[#142347]"
//             style={{ ...headerStyle, marginBottom: '8px', display: 'block' }}
//           >
//             {t('Filters', 'nights')}
//           </label>
//           <div
//             ref={nightsFieldRef}
//             className="filter-input flex items-center cursor-pointer overflow-hidden w-full"
//             style={{
//               ...inputFieldStyle,
//               display: 'flex',
//               alignItems: 'center',
//               cursor: 'pointer',
//             }}
//             onClick={() => setShowNightPicker(true)}
//           >
//             <div className="flex items-center h-full pl-3 pr-2">
//               <Icon name="nights" size={16} color="#142347" />
//             </div>
//             <div className="text-[#142347] flex-1" style={fieldTextStyle}>
//               {t('HotelCard', 'nights', { count: nights })}
//             </div>
//           </div>

//           {/* NightPicker Bileşeni */}
//           {typeof window !== 'undefined' && showNightPicker && (
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

//       {/* 5. GRUP: Hotel Concept */}
//       {(travelType === 'package' || travelType === 'hotel') && (
//         <div style={{ marginBottom: '32px' }}>
//           <div
//             className="flex justify-between items-center"
//             style={{ marginBottom: '8px' }}
//           >
//             <label className="text-sm" style={{ ...headerStyle }}>
//               {t('Filters', 'hotelConcept')}
//             </label>
//             <Button
//               type="link"
//               size="small"
//               onClick={resetFilters}
//               className="p-0"
//               style={{ color: '#ED8936', padding: 0 }}
//             >
//               {t('Filters', 'reset')}
//             </Button>
//           </div>
//           <div
//             className="space-y-2"
//             style={{
//               ...sectionStyle,
//               height: showMore ? 'auto' : '164px', // More basıldığında otomatik yükseklik
//               transition: 'height 0.3s ease',
//             }}
//           >
//             {visibleConcepts.map((concept, index) => {
//               const isChecked = concepts.includes(concept);
//               return (
//                 <label
//                   key={concept}
//                   className="flex items-center cursor-pointer select-none"
//                   style={{
//                     marginBottom:
//                       index === visibleConcepts.length - 1 ? 0 : '10px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '220px',
//                       height: '24px', // Ekran görüntüsünden alınan değer
//                       display: 'flex',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <span
//                       className="relative flex items-center justify-center mr-2"
//                       style={{
//                         width: '16px',
//                         height: '16px',
//                         borderRadius: '4px',
//                         background: '#FFFFFF',
//                         border: isChecked
//                           ? '1px solid #ED8936'
//                           : '1px solid #CAD4E0',
//                         position: 'relative',
//                         marginRight: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}
//                     >
//                       {isChecked && (
//                         <Icon
//                           name="thick"
//                           style={{
//                             position: 'absolute',
//                             width: '8px',
//                             height: '5.573103904724121px',
//                             top: '5px',
//                             left: '4px',
//                           }}
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
//             {baseConcepts.length > 5 && (
//               <div
//                 className="flex items-center cursor-pointer"
//                 style={{
//                   width: '220px',
//                   height: '16px',
//                   gap: '8px',
//                   marginTop: '12px',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                 }}
//                 onClick={() => setShowMore(!showMore)}
//               >
//                 <Icon
//                   name="arrow-down"
//                   size={16}
//                   color="#93A2B7"
//                   className={showMore ? 'transform rotate-180' : ''}
//                   style={{ marginRight: '8px' }}
//                 />
//                 <span
//                   style={{
//                     fontFamily: 'Inter',
//                     fontWeight: 500,
//                     fontSize: '12px',
//                     lineHeight: '100%',
//                     color: '#93A2B7',
//                   }}
//                 >
//                   {showMore ? t('Filters', 'less') : t('Filters', 'more')}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* 5. GRUP: Flight Concept - Sadece flight için göster */}
//       {travelType === 'flight' && (
//         <div style={{ marginBottom: '32px' }}>
//           <div
//             className="flex justify-between items-center"
//             style={{ marginBottom: '8px' }}
//           >
//             <label className="text-sm" style={{ ...headerStyle }}>
//               {t('Filters', 'flightConcept')}
//             </label>
//             <Button
//               type="link"
//               size="small"
//               onClick={resetFilters}
//               className="p-0"
//               style={{ color: '#ED8936', padding: 0 }}
//             >
//               {t('Filters', 'reset')}
//             </Button>
//           </div>
//           <div
//             className="space-y-2"
//             style={{
//               ...sectionStyle,
//               height: showMoreFlight ? 'auto' : '164px', // More basıldığında otomatik yükseklik
//               transition: 'height 0.3s ease',
//             }}
//           >
//             {visibleFlightConcepts.map((concept, index) => {
//               const isChecked = flightConceptsSelected.includes(concept);
//               return (
//                 <label
//                   key={concept}
//                   className="flex items-center cursor-pointer select-none"
//                   style={{
//                     marginBottom:
//                       index === visibleFlightConcepts.length - 1 ? 0 : '10px',
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: '220px',
//                       height: '24px', // Ekran görüntüsünden alınan değer
//                       display: 'flex',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <span
//                       className="relative flex items-center justify-center mr-2"
//                       style={{
//                         width: '16px',
//                         height: '16px',
//                         borderRadius: '4px',
//                         background: '#FFFFFF',
//                         border: isChecked
//                           ? '1px solid #ED8936'
//                           : '1px solid #CAD4E0',
//                         position: 'relative',
//                         marginRight: '8px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                       }}
//                     >
//                       {isChecked && (
//                         <Icon
//                           name="thick"
//                           style={{
//                             position: 'absolute',
//                             width: '8px',
//                             height: '5.573103904724121px',
//                             top: '5px',
//                             left: '4px',
//                           }}
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
//             {flightConcepts.length > 5 && (
//               <div
//                 className="flex items-center cursor-pointer"
//                 style={{
//                   width: '220px',
//                   height: '16px',
//                   gap: '8px',
//                   marginTop: '12px',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                 }}
//                 onClick={() => setShowMoreFlight(!showMoreFlight)}
//               >
//                 <Icon
//                   name="arrow-down"
//                   size={16}
//                   color="#93A2B7"
//                   className={showMoreFlight ? 'transform rotate-180' : ''}
//                   style={{ marginRight: '8px' }}
//                 />
//                 <span
//                   style={{
//                     fontFamily: 'Inter',
//                     fontWeight: 500,
//                     fontSize: '12px',
//                     lineHeight: '100%',
//                     color: '#93A2B7',
//                   }}
//                 >
//                   {showMoreFlight ? t('Filters', 'less') : t('Filters', 'more')}
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* 6. GRUP: Star */}
//       <div>
//         <label
//           className="block text-[#142347]"
//           style={{ ...headerStyle, marginBottom: '8px', display: 'block' }}
//         >
//           {t('Filters', 'star')}
//         </label>
//         <div
//           className="star-selection"
//           style={{ ...sectionStyle, height: '140px' }}
//         >
//           {[1, 2, 3, 4, 5].map((starValue, index) => {
//             const isActive = stars.includes(starValue);
//             return (
//               <div
//                 key={starValue}
//                 className="flex items-center cursor-pointer select-none"
//                 onClick={() => handleStarClick(starValue)}
//                 style={{
//                   marginBottom: index === 4 ? 0 : '10px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   cursor: 'pointer',
//                   height: '20px',
//                 }}
//               >
//                 <div
//                   className="radio-button"
//                   style={{
//                     width: '20px',
//                     height: '20px',
//                     borderRadius: '50%',
//                     border: `2px solid ${isActive ? '#ED8936' : '#E2E2E2'}`,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginRight: '8px',
//                   }}
//                 >
//                   {isActive && (
//                     <div
//                       className="radio-inner"
//                       style={{
//                         width: '8px',
//                         height: '8px',
//                         borderRadius: '50%',
//                         backgroundColor: '#ED8936',
//                         display: 'block',
//                       }}
//                     />
//                   )}
//                 </div>
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                   }}
//                 >
//                   <Icon
//                     name="Star"
//                     size={16}
//                     color="#ED8936"
//                     style={{ marginRight: '8px' }}
//                   />
//                   <span
//                     style={{
//                       ...fieldTextStyle,
//                       color: '#142347',
//                       fontSize: '14px',
//                       fontWeight: 500,
//                     }}
//                   >
//                     {starValue}+
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;




'use client';

import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import { useSearch } from '@/hooks/useSearch';
import { Button } from 'antd';
import Icon from '../../assets/icons/Icon';
import { useLanguage } from '@/hooks/useLanguage';
import DateRangePicker from '@/components/DateRangePicker/DateRangePicker';
import PersonPicker from '@/components/PersonPicker/personpicker';
import DestinationDropdown from '@/components/dropdown/DestinationDropdown';
import NightPicker from '@/components/NightPicker/NightPicker';


// Hotel concept listesi
const baseConcepts = [
  'Beach Hotel',
  'Adult Hotel',
  'Boutique Hotel',
  'Family Hotel',
  'Pet Friendly',
  'Spa',
  'Golf',
  'Mountain Resort',
];

// Flight concept listesi
const flightConcepts = [
  'Economy Class',
  'Business Class',
  'First Class',
  'Premium Economy',
  'Direct Flight',
  'One Stop',
  'Multiple Stops',
  'Domestic',
];

const Filters: React.FC = () => {
  const { filters, updateFilters, searchParams } = useSearch();
  const { t } = useLanguage();

  // TravelType değerini alıyoruz
  const travelType = searchParams.travelType || 'package';

  // State'ler
  const [from, setFrom] = useState<string>(filters.from || searchParams.from || '');
  const [destination, setDestination] = useState<string>(filters.destination || searchParams.destination || '');

  // Kişi sayıları
  const [adults, setAdults] = useState<number>(
    filters.participants?.adults || searchParams.participants?.adults || 2,
  );
  const [children, setChildren] = useState<number>(
    filters.participants?.children || searchParams.participants?.children || 0,
  );
  const [people, setPeople] = useState<number>(adults + children);

  // Nights değişkeni
  const [nights, setNights] = useState<number>(filters.nights || searchParams.nights || 5);

  // Date state'leri
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(() => {
    if (filters.date) return dayjs(filters.date);
    if (searchParams.date) return dayjs(searchParams.date);
    return null;
  });

  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(() => {
    if (startDate) return startDate.add(nights, 'day');
    return null;
  });

  const [stars, setStars] = useState<number[]>(filters.stars || []);
  const [concepts, setConcepts] = useState<string[]>(filters.hotelConcepts || []);
  const [flightConceptsSelected, setFlightConceptsSelected] = useState<string[]>(
    filters.flightConcepts || [],
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
    setFrom(searchParams.from || '');
    setDestination(searchParams.destination || '');

    const newAdults = searchParams.participants?.adults || 2;
    const newChildren = searchParams.participants?.children || 0;
    setAdults(newAdults);
    setChildren(newChildren);
    setPeople(newAdults + newChildren);

    const newNights = searchParams.nights || 5;
    setNights(newNights);

    const newStartDate = searchParams.date ? dayjs(searchParams.date) : null;
    setStartDate(newStartDate);

    if (newStartDate) {
      setEndDate(newStartDate.add(newNights, 'day'));
    } else {
      setEndDate(null);
    }

    updateFilters({
      from: searchParams.from || filters.from || '',
      destination: searchParams.destination || filters.destination || '',
      participants: { adults: newAdults, children: newChildren },
      date: searchParams.date || filters.date || '',
      nights: newNights,
    });
  }, [searchParams, updateFilters]);

  // filters değiştiğinde de state'leri güncelle
  useEffect(() => {
    setFrom(filters.from || '');
    setDestination(filters.destination || '');

    const newAdults = filters.participants?.adults || 2;
    const newChildren = filters.participants?.children || 0;
    setAdults(newAdults);
    setChildren(newChildren);
    setPeople(newAdults + newChildren);

    const newNights = filters.nights || 5;
    setNights(newNights);

    const newStartDate = filters.date ? dayjs(filters.date) : null;
    setStartDate(newStartDate);

    if (newStartDate) {
      setEndDate(newStartDate.add(newNights, 'day'));
    } else {
      setEndDate(null);
    }

    setStars(filters.stars || []);
    setConcepts(filters.hotelConcepts || []);
    setFlightConceptsSelected(filters.flightConcepts || []);
  }, [filters]);

  // Filtreleri sıfırla
  const resetFilters = () => {
    setFrom('');
    setDestination('');
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
      from: '',
      destination: '',
      participants: { adults: 2, children: 0 },
      date: '',
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
    updateFilters({ participants: { adults: newAdults, children: newChildren } });
  };

  const handlePersonPickerClose = () => {
    setShowPersonPicker(false);
  };

  // DateRangePicker için onChange ve onClose fonksiyonları
  const handleDateChange = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
    setStartDate(start);
    setEndDate(end);
    const nightCount = end.diff(start, 'day');
    setNights(nightCount);
    updateFilters({ date: start.format('YYYY-MM-DD'), nights: nightCount });
  };

  const handleDatePickerClose = () => {
    setShowDatePicker(false);
  };

  // NightPicker için onChange ve onClose fonksiyonları
  const handleNightChange = (val: number) => {
    setNights(val);
    if (startDate) {
      setEndDate(startDate.add(val, 'day'));
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
  const visibleConcepts = showMore ? baseConcepts : baseConcepts.slice(0, 5);
  const visibleFlightConcepts = showMoreFlight ? flightConcepts : flightConcepts.slice(0, 5);

  // Otel konseptini çevirme yardımcı fonksiyonu
  const translateConcept = (concept: string): string => {
    const key = concept.replace(/\s+/g, '').replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
    return t('HotelConcepts', key);
  };

  // Uçuş konseptini çevirme yardımcı fonksiyonu
  const translateFlightConcept = (concept: string): string => {
    const key = concept.replace(/\s+/g, '').replace(/(?:^|\s)(\w)/g, (match, p1) => p1.toLowerCase());
    return t('FlightConcepts', key);
  };

  return (
    <div className="filters-container bg-white rounded-lg sticky top-4 w-full lg:w-[268px]">
      {/* 1. GRUP: Filter, From ve Destination */}
      <div className="filters-group">
        <h3 className="filters-title text-sm font-normal text-[#142347]">
          {t('Filters', 'title')}
        </h3>

        {(travelType === 'package' || travelType === 'flight') && (
          <div className="filters-input-wrapper">
            <div className="filter-input filters-input-field flex items-center rounded-md overflow-hidden w-full">
              <div className="flex items-center h-full pl-3 pr-2">
                <Icon name="location" size={16} color="#142347" />
              </div>
              <DestinationDropdown
                value={from}
                onChange={handleFromChange}
                onSelect={handleFromChange}
                placeholder={t('Filters', 'from')}
                mode="city"
                className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
              />
            </div>
          </div>
        )}

        <div>
          <div className="filter-input filters-input-field flex items-center rounded-md overflow-hidden w-full">
            <div className="flex items-center h-full pl-3 pr-2">
              <Icon name="location" size={16} color="#142347" />
            </div>
            <DestinationDropdown
              value={destination}
              onChange={handleDestinationChange}
              onSelect={handleDestinationChange}
              placeholder={t('Filters', 'destination')}
              mode={travelType === 'hotel' ? 'hotel' : 'city'}
              className="h-full rounded-md text-[#142347] placeholder:text-[#142347] w-full border-none focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* 2. GRUP: Participants */}
      <div className="filters-group">
        <label className="filters-label block text-[#142347]">
          {t('Filters', 'participants')}
        </label>
        <div
          ref={peopleFieldRef}
          className="filter-input filters-input-field flex items-center cursor-pointer overflow-hidden w-full"
          onClick={() => setShowPersonPicker(true)}
        >
          <div className="flex items-center h-full pl-3 pr-2">
            <Icon name="users" size={16} color="#142347" />
          </div>
          <div className="flex-1 filters-field-text">
            {t('Filters', 'people', { count: people })}
          </div>
        </div>

        {typeof window !== 'undefined' && showPersonPicker && (
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

      {/* 3. GRUP: Date */}
      <div className="filters-group">
        <label className="filters-label block text-[#142347]">
          {t('Filters', 'date')}
        </label>
        <div
          ref={dateFieldRef}
          className="filter-input filters-input-field flex items-center cursor-pointer overflow-hidden w-full"
          onClick={() => setShowDatePicker(true)}
        >
          <div className="flex items-center h-full pl-3 pr-2">
            <Icon name="calendar" size={16} color="#142347" />
          </div>
          <div className="flex-1 filters-field-text">
            {startDate ? (
              <span>{startDate.format('DD MMM YYYY')}</span>
            ) : (
              <span className="text-gray-400">{t('Filters', 'date')}</span>
            )}
          </div>
        </div>

        {typeof window !== 'undefined' && showDatePicker && (
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

      {/* 4. GRUP: Nights - Sadece package ve hotel için göster */}
      {(travelType === 'package' || travelType === 'hotel') && (
        <div className="filters-group">
          <label className="filters-label block text-[#142347]">
            {t('Filters', 'nights')}
          </label>
          <div
            ref={nightsFieldRef}
            className="filter-input filters-input-field flex items-center cursor-pointer overflow-hidden w-full"
            onClick={() => setShowNightPicker(true)}
          >
            <div className="flex items-center h-full pl-3 pr-2">
              <Icon name="nights" size={16} color="#142347" />
            </div>
            <div className="flex-1 filters-field-text">
              {t('HotelCard', 'nights', { count: nights })}
            </div>
          </div>

          {typeof window !== 'undefined' && showNightPicker && (
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

      {/* 5. GRUP: Hotel Concept */}
      {(travelType === 'package' || travelType === 'hotel') && (
        <div className="filters-group">
          <div className="filters-group-header flex justify-between items-center">
            <label className="filters-label text-sm">
              {t('Filters', 'hotelConcept')}
            </label>
            <Button
              type="link"
              size="small"
              onClick={resetFilters}
              className="filters-reset-button p-0"
            >
              {t('Filters', 'reset')}
            </Button>
          </div>
          <div className={`space-y-2 filters-section ${showMore ? 'expanded' : 'collapsed'}`}>
            {visibleConcepts.map((concept) => {
              const isChecked = concepts.includes(concept);
              return (
                <label key={concept} className="filters-concept-label">
                  <div className="filters-concept-container">
                    <span className={`filters-checkbox-box ${isChecked ? 'active' : 'inactive'}`}>
                      {isChecked && (
                        <Icon name="thick" className="filters-checkbox-check" />
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleConceptChange(concept)}
                      className="hidden"
                    />
                    <span className="filters-field-text text-sm">
                      {translateConcept(concept)}
                    </span>
                  </div>
                </label>
              );
            })}
            {baseConcepts.length > 5 && (
              <div className="filters-more-container" onClick={() => setShowMore(!showMore)}>
                <Icon
                  name="arrow-down"
                  size={16}
                  color="#93A2B7"
                  className={`filters-more-icon ${showMore ? 'transform rotate-180' : ''}`}
                />
                <span className="filters-more-text">
                  {showMore ? t('Filters', 'less') : t('Filters', 'more')}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. GRUP: Flight Concept - Sadece flight için göster */}
      {travelType === 'flight' && (
        <div className="filters-group">
          <div className="filters-group-header flex justify-between items-center">
            <label className="filters-label text-sm">
              {t('Filters', 'flightConcept')}
            </label>
            <Button
              type="link"
              size="small"
              onClick={resetFilters}
              className="filters-reset-button p-0"
            >
              {t('Filters', 'reset')}
            </Button>
          </div>
          <div className={`space-y-2 filters-section ${showMoreFlight ? 'expanded' : 'collapsed'}`}>
            {visibleFlightConcepts.map((concept) => {
              const isChecked = flightConceptsSelected.includes(concept);
              return (
                <label key={concept} className="filters-concept-label">
                  <div className="filters-concept-container">
                    <span className={`filters-checkbox-box ${isChecked ? 'active' : 'inactive'}`}>
                      {isChecked && (
                        <Icon name="thick" className="filters-checkbox-check" />
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleFlightConceptChange(concept)}
                      className="hidden"
                    />
                    <span className="filters-field-text text-sm">
                      {translateFlightConcept(concept)}
                    </span>
                  </div>
                </label>
              );
            })}
            {flightConcepts.length > 5 && (
              <div className="filters-more-container" onClick={() => setShowMoreFlight(!showMoreFlight)}>
                <Icon
                  name="arrow-down"
                  size={16}
                  color="#93A2B7"
                  className={`filters-more-icon ${showMoreFlight ? 'transform rotate-180' : ''}`}
                />
                <span className="filters-more-text">
                  {showMoreFlight ? t('Filters', 'less') : t('Filters', 'more')}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. GRUP: Star */}
      <div>
        <label className="filters-label block text-[#142347]">
          {t('Filters', 'star')}
        </label>
        <div className="filters-star-container">
          {[1, 2, 3, 4, 5].map((starValue) => {
            const isActive = stars.includes(starValue);
            return (
              <div
                key={starValue}
                className="filters-star-row"
                onClick={() => handleStarClick(starValue)}
              >
                <div className={`filters-radio-button ${isActive ? 'active' : 'inactive'}`}>
                  {isActive && <div className="filters-radio-inner" />}
                </div>
                <div className="filters-star-text-container">
                  <Icon name="Star" size={16} color="#ED8936" className="filters-star-icon" />
                  <span className="filters-field-text">
                    {starValue}+
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
