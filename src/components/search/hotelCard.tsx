"use client";

import React, { JSX } from "react";
import { Hotel } from "../../../data/mockData";
import { Button } from "antd";
import Icon from "../../../public/icons/Icon";
import { useLanguage } from "@/hooks/useLanguage";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row  /* 1024px+ => resim + içerik yan yana */
        items-start  /* Üst kenardan hizala */
        gap-4
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
            <div className="flex" style={{ gap: "4px" }}>
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <Icon key={i} name="Star" size={16} />
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
              <Icon name="users" />
              <span>
                {t("HotelCard", "adults", { count: hotel.adults })} -
                {hotel.children === 1
                  ? ` ${t("HotelCard", "child", { count: hotel.children })}`
                  : ` ${t("HotelCard", "children", { count: hotel.children })}`}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <Icon name="calendar" />
              <span>{hotel.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <Icon name="nights" />
              <span>{t("HotelCard", "nights", { count: hotel.nights })}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#142347]">
              <Icon name="beds" />
              <span>{hotel.categories.join(", ")}</span>
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
                  {t("HotelCard", "fromPP")}
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
              {t("HotelCard", "continue")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
