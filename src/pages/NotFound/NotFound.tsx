import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <h1 className="text-2xl">Not Found</h1>
      <Link to="/Settings/Integrations" className="text-primary ml-2">
        Go Integrations
      </Link>
    </div>
  );
}
