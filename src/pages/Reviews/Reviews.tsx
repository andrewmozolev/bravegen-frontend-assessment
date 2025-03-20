import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Reviews() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <FontAwesomeIcon className="text-2xl" icon={faThumbsUp} />
      <h1>Reviews Page</h1>
    </div>
  );
}
