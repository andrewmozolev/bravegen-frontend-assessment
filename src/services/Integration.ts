import { mockIntegrations } from '../data/integrations';
import { Integration } from '../interfaces/Integrations';

export const getIntegrations = async <K extends keyof Integration>({
  page,
  perPage,
  sortBy,
  order,
  searchQuery,
}: {
  page: number;
  perPage: number;
  sortBy: K;
  order: string;
  searchQuery: string;
}) => {
  return new Promise<{ integrations: Integration[]; totalPages: number }>((resolve) => {
    setTimeout(() => {
      const filteredIntegrations = mockIntegrations.filter(
        (integration) =>
          searchQuery === '' ||
          integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          integration.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
          integration.integration.toLowerCase().includes(searchQuery.toLowerCase()) ||
          integration.source.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (order) {
        filteredIntegrations.sort((a, b) => {
          const modifier = order === 'asc' ? 1 : -1;
          if (a[sortBy] < b[sortBy]) return -1 * modifier;
          if (a[sortBy] > b[sortBy]) return 1 * modifier;
          return 0;
        });
      }

      const integrations = filteredIntegrations.slice((page - 1) * perPage, page * perPage);

      resolve({ integrations, totalPages: Math.ceil(filteredIntegrations.length / perPage) });
    }, Math.random() * 1500);
  });
};
