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
//       className="flex flex-col xl:flex-row gap-2 w-full"
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

//       {/* Sağ: İçerik */}
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
//             {/* Price: Eski fiyat, then from PP + yeni fiyat */}
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
//       className="flex flex-col xl:flex-row gap-2 w-full"
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
      className="flex flex-col lg:flex-row gap-2 w-full"
      style={{ fontFamily: "Inter" }}
    >
      {/* Sol: Görsel */}
      <div className="lg:w-[363px] xl:flex-1 w-full h-[268px] rounded-[8px] overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sağ: Content */}
      <div
        className="lg:w-[457px] xl:flex-1 w-full border border-[#F0F4F8] rounded-[8px] bg-white p-6 flex flex-col gap-2"
        style={{ minHeight: "271px" }}
      >
        {/* Üst Row */}
        <div
          className="flex flex-col gap-2"
          style={{ width: "409px", height: "73px" }}
        >
          <h3 className="text-xl font-bold text-[#142347] m-0">
            {hotel.name}
          </h3>
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

        {/* Alt Row */}
        <div
          className="flex"
          style={{ width: "409px", height: "142px", gap: "8px" }}
        >
          {/* Sol: List */}
          <div
            style={{
              width: "200.5px",
              height: "142px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
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

          {/* Sağ: Price */}
          <div
            style={{
              width: "200.5px",
              height: "142px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "24px",
              borderLeft: "1px solid #F0F4F8",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <div style={{ textAlign: "right" }}>
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
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                  justifyContent: "flex-end",
                }}
              >
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
            <Button
              style={{
                width: "176.5px",
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

