import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'cursor-pointer rounded-sm bg-gray-900 px-3 py-1 text-sm text-white transition-colors hover:bg-gray-700',
        className
      )}
    >
      {children}
    </button>
  );
}
