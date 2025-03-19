import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <menu className="bg-gray-900">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <ul>
          <li>
            <NavLink to="/Insights">Insights</NavLink>
          </li>
          <li>
            <NavLink to="/Reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/Collect">Collect</NavLink>
          </li>
          <li>
            <NavLink to="/Carbon">Carbon</NavLink>
          </li>
          <li>
            <NavLink to="/Utilities">Utilities</NavLink>
          </li>
          <li>
            <NavLink to="/Reports">Reports</NavLink>
          </li>
          <li>
            <NavLink to="/Actions">Actions</NavLink>
          </li>
        </ul>

        <NavLink to="/Settings">Settings</NavLink>
      </menu>
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
}
