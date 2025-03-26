"use client";

import { useState } from "react";
import { Input, DatePicker, Button, Checkbox } from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useSearch } from "../../../context/searchContext";
import { hotelConcepts } from "../../../data/mockData";

const Filters = () => {
  const { filters, updateFilters } = useSearch();

  const [from, setFrom] = useState(filters.from || "");
  const [destination, setDestination] = useState(filters.destination || "");
  const [people, setPeople] = useState(
    (filters.participants?.adults || 2) + (filters.participants?.children || 0)
  );
  const [date, setDate] = useState<dayjs.Dayjs | null>(
    filters.date ? dayjs(filters.date) : null
  );
  const [nights, setNights] = useState(filters.nights || 5);
  const [concepts, setConcepts] = useState<string[]>(
    filters.hotelConcepts || []
  );
  const [stars, setStars] = useState<number[]>(filters.stars || []);

  const handleConceptChange = (concept: string) => {
    const newConcepts = concepts.includes(concept)
      ? concepts.filter((c) => c !== concept)
      : [...concepts, concept];

    setConcepts(newConcepts);
    updateFilters({ hotelConcepts: newConcepts });
  };

  const handleStarChange = (star: number) => {
    const newStars = stars.includes(star)
      ? stars.filter((s) => s !== star)
      : [...stars, star];

    setStars(newStars);
    updateFilters({ stars: newStars });
  };

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
      participants: {
        adults: 2,
        children: 0,
      },
      date: "",
      nights: 5,
      hotelConcepts: [],
      stars: [],
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm sticky top-4">
      <h3 className="text-lg font-medium mb-4">Filter</h3>

      <div className="space-y-4">
        <div>
          <Input
            placeholder="From"
            prefix={<EnvironmentOutlined className="text-gray-400" />}
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              updateFilters({ from: e.target.value });
            }}
            className="w-full"
          />
        </div>

        <div>
          <Input
            placeholder="Destination"
            prefix={<EnvironmentOutlined className="text-gray-400" />}
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
              updateFilters({ destination: e.target.value });
            }}
            className="w-full"
          />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Participants</p>
          <div className="flex items-center border rounded px-3 py-1">
            <TeamOutlined className="text-gray-400 mr-2" />
            <div className="flex-1">
              <div className="font-medium">{people} People</div>
            </div>
            <div className="flex">
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
                className="text-gray-500"
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
                className="text-gray-500"
              >
                +
              </Button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Date</p>
          <DatePicker
            format="DD MMMM YYYY"
            placeholder="Select date"
            value={date}
            onChange={(date) => {
              setDate(date);
              updateFilters({ date: date ? date.format("YYYY-MM-DD") : "" });
            }}
            className="w-full"
          />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Nights</p>
          <div className="flex items-center border rounded px-3 py-1">
            <CalendarOutlined className="text-gray-400 mr-2" />
            <div className="flex-1">
              <div className="font-medium">{nights} Nights</div>
            </div>
            <div className="flex">
              <Button
                type="text"
                size="small"
                onClick={() => {
                  const newNights = Math.max(1, nights - 1);
                  setNights(newNights);
                  updateFilters({ nights: newNights });
                }}
                className="text-gray-500"
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
                className="text-gray-500"
              >
                +
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <p className="text-sm text-gray-600">Hotel Concept</p>
            <Button
              type="link"
              size="small"
              onClick={resetFilters}
              className="text-orange-500 p-0"
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
                <span className="ml-2">{concept}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Star</p>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="flex items-center">
                <Checkbox
                  checked={stars.includes(star)}
                  onChange={() => handleStarChange(star)}
                />
                <div className="ml-2 flex items-center">
                  {star}
                  <span className="text-yellow-500 ml-1">★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
