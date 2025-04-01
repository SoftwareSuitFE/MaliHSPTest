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
    staleTime: Infinity, // Güncellenene kadar stale olmasın
    cacheTime: Infinity, // Cache'te sonsuza kadar tutulsun
  });

  // Filtreleri React Query ile getir
  const { data: filters = getFilters() } = useQuery({
    queryKey: [FILTERS_KEY],
    queryFn: getFilters,
    staleTime: Infinity,
    cacheTime: Infinity,
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

  return {
    searchParams,
    updateSearchParams,
    filters,
    updateFilters,
  };
}
