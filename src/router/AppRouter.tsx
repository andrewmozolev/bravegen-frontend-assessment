import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Integrations from '../pages/Settings/Integrations';
import Settings from '../pages/Settings/Settings';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Settings/Integrations" element={<Integrations />} />
    </Routes>
  );
}
