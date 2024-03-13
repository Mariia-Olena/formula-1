import { useQuery } from '@tanstack/react-query';
import { getWorldChampions } from 'services/apiChampions';

export function useWorldChampions() {
  const {
    isLoading,
    error,
    data: worldChampions,
  } = useQuery({ queryKey: ['worldChampions'], queryFn: getWorldChampions });

  return { isLoading, error, worldChampions };
}
