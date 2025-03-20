import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Input from '../components/Input/Input';

export default function TenantDropdownContent() {
  return (
    <div className="max-h-[450px] w-[261px] overflow-y-auto">
      <ul>
        <li>
          <NavLink className="flex px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200" to="/Help">
            Help & Guides
          </NavLink>
        </li>
        <li>
          <NavLink className="flex px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200" to="/Terms">
            Terms of Use
          </NavLink>
        </li>
        <li>
          <NavLink className="flex px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200" to="/Policy">
            Privacy Policy
          </NavLink>
        </li>
      </ul>
      <div className="border-y border-gray-200 bg-gray-100 px-4 py-2">
        <Input size="md" placeholder="Type to filter..." iconRight={faSearch} />
      </div>
      <ul>
        <li className="group flex cursor-pointer items-center gap-2 px-4 py-3 transition-colors hover:bg-gray-200">
          <button className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-blue-600 p-2 text-white transition-colors group-hover:bg-blue-700">
            AL
          </button>
          <span className="text-gray-900 group-hover:text-gray-700">Adhesif Labels Ltd</span>
        </li>
        <li className="group flex cursor-pointer items-center gap-2 px-4 py-3 transition-colors hover:bg-gray-200">
          <button className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-blue-600 p-2 text-white transition-colors group-hover:bg-blue-700">
            AS
          </button>
          <span className="text-gray-900 group-hover:text-gray-700">AIA Services New Zealand Limited</span>
        </li>
        <li className="group flex cursor-pointer items-center gap-2 px-4 py-3 transition-colors hover:bg-gray-200">
          <button className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-blue-600 p-2 text-white transition-colors group-hover:bg-blue-700">
            AN
          </button>
          <span className="text-gray-900 group-hover:text-gray-700">Air New Zealand Ltd</span>
        </li>
        <li className="group flex cursor-pointer items-center gap-2 px-4 py-3 transition-colors hover:bg-gray-200">
          <button className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-blue-600 p-2 text-white transition-colors group-hover:bg-blue-700">
            AB
          </button>
          <span className="text-gray-900 group-hover:text-gray-700">All Blacks Organization</span>
        </li>
        <li className="group flex cursor-pointer items-center gap-2 px-4 py-3 transition-colors hover:bg-gray-200">
          <button className="flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md bg-blue-600 p-2 text-white transition-colors group-hover:bg-blue-700">
            AH
          </button>
          <span className="text-gray-900 group-hover:text-gray-700">All Hands Demo Limited</span>
        </li>
      </ul>
    </div>
  );
}
