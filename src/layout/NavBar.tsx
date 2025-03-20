import { faArrowAltCircleDown, faArrowAltCircleUp, faBell } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import Dropdown from '../components/Dropdown/Dropdown';
import { getPageTitle } from '../helpers/PageTitle';
import AccountDropdownContent from './AccountDropdownContent';
import TenantDropdownContent from './TenantDropdownContent';

export default function NavBar() {
  const selectedTenant = 'ABC Group Ltd';
  const location = useLocation();

  return (
    <nav className="flex h-[74px] items-center border-b-2 border-b-gray-200">
      <div className="w-[335px] shrink-0 px-9 py-7">
        <Dropdown content={<TenantDropdownContent />}>
          {(isOpen) => (
            <button
              className={clsx(
                isOpen && 'bg-primary text-white',
                'flex w-full cursor-pointer items-center rounded-md border border-gray-200 px-3 py-2'
              )}
            >
              {selectedTenant}
              <FontAwesomeIcon
                className={clsx(isOpen && 'text-white', 'ml-auto text-gray-600')}
                icon={isOpen ? faArrowAltCircleUp : faArrowAltCircleDown}
              />
            </button>
          )}
        </Dropdown>
      </div>

      <div>{getPageTitle(location.pathname)}</div>

      <div className="mr-10 ml-auto flex gap-4.5">
        <button className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300">
          <div className="sr-only">Search</div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button className="relative flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300">
          <div className="sr-only">Notifications</div>
          <FontAwesomeIcon icon={faBell} />
          <div className="absolute -top-1 -right-1 size-4 rounded-full bg-red-500 text-xs text-white">3</div>
        </button>
        <button className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-2 transition-colors hover:bg-gray-300">
          <div className="sr-only">FAQ</div>
          <FontAwesomeIcon icon={faQuestion} />
        </button>
        <Dropdown content={<AccountDropdownContent />}>
          {() => (
            <button className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-md bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700">
              AM
            </button>
          )}
        </Dropdown>
      </div>
    </nav>
  );
}
