import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Collect() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <FontAwesomeIcon className="text-2xl" icon={faInbox} />
      <h1>Collect Page</h1>
    </div>
  );
}
