import { NavLink } from 'react-router-dom';

export default function AccountDropdownContent() {
  return (
    <ul className="w-full min-w-38">
      <li className="border-b border-gray-200">
        <NavLink className="flex px-3 py-2 transition-colors hover:bg-gray-200" to="/Settings">
          Account Settings
        </NavLink>
      </li>
      <li>
        <NavLink className="flex px-3 py-2 transition-colors hover:bg-gray-200" to="/sign-out">
          Sign Out
        </NavLink>
      </li>
    </ul>
  );
}
