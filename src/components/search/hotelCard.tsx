"use client";

import React from "react";
import { Hotel } from "@/data/mockData";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
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
          h-auto
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
        {/* Üst row */}
        <div
          className="flex flex-col gap-2"
          style={{
            width: "409px",
            height: "73px",
          }}
        >
          {/* (a) Otel ismi */}
          <h3
            className="
              text-xl 
              font-semibold 
              text-[#142347]
            "
          >
            {hotel.name}
          </h3>

          {/* (b) Lokasyon bölümü (stars + city/country) */}
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
                letterSpacing: "0%",
                color: "#142347",
              }}
            >
              {hotel.location}
            </span>
          </div>
        </div>

        {/* --- ALT ROW (Örnek, ileride detaylandıracağız) --- */}
        <div
          className="mt-auto flex flex-col gap-2"
          style={{
            width: "409px",
            height: "142px",
          }}
        >
          {/* Buraya ileride özellikler, fiyat, buton vb. eklenecek */}
          <div className="text-sm text-gray-500 italic">
            {/* Placeholder */}
            (Alt row burada yer alacak)
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
