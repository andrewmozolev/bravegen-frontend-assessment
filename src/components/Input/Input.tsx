import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type InputProps = {
  placeholder?: string;
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (value: string) => void;
};

export default function Input({ placeholder, iconLeft, iconRight, size = 'md', onChange }: InputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        className={clsx(
          size === 'sm' && iconLeft && 'pl-[36px]',
          size === 'sm' && iconRight && 'pr-[36px]',
          size === 'md' && iconLeft && 'pl-[40px]',
          size === 'md' && iconRight && 'pr-[40px]',
          size === 'lg' && iconLeft && 'pl-[46px]',
          size === 'lg' && iconRight && 'pr-[46px]',
          size === 'sm' && 'px-1.5 py-1 text-xs',
          size === 'md' && 'px-2.5 py-2 text-sm',
          size === 'lg' && 'px-3 py-3 text-base',
          'peer focus:outline-primary w-full rounded-lg border border-gray-300 bg-white text-gray-900 transition-colors hover:border-gray-400'
        )}
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {iconLeft && (
        <FontAwesomeIcon
          icon={iconLeft}
          className={clsx(
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-lg',
            size === 'lg' && 'text-2xl',
            'absolute top-1/2 left-3 -translate-y-1/2 text-2xl text-gray-500 peer-hover:text-gray-700'
          )}
        />
      )}
      {iconRight && (
        <FontAwesomeIcon
          icon={iconRight}
          className={clsx(
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-lg',
            size === 'lg' && 'text-2xl',
            'absolute top-1/2 right-3 -translate-y-1/2 text-2xl text-gray-500 peer-hover:text-gray-700'
          )}
        />
      )}
    </div>
  );
}
