import { faFileLines, faThumbsUp, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faClipboardCheck, faGaugeHigh, faGear, faInbox, faTree, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { SideBarLink } from '../interfaces/SideBar';

const sideBarLinks: SideBarLink[] = [
  {
    to: '/Insights',
    icon: faGaugeHigh,
    title: 'Insights',
  },
  {
    to: '/Collect',
    icon: faInbox,
    title: 'Collect',
  },
  {
    to: '/Reviews',
    icon: faThumbsUp,
    title: 'Reviews',
  },
  {
    to: '/Carbon',
    icon: faTree,
    title: 'Carbon',
  },
  {
    to: '/Utilities',
    icon: faWrench,
    title: 'Utilities',
  },
  {
    to: '/Reports',
    icon: faFileLines,
    title: 'Reports',
  },
  {
    to: '/Actions',
    icon: faClipboardCheck,
    title: 'Actions',
  },
];

export default function SideBar() {
  const CustomNavLink = ({
    children,
    icon,
    ...props
  }: {
    children: React.ReactNode;
    to: string;
    icon: IconDefinition;
  }) => (
    <NavLink
      {...props}
      className={({ isActive }) =>
        clsx(isActive && 'text-primary', 'hover:text-primary/80 flex flex-col items-center gap-1 text-sm font-light')
      }
    >
      <FontAwesomeIcon className="text-2xl" icon={icon} />
      {children}
    </NavLink>
  );

  return (
    <menu className="flex min-h-screen w-[70px] flex-col items-center justify-between bg-gray-900 px-1 py-2 pt-3 text-white">
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <ul className="flex flex-col gap-6 text-sm font-light">
        {sideBarLinks.map((link) => (
          <li key={link.to} className="flex flex-col items-center gap-1">
            <CustomNavLink to={link.to} icon={link.icon}>
              {link.title}
            </CustomNavLink>
          </li>
        ))}
      </ul>

      <NavLink
        className={({ isActive }) =>
          clsx(isActive && 'text-primary', 'hover:text-primary/80 flex flex-col items-center gap-1 text-sm font-light')
        }
        to="/Settings"
      >
        <FontAwesomeIcon className="text-2xl" icon={faGear} />
        Settings
      </NavLink>
    </menu>
  );
}
