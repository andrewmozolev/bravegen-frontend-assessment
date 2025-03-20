import { Outlet } from 'react-router-dom';
import SettingsMenu from './SettingsMenu';

export default function Settings() {
  return (
    <div className="flex grow">
      <SettingsMenu />
      <div className="flex grow">
        <Outlet />
      </div>
    </div>
  );
}
