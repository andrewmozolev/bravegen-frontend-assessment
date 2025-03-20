import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { Integration } from '../../interfaces/Integrations';
import { getIntegrations } from '../Integration';

export const useIntegrations = ({
  page,
  perPage,
  sortBy,
  order,
  searchQuery,
}: {
  page: number;
  perPage: number;
  sortBy: keyof Integration;
  order: string;
  searchQuery: string;
}) => {
  return useQuery({
    queryKey: ['integrations', page, perPage, sortBy, order, searchQuery],
    queryFn: () => getIntegrations({ page, perPage, sortBy, order, searchQuery }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
