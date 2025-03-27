// "use client";

// import React from "react";
// import { Hotel } from "@/data/mockData";
// import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
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
//         md:flex-row
//         gap-2
//         w-full
//       "
//     >
//       {/* Sol: Görsel (images) */}
//       <div
//         className="
//           md:w-[363px]
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

//       {/* Sağ: content */}
//       <div
//         className="
//           md:w-[457px]
//           w-full
//           h-auto
//           border border-[#F0F4F8]
//           rounded-[8px]
//           bg-white
//           p-6
//           flex
//           flex-col
//           gap-2
//         "
//         style={{ minHeight: "271px" }}
//       >
//         {/* Üst row */}
//         <div
//           className="flex flex-col gap-2"
//           style={{
//             width: "409px",
//             height: "73px",
//           }}
//         >
//           {/* (a) Otel ismi */}
//           <h3
//             className="
//               text-xl
//               font-semibold
//               text-[#142347]
//             "
//           >
//             {hotel.name}
//           </h3>

//           {/* (b) Lokasyon bölümü (stars + city/country) */}
//           <div
//             className="flex items-center gap-2"
//             style={{
//               width: "194px",
//               height: "17px",
//             }}
//           >
//             {/* Stars */}
//             <div
//               className="flex text-yellow-500"
//               style={{
//                 width: "96px",
//                 height: "16px",
//                 gap: "4px",
//               }}
//             >
//               {Array.from({ length: hotel.stars }).map((_, i) => (
//                 <span key={i}>★</span>
//               ))}
//             </div>

//             {/* City / Country */}
//             <span
//               style={{
//                 width: "90px",
//                 height: "17px",
//                 fontFamily: "Inter",
//                 fontWeight: 500,
//                 fontSize: "14px",
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 color: "#142347",
//               }}
//             >
//               {hotel.location}
//             </span>
//           </div>
//         </div>

//         {/* --- ALT ROW (Örnek, ileride detaylandıracağız) --- */}
//         <div
//           className="mt-auto flex flex-col gap-2"
//           style={{
//             width: "409px",
//             height: "142px",
//           }}
//         >
//           {/* Buraya ileride özellikler, fiyat, buton vb. eklenecek */}
//           <div className="text-sm text-gray-500 italic">
//             {/* Placeholder */}
//             (Alt row burada yer alacak)
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;

"use client";

import React, { JSX } from "react";
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
        md:flex-row
        gap-2
        w-full
      "
    >
      {/* Sol: Görsel (images) */}
      <div
        className="
          md:w-[363px]
          w-full
          h-[268px]
          rounded-[8px]
          overflow-hidden
        "
      >
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sağ: content */}
      <div
        className="
          md:w-[457px]
          w-full
          border border-[#F0F4F8]
          rounded-[8px]
          bg-white
          p-6
          flex
          flex-col
          gap-2
        "
        style={{ minHeight: "271px" }}
      >
        {/* ÜST ROW */}
        <div
          className="flex flex-col gap-2"
          style={{
            width: "409px",
            height: "73px",
          }}
        >
          {/* (a) Otel Adı */}
          <h3 className="text-xl font-semibold text-[#142347]">{hotel.name}</h3>

          {/* (b) Lokasyon (Stars + City/Country) */}
          <div
            className="flex items-center gap-2"
            style={{
              width: "194px",
              height: "17px",
            }}
          >
            {/* Stars */}
            <div
              className="flex text-yellow-500"
              style={{
                width: "96px",
                height: "16px",
                gap: "4px",
              }}
            >
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* City / Country */}
            <span
              style={{
                width: "90px",
                height: "17px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "100%",
                color: "#142347",
              }}
            >
              {hotel.location}
            </span>
          </div>
        </div>

        {/* ALT ROW */}
        <div
          className="flex"
          style={{
            width: "409px",
            height: "142px",
            gap: "8px",
          }}
        >
          {/* 1) List */}
          <div
            className="flex flex-col"
            style={{
              width: "200.5px",
              height: "142px",
              gap: "8px",
              paddingTop: "16px",
            }}
          >
            {/* 4 özellik (icon + text) */}
            {/* a) Participants */}
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <UserOutlined />
              <span>
                {hotel.adults} Adults - {hotel.children} Child
              </span>
            </div>

            {/* b) Date */}
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <CalendarOutlined />
              <span>{hotel.date}</span>
            </div>

            {/* c) Nights */}
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <ClockCircleOutlined />
              <span>{hotel.nights} Nights</span>
            </div>

            {/* d) Concept */}
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <TagsOutlined />
              <span>{hotel.concept}</span>
            </div>
          </div>

          {/* 2) Price */}
          <div
            className="flex flex-col"
            style={{
              width: "200.5px",
              height: "142px",
              gap: "8px",
              paddingLeft: "24px",
              borderLeft: "1px solid #F0F4F8",
            }}
          >
            {/* a) Price alanı */}
            <div
              className="flex flex-col"
              style={{
                width: "122px",
                height: "45px",
                gap: "8px",
                marginTop: "16px", // Figma’da hizalama için
              }}
            >
              <div className="text-gray-500 line-through">
                {hotel.price + 200}€
              </div>
              <div className="text-xl font-semibold text-[#142347]">
                from{" "}
                <span className="text-2xl text-[#ED8936]">{hotel.price}€</span>
              </div>
            </div>

            {/* b) Buton */}
            <Button
              type="primary"
              size="large"
              style={{
                width: "176.5px",
                height: "45px",
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
