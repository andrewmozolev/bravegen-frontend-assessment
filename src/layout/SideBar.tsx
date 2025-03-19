import { faFileLines, faThumbsUp, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faClipboardCheck, faGaugeHigh, faGear, faInbox, faTree, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

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
        <li className="flex flex-col items-center gap-1">
          <CustomNavLink to="/Insights" icon={faGaugeHigh}>
            Insights
          </CustomNavLink>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CustomNavLink to="/Collect" icon={faInbox}>
            Collect
          </CustomNavLink>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CustomNavLink to="/Reviews" icon={faThumbsUp}>
            Reviews
          </CustomNavLink>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CustomNavLink to="/Carbon" icon={faTree}>
            Carbon
          </CustomNavLink>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CustomNavLink to="/Utilities" icon={faWrench}>
            Utilities
          </CustomNavLink>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CustomNavLink to="/Reports" icon={faFileLines}>
            Reports
          </CustomNavLink>
        </li>
        <li className="flex flex-col items-center gap-1">
          <CustomNavLink to="/Actions" icon={faClipboardCheck}>
            Actions
          </CustomNavLink>
        </li>
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
