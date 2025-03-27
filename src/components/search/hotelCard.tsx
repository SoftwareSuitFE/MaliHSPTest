// "use client";

// import React from "react";
// import { Hotel } from "../../../data/mockData";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   ClockCircleOutlined,
//   TagsOutlined,
// } from "@ant-design/icons";
// import { Button } from "antd";

// interface HotelCardProps {
//   hotel: Hotel;
// }

// const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
//   return (
//     <div
//       className="flex flex-col lg:flex-row gap-2 w-full"
//       style={{ fontFamily: "Inter" }}
//     >
//       {/* Sol: Görsel */}
//       <div className="lg:w-[363px] xl:flex-1 w-full h-[268px] rounded-[8px] overflow-hidden">
//         <img
//           src={hotel.image}
//           alt={hotel.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Sağ: Content */}
//       <div
//         className="lg:w-[457px] xl:flex-1 w-full border border-[#F0F4F8] rounded-[8px] bg-white p-6 flex flex-col gap-2"
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst Row */}
//         <div
//           className="flex flex-col gap-2"
//           style={{ width: "409px", height: "73px" }}
//         >
//           <h3 className="text-xl font-bold text-[#142347] m-0">{hotel.name}</h3>
//           <div className="flex items-center gap-2">
//             <div className="flex text-yellow-500" style={{ gap: "4px" }}>
//               {Array.from({ length: hotel.stars }).map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <span
//               style={{
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#142347",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {hotel.location}
//             </span>
//           </div>
//         </div>

//         {/* Alt Row */}
//         <div
//           className="flex"
//           style={{ width: "409px", height: "142px", gap: "8px" }}
//         >
//           {/* Sol: List */}
//           <div
//             style={{
//               width: "200.5px",
//               height: "142px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               paddingTop: "16px",
//               paddingBottom: "16px",
//             }}
//           >
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <UserOutlined />
//               <span>
//                 {hotel.adults} Adults - {hotel.children} Child
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <CalendarOutlined />
//               <span>{hotel.date}</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <ClockCircleOutlined />
//               <span>{hotel.nights} Nights</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <TagsOutlined />
//               <span>{hotel.concept}</span>
//             </div>
//           </div>

//           {/* Sağ: Price */}
//           <div
//             style={{
//               width: "200.5px",
//               height: "142px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               paddingTop: "16px",
//               paddingBottom: "16px",
//               paddingLeft: "24px",
//               borderLeft: "1px solid #F0F4F8",
//             }}
//           >
//             <div
//               style={{ display: "flex", flexDirection: "column", gap: "8px" }}
//             >
//               <div style={{ textAlign: "right" }}>
//                 <span
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "14px",
//                     lineHeight: "100%",
//                     textDecoration: "line-through",
//                     color: "#93A2B7",
//                   }}
//                 >
//                   {hotel.price + 200}€
//                 </span>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "baseline",
//                   gap: "4px",
//                   justifyContent: "flex-end",
//                 }}
//               >
//                 <span
//                   style={{
//                     fontWeight: 400,
//                     fontSize: "12px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   from PP
//                 </span>
//                 <span
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "20px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   {hotel.price}€
//                 </span>
//               </div>
//             </div>
//             <Button
//               style={{
//                 width: "176.5px",
//                 height: "45px",
//                 borderRadius: "4px",
//                 background: "#ED8936",
//                 border: "none",
//                 fontWeight: 700,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#FFFFFF",
//                 textAlign: "center",
//               }}
//             >
//               Continue
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;

// "use client";

// import React from "react";
// import { Hotel } from "../../../data/mockData";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   ClockCircleOutlined,
//   TagsOutlined,
// } from "@ant-design/icons";
// import { Button } from "antd";

// interface HotelCardProps {
//   hotel: Hotel;
// }

// const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         lg:flex-row
//         gap-2
//         w-full
//       "
//       style={{ fontFamily: "Inter" }}
//     >
//       {/* Sol: Görsel */}
//       <div
//         className="
//           lg:w-[363px]
//           xl:flex-1
//           w-full
//           h-[268px]
//           rounded-[8px]
//           overflow-hidden
//         "
//       >
//         <img
//           src={hotel.image}
//           alt={hotel.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Sağ: Content */}
//       <div
//         className="
//           lg:w-[457px]
//           xl:flex-1
//           w-full
//           border
//           border-[#F0F4F8]
//           rounded-[8px]
//           bg-white
//           p-6
//           flex
//           flex-col
//           gap-4
//         "
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst Row */}
//         <div className="flex flex-col gap-2">
//           <h3 className="text-xl font-bold text-[#142347] m-0">
//             {hotel.name}
//           </h3>
//           <div className="flex items-center gap-2">
//             <div className="flex text-yellow-500" style={{ gap: "4px" }}>
//               {Array.from({ length: hotel.stars }).map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <span
//               style={{
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#142347",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {hotel.location}
//             </span>
//           </div>
//         </div>

//         {/* Alt Row: Ortada çizgi, solda özellikler, sağda fiyat+buton */}
//         <div className="flex flex-col lg:flex-row gap-6 flex-1">
//           {/* Sol (Özellikler) */}
//           <div className="flex flex-col w-full lg:w-1/2 border-r border-[#F0F4F8] pr-6 justify-between">
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <UserOutlined />
//               <span>
//                 {hotel.adults} Adults - {hotel.children} Child
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <CalendarOutlined />
//               <span>{hotel.date}</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <ClockCircleOutlined />
//               <span>{hotel.nights} Nights</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <TagsOutlined />
//               <span>{hotel.concept}</span>
//             </div>
//           </div>

//           {/* Sağ (Fiyat + Buton) */}
//           <div className="flex flex-col w-full lg:w-1/2 pl-6 justify-between items-end">
//             {/* Fiyatlar */}
//             <div className="flex flex-col items-end">
//               {/* Eski Fiyat (line-through) */}
//               <span
//                 style={{
//                   fontWeight: 700,
//                   fontSize: "14px",
//                   lineHeight: "100%",
//                   textDecoration: "line-through",
//                   color: "#93A2B7",
//                 }}
//               >
//                 {hotel.price + 200}€
//               </span>
//               {/* from PP + Yeni Fiyat */}
//               <div className="flex items-baseline gap-2 justify-end">
//                 <span
//                   style={{
//                     fontWeight: 400,
//                     fontSize: "12px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   from PP
//                 </span>
//                 <span
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "20px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   {hotel.price}€
//                 </span>
//               </div>
//             </div>

//             {/* Buton sağda */}
//             <Button
//               style={{
//                 width: "176.5px",
//                 height: "45px",
//                 borderRadius: "4px",
//                 background: "#ED8936",
//                 border: "none",
//                 fontWeight: 700,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#FFFFFF",
//                 textAlign: "center",
//               }}
//             >
//               Continue
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;

// "use client";

// import React from "react";
// import { Hotel } from "../../../data/mockData";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   ClockCircleOutlined,
//   TagsOutlined,
// } from "@ant-design/icons";
// import { Button } from "antd";

// interface HotelCardProps {
//   hotel: Hotel;
// }

// const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         lg:flex-row  /* 1024px ve üstü: resim ve content yan yana */
//         gap-2
//         w-full
//       "
//       style={{ fontFamily: "Inter" }}
//     >
//       {/* Sol: Görsel */}
//       <div
//         className="
//           w-full
//           h-[268px]
//           rounded-[8px]
//           overflow-hidden
//           lg:w-[363px]  /* 1024–1279 arası resim sabit 363px */
//           xl:flex-1     /* 1280+ istersek resim de genişleyebilir */
//         "
//       >
//         <img
//           src={hotel.image}
//           alt={hotel.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Sağ: Content */}
//       <div
//         className="
//           w-full
//           border
//           border-[#F0F4F8]
//           rounded-[8px]
//           bg-white
//           p-6
//           flex
//           flex-col
//           gap-4
//           lg:w-[457px]  /* 1024–1279 arası content sabit 457px */
//           xl:flex-1     /* 1280+ content de genişleyebilir */
//         "
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst Row */}
//         <div className="flex flex-col gap-2">
//           <h3 className="text-xl font-bold text-[#142347] m-0">
//             {hotel.name}
//           </h3>
//           <div className="flex items-center gap-2">
//             <div className="flex text-yellow-500" style={{ gap: "4px" }}>
//               {Array.from({ length: hotel.stars }).map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <span
//               style={{
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#142347",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {hotel.location}
//             </span>
//           </div>
//         </div>

//         {/* Alt Row: Özellikler (sol) + Fiyat/Buton (sağ) */}
//         <div
//           className="
//             flex
//             flex-col
//             md:flex-row /* 768px ve üstü: yatay yerleşim */
//             gap-6
//             flex-1
//           "
//         >
//           {/* Sol: Özellikler */}
//           <div
//             className="
//               flex
//               flex-col
//               border-r
//               border-[#F0F4F8]
//               pr-6
//               w-full
//               md:w-1/2
//               justify-between
//             "
//           >
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <UserOutlined />
//               <span>
//                 {hotel.adults} Adults - {hotel.children} Child
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <CalendarOutlined />
//               <span>{hotel.date}</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <ClockCircleOutlined />
//               <span>{hotel.nights} Nights</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <TagsOutlined />
//               <span>{hotel.concept}</span>
//             </div>
//           </div>

//           {/* Sağ: Fiyat + Buton */}
//           <div
//             className="
//               flex
//               flex-col
//               w-full
//               md:w-1/2
//               pl-6
//               justify-between
//               items-end
//             "
//           >
//             {/* Fiyatlar */}
//             <div className="flex flex-col items-end">
//               {/* Eski Fiyat */}
//               <span
//                 style={{
//                   fontWeight: 700,
//                   fontSize: "14px",
//                   lineHeight: "100%",
//                   textDecoration: "line-through",
//                   color: "#93A2B7",
//                 }}
//               >
//                 {hotel.price + 200}€
//               </span>
//               {/* from PP + Yeni Fiyat */}
//               <div className="flex items-baseline gap-2 justify-end">
//                 <span
//                   style={{
//                     fontWeight: 400,
//                     fontSize: "12px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   from PP
//                 </span>
//                 <span
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "20px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   {hotel.price}€
//                 </span>
//               </div>
//             </div>

//             {/* Buton sağda */}
//             <Button
//               style={{
//                 width: "176.5px",
//                 height: "45px",
//                 borderRadius: "4px",
//                 background: "#ED8936",
//                 border: "none",
//                 fontWeight: 700,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#FFFFFF",
//                 textAlign: "center",
//               }}
//             >
//               Continue
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;

// "use client";

// import React from "react";
// import { Hotel } from "../../../data/mockData";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   ClockCircleOutlined,
//   TagsOutlined,
// } from "@ant-design/icons";
// import { Button } from "antd";

// interface HotelCardProps {
//   hotel: Hotel;
// }

// const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         lg:flex-row  /* 1024px+ => resim + içerik yatay */
//         gap-2
//         w-full
//       "
//       style={{ fontFamily: "Inter" }}
//     >
//       {/* Resim */}
//       <div
//         className="
//           w-full
//           h-[268px]
//           rounded-[8px]
//           overflow-hidden
//           lg:w-[363px]   /* 1024–1279 sabit genişlik */
//           xl:flex-1      /* 1280+ resim genişleyebilir */
//         "
//       >
//         <img
//           src={hotel.image}
//           alt={hotel.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* İçerik */}
//       <div
//         className="
//           w-full
//           border
//           border-[#F0F4F8]
//           rounded-[8px]
//           bg-white
//           p-6
//           flex
//           flex-col
//           gap-4
//           lg:w-[457px]  /* 1024–1279 sabit genişlik */
//           xl:flex-1     /* 1280+ içerik genişleyebilir */
//         "
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst Kısım: Otel Adı, Yıldız, Konum */}
//         <div className="flex flex-col gap-2">
//           <h3 className="text-xl font-bold text-[#142347] m-0">{hotel.name}</h3>
//           <div className="flex items-center gap-2">
//             <div className="flex text-yellow-500" style={{ gap: "4px" }}>
//               {Array.from({ length: hotel.stars }).map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <span
//               style={{
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#142347",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {hotel.location}
//             </span>
//           </div>
//         </div>

//         {/* Alt Kısım: 2 bölüm (özellikler + fiyat/buton) */}
//         <div
//           className="
//             flex
//             flex-col
//             md:flex-row /* 768px+ => yan yana */
//             gap-6
//             flex-1
//           "
//         >
//           {/* Özellikler */}
//           <div
//             className="
//               w-full
//               md:w-1/2
//               md:border-r
//               border-[#F0F4F8]
//               md:pr-6
//               flex
//               flex-col
//               gap-2
//             "
//           >
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <UserOutlined />
//               <span>
//                 {hotel.adults} Adults - {hotel.children} Child
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <CalendarOutlined />
//               <span>{hotel.date}</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <ClockCircleOutlined />
//               <span>{hotel.nights} Nights</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <TagsOutlined />
//               <span>{hotel.concept}</span>
//             </div>
//           </div>

//           {/* Fiyat + Buton */}
//           <div
//             className="
//               w-full
//               md:w-1/2
//               md:pl-6
//               flex
//               flex-col
//               justify-between
//               items-stretch
//               md:items-end
//               gap-2
//             "
//           >
//             {/* Fiyatlar */}
//             <div className="flex flex-col items-end w-full">
//               <span
//                 style={{
//                   fontWeight: 700,
//                   fontSize: "14px",
//                   lineHeight: "100%",
//                   textDecoration: "line-through",
//                   color: "#93A2B7",
//                 }}
//               >
//                 {hotel.price + 200}€
//               </span>
//               <div className="flex items-baseline gap-2 justify-end">
//                 <span
//                   style={{
//                     fontWeight: 400,
//                     fontSize: "12px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   from PP
//                 </span>
//                 <span
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "20px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   {hotel.price}€
//                 </span>
//               </div>
//             </div>

//             {/* Buton => mobil tam genişlik, 768px+ sabit */}
//             <Button
//               className="md:mt-0"
//               style={{
//                 width: "100%", // 0–767px: tam genişlik
//                 height: "45px",
//                 borderRadius: "4px",
//                 background: "#ED8936",
//                 border: "none",
//                 fontWeight: 700,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#FFFFFF",
//                 textAlign: "center",
//               }}
//             >
//               Continue
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;




// "use client";

// import React, { JSX } from "react";
// import { Hotel } from "../../../data/mockData";
// import {
//   UserOutlined,
//   CalendarOutlined,
//   ClockCircleOutlined,
//   TagsOutlined,
// } from "@ant-design/icons";
// import { Button } from "antd";

// interface HotelCardProps {
//   hotel: Hotel;
// }

// const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
//   return (
//     <div
//       className="
//         flex
//         flex-col
//         lg:flex-row  /* 1024px ve üstü: resim + content yan yana */
//         gap-2
//         w-full
//       "
//       style={{ fontFamily: "Inter" }}
//     >
//       {/* Sol: Görsel */}
//       <div
//         className="
//           w-full
//           h-[268px]
//           rounded-[8px]
//           overflow-hidden
//           lg:w-[363px]   /* 1024–1279 arası resim sabit 363px */
//           xl:flex-1      /* 1280+ isterseniz resim de genişleyebilir */
//         "
//       >
//         <img
//           src={hotel.image}
//           alt={hotel.name}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Sağ: Content */}
//       <div
//         className="
//           w-full
//           border
//           border-[#F0F4F8]
//           rounded-[8px]
//           bg-white
//           p-6
//           flex
//           flex-col
//           gap-4
//           lg:w-[457px]   /* 1024–1279 arası content sabit 457px */
//           xl:flex-1      /* 1280+ content de genişleyebilir */
//         "
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst Row */}
//         <div className="flex flex-col gap-2">
//           <h3 className="text-xl font-bold text-[#142347] m-0">{hotel.name}</h3>
//           <div className="flex items-center gap-2">
//             <div className="flex text-yellow-500" style={{ gap: "4px" }}>
//               {Array.from({ length: hotel.stars }).map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>
//             <span
//               style={{
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#142347",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {hotel.location}
//             </span>
//           </div>
//         </div>

//         {/* Alt Row: Özellikler (sol) + Fiyat/Buton (sağ) */}
//         <div
//           className="
//             flex
//             flex-col
//             md:flex-row /* 768px ve üstü: yatay yerleşim */
//             gap-6
//             flex-1
//           "
//         >
//           {/* Sol: Özellikler */}
//           <div
//             className="
//               flex
//               flex-col
//               border-r
//               border-[#F0F4F8]
//               pr-6
//               w-full
//               md:w-1/2
//               justify-between
//             "
//           >
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <UserOutlined />
//               <span>
//                 {hotel.adults} Adults - {hotel.children} Child
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <CalendarOutlined />
//               <span>{hotel.date}</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <ClockCircleOutlined />
//               <span>{hotel.nights} Nights</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <TagsOutlined />
//               <span>{hotel.concept}</span>
//             </div>
//           </div>

//           {/* Sağ: Fiyat + Buton */}
//           <div
//             className="
//               flex
//               flex-col
//               w-full
//               md:w-1/2
//               pl-6
//               justify-between
//               items-end
//             "
//           >
//             {/* Fiyatlar */}
//             <div className="flex flex-col items-end">
//               {/* Eski Fiyat */}
//               <span
//                 style={{
//                   fontWeight: 700,
//                   fontSize: "14px",
//                   lineHeight: "100%",
//                   textDecoration: "line-through",
//                   color: "#93A2B7",
//                 }}
//               >
//                 {hotel.price + 200}€
//               </span>
//               {/* from PP + Yeni Fiyat */}
//               <div className="flex items-baseline gap-2 justify-end">
//                 <span
//                   style={{
//                     fontWeight: 400,
//                     fontSize: "12px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   from PP
//                 </span>
//                 <span
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "20px",
//                     lineHeight: "100%",
//                     color: "#64748A",
//                   }}
//                 >
//                   {hotel.price}€
//                 </span>
//               </div>
//             </div>

//             {/* Buton - mobilde tam genişlik */}
//             <Button
//               className="md:mt-0"
//               style={{
//                 width: "100%",

//                 height: "45px",
//                 borderRadius: "4px",
//                 background: "#ED8936",
//                 border: "none",
//                 fontWeight: 700,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 color: "#FFFFFF",
//                 textAlign: "center",
//               }}
//             >
//               Continue
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;

"use client";

import React from "react";
import { Hotel } from "../../../data/mockData";
import {
  UserOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row  /* 1024px+ => resim + içerik yatay */
        gap-2
        w-full
      "
      style={{ fontFamily: "Inter" }}
    >
      {/* Sol: Görsel */}
      <div
        className="
          w-full
          h-[268px]
          rounded-[8px]
          overflow-hidden
          lg:w-[363px]   /* 1024–1279 arası resim sabit 363px */
          xl:flex-1      /* 1280+ resim genişleyebilir */
        "
      >
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sağ: Content */}
      <div
        className="
          w-full
          border
          border-[#F0F4F8]
          rounded-[8px]
          bg-white
          p-6
          flex
          flex-col
          gap-4
          lg:w-[457px]   /* 1024–1279 arası content sabit 457px */
          xl:flex-1      /* 1280+ content de genişleyebilir */
        "
        style={{ minHeight: "271px" }}
      >
        {/* Üst Row */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#142347] m-0">{hotel.name}</h3>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500" style={{ gap: "4px" }}>
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span
              style={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "100%",
                color: "#142347",
                whiteSpace: "nowrap",
              }}
            >
              {hotel.location}
            </span>
          </div>
        </div>

        {/* Alt Row: Özellikler (sol) + Fiyat/Buton (sağ) */}
        <div
          className="
            flex
            flex-col
            md:flex-row /* 768px+ => yatay yerleşim */
            gap-6
            flex-1
          "
        >
          {/* Sol: Özellikler */}
          <div
            className="
              flex
              flex-col
              border-r
              border-[#F0F4F8]
              pr-0
              md:pr-6
              w-full
              md:w-1/2
              justify-between
            "
          >
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <UserOutlined />
              <span>
                {hotel.adults} Adults - {hotel.children} Child
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <CalendarOutlined />
              <span>{hotel.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <ClockCircleOutlined />
              <span>{hotel.nights} Nights</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <TagsOutlined />
              <span>{hotel.concept}</span>
            </div>
          </div>

          {/* Sağ: Fiyat + Buton */}
          <div
            className="
              flex
              flex-col
              w-full
              md:w-1/2
              md:pl-6
              justify-between
              items-stretch
              md:items-end
            "
          >
            {/* Fiyatlar */}
            <div className="flex flex-col items-end w-full">
              {/* Eski Fiyat */}
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "100%",
                  textDecoration: "line-through",
                  color: "#93A2B7",
                }}
              >
                {hotel.price + 200}€
              </span>
              {/* from PP + Yeni Fiyat */}
              <div className="flex items-baseline gap-2 justify-end">
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "100%",
                    color: "#64748A",
                  }}
                >
                  from PP
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "#64748A",
                  }}
                >
                  {hotel.price}€
                </span>
              </div>
            </div>

            {/* Buton - mobilde tam genişlik */}
            <Button
              style={{
                width: "100%", // 0–767px: tam genişlik
                height: "45px",
                borderRadius: "4px",
                background: "#ED8936",
                border: "none",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "100%",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

