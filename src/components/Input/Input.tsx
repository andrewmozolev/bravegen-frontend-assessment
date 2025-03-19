import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type InputProps = {
  placeholder?: string;
};

export default function Input({ placeholder }: InputProps) {
  return (
    <div className="relative">
      <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-3 text-2xl text-gray-500" />
      <input
        type="text"
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 pl-[46px] text-base text-gray-900"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}
