// "use client";

// import React from "react";
// import { Hotel } from "@/data/mockData";
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
//         md:flex-row
//         gap-2
//         w-full
//       "
//     >
//       {/* Sol: Görsel */}
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
//         {/* ÜST ROW */}
//         <div
//           className="flex flex-col gap-2"
//           style={{
//             width: "409px",
//             height: "73px",
//           }}
//         >
//           {/* Otel Adı */}
//           <h3 className="text-xl font-semibold text-[#142347]">{hotel.name}</h3>

//           {/* Lokasyon (Stars + City/Country) */}
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
//                 color: "#142347",
//               }}
//             >
//               {hotel.location}
//             </span>
//           </div>
//         </div>

//         {/* ALT ROW */}
//         <div
//           className="flex"
//           style={{
//             width: "409px",
//             height: "142px",
//             gap: "8px",
//           }}
//         >
//           {/* 1) List */}
//           <div
//             className="flex flex-col"
//             style={{
//               width: "200.5px",
//               height: "142px",
//               gap: "8px",
//               paddingTop: "16px",
//             }}
//           >
//             {/* 4 özellik: icon + text */}
//             {/* Participants */}
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <UserOutlined />
//               <span>
//                 {hotel.adults} Adults - {hotel.children} Child
//               </span>
//             </div>
//             {/* Date */}
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <CalendarOutlined />
//               <span>{hotel.date}</span>
//             </div>
//             {/* Nights */}
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <ClockCircleOutlined />
//               <span>{hotel.nights} Nights</span>
//             </div>
//             {/* Concept */}
//             <div className="flex items-center gap-2 text-sm text-[#142347]">
//               <TagsOutlined />
//               <span>{hotel.concept}</span>
//             </div>
//           </div>

//           {/* 2) Price */}
//           <div
//             style={{
//               width: "200.5px",
//               height: "142px",
//               paddingLeft: "24px",
//               borderLeft: "1px solid #F0F4F8",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//             }}
//           >
//             {/* Price üst kısım: from PP + eski/yeni fiyat */}
//             <div
//               style={{ display: "flex", flexDirection: "column", gap: "8px" }}
//             >
//               {/* from PP */}
//               <span
//                 style={{
//                   width: "45px",
//                   height: "15px",
//                   fontFamily: "Inter",
//                   fontWeight: 400,
//                   fontSize: "12px",
//                   lineHeight: "100%",
//                   color: "#64748A",
//                 }}
//               >
//                 from PP
//               </span>

//               {/* Eski / Yeni fiyat (yatay hizalama) */}
//               <div
//                 style={{ display: "flex", alignItems: "baseline", gap: "8px" }}
//               >
//                 {/* Eski fiyat (line-through) */}
//                 <span
//                   style={{
//                     fontFamily: "Inter",
//                     fontWeight: 700,
//                     fontSize: "14px",
//                     lineHeight: "100%",
//                     textDecoration: "line-through",
//                     color: "#93A2B7",
//                   }}
//                 >
//                   {hotel.price + 200}€
//                 </span>

//                 {/* Yeni fiyat */}
//                 <span
//                   style={{
//                     fontFamily: "Inter",
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

//             {/* Buton (altta) */}
//             <Button
//               style={{
//                 width: "176.5px",
//                 height: "45px",
//                 borderRadius: "4px",
//                 background: "#ED8936",
//                 border: "none",
//                 fontFamily: "Inter",
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
import { Hotel } from "@/data/mockData";
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
      {/* Sol: Görsel */}
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
          {/* Otel Adı */}
          <h3 className="text-xl font-semibold text-[#142347]">
            {hotel.name}
          </h3>

          {/* Lokasyon (Stars + City/Country) */}
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
          {/* 1) List (sol) */}
          <div
            style={{
              width: "200.5px",
              height: "142px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // üstten ve alttan hizalama
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          >
            {/* 4 özellik: icon + text */}
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

          {/* 2) Price (sağ) */}
          <div
            style={{
              width: "200.5px",
              height: "142px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // üstten ve alttan hizalama
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "24px",
              borderLeft: "1px solid #F0F4F8",
            }}
          >
            {/* Üst kısım: eski fiyat + (from PP + yeni fiyat) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {/* Eski Fiyat (line-through) */}
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "14px",
                  lineHeight: "100%",
                  textDecoration: "line-through",
                  color: "#93A2B7",
                  // Eski fiyat en üstte
                }}
              >
                {hotel.price + 200}€
              </span>

              {/* from PP + yeni fiyat (yatay) */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                {/* from PP solda */}
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "100%",
                    color: "#64748A",
                  }}
                >
                  from PP
                </span>

                {/* Yeni Fiyat sağda */}
                <span
                  style={{
                    fontFamily: "Inter",
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

            {/* Buton altta */}
            <Button
              style={{
                width: "176.5px",
                height: "45px",
                borderRadius: "4px",
                background: "#ED8936",
                border: "none",
                fontFamily: "Inter",
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

