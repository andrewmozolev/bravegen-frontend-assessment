import { faFileLines, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faClipboardCheck, faGaugeHigh, faGear, faInbox, faTree, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <menu className="flex min-h-screen flex-col items-center justify-between bg-gray-900 px-1 py-2 text-white">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <ul className="flex flex-col gap-4 text-sm font-light">
          <li className="flex flex-col items-center gap-1">
            <FontAwesomeIcon className="text-2xl" icon={faGaugeHigh} />
            <NavLink to="/Insights">Insights</NavLink>
          </li>
          <li className="flex flex-col items-center gap-1">
            <FontAwesomeIcon className="text-2xl" icon={faInbox} />
            <NavLink to="/Collect">Collect</NavLink>
          </li>
          <li className="flex flex-col items-center gap-1">
            <FontAwesomeIcon className="text-2xl" icon={faThumbsUp} />
            <NavLink to="/Reviews">Reviews</NavLink>
          </li>
          <li className="flex flex-col items-center gap-1">
            <FontAwesomeIcon className="text-2xl" icon={faTree} />
            <NavLink to="/Carbon">Carbon</NavLink>
          </li>
          <li className="flex flex-col items-center gap-1">
            <FontAwesomeIcon className="text-2xl" icon={faWrench} />
            <NavLink to="/Utilities">Utilities</NavLink>
          </li>
          <li className="flex flex-col items-center gap-1">
            <FontAwesomeIcon className="text-2xl" icon={faFileLines} />
            <NavLink to="/Reports">Reports</NavLink>
          </li>
          <li className="flex flex-col items-center gap-1">
            <FontAwesomeIcon className="text-2xl" icon={faClipboardCheck} />
            <NavLink to="/Actions">Actions</NavLink>
          </li>
        </ul>

        <div className="flex flex-col items-center gap-1 text-sm font-light">
          <FontAwesomeIcon className="text-2xl" icon={faGear} />
          <NavLink to="/Settings">Settings</NavLink>
        </div>
      </menu>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
}
