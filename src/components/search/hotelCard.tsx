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
//         lg:flex-row  /* 1024px+ => resim + içerik yatay */
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
//           xl:flex-1      /* 1280+ resim genişleyebilir */
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
//             md:flex-row /* 768px+ => yatay yerleşim */
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
//               pr-0
//               md:pr-6
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
//               md:pl-6
//               justify-between
//               items-stretch
//               md:items-end
//             "
//           >
//             {/* Fiyatlar */}
//

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
//         lg:flex-row  /* 1024px ve üstü: resim + içerik yan yana */
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
//           xl:flex-1      /* 1280+ geniş ekranlarda resim genişleyebilir */
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
//           xl:flex-1      /* 1280+ geniş ekranlarda içerik genişleyebilir */
//         "
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst Row: Otel Adı, Yıldızlar, Lokasyon */}
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
//             md:flex-row  /* 768px ve üstü: yan yana */
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
//               pr-0
//               md:pr-6
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
//               md:pl-6
//               justify-between
//               items-stretch
//               md:items-end
//               gap-2
//             "
//           >
//             {/* Fiyat Bilgisi */}
//             <div className="lg:mt-14">
//

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
//                 <div className="flex items-baseline gap-2 justify-end w-full">
//                   <span
//                     style={{
//                       fontWeight: 400,
//                       fontSize: "12px",
//                       lineHeight: "100%",
//                       color: "#64748A",
//                     }}
//                   >
//                     from PP
//                   </span>
//                   <span
//                     style={{
//                       fontWeight: 700,
//                       fontSize: "20px",
//                       lineHeight: "100%",
//                       color: "#64748A",
//                     }}
//                   >
//                     {hotel.price}€
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Buton */}
//             <Button
//               className="mt-4 md:mt-0"
//               style={{
//                 width: "100%", // Mobilde tam genişlik
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
//         items-start       /* ÜST KENAR HİZALAMASI */
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
//           xl:flex-1      /* 1280+ resim genişleyebilir */
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
//           xl:flex-1      /* 1280+ content genişleyebilir */
//         "
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst Row: Otel adı, yıldızlar, lokasyon */}
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
//             md:flex-row  /* 768px+ => yatay yerleşim */
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
//               pr-0
//               md:pr-6
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
//               md:pl-6
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

//             {/* Buton - mobilde tam genişlik */}
//             <Button
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
        lg:flex-row  /* 1024px+ => resim + içerik yan yana */
        items-start  /* Üst kenardan hizala */
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
          xl:flex-1      /* 1280+ içerik de genişleyebilir */
        "
        style={{ minHeight: "271px" }}
      >
        {/* Üst Row: Otel adı, yıldızlar, lokasyon */}
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
            md:flex-row
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
              gap-2
              items-stretch
              md:items-end
            "
          >
            {/* Fiyat Bilgisi: mt-auto => 1024px+ (lg) 'da fiyata margin-top ekleyerek aşağı itebilirsiniz. */}
            <div className="mt-auto lg:mt-auto flex flex-col items-end w-full">
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

            {/* Buton */}
            <Button
              style={{
                width: "100%", // mobilde tam genişlik
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

