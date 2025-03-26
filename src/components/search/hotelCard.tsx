"use client";

import { Button } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
// import { Hotel } from "@/data/mockData";
import { Hotel } from "../../../data/mockData";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1">{hotel.name}</h3>

          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500 mr-2">
              {Array.from({ length: hotel.stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-gray-600">{hotel.location}</span>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            <div className="flex items-center text-sm">
              <UserOutlined className="mr-1" />
              <span>
                {hotel.adults} Adults - {hotel.children} Child
              </span>
            </div>
            <div className="flex items-center text-sm">
              <CalendarOutlined className="mr-1" />
              <span>{hotel.date}</span>
            </div>
            <div className="text-sm">
              <span>{hotel.nights} Nights</span>
            </div>
            <div className="text-sm">
              <span>{hotel.concept}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mt-4">
          <div>
            <div className="text-gray-500 line-through">
              {hotel.price + 200}€
            </div>
            <div className="text-xl font-semibold">
              from{" "}
              <span className="text-2xl text-orange-500">{hotel.price}€</span>
            </div>
          </div>

          <Button type="primary" size="large" className="mt-4 md:mt-0">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
