import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OrganisationManage() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <FontAwesomeIcon className="text-2xl" icon={faHouse} />
      <h1>Organisation Manage Page</h1>
    </div>
  );
}
