import { Route, Routes } from 'react-router-dom';
import Actions from '../pages/Actions/Actions';
import Carbon from '../pages/Carbon/Carbon';
import Collect from '../pages/Collect/Collect';
import Home from '../pages/Home/Home';
import Insights from '../pages/Insights/Insights';
import NotFound from '../pages/NotFound/NotFound';
import Reports from '../pages/Reports/Reports';
import Reviews from '../pages/Reviews/Reviews';
import Integrations from '../pages/Settings/Integrations';
import OrganisationManage from '../pages/Settings/OrganisationManage';
import Settings from '../pages/Settings/Settings';
import Tags from '../pages/Settings/Tags';
import Utilities from '../pages/Utilities/Utilities';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Insights" element={<Insights />} />
      <Route path="/Collect" element={<Collect />} />
      <Route path="/Reviews" element={<Reviews />} />
      <Route path="/Carbon" element={<Carbon />} />
      <Route path="/Utilities" element={<Utilities />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Actions" element={<Actions />} />
      <Route path="/Settings" element={<Settings />}>
        <Route path="/Settings/Tags" element={<Tags />} />
        <Route path="/Settings/Organisation-Manage" element={<OrganisationManage />} />
        <Route path="/Settings/Integrations" element={<Integrations />} />
        <Route path="/Settings/:page" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
