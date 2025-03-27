"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { useSearch } from "../../../context/searchContext";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
  DownOutlined,
  UpOutlined,
  StarFilled,
  CheckOutlined,
  CloudOutlined,
} from "@ant-design/icons";
import { Input, DatePicker, Select, Button } from "antd";

// Mevcut concept listesi (örnek)
const baseConcepts = [
  "Beach Hotel",
  "Adult Hotel",
  "Boutique Hotel",
  "Family Hotel",
  "Pet Friendly",
  "Spa",
  "Golf",
  "Mountain Resort",
];

const Filters: React.FC = () => {
  const { filters, updateFilters } = useSearch();

  // State’ler
  const [from, setFrom] = useState<string>(filters.from || "");
  const [destination, setDestination] = useState<string>(
    filters.destination || ""
  );
  const [people, setPeople] = useState<number>(
    (filters.participants?.adults || 2) + (filters.participants?.children || 0)
  );
  const [date, setDate] = useState<dayjs.Dayjs | null>(
    filters.date ? dayjs(filters.date) : null
  );
  const [nights, setNights] = useState<number>(filters.nights || 5);
  const [stars, setStars] = useState<number[]>(filters.stars || []);
  const [concepts, setConcepts] = useState<string[]>(
    filters.hotelConcepts || []
  );

  const [showMore, setShowMore] = useState<boolean>(false);

  // Filtreleri sıfırla
  const resetFilters = () => {
    setFrom("");
    setDestination("");
    setPeople(2);
    setDate(null);
    setNights(5);
    setStars([]);
    setConcepts([]);
    setShowMore(false);

    updateFilters({
      from: "",
      destination: "",
      participants: { adults: 2, children: 0 },
      date: "",
      nights: 5,
      hotelConcepts: [],
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
  const handlePeopleChange = (val: number) => {
    setPeople(val);
    updateFilters({ participants: { adults: val, children: 0 } });
  };
  const handleDateChange = (val: dayjs.Dayjs | null) => {
    setDate(val);
    updateFilters({ date: val ? val.format("YYYY-MM-DD") : "" });
  };
  const handleNightsChange = (val: number) => {
    setNights(val);
    updateFilters({ nights: val });
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

  // Gösterilecek concept listesi
  const visibleConcepts = showMore ? baseConcepts : baseConcepts.slice(0, 4);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-sm sticky top-4"
      style={{ fontFamily: "Inter" }}
    >
      {/* Filter Başlık */}
      <h3 className="text-sm font-normal text-[#142347] mb-6">Filter</h3>

      {/* From */}
      <div className="mb-4">
        <Input
          placeholder="From"
          prefix={<EnvironmentOutlined style={{ color: "#142347" }} />}
          value={from}
          onChange={(e) => handleFromChange(e.target.value)}
          className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-[#142347]"
        />
      </div>

      {/* Destination */}
      <div className="mb-4">
        <Input
          placeholder="Destination"
          prefix={<EnvironmentOutlined style={{ color: "#142347" }} />}
          value={destination}
          onChange={(e) => handleDestinationChange(e.target.value)}
          className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-[#142347]"
        />
      </div>

      {/* Participants */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Participants
        </label>
        <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
          <TeamOutlined style={{ color: "#142347" }} className="mr-2" />
          <Select
            value={people}
            onChange={handlePeopleChange}
            bordered={false}
            className="flex-1 text-[#142347] font-medium"
            dropdownStyle={{ fontFamily: "Inter" }}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <Select.Option key={num} value={num}>
                {num} People
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>

      {/* Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Date
        </label>
        <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
          <CalendarOutlined style={{ color: "#142347" }} className="mr-2" />
          <DatePicker
            format="DD MMM YYYY"
            placeholder="Select date"
            value={date}
            onChange={handleDateChange}
            bordered={false}
            allowClear={false}
            className="text-[#142347] placeholder:text-[#142347] font-medium flex-1"
            dropdownStyle={{ fontFamily: "Inter" }}
            suffixIcon={null}
          />
        </div>
      </div>

      {/* Nights */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Nights
        </label>
        <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
          <CloudOutlined style={{ color: "#142347" }} className="mr-2" />
          <Select
            value={nights}
            onChange={handleNightsChange}
            bordered={false}
            className="flex-1 text-[#142347] font-medium"
            dropdownStyle={{ fontFamily: "Inter" }}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <Select.Option key={num} value={num}>
                {num} Nights
              </Select.Option>
            ))}
          </Select>
        </div>
      </div>

      {/* Hotel Concept */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm font-medium text-[#142347]">
            Hotel Concept
          </label>
          <Button
            type="link"
            size="small"
            onClick={resetFilters}
            className="p-0"
            style={{ color: "#ED8936" }}
          >
            Reset
          </Button>
        </div>
        <div className="space-y-2">
          {visibleConcepts.map((concept) => {
            const isChecked = concepts.includes(concept);
            return (
              <label
                key={concept}
                className="flex items-center cursor-pointer select-none"
              >
                <span
                  className={`
                    relative w-5 h-5 mr-2 rounded-sm border-2 flex items-center justify-center
                    ${isChecked ? "border-[#ED8936]" : "border-[#E2E2E2]"}
                  `}
                >
                  {isChecked && (
                    <CheckOutlined style={{ fontSize: 12, color: "#ED8936" }} />
                  )}
                </span>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleConceptChange(concept)}
                  className="hidden"
                />
                <span className="text-sm text-[#142347]">{concept}</span>
              </label>
            );
          })}
          {baseConcepts.length > 4 && (
            <Button
              type="link"
              size="small"
              onClick={() => setShowMore(!showMore)}
              className="p-0 flex items-center gap-1"
              style={{ color: "#93A2B7" }}
            >
              {showMore ? (
                <>
                  Less <UpOutlined style={{ fontSize: "10px" }} />
                </>
              ) : (
                <>
                  More <DownOutlined style={{ fontSize: "10px" }} />
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Star */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Star
        </label>
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4, 5].map((starValue) => {
            const isActive = stars.includes(starValue);
            return (
              <div
                key={starValue}
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => handleStarClick(starValue)}
              >
                <div
                  className={`
                    relative w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${isActive ? "border-[#ED8936]" : "border-[#E2E2E2]"}
                  `}
                >
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-[#ED8936]" />
                  )}
                </div>
                <StarFilled style={{ color: "#ED8936", fontSize: "16px" }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#142347" }}
                >
                  {starValue}+
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filters;
