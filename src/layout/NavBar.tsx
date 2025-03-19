import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="h-[74px] border-b-2 border-b-gray-200 p-2">
      <ul className="flex gap-2">
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
