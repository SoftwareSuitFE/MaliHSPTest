"use client";

import React, { useState } from "react";
import { Input, DatePicker, Button, Checkbox } from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useSearch } from "../../../context/searchContext";
import { hotelConcepts } from "../../../data/mockData";

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
  const [concepts, setConcepts] = useState<string[]>(
    filters.hotelConcepts || []
  );
  const [stars, setStars] = useState<number[]>(filters.stars || []);

  // Hotel Concept checkbox seçimi
  const handleConceptChange = (concept: string) => {
    const newConcepts = concepts.includes(concept)
      ? concepts.filter((c) => c !== concept)
      : [...concepts, concept];
    setConcepts(newConcepts);
    updateFilters({ hotelConcepts: newConcepts });
  };

  // Yıldız checkbox seçimi
  const handleStarChange = (star: number) => {
    const newStars = stars.includes(star)
      ? stars.filter((s) => s !== star)
      : [...stars, star];
    setStars(newStars);
    updateFilters({ stars: newStars });
  };

  // Filtreleri uygula
  const applyFilters = () => {
    updateFilters({
      from,
      destination,
      participants: {
        adults: Math.max(1, Math.floor(people * 0.7)),
        children: Math.max(0, Math.floor(people * 0.3)),
      },
      date: date ? date.format("YYYY-MM-DD") : "",
      nights,
      hotelConcepts: concepts,
      stars,
    });
  };

  // Filtreleri sıfırla
  const resetFilters = () => {
    setFrom("");
    setDestination("");
    setPeople(2);
    setDate(null);
    setNights(5);
    setConcepts([]);
    setStars([]);
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
      {/* Başlık */}
      <h3 className="text-[18px] font-semibold text-[#142347] mb-6">Filter</h3>

      {/* From */}
      <div className="mb-4">
        <Input
          placeholder="From"
          prefix={<EnvironmentOutlined style={{ color: "#142347" }} />}
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
            updateFilters({ from: e.target.value });
          }}
          className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-gray-400"
        />
      </div>

      {/* Destination */}
      <div className="mb-4">
        <Input
          placeholder="Destination"
          prefix={<EnvironmentOutlined style={{ color: "#142347" }} />}
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            updateFilters({ destination: e.target.value });
          }}
          className="h-10 rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-gray-400"
        />
      </div>

      {/* Participants */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Participants
        </label>
        <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
          <TeamOutlined style={{ color: "#142347" }} className="mr-2" />
          <div className="flex-1 text-[#142347] font-medium">
            {people} People
          </div>
          <div className="flex items-center space-x-2">
            <Button
              type="text"
              size="small"
              onClick={() => {
                const newPeople = Math.max(1, people - 1);
                setPeople(newPeople);
                updateFilters({
                  participants: {
                    adults: Math.max(1, Math.floor(newPeople * 0.7)),
                    children: Math.max(0, Math.floor(newPeople * 0.3)),
                  },
                });
              }}
              className="text-[#142347] font-bold"
            >
              -
            </Button>
            <Button
              type="text"
              size="small"
              onClick={() => {
                const newPeople = people + 1;
                setPeople(newPeople);
                updateFilters({
                  participants: {
                    adults: Math.max(1, Math.floor(newPeople * 0.7)),
                    children: Math.max(0, Math.floor(newPeople * 0.3)),
                  },
                });
              }}
              className="text-[#142347] font-bold"
            >
              +
            </Button>
          </div>
        </div>
      </div>

      {/* Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Date
        </label>
        <DatePicker
          format="DD MMMM YYYY"
          placeholder="Select date"
          value={date}
          onChange={(dateVal) => {
            setDate(dateVal);
            updateFilters({
              date: dateVal ? dateVal.format("YYYY-MM-DD") : "",
            });
          }}
          className="h-10 w-full rounded-md border border-[#E1E7EF] text-[#142347] placeholder:text-gray-400"
          suffixIcon={<CalendarOutlined style={{ color: "#142347" }} />}
        />
      </div>

      {/* Nights */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Nights
        </label>
        <div className="h-10 flex items-center rounded-md border border-[#E1E7EF] px-3">
          <CalendarOutlined style={{ color: "#142347" }} className="mr-2" />
          <div className="flex-1 text-[#142347] font-medium">
            {nights} Nights
          </div>
          <div className="flex items-center space-x-2">
            <Button
              type="text"
              size="small"
              onClick={() => {
                const newNights = Math.max(1, nights - 1);
                setNights(newNights);
                updateFilters({ nights: newNights });
              }}
              className="text-[#142347] font-bold"
            >
              -
            </Button>
            <Button
              type="text"
              size="small"
              onClick={() => {
                const newNights = nights + 1;
                setNights(newNights);
                updateFilters({ nights: newNights });
              }}
              className="text-[#142347] font-bold"
            >
              +
            </Button>
          </div>
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
            className="text-[#ED8936] p-0"
          >
            Reset
          </Button>
        </div>
        <div className="space-y-2">
          {hotelConcepts.map((concept) => (
            <div key={concept} className="flex items-center">
              <Checkbox
                checked={concepts.includes(concept)}
                onChange={() => handleConceptChange(concept)}
              />
              <span className="ml-2 text-[#142347]">{concept}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Star */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#142347] mb-1">
          Star
        </label>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="flex items-center">
              <Checkbox
                checked={stars.includes(star)}
                onChange={() => handleStarChange(star)}
              />
              <div className="ml-2 flex items-center text-[#142347]">
                {star}
                <span className="text-yellow-500 ml-1">★</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filters */}
      <Button
        type="primary"
        onClick={applyFilters}
        className="w-full mt-4 h-10 bg-[#ED8936] hover:bg-[#d17c2f] border-none font-semibold"
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default Filters;
