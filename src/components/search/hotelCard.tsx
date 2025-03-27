"use client";

import React, { JSX } from "react";
import { Button } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import { Hotel } from "../../../data/mockData";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
  return (
    <div className="flex gap-4 w-full">
      {/* Sol: Görsel (363×268) */}
      <div className="w-[363px] h-[268px] rounded-[8px] overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sağ: İçerik */}
      <div className="flex-1 border border-[#F0F4F8] rounded-[8px] bg-white p-6 flex flex-col justify-between">
        {/* Üst Bilgiler */}
        <div>
          <h3 className="text-xl font-semibold text-[#142347] mb-2">
            {hotel.name}
          </h3>
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-500 mr-2">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-gray-600 text-sm">{hotel.location}</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[#142347]">
            <div className="flex items-center gap-1">
              <UserOutlined />
              <span>
                {hotel.adults} Adults - {hotel.children} Child
              </span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarOutlined />
              <span>{hotel.date}</span>
            </div>
            <div>{hotel.nights} Nights</div>
            <div>{hotel.concept}</div>
          </div>
        </div>

        {/* Alt Bilgiler (Fiyat + Buton) */}
        <div className="flex items-end justify-between mt-4">
          <div>
            <div className="text-gray-500 line-through">
              {hotel.price + 200}€
            </div>
            <div className="text-xl font-semibold text-[#142347]">
              from{" "}
              <span className="text-2xl text-[#ED8936]">{hotel.price}€</span>
            </div>
          </div>
          <Button type="primary" size="large">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
