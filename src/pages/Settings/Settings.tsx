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
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function Settings() {
  const params = useParams();
  console.log(params.settingId);

  const ActiveLink = ({ children, to, icon }: { children: React.ReactNode; to: string; icon: IconDefinition }) => (
    <NavLink
      to={`/Settings/${to}`}
      className={({ isActive }) =>
        clsx(
          isActive && 'bg-primary group active text-white',
          'group hover:bg-primary/80 relative flex items-center rounded-sm px-1.5 py-[9px] transition-colors hover:text-white'
        )
      }
    >
      <div className="flex h-full w-12 items-center justify-center">
        <FontAwesomeIcon
          icon={icon}
          className="text-primary text-2xl group-hover:text-white group-[.active]:text-white"
        />
      </div>
      {children}
    </NavLink>
  );

  return (
    <div className="flex grow">
      <menu className="flex w-[335px] shrink-0 flex-col px-9 py-7 font-medium text-gray-900">
        <h3 className="mb-2.5 pl-4 text-sm font-semibold text-gray-600">Organisation</h3>
        <ul className="mb-6 flex flex-col gap-1">
          <li>
            <ActiveLink to="Organisation-Manage" icon={faHouse}>
              Manage
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Users" icon={faUserFriends}>
              Users
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Tags" icon={faTags}>
              Tags
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Integrations" icon={faCopy}>
              Integrations
            </ActiveLink>
          </li>
        </ul>

        <h3 className="mb-2.5 pl-4 text-sm font-semibold text-gray-600">Utilities</h3>
        <ul className="mb-6 flex flex-col gap-1">
          <li>
            <ActiveLink to="Utilities-Configurations" icon={faCog}>
              Configuration
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Utilities-Hierarchy" icon={faSitemap}>
              Hierarchy
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Assets" icon={faCity}>
              Assets
            </ActiveLink>
          </li>
        </ul>

        <h3 className="mb-2.5 pl-4 text-sm font-semibold text-gray-600">Carbon</h3>
        <ul className="mb-6 flex flex-col gap-1">
          <li>
            <ActiveLink to="Carbon-Configurations" icon={faCog}>
              Configuration
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Carbon-Hierarchy" icon={faSitemap}>
              Hierarchy
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Inventory" icon={faList}>
              Inventory Items
            </ActiveLink>
          </li>
          <li>
            <ActiveLink to="Emmision-Factors" icon={faCloud}>
              Emission Factors
            </ActiveLink>
          </li>
          <li className="disabled">
            <ActiveLink to="Snapshots" icon={faCamera}>
              Snapshots
            </ActiveLink>
          </li>
        </ul>

        <h3 className="mb-2.5 pl-4 text-sm font-semibold text-gray-600">Displays</h3>
        <ul className="mb-6 flex flex-col gap-1">
          <li>
            <ActiveLink to="Display-Manage" icon={faDisplay}>
              Manage
            </ActiveLink>
          </li>
        </ul>
      </menu>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
