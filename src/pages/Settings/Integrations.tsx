import { faPen, faSearch, faTrash, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';
import Input from '../../components/Input/Input';
import ChangeIntegrationModal from '../../components/Modals/ChangeIntegrationModal';
import DeleteIntegrationModal from '../../components/Modals/DeleteIntegrationModal';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import { useModal } from '../../helpers/hooks/useModal';
import { getIntegrationIcon } from '../../helpers/Integrations';
import { getSourceBadge } from '../../helpers/Source';
import { copyToClipboard } from '../../helpers/Text';
import { Integration } from '../../interfaces/Integrations';
import { TableData } from '../../interfaces/Table';
import { useIntegrations } from '../../services/hooks/useIntegrations';
import IntegrationConnectionCards from './IntegrationsCards';

export default function Integrations() {
  const PER_PAGE = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<keyof Integration>('integration');
  const [order, setOrder] = useState('');

  const { openModal } = useModal();

  const { data, isLoading, isFetching } = useIntegrations({
    page: currentPage,
    perPage: PER_PAGE,
    sortBy: sortBy,
    order: order,
    searchQuery,
  });

  const integrations = data?.integrations || [];
  const totalPages = data?.totalPages || 1;

  const tableData: TableData = useMemo(
    () => ({
      columns: [
        { title: '', key: 'icon', canSort: false, minimizeWidth: true },
        { title: 'Integration', key: 'integration', canSort: true },
        { title: 'Name', key: 'name', canSort: false },
        { title: 'Source', key: 'source', canSort: false },
        { title: 'Entity/Group', key: 'entity', canSort: false },
        { title: 'Interval', key: 'interval', canSort: false },
        { title: 'Connector URL', key: 'connector-url', canSort: false },
        { title: 'Instructions', key: 'instructions', canSort: false },
        { title: '', key: 'action-buttons', canSort: false },
      ],
      rows: integrations.map((integration) => ({
        cells: [
          <img src={getIntegrationIcon(integration.integration)} alt={integration.integration} className="size-7" />,
          integration.integration,
          <a href={integration.nameUrl} className="text-cyan-600 transition-colors hover:text-cyan-800">
            {integration.name}
          </a>,
          ,
          getSourceBadge(integration.source),
          integration.entity,
          integration.interval || '-',
          <span
            onClick={() => copyToClipboard(integration.connectorUrl)}
            className="text-cyan-600 underline transition-colors hover:text-cyan-800"
          >
            Copy to Clipboard
          </span>,
          <a
            href={integration.instructionsUrl}
            className="text-cyan-600 underline transition-colors hover:text-cyan-800"
          >
            View <FontAwesomeIcon className="text-xs" icon={faUpRightFromSquare} />
          </a>,
          <div className="flex space-x-2">
            <button
              onClick={() => handleChangeIntegration(integration)}
              className="flex size-7 cursor-pointer items-center justify-center rounded-md p-2 text-gray-800 underline outline outline-gray-300 transition-colors hover:text-gray-700 hover:outline-gray-400"
            >
              <span className="sr-only">Edit</span>
              <FontAwesomeIcon icon={faPen} />
            </button>
            <button
              onClick={() => handleDeleteIntegration(integration)}
              className="flex size-7 cursor-pointer items-center justify-center rounded-md bg-red-600 p-2 text-white underline transition-colors hover:bg-red-500"
            >
              <span className="sr-only">Delete</span>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>,
        ],
        data: integration,
        id: integration.id,
      })),
    }),
    [integrations]
  );

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleSort = (key: string) => {
    if (key === sortBy) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key as keyof Integration);
      setOrder('asc');
    }
  };

  const handleChangeIntegration = (integration: Integration) => {
    openModal(<ChangeIntegrationModal integration={integration} />);
  };

  const handleDeleteIntegration = (integration: Integration) => {
    openModal(<DeleteIntegrationModal integration={integration} />);
  };

  return (
    <div className="pt-8">
      <h2 className="mb-2.5 text-[22px] font-medium text-gray-900">Choose a Service to Connect</h2>
      <p className="mb-7 text-sm font-normal text-gray-500">Connect BraveGen to other tools you use.</p>
      <IntegrationConnectionCards />
      <div className="my-7 h-[1px] w-full max-w-[1162px] bg-gray-200"></div>

      <h2 className="mb-5 text-[22px] font-medium text-gray-900">Existing Connections</h2>
      <div className="mb-6.5 max-w-[423px]">
        <Input placeholder="Integration or Name" size="lg" iconLeft={faSearch} onChange={handleInputChange} />
      </div>

      <div className="mr-10 overflow-hidden rounded-xl border border-gray-300 bg-white">
        <Table data={tableData} loading={isLoading || isFetching} onSort={handleSort} sortBy={sortBy} order={order} />
        <div className="p-4">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
    </div>
  );
}
