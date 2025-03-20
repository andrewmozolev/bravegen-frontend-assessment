import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { TableData } from '../../interfaces/Table';
import Spinner from '../Spinner/Spinner';

type TableProps = {
  data: TableData;
  loading?: boolean;
  sortBy?: string;
  order?: string;
  onSort?: (key: string) => void;
};

export default function Table({ data, loading, sortBy, order, onSort }: TableProps) {
  return (
    <div className="relative">
      {loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Spinner />
        </div>
      )}
      <table className={clsx(loading && 'opacity-50', 'w-full bg-white')}>
        <thead>
          <tr>
            {data.columns.map((column) => (
              <th
                key={column.key}
                className={clsx(
                  'text-md border-b border-gray-300 px-3 py-3.5 text-left font-medium text-gray-600',
                  column.minimizeWidth && 'min-w-[1px]',
                  column.maxWidth && `max-w-${column.maxWidth}`,
                  column.canSort && 'cursor-pointer'
                )}
                onClick={() => onSort?.(column.key)}
              >
                {column.title}
                {column.canSort && (
                  <button className="ml-1 cursor-pointer text-gray-800">
                    {column.key === sortBy && order ? (
                      <FontAwesomeIcon icon={order === 'asc' ? faArrowUp : faArrowDown} />
                    ) : (
                      <div className="flex">
                        <FontAwesomeIcon icon={faArrowUp} />
                        <FontAwesomeIcon icon={faArrowDown} />
                      </div>
                    )}
                  </button>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row) => (
            <tr key={row.id}>
              {row.cells.map((cell, index) => (
                <td
                  key={index}
                  className={clsx(
                    'text-md border-b border-gray-300 px-3 py-3 text-gray-900',
                    index === 0 && 'rounded-l-lg',
                    index === row.cells.length - 1 && 'rounded-r-lg'
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
