// hooks/useLanguage.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getCurrentLanguage,
  saveLanguage,
  translate,
} from '@/services/languageService';

interface UseLanguageReturn {
  locale: string;
  setLocale: (locale: string) => void;
  t: (namespace: string, key: string, params?: Record<string, any>) => string;
}

// Query key for language
export const LANGUAGE_QUERY_KEY = 'language';

// Hook for language-related operations
export function useLanguage() {
  const queryClient = useQueryClient();

  // Get current language with React Query
  const { data: locale = 'en' } = useQuery<string>({
    queryKey: [LANGUAGE_QUERY_KEY],
    queryFn: getCurrentLanguage,
    staleTime: Infinity,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    cacheTime: Infinity,
  });

  // Mutation to change language
  const { mutate: setLocale } = useMutation({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mutationFn: (newLocale: string) => {
      saveLanguage(newLocale);
      return newLocale;
    },
    onSuccess: (newLocale) => {
      // Update the cached value
      queryClient.setQueryData([LANGUAGE_QUERY_KEY], newLocale);
    },
  });

  // Translation function with support for dynamic values
  const t = (
    namespace: string,
    key: string,
    params?: Record<string, any>,
  ): string => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return translate(locale, namespace, key, params);
  };

  return { locale, setLocale, t };
}
