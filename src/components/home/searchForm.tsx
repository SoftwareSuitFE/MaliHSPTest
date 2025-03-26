'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import { useSearch } from '../../../context/searchContext';

const SearchForm = () => {
  const router = useRouter();
  const { searchParams, updateSearchParams } = useSearch();
  
  const [fromLocation, setFromLocation] = useState(searchParams.from || '');
  const [destination, setDestination] = useState(searchParams.destination || '');
  const [date, setDate] = useState<dayjs.Dayjs | null>(
    searchParams.date ? dayjs(searchParams.date) : dayjs('2023-04-15')
  );
  const [nights, setNights] = useState(searchParams.nights || 5);
  const [people, setPeople] = useState(
    (searchParams.participants?.adults || 2) + (searchParams.participants?.children || 0) || 2
  );

  const handleSearch = () => {
    updateSearchParams({
      from: fromLocation,
      destination,
      date: date ? date.format('YYYY-MM-DD') : '',
      nights,
      participants: {
        adults: Math.max(1, Math.floor(people * 0.7)),
        children: Math.max(0, Math.floor(people * 0.3))
      }
    });
    
    router.push('/search');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col lg:flex-row items-center gap-4">
      <div className="w-full lg:w-auto lg:flex-1 flex items-center border rounded h-12">
        <div className="pl-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 18.3333C13.3333 15 16.6667 12.0152 16.6667 8.33333C16.6667 4.65143 13.6819 1.66666 10 1.66666C6.31811 1.66666 3.33334 4.65143 3.33334 8.33333C3.33334 12.0152 6.66668 15 10 18.3333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <Input
          placeholder="From"
          bordered={false}
          value={fromLocation}
          onChange={(e) => setFromLocation(e.target.value)}
          className="flex-grow h-full"
        />
      </div>
      
      <div className="w-full lg:w-auto lg:flex-1 flex items-center border rounded h-12">
        <div className="pl-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 8.33334C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33334C2.5 6.34421 3.29018 4.43656 4.6967 3.03004C6.10322 1.62352 8.01088 0.833336 10 0.833336C11.9891 0.833336 13.8968 1.62352 15.3033 3.03004C16.7098 4.43656 17.5 6.34421 17.5 8.33334Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <Input
          placeholder="Destination"
          bordered={false}
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="flex-grow h-full"
        />
      </div>
      
      <div className="w-full lg:w-auto lg:flex-1 flex flex-col border rounded h-12">
        <div className="text-[10px] text-gray-500 px-2 pt-1">Date</div>
        <div className="flex items-center pl-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 1.66666V4.99999" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 1.66666V4.99999" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 8.33334H17.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="ml-2 font-medium text-sm">15 Apr</div>
        </div>
      </div>
      
      <div className="w-full lg:w-auto lg:flex-1 flex flex-col border rounded h-12">
        <div className="text-[10px] text-gray-500 px-2 pt-1">Nights</div>
        <div className="flex items-center pl-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5.00001V10H13.3333" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="ml-2 font-medium text-sm">5 Nights</div>
        </div>
      </div>
      
      <div className="w-full lg:w-auto lg:flex-1 flex flex-col border rounded h-12">
        <div className="text-[10px] text-gray-500 px-2 pt-1">Participants</div>
        <div className="flex items-center pl-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1666 17.5V15.8333C14.1666 14.9493 13.8155 14.1014 13.1903 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16665C3.28259 12.5 2.43475 12.8512 1.80962 13.4763C1.1845 14.1014 0.833313 14.9493 0.833313 15.8333V17.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.50002 9.16667C9.34097 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34097 2.5 7.50002 2.5C5.65907 2.5 4.16669 3.99238 4.16669 5.83333C4.16669 7.67428 5.65907 9.16667 7.50002 9.16667Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.1667 17.5V15.8333C19.1662 15.0948 18.9204 14.3773 18.4679 13.7936C18.0154 13.2099 17.3819 12.793 16.6667 12.6083" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 2.60834C14.0504 2.79192 14.6859 3.20892 15.1397 3.7936C15.5935 4.37827 15.8398 5.09736 15.8398 5.8375C15.8398 6.57765 15.5935 7.29674 15.1397 7.88141C14.6859 8.46609 14.0504 8.88309 13.3333 9.06667" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="ml-2 font-medium text-sm">2 People</div>
        </div>
      </div>
      
      <Button
        type="primary"
        onClick={handleSearch}
        className="w-full lg:w-auto h-12 bg-[#ED9636] border-[#ED9636] hover:bg-[#d88630] hover:border-[#d88630] text-white px-6 font-medium"
      >
        SEARCH
      </Button>
    </div>
  );
};

export default SearchForm;