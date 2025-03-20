import { faCopy, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import {
  faCamera,
  faCity,
  faCloud,
  faCog,
  faDisplay,
  faHouse,
  faList,
  faSitemap,
  faTags,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { SettingMenuCategory } from '../../interfaces/Settings';

export const settingsMenuCategories: SettingMenuCategory[] = [
  {
    category: 'Organisation',
    items: [
      { name: 'Manage', icon: faHouse, route: '/Settings/Organisation-Manage' },
      { name: 'Users', icon: faUserFriends, route: '/Settings/Users' },
      { name: 'Tags', icon: faTags, route: '/Settings/Tags' },
      { name: 'Integrations', icon: faCopy, route: '/Settings/Integrations' },
    ],
  },
  {
    category: 'Utilities',
    items: [
      { name: 'Configuration', icon: faCog, route: '/Settings/Utilities-Configurations' },
      { name: 'Hierarchy', icon: faSitemap, route: '/Settings/Utilities-Hierarchy' },
      { name: 'Assets', icon: faCity, route: '/Settings/Assets' },
    ],
  },
  {
    category: 'Carbon',
    items: [
      { name: 'Configuration', icon: faCog, route: '/Settings/Carbon-Configurations' },
      { name: 'Hierarchy', icon: faSitemap, route: '/Settings/Carbon-Hierarchy' },
      { name: 'Inventory Items', icon: faList, route: '/Settings/Inventory' },
      { name: 'Emission Factors', icon: faCloud, route: '/Settings/Emission-Factors' },
      { name: 'Snapshots', icon: faCamera, route: '/Settings/Snapshots', disabled: true },
    ],
  },
  {
    category: 'Displays',
    items: [{ name: 'Manage', icon: faDisplay, route: '/Settings/Display-Manage' }],
  },
];

const ActiveLink = ({
  children,
  to,
  icon,
  disabled,
}: {
  children: React.ReactNode;
  to: string;
  icon: IconDefinition;
  disabled?: boolean;
}) => (
  <NavLink
    to={to}
    onClick={(e) => disabled && e.preventDefault()}
    className={({ isActive }) =>
      clsx(
        isActive && 'bg-primary group active text-white',
        disabled ? 'cursor-default text-gray-400' : 'hover:bg-primary/80 hover:text-white',
        'group relative flex items-center rounded-sm px-1.5 py-[9px] transition-colors'
      )
    }
  >
    <div className="flex h-full w-12 items-center justify-center">
      <FontAwesomeIcon
        icon={icon}
        className={clsx(
          disabled ? 'text-gray-400' : 'text-primary group-hover:text-white group-[.active]:text-white',
          'text-2xl'
        )}
      />
    </div>
    {children}
  </NavLink>
);

export default function SettingsMenu() {
  return (
    <menu className="flex w-[335px] shrink-0 flex-col px-9 py-7 font-medium text-gray-900">
      {settingsMenuCategories.map((category) => (
        <div key={category.category} className="mb-6">
          <h3 className="mb-2.5 pl-4 text-sm font-semibold text-gray-600">{category.category}</h3>
          <ul className="flex flex-col gap-1">
            {category.items.map((item) => (
              <li key={item.name}>
                <ActiveLink to={item.route} icon={item.icon} disabled={item.disabled}>
                  {item.name}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </menu>
  );
}
