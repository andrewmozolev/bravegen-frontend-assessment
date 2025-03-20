import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Utilities() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <FontAwesomeIcon className="text-2xl" icon={faWrench} />
      <h1>Utilities Page</h1>
    </div>
  );
}
