import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tags() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <FontAwesomeIcon className="text-2xl" icon={faTags} />
      <h1>Tags Page</h1>
    </div>
  );
}
