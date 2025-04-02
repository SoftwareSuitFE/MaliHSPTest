// src/hooks/useSearch.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getSearchParams,
  saveSearchParams,
  getFilters,
  saveFilters,
  SEARCH_PARAMS_KEY,
  FILTERS_KEY,
} from '@/services/searchService';
import { SearchParams, Filters } from '@/types/search';

export function useSearch() {
  const queryClient = useQueryClient();

  // Arama parametrelerini React Query ile getir
  const { data: searchParams = getSearchParams() } = useQuery({
    queryKey: [SEARCH_PARAMS_KEY],
    queryFn: getSearchParams,
    staleTime: 1000 * 60 * 5, // 5 dakika sonra stale olsun
    refetchOnWindowFocus: false,
  });

  // Filtreleri React Query ile getir
  const { data: filters = getFilters() } = useQuery({
    queryKey: [FILTERS_KEY],
    queryFn: getFilters,
    staleTime: 1000 * 60 * 5, // 5 dakika sonra stale olsun
    refetchOnWindowFocus: false,
  });

  // Arama parametrelerini güncelleme mutation'ı
  const { mutate: updateSearchParams } = useMutation({
    mutationFn: (newParams: Partial<SearchParams>) => {
      const updatedParams = { ...searchParams, ...newParams };
      return saveSearchParams(updatedParams);
    },
    onSuccess: (updatedSearchParams) => {
      // Cache'i güncelle
      queryClient.setQueryData([SEARCH_PARAMS_KEY], updatedSearchParams);
      
      // Filtreleri de güncelle (senkronize et)
      const currentFilters = queryClient.getQueryData<Filters>([FILTERS_KEY]) || getFilters();
      const updatedFilters = { 
        ...currentFilters,
        from: updatedSearchParams.from || currentFilters.from,
        destination: updatedSearchParams.destination || currentFilters.destination,
        date: updatedSearchParams.date || currentFilters.date,
        nights: updatedSearchParams.nights || currentFilters.nights,
        participants: updatedSearchParams.participants || currentFilters.participants,
      };
      
      // Filtreleri kaydet ve önbelleği güncelle
      saveFilters(updatedFilters);
      queryClient.setQueryData([FILTERS_KEY], updatedFilters);
    },
  });

  // Filtreleri güncelleme mutation'ı
  const { mutate: updateFilters } = useMutation({
    mutationFn: (newFilters: Partial<Filters>) => {
      const updatedFilters = { ...filters, ...newFilters };
      return saveFilters(updatedFilters);
    },
    onSuccess: (updatedFilters) => {
      // Cache'i güncelle
      queryClient.setQueryData([FILTERS_KEY], updatedFilters);
    },
  });
  
  // Cache'i tamamen yenileme fonksiyonu
  const refreshSearchData = () => {
    queryClient.invalidateQueries({ queryKey: [SEARCH_PARAMS_KEY] });
    queryClient.invalidateQueries({ queryKey: [FILTERS_KEY] });
  };

  return {
    searchParams,
    updateSearchParams,
    filters,
    updateFilters,
    refreshSearchData,
  };
}