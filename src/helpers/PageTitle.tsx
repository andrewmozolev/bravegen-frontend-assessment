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

const pageTitleAndIcon: { [key: string]: { icon: IconDefinition; title: string } } = {
  '/Settings/Organisation-Manage': {
    icon: faHouse,
    title: 'Organisation Manage',
  },
  '/Settings/Users': {
    icon: faUserFriends,
    title: 'Users',
  },
  '/Settings/Tags': {
    icon: faTags,
    title: 'Tags',
  },
  '/Settings/Integrations': {
    icon: faCopy,
    title: 'Integrations',
  },
  '/Settings/Utilities-Configurations': {
    icon: faCog,
    title: 'Utilities Configuration',
  },
  '/Settings/Utilities-Hierarchy': {
    icon: faSitemap,
    title: 'Utilities Hierarchy',
  },
  '/Settings/Assets': {
    icon: faCity,
    title: 'Assets',
  },
  '/Settings/Carbon-Configurations': {
    icon: faCog,
    title: 'Configuration',
  },
  '/Settings/Carbon-Hierarchy': {
    icon: faSitemap,
    title: 'Carbon Hierarchy',
  },
  '/Settings/Inventory': {
    icon: faList,
    title: 'Inventory Items',
  },
  '/Settings/Emission-Factors': {
    icon: faCloud,
    title: 'Emission Factors',
  },
  '/Settings/Snapshots': {
    icon: faCamera,
    title: 'Snapshots',
  },
  '/Settings/Display-Manage': {
    icon: faDisplay,
    title: 'Display Manage',
  },
};

export const getPageTitle = (pathname: string) => {
  if (!pageTitleAndIcon[pathname]) {
    return null;
  }

  const { icon, title } = pageTitleAndIcon[pathname];

  return (
    <div className="flex items-center gap-2 text-xl font-medium text-gray-900">
      <FontAwesomeIcon className="text-2xl" icon={icon} />
      <span>{title}</span>
    </div>
  );
};
