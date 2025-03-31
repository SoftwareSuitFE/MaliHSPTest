// "use client";

// import { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "antd";
// import dayjs from "dayjs";
// import { useSearch } from "@/hooks/useSearch";
// import DestinationDropdown from "../dropdown/DestinationDropdown";
// import DateRangePicker from "../DateRangePicker/DateRangePicker";
// import PersonPicker from "../PersonPicker/personpicker";
// import Icon from "../../../public/icons/Icon";
// import { useLanguage } from "@/hooks/useLanguage";

// const SearchForm = () => {
//   const router = useRouter();
//   const { searchParams, updateSearchParams } = useSearch();
//   const { t } = useLanguage();

//   // Referanslar
//   const formRef = useRef<HTMLDivElement>(null);
//   const dateFieldRef = useRef<HTMLDivElement>(null);
//   const participantsRef = useRef<HTMLDivElement>(null);

//   // Form değerleri
//   const [fromLocation, setFromLocation] = useState(searchParams.from || "");
//   const [destination, setDestination] = useState(
//     searchParams.destination || ""
//   );
//   const [date, setDate] = useState(
//     searchParams.date ? dayjs(searchParams.date) : dayjs("2023-04-15")
//   );
//   const [endDate, setEndDate] = useState(
//     date.add(searchParams.nights || 5, "day")
//   );
//   const [nights, setNights] = useState(searchParams.nights || 5);

//   // Yetişkin/Çocuk sayısı
//   const [adults, setAdults] = useState(searchParams.participants?.adults || 2);
//   const [children, setChildren] = useState(
//     searchParams.participants?.children || 0
//   );
//   const [people, setPeople] = useState(adults + children);

//   // Açılır pencerelerin görünürlük state'leri
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showPersonPicker, setShowPersonPicker] = useState(false);

//   // SEARCH butonuna tıklanınca
//   const handleSearch = (e: React.MouseEvent) => {
//     e.preventDefault();
//     updateSearchParams({
//       from: fromLocation,
//       destination,
//       date: date.format("YYYY-MM-DD"),
//       nights,
//       participants: {
//         adults,
//         children,
//       },
//     });
//     router.push("/search");
//   };

//   // Tarih alanına tıklayınca takvimi aç/kapa
//   const handleDateClick = () => {
//     setShowDatePicker((prev) => !prev);
//   };

//   // Participants alanına tıklayınca PersonPicker aç/kapa
//   const handleParticipantsClick = () => {
//     setShowPersonPicker((prev) => !prev);
//   };

//   // DateRangePicker'dan gelen güncelleme
//   const handleDateChange = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
//     if (dayjs.isDayjs(start) && dayjs.isDayjs(end)) {
//       setDate(start);
//       setEndDate(end);
//       const nightsCount = end.diff(start, "day");
//       setNights(nightsCount);

//       updateSearchParams({
//         date: start.format("YYYY-MM-DD"),
//         nights: nightsCount,
//       });
//     }
//   };

//   // PersonPicker'dan gelen güncelleme
//   const handlePersonChange = (newAdults: number, newChildren: number) => {
//     setAdults(newAdults);
//     setChildren(newChildren);
//     setPeople(newAdults + newChildren);

//     updateSearchParams({
//       participants: {
//         adults: newAdults,
//         children: newChildren,
//       },
//     });
//   };

//   // From / Destination alanları
//   const handleFromChange = (value: string) => {
//     setFromLocation(value);
//     updateSearchParams({ from: value });
//   };

//   const handleDestinationChange = (value: string) => {
//     setDestination(value);
//     updateSearchParams({ destination: value });
//   };

//   // ----- FORMS -----

//   // 1) Package Form: Burada "from" ve "destination" alanları artık DestinationDropdown (mode="city") olarak kullanılıyor.
//   const renderPackageForm = () => (
//     <>
//       {/* From Field */}
//       <div
//         className="flex items-center"
//         style={{
//           width: "170px",
//           height: "40px",
//           gap: "8px",
//           padding: "8px",
//           borderRight: "1px solid #E1E7EF",
//         }}
//       >
//         <div>
//           <Icon name="location" size={24} />
//         </div>
//         <div className="flex flex-col w-full">
//           <DestinationDropdown
//             value={fromLocation}
//             onChange={handleFromChange}
//             onSelect={handleFromChange}
//             placeholder={t("SearchForm", "from")}
//             mode="city"
//             className="w-full font-medium bg-transparent focus:outline-none"
//             style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
//           />
//         </div>
//       </div>

//       {/* Destination Field */}
//       <div
//         className="flex items-center"
//         style={{
//           width: "170px",
//           height: "40px",
//           gap: "8px",
//           padding: "8px",
//           borderRight: "1px solid #E1E7EF",
//         }}
//       >
//         <div>
//           {/* Destination Ikon */}
//           <Icon name="location" size={24} />
//         </div>
//         <div className="flex flex-col w-full">
//           <DestinationDropdown
//             value={destination}
//             onChange={handleDestinationChange}
//             onSelect={handleDestinationChange}
//             placeholder={t("SearchForm", "destination")}
//             mode="city"
//             className="w-full font-medium bg-transparent focus:outline-none"
//             style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
//           />
//         </div>
//       </div>

//       {/* Date Field */}
//       <div
//         ref={dateFieldRef}
//         className="flex items-center relative"
//         style={{
//           width: "115px",
//           height: "40px",
//           gap: "8px",
//           borderRight: "1px solid #E1E7EF",
//         }}
//         onClick={handleDateClick}
//       >
//         <div>
//           {/* Date Ikon */}
//           <Icon name="calendar" size={24} />
//         </div>
//         <div className="flex flex-col w-full pl-2">
//           <div className="text-gray-500 text-xs">{t("SearchForm", "date")}</div>
//           <div className="text-[#142347] font-medium cursor-pointer text-sm">
//             {date.format("D MMM")}
//           </div>
//         </div>
//       </div>

//       {/* Nights Field */}
//       <div
//         className="flex items-center"
//         style={{
//           width: "110px",
//           height: "40px",
//           gap: "8px",
//           borderRight: "1px solid #E1E7EF",
//         }}
//       >
//         <div>
//           {/* Nights Ikon */}
//           <Icon name="nights" size={24} />
//         </div>
//         <div className="flex flex-col w-full pl-2">
//           <div className="text-gray-500 text-xs">
//             {t("SearchForm", "nights")}
//           </div>
//           <div className="text-[#142347] text-sm font-medium">
//             {t("SearchForm", "nightsCount", { count: nights })}
//           </div>
//         </div>
//       </div>

//       {/* Participants Field */}
//       <div
//         ref={participantsRef}
//         className="flex items-center"
//         style={{
//           width: "135px",
//           height: "40px",
//           gap: "8px",
//         }}
//         onClick={handleParticipantsClick}
//       >
//         <div>
//           {/* Participants Ikon */}
//           <Icon name="users" size={24} />
//         </div>
//         <div className="flex flex-col w-full pl-2">
//           <div className="text-gray-500 text-xs">
//             {t("SearchForm", "participants")}
//           </div>
//           <div className="text-[#142347] text-sm font-medium">
//             {t("SearchForm", "people", { count: people })}
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   // 2) Hotel Form
//   const renderHotelForm = () => (
//     <>
//       <div
//         className="flex items-center relative"
//         style={{
//           width: "300px",
//           height: "40px",
//           gap: "8px",
//           padding: "0 8px",
//           borderRight: "1px solid #E1E7EF",
//         }}
//       >
//         <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
//           <Icon name="location" size={24} />
//         </div>
//         <div className="flex-1 pl-8">
//           <DestinationDropdown
//             value={destination}
//             onChange={handleDestinationChange}
//             onSelect={handleDestinationChange}
//             placeholder={t("SearchForm", "destination")}
//             className="font-medium bg-transparent focus:outline-none border-none p-0 text-[#142347]"
//             style={{ fontSize: "14px", fontWeight: "500" }}
//           />
//         </div>
//       </div>

//       <div
//         ref={dateFieldRef}
//         className="flex items-center relative"
//         style={{
//           width: "225px",
//           height: "40px",
//           gap: "8px",
//           borderRight: "1px solid #E1E7EF",
//           paddingLeft: "8px",
//         }}
//         onClick={handleDateClick}
//       >
//         <div>
//           <Icon name="calendar" size={24} />
//         </div>
//         <div className="flex flex-col w-full pl-2">
//           <div className="text-gray-500 text-xs">{t("SearchForm", "date")}</div>
//           <div className="text-[#142347] font-medium cursor-pointer text-sm">
//             {date.format("D MMM")} -{" "}
//             {t("SearchForm", "nightsCount", { count: nights })}
//           </div>
//         </div>
//       </div>

//       <div
//         ref={participantsRef}
//         className="flex items-center"
//         style={{
//           width: "180px",
//           height: "40px",
//           gap: "8px",
//         }}
//         onClick={handleParticipantsClick}
//       >
//         <div>
//           <Icon name="users" size={24} />
//         </div>
//         <div className="flex flex-col w-full pl-2">
//           <div className="text-gray-500 text-xs">
//             {t("SearchForm", "participants")}
//           </div>
//           <div className="text-[#142347] text-sm font-medium">
//             {t("SearchForm", "people", { count: people })}
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   // 3) Flight Form
//   const renderFlightForm = () => (
//     <>
//       {/* From Field */}
//       <div
//         className="flex items-center"
//         style={{
//           width: "170px",
//           height: "40px",
//           gap: "8px",
//           padding: "8px",
//           borderRight: "1px solid #E1E7EF",
//         }}
//       >
//         <div>
//           <Icon name="location" size={24} />
//         </div>
//         <div className="flex flex-col w-full">
//           <DestinationDropdown
//             value={fromLocation}
//             onChange={handleFromChange}
//             onSelect={handleFromChange}
//             placeholder={t("SearchForm", "from")}
//             mode="city"
//             className="w-full font-medium bg-transparent focus:outline-none"
//             style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
//           />
//         </div>
//       </div>

//       {/* To Field */}
//       <div
//         className="flex items-center"
//         style={{
//           width: "170px",
//           height: "40px",
//           gap: "8px",
//           padding: "8px",
//           borderRight: "1px solid #E1E7EF",
//         }}
//       >
//         <div>
//           <Icon name="location" size={24} />
//         </div>
//         <div className="flex flex-col w-full">
//           <DestinationDropdown
//             value={destination}
//             onChange={handleDestinationChange}
//             onSelect={handleDestinationChange}
//             placeholder={t("SearchForm", "to")}
//             mode="city"
//             className="w-full font-medium bg-transparent focus:outline-none"
//             style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
//           />
//         </div>
//       </div>

//       {/* Date Range Field */}
//       <div
//         ref={dateFieldRef}
//         className="flex items-center relative"
//         style={{
//           width: "230px",
//           height: "40px",
//           gap: "8px",
//           borderRight: "1px solid #E1E7EF",
//           paddingLeft: "8px",
//         }}
//         onClick={handleDateClick}
//       >
//         <div>
//           <Icon name="calendar" size={24} />
//         </div>
//         <div className="flex flex-col w-full pl-2">
//           <div className="text-gray-500 text-xs">{t("SearchForm", "date")}</div>
//           <div className="text-[#142347] font-medium cursor-pointer text-sm">
//             {date.format("D MMM")} - {endDate.format("D MMM")}
//           </div>
//         </div>
//       </div>

//       {/* Participants Field */}
//       <div
//         ref={participantsRef}
//         className="flex items-center"
//         style={{
//           width: "135px",
//           height: "40px",
//           gap: "8px",
//         }}
//         onClick={handleParticipantsClick}
//       >
//         <div>
//           <Icon name="users" size={24} />
//         </div>
//         <div className="flex flex-col w-full pl-2">
//           <div className="text-gray-500 text-xs">
//             {t("SearchForm", "participants")}
//           </div>
//           <div className="text-[#142347] text-sm font-medium">
//             {t("SearchForm", "people", { count: people })}
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   const renderFormContent = () => {
//     switch (searchParams.travelType) {
//       case "hotel":
//         return renderHotelForm();
//       case "flight":
//         return renderFlightForm();
//       case "package":
//       default:
//         return renderPackageForm();
//     }
//   };

//   return (
//     <div
//       ref={formRef}
//       className="flex items-center justify-between bg-white/16 backdrop-blur-sm rounded-lg shadow-lg w-full"
//       style={{
//         width: "930px",
//         height: "92px",
//         padding: "16px",
//         gap: "8px",
//         borderRadius: "8px",
//         backdropFilter: "blur(4px)",
//         boxShadow: "0px 0px 32px 0px #00000029",
//       }}
//     >
//       {/* Form içerikleri */}
//       <div
//         className="flex items-center justify-between bg-white rounded-lg relative"
//         style={{
//           width: "748px",
//           height: "60px",
//           padding: "8px",
//           gap: "8px",
//           borderRadius: "8px",
//         }}
//       >
//         {renderFormContent()}
//       </div>

//       {/* SEARCH Button */}
//       <Button
//         type="primary"
//         onClick={handleSearch}
//         className="h-full border-0 hover:bg-[#d88630] text-white font-bold uppercase flex items-center justify-center"
//         style={{
//           width: "142px",
//           height: "60px",
//           borderRadius: "8px",
//           backgroundColor: "#ED8936",
//           fontSize: "16px",
//           fontWeight: "700",
//         }}
//       >
//         {t("SearchForm", "search")}
//       </Button>

//       {/* DateRangePicker */}
//       {showDatePicker && (
//         <DateRangePicker
//           startDate={date}
//           endDate={endDate}
//           onChange={handleDateChange}
//           onClose={() => setShowDatePicker(false)}
//           visible={showDatePicker}
//           triggerRef={dateFieldRef}
//         />
//       )}

//       {/* PersonPicker */}
//       {showPersonPicker && (
//         <PersonPicker
//           adults={adults}
//           children={children}
//           onChange={handlePersonChange}
//           onClose={() => setShowPersonPicker(false)}
//           visible={showPersonPicker}
//           triggerRef={participantsRef}
//         />
//       )}
//     </div>
//   );
// };

// export default SearchForm;





// src/components/home/searchForm.tsx

"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import dayjs from "dayjs";
import { useSearch } from "@/hooks/useSearch";
import DestinationDropdown from "../dropdown/DestinationDropdown";
import DateRangePicker from "../DateRangePicker/DateRangePicker";
import PersonPicker from "../PersonPicker/personpicker";
import NightPicker from "@/components/NightPicker/NightPicker"; // NightPicker eklendi
import Icon from "../../../public/icons/Icon";
import { useLanguage } from "@/hooks/useLanguage";

const SearchForm = () => {
  const router = useRouter();
  const { searchParams, updateSearchParams } = useSearch();
  const { t } = useLanguage();

  // Referanslar
  const formRef = useRef<HTMLDivElement>(null);
  const dateFieldRef = useRef<HTMLDivElement>(null);
  const participantsRef = useRef<HTMLDivElement>(null);
  const nightsFieldRef = useRef<HTMLDivElement>(null); // Yeni ref

  // Form değerleri
  const [fromLocation, setFromLocation] = useState(searchParams.from || "");
  const [destination, setDestination] = useState(
    searchParams.destination || ""
  );
  const [date, setDate] = useState(
    searchParams.date ? dayjs(searchParams.date) : dayjs("2023-04-15")
  );
  const [endDate, setEndDate] = useState(
    date.add(searchParams.nights || 5, "day")
  );
  const [nights, setNights] = useState(searchParams.nights || 5);

  // Yetişkin/Çocuk sayısı
  const [adults, setAdults] = useState(searchParams.participants?.adults || 2);
  const [children, setChildren] = useState(
    searchParams.participants?.children || 0
  );
  const [people, setPeople] = useState(adults + children);

  // Açılır pencerelerin görünürlük state'leri
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showPersonPicker, setShowPersonPicker] = useState(false);
  const [showNightPicker, setShowNightPicker] = useState(false); // Yeni state

  // SEARCH butonuna tıklanınca
  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    updateSearchParams({
      from: fromLocation,
      destination,
      date: date.format("YYYY-MM-DD"),
      nights,
      participants: {
        adults,
        children,
      },
    });
    router.push("/search");
  };

  // Tarih alanına tıklayınca takvimi aç/kapa
  const handleDateClick = () => {
    setShowDatePicker((prev) => !prev);
  };

  // Participants alanına tıklayınca PersonPicker aç/kapa
  const handleParticipantsClick = () => {
    setShowPersonPicker((prev) => !prev);
  };
  
  // Nights alanına tıklayınca NightPicker aç/kapa
  const handleNightsClick = () => {
    setShowNightPicker((prev) => !prev);
  };

  // DateRangePicker'dan gelen güncelleme
  const handleDateChange = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
    if (dayjs.isDayjs(start) && dayjs.isDayjs(end)) {
      setDate(start);
      setEndDate(end);
      const nightsCount = end.diff(start, "day");
      setNights(nightsCount);

      updateSearchParams({
        date: start.format("YYYY-MM-DD"),
        nights: nightsCount,
      });
    }
  };

  // PersonPicker'dan gelen güncelleme
  const handlePersonChange = (newAdults: number, newChildren: number) => {
    setAdults(newAdults);
    setChildren(newChildren);
    setPeople(newAdults + newChildren);

    updateSearchParams({
      participants: {
        adults: newAdults,
        children: newChildren,
      },
    });
  };
  
  // NightPicker'dan gelen güncelleme
  const handleNightChange = (val: number) => {
    setNights(val);
    // endDate'i de güncelle
    if (date) {
      setEndDate(date.add(val, 'day'));
    }
    updateSearchParams({ nights: val });
  };

  // From / Destination alanları
  const handleFromChange = (value: string) => {
    setFromLocation(value);
    updateSearchParams({ from: value });
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    updateSearchParams({ destination: value });
  };

  // ----- FORMS -----

  // 1) Package Form: Burada "from" ve "destination" alanları artık DestinationDropdown (mode="city") olarak kullanılıyor.
  const renderPackageForm = () => (
    <>
      {/* From Field */}
      <div
        className="flex items-center"
        style={{
          width: "170px",
          height: "40px",
          gap: "8px",
          padding: "8px",
          borderRight: "1px solid #E1E7EF",
        }}
      >
        <div>
          <Icon name="location" size={24}/>
        </div>
        <div className="flex flex-col w-full">
          <DestinationDropdown
            value={fromLocation}
            onChange={handleFromChange}
            onSelect={handleFromChange}
            placeholder={t("SearchForm", "from")}
            mode="city"
            className="w-full font-medium bg-transparent focus:outline-none"
            style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
          />
        </div>
      </div>

      {/* Destination Field */}
      <div
        className="flex items-center"
        style={{
          width: "170px",
          height: "40px",
          gap: "8px",
          padding: "8px",
          borderRight: "1px solid #E1E7EF",
        }}
      >
        <div>
          {/* Destination Ikon */}
          <Icon name="search" size={24}/>
        </div>
        <div className="flex flex-col w-full">
          <DestinationDropdown
            value={destination}
            onChange={handleDestinationChange}
            onSelect={handleDestinationChange}
            placeholder={t("SearchForm", "destination")}
            mode="city"
            className="w-full font-medium bg-transparent focus:outline-none"
            style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
          />
        </div>
      </div>

      {/* Date Field */}
      <div
        ref={dateFieldRef}
        className="flex items-center relative cursor-pointer"
        style={{
          width: "115px",
          height: "40px",
          gap: "8px",
          borderRight: "1px solid #E1E7EF",
        }}
        onClick={handleDateClick}
      >
        <div>
          {/* Date Ikon */}
          <Icon name="calendar" size={24}/>
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="text-gray-500 text-xs">{t("SearchForm", "date")}</div>
          <div className="text-[#142347] font-medium cursor-pointer text-sm">
            {date.format("D MMM")}
          </div>
        </div>
      </div>

      {/* Nights Field - NightPicker ile değiştirildi */}
      <div
        ref={nightsFieldRef}
        className="flex items-center cursor-pointer"
        style={{
          width: "110px",
          height: "40px",
          gap: "8px",
          borderRight: "1px solid #E1E7EF",
        }}
        onClick={handleNightsClick}
      >
        <div>
          {/* Nights Ikon */}
          <Icon name="nights" size={24}/>
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="text-gray-500 text-xs">{t("SearchForm", "nights")}</div>
          <div className="text-[#142347] text-sm font-medium">
            {t("SearchForm", "nightsCount", { count: nights })}
          </div>
        </div>
      </div>

      {/* Participants Field */}
      <div
        ref={participantsRef}
        className="flex items-center cursor-pointer"
        style={{
          width: "135px",
          height: "40px",
          gap: "8px",
        }}
        onClick={handleParticipantsClick}
      >
        <div>
          {/* Participants Ikon */}
          <Icon name="users" size={24} />
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="text-gray-500 text-xs">{t("SearchForm", "participants")}</div>
          <div className="text-[#142347] text-sm font-medium">
            {t("SearchForm", "people", { count: people })}
          </div>
        </div>
      </div>
    </>
  );

  // 2) Hotel Form
  const renderHotelForm = () => (
    <>
      <div
        className="flex items-center relative"
        style={{
          width: "300px",
          height: "40px",
          gap: "8px",
          padding: "0 8px",
          borderRight: "1px solid #E1E7EF",
        }}
      >
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
          <Icon name="location" size={24}/>
        </div>
        <div className="flex-1 pl-8">
          <DestinationDropdown
            value={destination}
            onChange={handleDestinationChange}
            onSelect={handleDestinationChange}
            placeholder={t("SearchForm", "destination")}
            className="font-medium bg-transparent focus:outline-none border-none p-0 text-[#142347]"
            style={{ fontSize: "14px", fontWeight: "500" }}
          />
        </div>
      </div>

      <div
        ref={dateFieldRef}
        className="flex items-center relative"
        style={{
          width: "225px",
          height: "40px",
          gap: "8px",
          borderRight: "1px solid #E1E7EF",
          paddingLeft: "8px",
        }}
        onClick={handleDateClick}
      >
        <div>
          <Icon name="calendar" size={24}/>
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="text-gray-500 text-xs">{t("SearchForm", "date")}</div>
          <div className="text-[#142347] font-medium cursor-pointer text-sm">
            {date.format("D MMM")} - {t("SearchForm", "nightsCount", { count: nights })}
          </div>
        </div>
      </div>

      <div
        ref={participantsRef}
        className="flex items-center"
        style={{
          width: "180px",
          height: "40px",
          gap: "8px",
        }}
        onClick={handleParticipantsClick}
      >
        <div>
          <Icon name="users" size={24}/>
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="text-gray-500 text-xs">{t("SearchForm", "participants")}</div>
          <div className="text-[#142347] text-sm font-medium">
            {t("SearchForm", "people", { count: people })}
          </div>
        </div>
      </div>
    </>
  );

  // 3) Flight Form
  const renderFlightForm = () => (
    <>
      {/* From Field */}
      <div
        className="flex items-center"
        style={{
          width: "170px",
          height: "40px",
          gap: "8px",
          padding: "8px",
          borderRight: "1px solid #E1E7EF",
        }}
      >
        <div>
          <Icon name="location" size={24}/>
        </div>
        <div className="flex flex-col w-full">
          <DestinationDropdown
            value={fromLocation}
            onChange={handleFromChange}
            onSelect={handleFromChange}
            placeholder={t("SearchForm", "from")}
            mode="city"
            className="w-full font-medium bg-transparent focus:outline-none"
            style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
          />
        </div>
      </div>

      {/* To Field */}
      <div
        className="flex items-center"
        style={{
          width: "170px",
          height: "40px",
          gap: "8px",
          padding: "8px",
          borderRight: "1px solid #E1E7EF",
        }}
      >
        <div>
          <Icon name="location" size={24}/>
        </div>
        <div className="flex flex-col w-full">
          <DestinationDropdown
            value={destination}
            onChange={handleDestinationChange}
            onSelect={handleDestinationChange}
            placeholder={t("SearchForm", "to")}
            mode="city"
            className="w-full font-medium bg-transparent focus:outline-none"
            style={{ color: "#142347", fontSize: "14px", fontWeight: "500" }}
          />
        </div>
      </div>

      {/* Date Range Field */}
      <div
        ref={dateFieldRef}
        className="flex items-center relative"
        style={{
          width: "230px",
          height: "40px",
          gap: "8px",
          borderRight: "1px solid #E1E7EF",
          paddingLeft: "8px",
        }}
        onClick={handleDateClick}
      >
        <div>
          <Icon name="calendar" size={24}/>
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="text-gray-500 text-xs">{t("SearchForm", "date")}</div>
          <div className="text-[#142347] font-medium cursor-pointer text-sm">
            {date.format("D MMM")} - {endDate.format("D MMM")}
          </div>
        </div>
      </div>

      {/* Participants Field */}
      <div
        ref={participantsRef}
        className="flex items-center"
        style={{
          width: "135px",
          height: "40px",
          gap: "8px",
        }}
        onClick={handleParticipantsClick}
      >
        <div>
          <Icon name="users" size={24}/>
        </div>
        <div className="flex flex-col w-full pl-2">
          <div className="text-gray-500 text-xs">{t("SearchForm", "participants")}</div>
          <div className="text-[#142347] text-sm font-medium">
            {t("SearchForm", "people", { count: people })}
          </div>
        </div>
      </div>
    </>
  );

  const renderFormContent = () => {
    switch (searchParams.travelType) {
      case "hotel":
        return renderHotelForm();
      case "flight":
        return renderFlightForm();
      case "package":
      default:
        return renderPackageForm();
    }
  };

  return (
    <div
      ref={formRef}
      className="flex items-center justify-between bg-white/16 backdrop-blur-sm rounded-lg shadow-lg w-full"
      style={{
        width: "930px",
        height: "92px",
        padding: "16px",
        gap: "8px",
        borderRadius: "8px",
        backdropFilter: "blur(4px)",
        boxShadow: "0px 0px 32px 0px #00000029",
      }}
    >
      {/* Form içerikleri */}
      <div
        className="flex items-center justify-between bg-white rounded-lg relative"
        style={{
          width: "748px",
          height: "60px",
          padding: "8px",
          gap: "8px",
          borderRadius: "8px",
        }}
      >
        {renderFormContent()}
      </div>

      {/* SEARCH Button */}
      <Button
        type="primary"
        onClick={handleSearch}
        className="h-full border-0 hover:bg-[#d88630] text-white font-bold uppercase flex items-center justify-center"
        style={{
          width: "142px",
          height: "60px",
          borderRadius: "8px",
          backgroundColor: "#ED8936",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        {t("SearchForm", "search")}
      </Button>

      {/* DateRangePicker */}
      {typeof window !== 'undefined' && showDatePicker && (
        <DateRangePicker
          startDate={date}
          endDate={endDate}
          onChange={handleDateChange}
          onClose={() => setShowDatePicker(false)}
          visible={showDatePicker}
          triggerRef={dateFieldRef}
        />
      )}

      {/* PersonPicker */}
      {typeof window !== 'undefined' && showPersonPicker && (
        <PersonPicker
          adults={adults}
          children={children}
          onChange={handlePersonChange}
          onClose={() => setShowPersonPicker(false)}
          visible={showPersonPicker}
          triggerRef={participantsRef}
        />
      )}
      
      {/* NightPicker */}
      {typeof window !== 'undefined' && showNightPicker && (
        <NightPicker
          nights={nights}
          onChange={handleNightChange}
          onClose={() => setShowNightPicker(false)}
          visible={showNightPicker}
          triggerRef={nightsFieldRef}
        />
      )}
    </div>
  );
};

export default SearchForm;
