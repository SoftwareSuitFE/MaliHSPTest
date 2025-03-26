"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface Participants {
  adults: number;
  children: number;
}

export interface SearchParams {
  from: string;
  destination: string;
  date: string;
  nights: number;
  participants: Participants;
  travelType: "package" | "hotel" | "flight";
}

export interface Filters {
  from: string;
  destination: string;
  participants: Participants;
  date: string;
  nights: number;
  hotelConcepts: string[];
  stars: number[];
}

interface SearchContextType {
  searchParams: SearchParams;
  updateSearchParams: (newParams: Partial<SearchParams>) => void;
  filters: Filters;
  updateFilters: (newFilters: Partial<Filters>) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    from: "",
    destination: "",
    date: "",
    nights: 5,
    participants: {
      adults: 2,
      children: 0,
    },
    travelType: "package",
  });

  const [filters, setFilters] = useState<Filters>({
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

  const updateSearchParams = (newParams: Partial<SearchParams>) => {
    setSearchParams((prev) => ({
      ...prev,
      ...newParams,
    }));
  };

  const updateFilters = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
  };

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        updateSearchParams,
        filters,
        updateFilters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
