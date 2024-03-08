import { useQuery } from '@tanstack/react-query';
import { getChampions } from 'services/apiChampions';

export function useChampions() {
  const {
    isLoading,
    error,
    data: champions,
  } = useQuery({ queryKey: ['champions'], queryFn: getChampions });

  return { isLoading, error, champions };
}
