import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useCallback, useMemo } from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePageNumberChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [totalPages, onPageChange]
  );

  const pageNumbers = useMemo(() => {
    const range = [];
    const delta = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      } else if (i === currentPage - delta - 1 || i === currentPage + delta + 1) {
        range.push('gap');
      }
    }

    return range;
  }, [currentPage, totalPages]);

  return (
    <div className="flex items-center justify-center gap-10">
      <button
        className="text-md flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-4 py-3 font-medium text-gray-900 transition-colors hover:not-disabled:border-gray-400 disabled:cursor-default disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Previous
      </button>
      <div>
        <div className="flex space-x-0">
          {pageNumbers.map((pageNumber, index) => (
            <button
              key={index}
              className={clsx(
                pageNumber === currentPage ? 'bg-gray-200' : 'text-gray-900',
                pageNumber !== 'gap' && 'hover:bg-gray-100',
                'text-md cursor-pointer rounded-md px-4 py-3 font-medium transition-colors disabled:cursor-default'
              )}
              disabled={typeof pageNumber !== 'number' || pageNumber === currentPage}
              onClick={() => typeof pageNumber === 'number' && handlePageNumberChange(pageNumber)}
            >
              {pageNumber === 'gap' ? '...' : pageNumber}
            </button>
          ))}
        </div>
      </div>
      <button
        className="text-md flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-4 py-3 font-medium text-gray-900 transition-colors hover:not-disabled:border-gray-400 disabled:cursor-default disabled:opacity-50"
        onClick={() => {
          const nextPage = currentPage + 1;
          if (nextPage <= totalPages) {
            onPageChange(nextPage);
          }
        }}
        disabled={currentPage === totalPages}
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}
